import { useEffect, useState } from "react";
import fallbackContent from "../data/siteContent.json";

export function useSiteContent() {
  const [content, setContent] = useState(fallbackContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadContent() {
      try {
        const response = await fetch("/api/content");
        const data = await response.json();
        if (isMounted && data?.content?.portfolioItems?.length) {
          setContent(data.content);
        }
      } catch {
        if (isMounted) {
          setContent(fallbackContent);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}
