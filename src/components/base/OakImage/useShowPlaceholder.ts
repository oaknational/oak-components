import { ReactEventHandler, useCallback, useState } from "react";

export function useShowPlaceholder() {
  // Default to false so that we don't show the placeholder if the image is already complete
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const setImg = useCallback((img: HTMLImageElement | null) => {
    // the `load` or `error` event may never be called if the image is coming from the cache
    // so we need to check the `complete` property as well as listen to the `onLoad` and `onError` events
    img && setShowPlaceholder(!img.complete);
  }, []);

  return {
    showPlaceholder,
    setImg,
    /**
     * Wraps the `onLoad` and `onError` events to set the placeholder state
     */
    handleComplete(
      originalHandler?: ReactEventHandler<HTMLImageElement>,
    ): ReactEventHandler<HTMLImageElement> {
      return (event) => {
        if (originalHandler) {
          originalHandler(event);
        }
        setShowPlaceholder(false);
      };
    },
  };
}
