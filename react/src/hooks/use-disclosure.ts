import { useEffect } from "react";
import { useBoolean } from "./use-boolean";

export const useDisclosure = () => {
  const { setFalse, setTrue, value, toggle } = useBoolean();

  useEffect(() => {
    if (!value) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFalse();
    };

    document.addEventListener("keydown", handleEscape);

    // clear up (close) useEffect
    return () => document.removeEventListener("keydown", handleEscape);
  }, [value, setFalse]);

  return { value, setFalse, setTrue, toggle };
};
