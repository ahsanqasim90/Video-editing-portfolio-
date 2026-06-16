import { handleUpload } from "@vercel/blob/client";
import { verifyToken } from "../lib/auth.js";

const allowedContentTypes = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/quicktime",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const jsonResponse = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async (_pathname, clientPayload) => {
        const payload = JSON.parse(clientPayload || "{}");
        if (!verifyToken(payload.token)) {
          throw new Error("Admin login expired. Please login again.");
        }

        return {
          allowedContentTypes,
          maximumSizeInBytes: 1024 * 1024 * 250,
          addRandomSuffix: true,
        };
      },
      onUploadCompleted: async () => {},
    });

    return res.status(200).json(jsonResponse);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

