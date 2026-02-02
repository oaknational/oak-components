import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type InternalClientPortalInterface = {
  children: React.ReactNode;
  show?: boolean;
};

export const InternalClientPortal = ({
  children,
  show,
}: InternalClientPortalInterface) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.body;
  }, []);
  return show && ref.current ? createPortal(children, ref.current) : null;
};
