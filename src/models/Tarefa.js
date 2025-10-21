import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: {
    type: String,
    enum: ["A", "EA", "C", "NC"],
  },
  prioridade: {
    type: String,
    enum: ["H", "M", "L"],
  },
  repeticao: { type: String, enum: ["D", "S", "M", "A", "N"] },
});

const tarefas = mongoose.model("tarefas", tarefaSchema);

export default tarefas;
