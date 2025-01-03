import React from "react";

type UseLocalStorageProps<T> = {
  key: string;
  deserializer?: (value: string) => T;
  serializer?: (value: T) => string;
  default?: T;
};

export default function useLocalStorage<T>({
  key,
  deserializer = JSON.parse,
  serializer = JSON.stringify,
  default: defaultValue,
}: UseLocalStorageProps<T>) {
  const {
    get: getBase,
    set: setBase,
    clear: clearBase,
  } = useLocalStorageWithoutKey<T>({
    deserializer,
    serializer,
    default: defaultValue,
  });

  const get = React.useCallback(() => {
    return getBase(key);
  }, [key, getBase]);

  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    // Has to be in effect because window not defined initially
    setValue(get());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  const set = React.useCallback(
    (state: T) => {
      return setBase(key, state);
    },
    [key, setBase],
  );

  const clear = React.useCallback(() => {
    return clearBase(key);
  }, [key, clearBase]);

  const onStorageEvent = React.useCallback(
    (_: Event) => {
      setValue(get());
    },
    [setValue, get],
  );

  React.useEffect(() => {
    window.addEventListener("storage", onStorageEvent);

    return () => {
      window.removeEventListener("storage", onStorageEvent);
    };
  }, [onStorageEvent]);

  return {
    value,
    get,
    set,
    clear,
  };
}

export function useLocalStorageWithoutKey<T>({
  deserializer = JSON.parse,
  serializer = JSON.stringify,
  default: defaultValue,
}: Omit<UseLocalStorageProps<T>, "key">) {
  const get = React.useCallback(
    (key: string) => {
      const state = window.localStorage.getItem(key);

      if (state === null) {
        return defaultValue;
      }

      return deserializer(state);
    },
    [deserializer, defaultValue],
  );

  const set = React.useCallback(
    (key: string, state: T) => {
      const stateToSet = serializer(state);
      window.localStorage.setItem(key, stateToSet);
      window.dispatchEvent(new Event("storage"));
    },
    [serializer],
  );

  const clear = React.useCallback((key: string) => {
    window.localStorage.removeItem(key);
    window.dispatchEvent(new Event("storage"));
  }, []);

  return {
    get,
    set,
    clear,
  };
}
