import crypto from "node:crypto";

const tokenMaxAgeMs = 1000 * 60 * 60 * 12;

function getSecret() {
  return process.env.ADMIN_SECRET || process.env.MONGODB_URI || "portfolio-dev-secret";
}

function sign(payload) {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

export function createToken(email) {
  const payload = JSON.stringify({ email, exp: Date.now() + tokenMaxAgeMs });
  const encodedPayload = Buffer.from(payload).toString("base64url");
  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export function verifyToken(token) {
  if (!token || !token.includes(".")) return false;

  const [encodedPayload, signature] = token.split(".");
  if (signature !== sign(encodedPayload)) return false;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
    return Boolean(payload.email && payload.exp > Date.now());
  } catch {
    return false;
  }
}

export function requireAdmin(req, res) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";

  if (!verifyToken(token)) {
    res.status(401).json({ error: "Admin login expired. Please login again." });
    return false;
  }

  return true;
}

