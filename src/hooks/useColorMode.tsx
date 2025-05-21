import CONSTANTS from "@constants/index";
import { getLocalStorageValue } from "@utils/localstorageutil";
import { useEffect, useState } from "react";




const useColorMode = () => {
  const [colorMode, setColorMode] = useState(
    getLocalStorageValue(CONSTANTS.colorMode) || "light"
  );

  console.log("Clor ==>", colorMode)

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
