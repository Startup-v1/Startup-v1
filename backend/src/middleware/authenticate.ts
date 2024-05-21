import jwt, { Secret } from "jsonwebtoken";
import { NextFunction, Response } from "express";
import { defaultErrMessage } from "../utils/errorMessages";
import { AuthenticatedRequest } from "../utils/backendTypes";

function authenticate(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    let token = req.headers["x-access-token"] as string;

    if (!token) {
      return res.status(404).json({ message: "Token error" });
    }

    jwt.verify(token, process.env.JWT_SECRET as Secret, (err: any, decoded: { userName?: string; userType?: string; }) => {
      if (err) {
        return res.status(401).json({ message: "Token error" });
      }

      req.userName = (decoded as { userName: string }).userName;
      req.userType = (decoded as { userType: string }).userType;
      next();
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: defaultErrMessage });
  }
}

export default authenticate;
