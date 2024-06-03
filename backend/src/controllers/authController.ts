import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
const User = require("../models/User");
import formatDate from "../utils/dateUtils";
import { defaultErrMessage } from "../utils/errorMessages";

export const login = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign(
        { userName: user.userName, userType: user.userType },
        process.env.JWT_SECRET as Secret,
        {
          expiresIn: "12h",
        }
      );

      user.lastLogin = formatDate(new Date());

      await user.save();

      return res.status(200).json({
        message: "Log in successful",
        token: token,
        userName: user.userName,
        userType: user.userType,
        isPasswordTemporal: user.isPasswordTemporal,
      });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: defaultErrMessage });
  }
};

export const authenticateUser = async (req: Request, res: Response) => {
  const token = req.body?.headers?.["x-access-token"] as string;

  if (!token) {
    return res.status(404).json({ message: "Token error" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET as Secret,
    // @ts-ignore
    async (err: any, decoded: { userName: string; userType: string }) => {
      if (err) {
        return res.status(401).json({ message: "Token error" });
      }

      const { userName, userType } = decoded as {
        userName: string;
        userType: string;
      };

      const user = await User.findOne({ userName }).lean();

      return res.status(200).json({
        userName,
        userType,
      });
    }
  );
};
