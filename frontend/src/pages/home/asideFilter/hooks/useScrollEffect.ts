import { useEffect, RefObject } from "react";

export const useScrollEffect = (filterRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleScroll = () => {
      const filterElement = filterRef.current;
      if (!filterElement) return;

      const filterRect = filterElement.getBoundingClientRect();
      const buttonElement = filterElement.querySelector(".applyButton") as HTMLElement;

      if (!buttonElement) return;

      const buttonRect = buttonElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (filterRect.bottom < windowHeight) {
        filterElement.classList.add("sticky");
        filterElement.style.bottom = `${windowHeight - buttonRect.bottom}px`;
      } else {
        filterElement.classList.remove("sticky");
        filterElement.style.bottom = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filterRef]);
};
