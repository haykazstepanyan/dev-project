import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

const useFetch = (url, options, method = "GET", withoutBaseURL = false) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await fetch(withoutBaseURL ? url : BASE_URL + url, {
        credentials: "include",
        method,
        ...(options || {}),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      return undefined;
    } finally {
      setLoading(false);
    }
  }, [url, options, method, withoutBaseURL]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    data,
    loading,
    error,
    refetch,
  };
};

export default useFetch;
