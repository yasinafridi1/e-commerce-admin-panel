import CONSTANTS from "@constants/index";
import { getLocalStorageValue } from "@utils/localstorageutil";
import { useEffect, useState } from "react";

const useColorMode = () => {
  const [colorMode, setColorMode] = useState(
    getLocalStorageValue(CONSTANTS.colorMode) ||
      "light",
  );

  useEffect(() => {
    const className = ["dark", "bg-boxdark2"];
    const bodyClass =
      window.document.body.classList;

    if (colorMode === "dark") {
      bodyClass.remove("bg-light");
      bodyClass.add(...className);
    } else {
      bodyClass.remove(...className);
      bodyClass.add("bg-light");
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
