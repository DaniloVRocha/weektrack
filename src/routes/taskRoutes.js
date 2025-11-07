import express from "express";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

/*
router
  .get("/tarefas", TarefaController.listarTarefas)
  .post("/tarefas", TarefaController.cadastrarTarefa);
*/
export default router;
