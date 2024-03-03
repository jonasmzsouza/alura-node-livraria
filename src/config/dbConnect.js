import mongoose from "mongoose";

export default async function db() {
  mongoose.connect(
    process.env.DB_CONNECTION_STRING ?? "http://localhost:27017"
  );
  return mongoose.connection;
}
