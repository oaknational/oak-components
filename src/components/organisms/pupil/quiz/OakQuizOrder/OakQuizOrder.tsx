import React, { useState } from "react";
import {
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  UniqueIdentifier,
  Announcements,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { OakFlex } from "@/components/atoms";
import {
  OakDragAndDropInstructions,
  OakDraggable,
  OakDroppable,
} from "@/components/molecules";
import { InternalDndContext } from "@/components/atoms/InternalDndContext/InternalDndContext";
import { usePrefersReducedMotion } from "@/animation/usePrefersReducedMotion";
import { OakCodeRenderer } from "@/components/organisms/shared";

type OakQuizOrderItem = {
  id: string;
  label: string;
};

export const OakQuizOrderitemId = (id: string) => {
  return `oak-quiz-order-item-${id}`;
};

export type OakQuizOrderProps = {
  /**
   * The initial order of items
   *
   * this cannot be updated on subsequent renders
   */
  initialItems: OakQuizOrderItem[];
  /**
   * Notified the consumer when the order of items has changed
   */
  onChange?: (items: OakQuizOrderItem[]) => void;
  /**
   * Highlight all items to indicate that they can be interacted with
   */
  isHighlighted?: boolean;
  announcements?: OakQuizOrderItem[];
};

const ConnectedDraggable = ({
  id,
  label,
  isHighlighted,
}: OakQuizOrderItem & { isHighlighted?: boolean }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isOver,
    isDragging,
  } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <OakDroppable isOver={isOver} isHighlighted={isHighlighted}>
      <OakDraggable
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        aria-describedby={undefined}
        aria-roledescription="sortable item"
        aria-pressed={undefined}
        aria-selected={!!attributes["aria-pressed"]}
        role="option"
        id={OakQuizOrderitemId(id)}
        isDragging={isDragging}
      >
        <OakCodeRenderer string={label} />
      </OakDraggable>
    </OakDroppable>
  );
};

/**
 * A sortable list of items with drag and drop functionality. Items can be dragged over named slots to re-arrange them
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
export const OakQuizOrder = ({
  initialItems,
  announcements,
  onChange,
  isHighlighted,
}: OakQuizOrderProps) => {
  const [items, setItems] = useState<OakQuizOrderItem[]>(initialItems);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
      scrollBehavior: usePrefersReducedMotion() ? "instant" : "smooth",
    }),
  );

  return (
    <>
      <OakDragAndDropInstructions $mb="spacing-32" />
      <InternalDndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        accessibility={{
          announcements: createAccouncements(announcements || items),
        }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <OakFlex
            $gap="spacing-16"
            $flexDirection="column"
            role="listbox"
            aria-label="Sortable items"
          >
            {items.map((item) => (
              <ConnectedDraggable
                key={item.id}
                {...item}
                isHighlighted={isHighlighted}
              />
            ))}
          </OakFlex>
        </SortableContext>
      </InternalDndContext>
    </>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        const newItems = arrayMove(items, oldIndex, newIndex);

        onChange?.(newItems);

        return newItems;
      });
    }
  }
};

function createAccouncements(items: OakQuizOrderItem[]): Announcements {
  const getPosition = (id: UniqueIdentifier) =>
    items.findIndex((item) => item.id === id) + 1;
  const getItemLabel = (id: UniqueIdentifier) =>
    items.find((item) => item.id === id)?.label;

  return {
    onDragStart() {
      return undefined;
    },
    onDragOver({ active, over }) {
      if (over) {
        return `Sortable item ${getItemLabel(
          active.id,
        )} is in position ${getPosition(over.id)} of ${items.length}`;
      }
    },
    onDragEnd({ active, over }) {
      if (over) {
        return `Sortable item ${getItemLabel(
          active.id,
        )} was dropped into position ${getPosition(over.id)} of ${
          items.length
        }`;
      }
    },
    onDragCancel({ active }) {
      return `Dragging was cancelled. Sortable item ${getItemLabel(
        active.id,
      )} was dropped.`;
    },
  };
}
