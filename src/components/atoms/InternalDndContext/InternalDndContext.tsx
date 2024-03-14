import { DndContext, DndContextProps } from "@dnd-kit/core";
import React, { FC, createContext, useContext, useEffect } from "react";

/**
 * Facilitates DI for the DndContext
 */
export const injectDndContext = createContext<FC<DndContextProps>>(DndContext);

/**
 * Wraps dnd-kit's `DndContext` to normalise scroll behaviour and enable dependency injection
 */
export const InternalDndContext = (props: DndContextProps) => {
  const DndContext = useContext(injectDndContext);

  /**
   * Disable smooth scrolling during drag to ensure that the dragged item is always visible
   */
  useEffect(() => {
    const originalScrollingBehaviour =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    return () => {
      document.documentElement.style.scrollBehavior =
        originalScrollingBehaviour;
    };
  });

  return <DndContext {...props} />;
};
