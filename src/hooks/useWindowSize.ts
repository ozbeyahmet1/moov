import { useEffect, useState } from "react";
// Define general type for useWindowSize hook, which includes width and height
interface Size {
  readonly width: number | undefined;
  readonly height: number | undefined;
}

// Hook
export function useWindowSize(): ReadonlyArray<boolean | 0 | undefined> {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  const isXs = windowSize.width && windowSize.width < 450;
  const isSm = windowSize.width && windowSize.width >= 450 && windowSize.width < 575;
  const isMd = windowSize.width && windowSize.width >= 575 && windowSize.width < 768;
  const isLg = windowSize.width && windowSize.width >= 768 && windowSize.width < 992;
  const isXl = windowSize.width && windowSize.width >= 992 && windowSize.width < 1200;
  const is2Xl = windowSize.width && windowSize.width >= 1200 && windowSize.width < 1400;
  return [isXs, isSm, isMd, isLg, isXl, is2Xl];
}
