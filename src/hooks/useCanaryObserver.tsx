import { useLayoutEffect, useState } from "react";

const useCanaryObserver = (canaryElement: HTMLDivElement | null) => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return isScrolled;
};

export default useCanaryObserver;
