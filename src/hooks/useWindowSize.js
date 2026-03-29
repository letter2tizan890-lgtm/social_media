//Hooks for window Size

import { useState, useEffect } from "react";

const useWindowSize = () => {
  //windowsize useState
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  //Using useEffect when we resize screen it will relead to control it
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    // addEventLister while resizing screen on window
    window.addEventListener("resize", handleResize);

    // RemoveEventLister while resizing screen on window end and its return
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;
