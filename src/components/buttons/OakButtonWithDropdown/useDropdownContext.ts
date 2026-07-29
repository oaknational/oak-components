import { useContext } from "react";

import { dropdownContext } from "./OakButtonWithDropdownProvider";

export const useDropdownContext = () => {
  const dropdownValue = useContext(dropdownContext);

  if (!dropdownValue) {
    throw new Error("useDropdownContext() called outside of provider");
  }

  return dropdownValue;
};
