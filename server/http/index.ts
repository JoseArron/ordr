import { Elysia } from "elysia";

const httpServer = new Elysia({ prefix: "/api" }).get("/", () => ({
  text: "hello world",
}));

export default httpServer;
