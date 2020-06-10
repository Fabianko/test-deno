import { Application }from "./deps.ts";
import indexRoutes from "./index-routes.ts";

console.log("hola mundo");

const app = new Application();

app.use(indexRoutes.routes());
app.use(indexRoutes.allowedMethods());
await app.listen({port: 3000}); 