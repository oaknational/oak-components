import React, {
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";

export const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [canaryElement, setCanaryElement] = useState<HTMLDivElement | null>(
    null,
  );
  const ObserveScroll = useCallback(({ children }: PropsWithChildren) => {
    return (
      <>
        <div ref={setCanaryElement} />
        {children}
      </>
    );
  }, []);

  useLayoutEffect(() => {
    if (!canaryElement) {
      return;
    }
    const observer = new IntersectionObserver(
      (mutations) => {
        setIsScrolled(!mutations.some((mutation) => mutation.isIntersecting));
      },
      {
        root: canaryElement.parentElement,
      },
    );
    observer.observe(canaryElement);

    return () => {
      observer.disconnect();
    };
  }, [canaryElement]);

  return { isScrolled, ObserveScroll };
};
