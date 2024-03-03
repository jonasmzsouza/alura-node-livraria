import livro from "../models/Livro.js";
import autor from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    await livro
      .find({})
      .populate("autor")
      .then((livros) => {
        res.status(200).json(livros);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `${error.message} - falha na requisição` });
      });
  }

  static async listarLivroPorId(req, res) {
    const id = req.params.id;

    await livro
      .findById(id)
      .populate("autor", "nome")
      .then((livro) => {
        if (!livro) throw new Error("Id do livro não encontrado.");
        res.status(200).send(livro);
      })
      .catch((error) => {
        res.status(500).json({
          message: `${error.message} - falha na requisição do livro`,
        });
      });
  }

  static async cadastrarLivro(req, res) {
    await livro
      .create(req.body)
      .then((livro) => {
        res.status(201).send(livro.toJSON());
      })
      .catch((error) => {
        res
          .status(500)
          .send({ message: `${error.message} - falha ao cadastrar livro.` });
      });
  }

  static async atualizarLivro(req, res) {
    const id = req.params.id;

    await livro
      .findByIdAndUpdate(id, { $set: req.body })
      .then((livro) => {
        if (!livro) throw new Error("Id do livro não encontrado.");
        res.status(200).json({ message: "livro atualizado" });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `${error.message} - falha na atualização` });
      });
  }

  static async deletarLivro(req, res) {
    const id = req.params.id;

    await livro
      .findByIdAndDelete(id)
      .then((livro) => {
        if (!livro) throw new Error("Id do livro não encontrado.");
        res
          .status(200)
          .json({ message: `livro id: ${id} excluído com sucesso` });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: `${error.message} - falha na exclusão` });
      });
  }

  static async listarLivroPorEditora(req, res) {
    const editora = req.query.editora;

    await livro
      .find({ editora: editora })
      .then((livro) => {
        res.status(200).send(livro);
      })
      .catch((error) => {
        res.status(500).json({ message: `${error.message} - falha na busca` });
      });
  }
}

export default LivroController;
