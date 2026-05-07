import { useCallback, useState } from "react";

export const useBoolean = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((val) => !val), []);

  return { value, setValue, toggle, setTrue, setFalse };
};
