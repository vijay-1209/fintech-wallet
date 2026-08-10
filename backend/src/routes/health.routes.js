import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default router;