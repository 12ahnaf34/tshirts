import { useState, useEffect } from "react";

export enum ScrollDirection {
  up = "up",
  down = "down",
}

export function scroll() {
  const threshold: number = 100;
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up);

  useEffect(() => {
    let previousScrollYPosition: number = window.scrollY;

    const scrolledMoreThanThreshold = (currentScrollYPosition: number) => {
      return Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;
    };

    const isScrollingUp = (currentScrollYPosition: number) => {
      return (
        currentScrollYPosition > previousScrollYPosition &&
        !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
        !(currentScrollYPosition > 0 && previousScrollYPosition === 0)
      );
    };

    const updateScrollDirection = () => {
      const currentScrollYPosition: number = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition) ? ScrollDirection.down : ScrollDirection.up;
        setScrollDir(newScrollDirection);
        previousScrollYPosition = currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollDir;
}
