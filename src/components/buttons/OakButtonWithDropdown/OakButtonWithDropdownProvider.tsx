import React, { createContext, useMemo } from "react";

type DropdownContextType = {
  onClose: () => void;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const OakButtonWithDropdownProvider = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const context: DropdownContextType = useMemo(() => ({ onClose }), [onClose]);

  return (
    <DropdownContext.Provider value={context}>
      {children}
    </DropdownContext.Provider>
  );
};
