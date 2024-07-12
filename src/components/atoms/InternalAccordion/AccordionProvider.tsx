import React, { createContext, FC, useState } from "react";

type AccordionContext = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  isInitialOpen?: boolean;
};

export const accordionContext = createContext<AccordionContext | null>(null);

export const AccordionProvider: FC<{
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

export default AccordionProvider;
