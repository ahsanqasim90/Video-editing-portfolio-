import { createToken } from "../lib/auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminEmail = process.env.ADMIN_EMAIL || "sanqasim205@gmail.com";
  const adminPassword = process.env.ADMIN_PASSWORD;
  const { email, password } = req.body || {};

  if (!adminPassword) {
    return res.status(500).json({ error: "ADMIN_PASSWORD is missing in Vercel environment variables." });
  }

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ error: "Invalid admin email or password." });
  }

  return res.status(200).json({ token: createToken(email), email });
}

