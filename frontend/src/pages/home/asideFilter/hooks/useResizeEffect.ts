import { useEffect } from "react";

export const useResizeEffect = (setIsHidden: (isHidden: boolean) => void) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsHidden(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsHidden]);
};
