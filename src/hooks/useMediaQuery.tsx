import { useEffect, useState } from "react";

import { Device, getMediaQuery } from "@/styles/utils/responsiveStyle";

export const useMediaQuery = (device: Device) => {
  const [matches, setMatches] = useState(false);

  const query = getMediaQuery(device);

  useEffect(() => {
    const media = globalThis.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    globalThis.addEventListener("resize", listener);
    return () => globalThis.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
