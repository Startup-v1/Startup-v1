import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  //Always present but it was made optional to silence ts errors
  userName?: string;
  //Only used for authenticate controller
  userType?: string;
}
