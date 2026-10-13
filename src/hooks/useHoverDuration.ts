import React, { useRef } from "react";

/**
 * Returns mouseEnter/mouseLeave handlers that call `onHovered` with the hover duration (ms) on leave
 */
export const useHoverDuration = (
  value: string,
  id: string,
  onHovered?: (value: string, id: string, duration: number) => void,
) => {
  const hoverStart = useRef<number | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLInputElement>) => {
    hoverStart.current = event.timeStamp;
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLInputElement>) => {
    if (hoverStart.current === null) {
      return;
    }
    const delta = event.timeStamp - hoverStart.current;
    hoverStart.current = null;
    if (onHovered) {
      onHovered(value, id, delta);
    }
  };

  return { handleMouseEnter, handleMouseLeave };
};
