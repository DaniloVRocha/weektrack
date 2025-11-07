import express from "express";
import { TaskController } from "../controllers/taskController.js";

const router = express.Router();

router.post("/task", TaskController.create);
router.get("/task", TaskController.findAll);
router.get("/task/:id", TaskController.findOne);
router.delete("/task/:id", TaskController.remove);
router.put("/task/:id", TaskController.update);
router.put("/task/:id", TaskController.updateStatus);

export default router;
