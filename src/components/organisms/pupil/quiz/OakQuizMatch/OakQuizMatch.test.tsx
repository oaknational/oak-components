import assert from "assert";

import { act, create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import React from "react";
import { DndContext, DndContextProps, UniqueIdentifier } from "@dnd-kit/core";
import {
  getAllByRole as getAllByRoleWithin,
  getByTestId as getByTestIdWithin,
  getByRole as getByRoleWithin,
  queryByRole as queryByRoleWithin,
} from "@testing-library/react";

import { OakQuizMatch } from "./OakQuizMatch";

import { oakDefaultTheme } from "@/styles";
import renderWithTheme from "@/test-helpers/renderWithTheme";
import { injectDndContext } from "@/components/atoms/InternalDndContext/InternalDndContext";
import { installMockResizeObserver } from "@/test-helpers";

// Not currently implemented by JSDOM so we can provide stubs
window.matchMedia =
  window.matchMedia ??
  jest.fn().mockReturnValue({
    matches: false,
  });

installMockResizeObserver();

const options = [
  { id: "1", label: "Exclamation mark" },
  { id: "2", label: "Full stop" },
  { id: "3", label: "Question mark" },
];
const slots = [
  { id: "1", label: "conveys intense emotion" },
  { id: "2", label: "poses a question" },
  { id: "3", label: "ends a declarative sentence" },
];

describe(OakQuizMatch, () => {
  beforeEach(() => {
    // Seed Math.random so that the order of the options is predictable
    const randomSpy = jest.spyOn(Math, "random");
    for (let i = 0; i < 10; i++) {
      randomSpy.mockReturnValueOnce(0.1 * i);
    }
  });

  it("matches snapshot", () => {
    const tree = create(
      <ThemeProvider theme={oakDefaultTheme}>
        <OakQuizMatch initialOptions={options} initialSlots={slots} />
      </ThemeProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("allows an option to be dropped into a slot", async () => {
    // FIXME: the behavior around the holding pen seems to have changed perhaps with an update.
    // The comments on this test are quite confusing so there might be some misconceptions here.

    let dndProps: DndContextProps = {};
    const MockDndContext = (props: DndContextProps) => {
      dndProps = props;
      return <DndContext {...props} />;
    };
    const onChangeSpy = jest.fn();

    const { getByTestId, getAllByTestId } = renderWithTheme(
      <injectDndContext.Provider value={MockDndContext}>
        <OakQuizMatch
          initialOptions={options}
          initialSlots={slots}
          onChange={onChangeSpy}
        />
      </injectDndContext.Provider>,
    );
    const [firstSlot] = getAllByTestId("slot");
    assert(firstSlot);

    // All items should start in the holding pen
    expect(
      getAllByRoleWithin(getByTestId("holding-pen"), "option").map(
        (item) => item.textContent,
      ),
    ).toEqual(["Question mark", "Full stop", "Exclamation mark"]);

    // Drag the first item into the first slot
    act(() => {
      dndProps?.onDragStart?.(mockDragEvent("1"));
      dndProps?.onDragOver?.(mockDragEvent("1", "1"));
      dndProps?.onDragEnd?.(mockDragEvent("1", "1"));
    });

    // The first item should be removed from the holding pen and placed in the first slot
    expect(
      getAllByRoleWithin(getByTestId("holding-pen"), "option").map(
        (item) => item.textContent,
      ),
    ).toEqual(["Question mark", "Full stop"]);
    expect(getByTestIdWithin(firstSlot, "label").textContent).toEqual(
      "conveys intense emotion",
    );
    expect(getByRoleWithin(firstSlot, "option").textContent).toEqual(
      "Exclamation mark",
    );

    // Replace the first item
    act(() => {
      dndProps?.onDragStart?.(mockDragEvent("2"));
      dndProps?.onDragOver?.(mockDragEvent("2", "1"));
      dndProps?.onDragEnd?.(mockDragEvent("2", "1"));
    });

    // The first option should be returned to the holding pen
    expect(
      getAllByRoleWithin(getByTestId("holding-pen"), "option").map(
        (item) => item.textContent,
      ),
    ).toEqual(["Question mark", "Exclamation mark"]);
    // The first slot should now contain the second option
    expect(getByRoleWithin(firstSlot, "option").textContent).toEqual(
      "Full stop",
    );

    // Drag the option back into the holding pen
    act(() => {
      dndProps?.onDragStart?.(mockDragEvent("2"));
      dndProps?.onDragOver?.(mockDragEvent("2", "holding-pen"));
      dndProps?.onDragEnd?.(mockDragEvent("2", "holding-pen"));
    });

    // All options should be back in the holding pen
    expect(
      getAllByRoleWithin(getByTestId("holding-pen"), "option").map(
        (item) => item.textContent,
      ),
    ).toEqual(["Full stop", "Exclamation mark", "Question mark"]);
    expect(getByTestIdWithin(firstSlot, "label").textContent).toEqual(
      "conveys intense emotion",
    );
    expect(queryByRoleWithin(firstSlot, "option")).toBeNull();
  });
});

function mockDragEvent(optionId: UniqueIdentifier, slotId?: UniqueIdentifier) {
  return {
    active: {
      id: optionId,
      data: {
        current: options.find((option) => option.id === optionId),
      },
      rect: {
        current: {
          initial: null,
          translated: null,
        },
      },
    },
    over: slotId
      ? {
          id: slotId,
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
            current: slots.find((slot) => slot.id === slotId),
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
