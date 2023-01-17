import express from "express";
import dotenv from "dotenv";
import connectionDb from "./helpers/connectionDb.js";
import { initRoutes } from "./routes/index.routes.js";

dotenv.config()

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
connectionDb()
initRoutes(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
