import { createRequire } from "node:module";
import { getDb } from "./lib/mongo.js";

const require = createRequire(import.meta.url);
const fallbackContent = require("../src/data/siteContent.json");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const db = await getDb();
    const document = await db.collection("portfolio_content").findOne({ _id: "main" });
    return res.status(200).json({ content: document?.content || fallbackContent });
  } catch (error) {
    return res.status(200).json({ content: fallbackContent, warning: error.message });
  }
}
