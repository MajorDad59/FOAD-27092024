import express from "express";
const router = express.Router();
import validate from "../../middlewares/validation.middleware.js";
import * as authController from "./auth.controller.js";
import {
  LoginUserSchema,
  RegisterUserSchema,
} from "../users/users.schema.js";

router.post(
  "/register",
  validate(RegisterUserSchema),
  authController.register
);
router.post(
  "/login",
  validate(LoginUserSchema),
  authController.login
);

export default router;
