import express from "express";
import {
  activateUser,
  loginUser,
  logoutUser,
  registrationUser,
  socialAuth,
  updateAccessToken,
} from "../controllers/user.controller";
import { isAuthenticated } from "../middleware/auth";
const authRouter = express.Router();

authRouter.post("/registration", registrationUser);

authRouter.post("/activate", activateUser);

authRouter.post("/login", loginUser);

authRouter.get("/logout", isAuthenticated, logoutUser);

authRouter.get("/refresh-token", updateAccessToken);

authRouter.post("/social", socialAuth);

export default authRouter;
