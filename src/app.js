import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await db();

connection.on("error", console.log.bind(console, "Erro de conexão"));
connection.once("open", () => {
  console.log("Conexão com banco feita com sucesso");
});

const app = express();
routes(app);

export default app;
