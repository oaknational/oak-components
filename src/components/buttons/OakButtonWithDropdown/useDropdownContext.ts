import { useContext } from "react";

import { DropdownContext } from "./OakButtonWithDropdownProvider";

export const useDropdownContext = () => {
  const dropdownValue = useContext(DropdownContext);

  if (!dropdownValue) {
    throw new Error("useDropdownContext() called outside of provider");
  }

  return dropdownValue;
};
