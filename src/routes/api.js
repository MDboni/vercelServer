import express from "express";
import *as UserController from "../controller/UserController.js"
const router = express.Router();

// Simple test route
router.get("/test", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is running successfully 🚀"
  });
});



router.post('/Registration', UserController.Registration)
router.post('/Login', UserController.Login)

export default router;


