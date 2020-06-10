import { init, MongoClient } from "../deps.ts";

await init();

const client = new MongoClient();

client.connectWithUri(
    "",
);

const db = client.database("");

export default db;