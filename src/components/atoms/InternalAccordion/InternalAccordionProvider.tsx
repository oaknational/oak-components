import React, { createContext, FC, useState } from "react";

type AccordionContext = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  isInitialOpen?: boolean;
};

export const accordionContext = createContext<AccordionContext | null>(null);
/**
 *
 * Decomposed component comprising InternalAccordionButton and InternalAccordionContent wrapped by InternalAccordionProvider
 *
 * - InternalAccordionButton will toggle InternalAccordionContent visibility
 * - It is up to the user to arrange the InternalAccordionButton and InternalAccordionContent components in the desired order
 *
 */

export const InternalAccordionProvider: FC<{
  isInitialOpen: boolean;
  children?: React.ReactNode;
}> = ({ children, isInitialOpen }) => {
  const [isOpen, setOpen] = useState(isInitialOpen);

  const accordionValue: AccordionContext = {
    isOpen,
    setOpen,
    isInitialOpen: false,
  };

  return (
    <accordionContext.Provider value={accordionValue}>
      {children}
    </accordionContext.Provider>
  );
};

export default InternalAccordionProvider;
