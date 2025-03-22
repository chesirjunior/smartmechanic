import { Router } from "express";
import admin_authController from "../../../controller/auth/Admin/index.js";

const admin_Routes = Router();

admin_Routes.post("/admin/login", admin_authController.login);
admin_Routes.post("/admin/register", admin_authController.register);

export default admin_Routes;