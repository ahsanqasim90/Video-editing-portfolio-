import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "video_editing_portfolio";

let cachedClient;

export async function getDb() {
  if (!uri) {
    throw new Error("MONGODB_URI is missing in environment variables.");
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }

  return cachedClient.db(dbName);
}

