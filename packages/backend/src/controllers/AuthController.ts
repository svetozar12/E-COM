import { NextFunction, Request, Response, Router } from "express";
const AuthController: Router = Router();
import { signTokens, verifyToken } from "../utils/jwt";
import "dotenv/config";
import User from "../models/User.model";
import * as bcrypt from "bcrypt";
// endpoint :/

const secret = process.env.JWT_SECRET as string;
const secret_refresh = process.env.JWT_REFRESH_SECRET as string;

AuthController.post("/register", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const UserObj = { username: req.body.username, email: req.body.email, password: req.body.password };
    if (await User.findOne(UserObj)) return res.status(400).json({ message: "User exist" });
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

AuthController.post("/login", verifyToken, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const UserObj = { email: req.body.email };

    const user = await User.findOne(UserObj);
    const compPass: boolean = await bcrypt.compare(req.body.password, user!.password);

    if (!compPass) return res.status(400).json({ message: "Wrong password" });
    if (!user) return res.status(404).json({ message: "User doesn't exist" });

    const expires = req.query.remember_me ? "2h" : "1h";
    const expires_refresh = req.query.remember_me ? "6m" : "1y";
    const token = await signTokens(UserObj, secret, expires);
    const refresh_token = await signTokens(UserObj, secret_refresh, expires_refresh);

    res.status(200).send({ user_id: user._id, Access_token: token, Refresh_token: refresh_token });
  } catch (e) {
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

export default AuthController;
