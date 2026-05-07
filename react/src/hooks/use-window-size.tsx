import { useSyncExternalStore } from "react";

export const useWindowSize = () => {
  const width = useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth,
    () => 0,
  );
  const height = useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerHeight,
    () => 0,
  );

  return { width, height };
};
