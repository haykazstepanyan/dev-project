import { useCallback, useState } from "react";
import { BASE_URL } from "../constants/constants";

const useLazyFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const lazyRefetch = useCallback(async (url, options, method = "GET") => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      console.log("options", {
        credentials: "include",
        method,
        ...(options || {}),
      });
      const response = await fetch(`${BASE_URL}${url}`, {
        credentials: "include",
        method,
        ...(options || {}),
      });
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }
      const result = await response.json();

      setData(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  return { data, error, loading, lazyRefetch };
};

export default useLazyFetch;
