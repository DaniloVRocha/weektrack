import express from "express";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "WeekTrack", version: "1.0.0" });
  });
};

export default routes;
