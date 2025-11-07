class TaskController {
  static listarTarefas = async (req, res) => {
    try {
      //const resultFind = await tarefas.find();

      res.status(200).json(resultFind);
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static cadastrarTarefa = async (req, res) => {
    try {
      let tarefa = new tarefas(req.body);

      //const tarefaSalva = await tarefa.save();

      res.status(201).send(tarefaSalva.toJSON());
    } catch (erro) {
      res
        .status(500)
        .send({ message: `${erro.message} - falha ao cadastrar tarefa.` });
    }
  };
}

export default TaskController;
