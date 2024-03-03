import autor from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    await autor
      .find({})
      .then((autores) => {
        res.status(200).json(autores);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `${error.message} - falha na requisição` });
      });
  }

  static async listarAutorPorId(req, res) {
    const id = req.params.id;

    await autor
      .findById(id)
      .then((autor) => {
        if (!autor) throw new Error("Id do autor não encontrado.");
        res.status(200).send(autor);
      })
      .catch((error) => {
        res.status(500).json({
          message: `${error.message} - falha na requisição do autor`,
        });
      });
  }

  static async cadastrarAutor(req, res) {
    await autor
      .create(req.body)
      .then((autor) => {
        res.status(201).send(autor.toJSON());
      })
      .catch((error) => {
        res
          .status(500)
          .send({ message: `${error.message} - falha ao cadastrar autor.` });
      });
  }

  static async atualizarAutor(req, res) {
    const id = req.params.id;

    await autor
      .findByIdAndUpdate(id, { $set: req.body })
      .then((autor) => {
        if (!autor) throw new Error("Id do autor não encontrado.");
        res.status(200).json({ message: "autor atualizado" });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `${error.message} - falha na atualização` });
      });
  }

  static async deletarAutor(req, res) {
    const id = req.params.id;

    await autor
      .findByIdAndDelete(id)
      .then((autor) => {
        if (!autor) throw new Error("Id do autor não encontrado.");
        res
          .status(200)
          .json({ message: `autor id: ${id} excluído com sucesso` });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `${error.message} - falha na exclusão` });
      });
  }
}

export default AutorController;
