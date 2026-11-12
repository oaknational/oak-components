import { useEffect, useState } from "react";

/**
 * Open state for modal stories that works on the Docs page.
 *
 * `useArgs().updateArgs` only re-renders the primary story on a Docs page, so
 * other stories' open buttons would do nothing. This keeps the state in the
 * story and still follows the `isOpen` control.
 */
export const useStoryOpenState = (isOpenArg: boolean) => {
  const [isOpen, setIsOpen] = useState(isOpenArg);
  useEffect(() => setIsOpen(isOpenArg), [isOpenArg]);
  return [isOpen, setIsOpen] as const;
};
