import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setContent)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { content, loading, error } as {
    content: T | null;
    error: Error | null;
    loading: boolean;
  };
}
