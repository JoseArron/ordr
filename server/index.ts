import { Elysia } from "elysia";

const server = new Elysia({ prefix: "/api" }).get("/", () => ({
  text: "hello world",
}));

export default server;
