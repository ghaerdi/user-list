import { useEffect, useState } from "react"

export default function useLocalStorage(key: string) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ value, setValue ] = useState<string>();
  const [ hasValue, setHasValue ] = useState<boolean>();

  useEffect(() => {
    setValue(localStorage.getItem(key) ?? "");
  }, [key]);

  useEffect(() => {
    if (value !== undefined) setIsLoading(false);
  }, [value]);

  useEffect(() => {
    if (value !== undefined) setHasValue(Boolean(value));
  }, [value, hasValue]);

  const saveValue = (value: string) => {
    localStorage.setItem(key, value);
    setValue(value);
  }

  const clearValue = () => {
    setValue("");
    localStorage.removeItem(key);
  }

  return { value, hasValue, saveValue, clearValue, isLoading }
}
