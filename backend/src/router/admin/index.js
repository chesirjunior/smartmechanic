import { Router } from "express";
import adminController from "../../controller/admin/index.js";

const adminRouter = Router();

adminRouter.get("/admin", adminController.read);
export default adminRouter;

