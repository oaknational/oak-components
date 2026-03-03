import { useEffect, useState } from "react";

import { Device, getMediaQuery } from "@/styles/utils/responsiveStyle";

function singletonMatches() {
  const mediaDesktop = globalThis.matchMedia(getMediaQuery("desktop"));
  const mediaTablet = globalThis.matchMedia(getMediaQuery("tablet"));
  return { mediaDesktop, mediaTablet };
}

function matchBreakpoint(): Device {
  const { mediaDesktop, mediaTablet } = singletonMatches();
  if (mediaDesktop.matches) {
    return "desktop";
  } else if (mediaTablet.matches) {
    return "tablet";
  }
  return "mobile";
}

export const useBreakpoint = () => {
  const [value, setValue] = useState<Device>(() => matchBreakpoint());

  useEffect(() => {
    const listener = () => setValue(matchBreakpoint());
    globalThis.addEventListener("resize", listener);
    return () => {
      globalThis.removeEventListener("resize", listener);
    };
  }, []);

  return value;
};
