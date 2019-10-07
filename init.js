import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 3000;

const handleListening = () =>
  console.log(`v Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
