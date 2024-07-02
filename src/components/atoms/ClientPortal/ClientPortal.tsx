import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
type ClientPortalInterface = {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
};
const ClientPortal = ({ children, show }: ClientPortalInterface) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.body;
  }, []);
  return show && ref.current ? createPortal(children, ref.current) : null;
};
export default ClientPortal;
