import { act, fireEvent, render, renderHook } from "@testing-library/react";
import React from "react";

import { useShowPlaceholder } from "./useShowPlaceholder";

describe(useShowPlaceholder, () => {
  it("should return false when the img is already complete", () => {
    const img = document.createElement("img");
    jest.spyOn(img, "complete", "get").mockReturnValue(true);

    const { result } = renderHook(() => useShowPlaceholder());

    result.current.setImg(img);

    expect(result.current.showPlaceholder).toBe(false);
  });

  it("should be true while loading and false after the event handler has been called", () => {
    const showPlaceholderSpy = jest.fn();
    const onLoadSpy = jest.fn();
    const TestComponent = () => {
      const loadingComplete = useShowPlaceholder();

      showPlaceholderSpy(loadingComplete.showPlaceholder);

      return (
        <img
          ref={loadingComplete.setImg}
          src="https://example.com/image.jpg"
          onLoad={loadingComplete.handleComplete(onLoadSpy)}
        />
      );
    };
    const result = render(<TestComponent />);

    expect(showPlaceholderSpy).toHaveBeenLastCalledWith(true);

    act(() => {
      fireEvent.load(result.getByRole("img"));
    });

    expect(showPlaceholderSpy).toHaveBeenLastCalledWith(false);
    expect(onLoadSpy).toHaveBeenCalledTimes(1);
  });
});
