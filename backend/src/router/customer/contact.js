import express from "express";
import contactController from "../../controller/customer/contactController.js";

const router = express.Router();

router.post("/contact", contactController.createContact);

export default router;