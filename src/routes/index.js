import express from "express";
import tarefas from "./tarefasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "WeekTrack", version: "1.0.0" });
  });
  app.use(express.json(), tarefas);
};

export default routes;
