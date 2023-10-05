import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create",
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout
);

layoutRouter.put("/edit", isAuthenticated, authorizeRoles("admin"), editLayout);
layoutRouter.get("/get-layout", getLayoutByType);

export default layoutRouter;
