import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

const useFetch = (url, options, method = "GET") => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = useCallback(
    async (refetchData, refetchURL = url) => {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        if (refetchData) {
          options.body = JSON.stringify(refetchData);
        }
        const response = await fetch(`${BASE_URL}${refetchURL}`, {
          credentials: "include",
          method,
          ...(options && {}),
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
        return err;
      } finally {
        setLoading(false);
      }
    },
    [url, options, method],
  );
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
