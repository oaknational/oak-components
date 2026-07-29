import React, { createContext } from "react";

type DropdownContextType = {
  close: () => void;
};

export const dropdownContext = createContext<DropdownContextType | null>(null);

export const OakButtonWithDropdownProvider = ({
  close,
  children,
}: {
  close: () => void;
  children: React.ReactNode;
}) => {
  const context: DropdownContextType = {
    close,
  };

  return (
    <dropdownContext.Provider value={context}>
      {children}
    </dropdownContext.Provider>
  );
};
