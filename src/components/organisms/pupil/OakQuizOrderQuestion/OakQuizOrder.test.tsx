import { act, create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import React from "react";
import { DndContext, DndContextProps, UniqueIdentifier } from "@dnd-kit/core";

import { OakQuizOrder, injectDndContext } from "./OakQuizOrder";

import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";

window.matchMedia = jest.fn().mockReturnValue({
  matches: false,
});

describe(OakQuizOrder, () => {
  const initialItems = [
    {
      label: "Mouse",
      id: "1",
    },
    {
      label: "Hawk",
      id: "2",
    },
    {
      label: "Grasshopper",
      id: "3",
    },
  ];

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuizOrder initialItems={initialItems} />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("allows items to be reordered", async () => {
    let dndProps: DndContextProps = {};
    const MockDndContext = (props: DndContextProps) => {
      dndProps = props;
      return <DndContext {...props} />;
    };
    const onChangeSpy = jest.fn();

    const { getAllByRole } = renderWithTheme(
      <injectDndContext.Provider value={MockDndContext}>
        <OakQuizOrder initialItems={initialItems} onChange={onChangeSpy} />
      </injectDndContext.Provider>,
    );

    expect(getAllByRole("option").map((item) => item.textContent)).toEqual([
      "Mouse",
      "Hawk",
      "Grasshopper",
    ]);

    act(() => {
      dndProps?.onDragStart?.(mockDragEvent("1"));
      dndProps?.onDragOver?.(mockDragEvent("1", "2"));
      dndProps?.onDragEnd?.(mockDragEvent("1", "2"));
    });

    expect(getAllByRole("option").map((item) => item.textContent)).toEqual([
      "Hawk",
      "Mouse",
      "Grasshopper",
    ]);
    expect(onChangeSpy).toHaveBeenCalledWith([
      {
        id: "2",
        label: "Hawk",
      },
      {
        id: "1",
        label: "Mouse",
      },
      {
        id: "3",
        label: "Grasshopper",
      },
    ]);
  });
});

function mockDragEvent(activeId: UniqueIdentifier, overId?: UniqueIdentifier) {
  return {
    active: {
      id: activeId,
      data: {
        current: undefined,
      },
      rect: {
        current: {
          initial: null,
          translated: null,
        },
      },
    },
    over: overId
      ? {
          id: overId,
          rect: {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          disabled: false,
          data: {
            current: undefined,
          },
        }
      : null,
    activatorEvent: new Event("mock-pointer"),
    collisions: null,
    delta: {
      x: 0,
      y: 0,
    },
  };
}
