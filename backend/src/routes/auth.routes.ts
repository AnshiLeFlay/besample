import express from "express";
import {
    forgotPasswordHandler,
    loginUserHandler,
    logoutUserHandler,
    refreshAccessTokenHandler,
    registerUserHandler,
    registerUserHandlerTest,
    resetPasswordHandler,
    verifyEmailHandler,
} from "../controllers/auth.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
    forgotPasswordSchema,
    loginUserSchema,
    registerUserSchema,
    resetPasswordSchema,
    verifyEmailSchema,
} from "../schemas/user.schema";

const router = express.Router();

router.post("/register", validate(registerUserSchema), registerUserHandler);

router.get("/register", validate(registerUserSchema), registerUserHandler);

router.post("/login", validate(loginUserSchema), loginUserHandler);

router.get("/refresh", refreshAccessTokenHandler);

router.post("/test", registerUserHandlerTest);

router.get("/logout", deserializeUser, requireUser, logoutUserHandler);

router.post(
    "/forgotpassword",
    validate(forgotPasswordSchema),
    forgotPasswordHandler
);

router.patch(
    "/resetpassword/:resetToken",
    validate(resetPasswordSchema),
    resetPasswordHandler
);

export default router;
