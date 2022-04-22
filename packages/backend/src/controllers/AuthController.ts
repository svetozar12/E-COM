import { NextFunction, Request, Response, Router } from "express";
import { signTokens, verifyToken } from "../utils/jwt";
import "dotenv/config";
import User from "../models/User.model";
import * as bcrypt from "bcrypt";
const AuthController: Router = Router();

const secret = process.env.JWT_SECRET as string;
const secret_refresh = process.env.JWT_REFRESH_SECRET as string;

AuthController.get("/user", verifyToken, async (req: any, res: Response) => {
  try {
    if (!req.token) return res.status(400);
    const user = await User.findOne({ email: req.token.email }).select("_id username email");
    if (!user) return res.status(404).json({ message: "user not found" });
    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(501).json({
      ErrorMsg: error as Error,
      Error: "Internal server error",
      Message: "Something went wrong while loging",
    });
  }
});

AuthController.post("/register", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (Object.keys(req.body).length === 0) return res.status(400).json({ message: "Email , Username and Password are required" });
    const UserObj = { username: req.body.username, email: req.body.email, password: req.body.password };
    const isUser = await User.findOne({ email: UserObj.email });
    if (isUser) return res.status(400).json({ message: "User exist" });
    const newUser = new User(UserObj);
    const expires = "1h";
    const token = await signTokens(UserObj, secret, expires);

    await newUser.save();
    res.status(200).send({ user_id: newUser._id, Access_token: token });
  } catch (e) {
    console.log(e);

    return res.status(500).json({ message: "Internal Server Error" });
  }
});

AuthController.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (Object.keys(req.body).length === 0) return res.status(400).json({ message: "Email and password are required" });
    // sending email and password in body
    const UserObj = { email: req.body.email };
    const user = await User.findOne(UserObj);
    if (!user) return res.status(404).json({ message: "User doesn't exist" });
    const compPass: boolean = await bcrypt.compare(req.body.password, user!.password);

    if (!compPass) return res.status(400).json({ message: "Wrong password" });

    const expires = req.query.remember_me ? "2h" : "1h";
    const expires_refresh = req.query.remember_me ? "6m" : "1y";
    const token = await signTokens(UserObj, secret, expires);
    const refresh_token = await signTokens(UserObj, secret_refresh, expires_refresh);

    res.status(200).send({ user_id: user._id, Access_token: token, Refresh_token: refresh_token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// pass refresh token is auth header
AuthController.post("/refresh", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    if (!user) return res.status(404).json({ message: "User not found" });
    const UserObj = { username: user.username, email: user.email };
    const expires = req.query.remember_me ? "2h" : "1h";
    const expires_refresh = req.query.remember_me ? "6m" : "1y";
    const token = await signTokens(UserObj, secret, expires);
    const refresh_token = await signTokens(UserObj, secret_refresh, expires_refresh);

    res.status(200).send({ user_id: user._id, Access_token: token, Refresh_token: refresh_token });
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

AuthController.delete("/delete", verifyToken, async (req: any, res: Response) => {
  try {
    if (!req.token) return res.status(400);
    const user = await User.deleteOne({ email: req.token.email });
    if (!user) return res.status(404).json({ message: "user not found" });
    return res.status(200).json({ message: "User was deleted" });
  } catch (error) {
    return res.status(501).json({
      ErrorMsg: error as Error,
      Error: "Internal server error",
      Message: "Something went wrong while loging",
    });
  }
});

export default AuthController;
