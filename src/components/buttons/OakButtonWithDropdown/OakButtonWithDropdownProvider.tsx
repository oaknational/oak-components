import React, { createContext, useMemo } from "react";

type DropdownContextType = {
  close: () => void;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const OakButtonWithDropdownProvider = ({
  close,
  children,
}: {
  close: () => void;
  children: React.ReactNode;
}) => {
  const context: DropdownContextType = useMemo(() => ({ close }), [close]);

  return (
    <DropdownContext.Provider value={context}>
      {children}
    </DropdownContext.Provider>
  );
};
