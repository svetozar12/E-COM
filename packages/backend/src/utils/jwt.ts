import * as jwt from "jsonwebtoken";
import { RequestHandler } from "express";

export const verifyToken: RequestHandler = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    //if bearer Header isn't undefined seperates JWT from Bearer and later on use method jwt.verify() to verify the jwt
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];
    const secret = process.env.JWT_SECRET as string;
    jwt.verify(bearerToken, secret, (err, token) => {
      if (err) {
        throw new Error("Token has expired !");
      }
      // @ts-ignore
      return (req.token = token);
    });
    next();
  } else {
    res.sendStatus(403);
  }
};

export const signTokens = (
  data: {
    username?: string;
    email: string;
    password?: string;
  },
  secret: string,
  expires: string,
) => {
  return new Promise((resolve, reject) => {
    jwt.sign(data, secret, { expiresIn: expires }, (err, token) => {
      if (err) {
        console.log(err);

        throw new Error("Error while creating token !");
      }
      return resolve(token);
    });
  });
};
