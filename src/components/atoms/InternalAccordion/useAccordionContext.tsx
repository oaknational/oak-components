import { useContext } from "react";

import { accordionContext } from "./AccordionProvider";

const useAccordionContext = () => {
  const accordionValue = useContext(accordionContext);

  if (!accordionValue) {
    throw new Error("useAccordionContext() called outside of menu provider");
  }

  return accordionValue;
};

export default useAccordionContext;
