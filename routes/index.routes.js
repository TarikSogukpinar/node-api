import express from "express"
import registerRoutes from "./register.routes.js";
import loginRoutes from "./login.routes.js";

const app = express();

export function initRoutes(app) {
  app.use("/api/auth", registerRoutes);
  app.use("/api/auth", loginRoutes);
}
