import express from "express";
import TarefaController from "../controllers/tarefaController.js";

const router = express.Router();

/*
router
  .get("/tarefas", TarefaController.listarTarefas)
  .post("/tarefas", TarefaController.cadastrarTarefa);
*/
export default router;
