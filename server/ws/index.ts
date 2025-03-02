import { Elysia } from "elysia";

// websocket server
const wss = new Elysia()
  .ws("/ws", {
    open(ws) {
      console.log("connected");
      ws.send("connected");
    },
    message(ws, message) {
      console.log(message);
      ws.send(`this is your message: ${message}`);
    },
  })
  .listen(3000);

export default wss;
