import prisma from "../models/prismaClient.js";

export class TaskController {
  static create = async (req, res) => {
    try {
      const { title, description, status } = req.body;
      const task = await prisma.task.create({
        data: { title, description, status },
      });
      res.status(201).json(task);
    } catch (err) {
      console.error("Erro ao criar task:", err);
      res.status(500).json({ error: "Erro ao criar task" });
    }
  };

  static findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await prisma.task.findUnique({
        where: { id: Number(id) },
      });
      if (!task) return res.status(404).json({ error: "Task não encontrada" });
      res.json(task);
    } catch (err) {
      console.error("Erro ao buscar task:", err);
      res.status(500).json({ error: "Erro ao buscar task" });
    }
  };

  static findAll = async (req, res) => {
    try {
      const tasks = await prisma.task.findMany();
      res.json(tasks);
    } catch (err) {
      console.error("Erro ao listar tasks:", err);
      res.status(500).json({ error: "Erro ao listar tasks" });
    }
  };

  static update = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;
      const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { title, description, status },
      });
      res.json(task);
    } catch (err) {
      console.error("Erro ao atualizar task:", err);
      res.status(500).json({ error: "Erro ao atualizar task" });
    }
  };

  static updateStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { status },
      });
      res.json(task);
    } catch (err) {
      console.error("Erro ao atualizar task:", err);
      res.status(500).json({ error: "Erro ao atualizar task" });
    }
  };

  static remove = async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.task.delete({ where: { id: Number(id) } });
      res.status(204).send();
    } catch (err) {
      console.error("Erro ao deletar task:", err);
      res.status(500).json({ error: "Erro ao deletar task" });
    }
  };
}

export default TaskController;
