import { Dispatch, SetStateAction, useEffect, useState } from "react";

type StorageValue<T> = T | null;

function getStorageValue<T>(key: string, defaultValue: T): StorageValue<T> {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }

  return defaultValue;
}

export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [StorageValue<T>, Dispatch<SetStateAction<StorageValue<T>>>] => {
  const [value, setValue] = useState<StorageValue<T>>(() =>
    getStorageValue(key, defaultValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
