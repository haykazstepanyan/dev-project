import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [valueToDebounce, setValueToDebounce] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValueToDebounce(value);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return valueToDebounce;
};

export default useDebounce;
