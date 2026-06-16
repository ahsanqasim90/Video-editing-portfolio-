import { createRequire } from "node:module";
import { requireAdmin } from "../lib/auth.js";
import { getDb } from "../lib/mongo.js";

const require = createRequire(import.meta.url);
const fallbackContent = require("../../src/data/siteContent.json");

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;

  try {
    const db = await getDb();
    const collection = db.collection("portfolio_content");

    if (req.method === "GET") {
      const document = await collection.findOne({ _id: "main" });
      return res.status(200).json({ content: document?.content || fallbackContent });
    }

    if (req.method === "PUT") {
      const { content } = req.body || {};
      if (!content || typeof content !== "object") {
        return res.status(400).json({ error: "Content payload is required." });
      }

      await collection.updateOne(
        { _id: "main" },
        { $set: { content, updatedAt: new Date() } },
        { upsert: true },
      );

      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", "GET, PUT");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
