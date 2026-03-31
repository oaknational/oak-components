import { useEffect, useState } from "react";

import { Device, getMediaQuery } from "@/styles/utils/responsiveStyle";

type MediaQueries = {
  mediaDesktop: MediaQueryList;
  mediaTablet: MediaQueryList;
};

function getMediaQueries(): MediaQueries {
  const mediaDesktop = globalThis.matchMedia(getMediaQuery("desktop"));
  const mediaTablet = globalThis.matchMedia(getMediaQuery("tablet"));
  return { mediaDesktop, mediaTablet };
}

function matchBreakpoint({ mediaDesktop, mediaTablet }: MediaQueries): Device {
  if (mediaDesktop.matches) {
    return "desktop";
  } else if (mediaTablet.matches) {
    return "tablet";
  }
  return "mobile";
}

export const useBreakpoint = () => {
  const [value, setValue] = useState<Device>(() => {
    if (globalThis) {
      return matchBreakpoint(getMediaQueries());
    }
    return "desktop";
  });

  useEffect(() => {
    const queries = getMediaQueries();
    const listener = () => setValue(matchBreakpoint(queries));
    globalThis.addEventListener("resize", listener);
    return () => {
      globalThis.removeEventListener("resize", listener);
    };
  }, []);

  return value;
};
