import { useEffect, useState } from "react"

export const useDebounce = (value, tm = 800) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
    }, tm);

    return () => {
      clearTimeout(timeout)
    }
  }, [tm, value])

  return debounceValue;
}
