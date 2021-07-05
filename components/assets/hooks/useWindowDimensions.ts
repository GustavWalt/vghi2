import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (process.browser) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}

export default function useWindowDimensions() {
  if (process.browser) {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
}
