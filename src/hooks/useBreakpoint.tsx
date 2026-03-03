import { useEffect, useState } from "react";

import { Device, getMediaQuery } from "@/styles/utils/responsiveStyle";

function getBreakpoint(): Device {
  const mediaDesktop = globalThis.matchMedia(getMediaQuery("desktop"));
  const mediaTablet = globalThis.matchMedia(getMediaQuery("tablet"));
  console.log(getMediaQuery("tablet"));
  console.log("mediaDesktop.matches=", mediaDesktop);
  console.log("mediaTablet.matches=", mediaTablet);
  if (mediaDesktop.matches) {
    return "desktop";
  } else if (mediaTablet.matches) {
    return "tablet";
  }
  return "mobile";
}

export const useBreakpoint = () => {
  const [value, setValue] = useState<Device>(() => getBreakpoint());

  useEffect(() => {
    const listener = () => setValue(getBreakpoint());
    globalThis.addEventListener("resize", listener);
    return () => {
      globalThis.removeEventListener("resize", listener);
    };
  }, []);

  return value;
};
