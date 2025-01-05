import { Router } from "express";
import { decodeQr, generateQr } from "../controllers/user.controller";

const router = Router();

router.post("/generate-qr", generateQr);
router.post("/decode-qr/:id", decodeQr);

export default router;
