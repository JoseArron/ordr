import httpServer from "@/server/http";

// have the elysia server handle nextjs api routes
export const GET = httpServer.handle;
export const POST = httpServer.handle;
