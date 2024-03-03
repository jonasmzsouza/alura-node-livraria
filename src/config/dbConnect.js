import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://username:<password>@mycluster.mongodb.net/alura-node-livraria?retryWrites=true&w=majority&appName=MyCluster"
);

let db = mongoose.connection;

export default db;
