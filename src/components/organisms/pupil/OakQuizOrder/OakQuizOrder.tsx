import React, { useState } from "react";
import {
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
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
import { createPortal } from "react-dom";

import { OakFlex } from "@/components/atoms";
import {
  OakDragAndDropInstructions,
  OakDraggable,
  OakDroppable,
} from "@/components/molecules";
import { InternalDndContext } from "@/components/atoms/InternalDndContext/InternalDndContext";
import { usePrefersReducedMotion } from "@/animation/usePrefersReducedMotion";

type OakQuizOrderItem = {
  id: string;
  label: string;
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
};

const ConnectedDraggable = ({ id, label }: OakQuizOrderItem) => {
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
    <OakDroppable isOver={isOver}>
      <OakDraggable
        ref={setNodeRef}
        style={style}
        isDisabled={isDragging}
        {...attributes}
        {...listeners}
        aria-describedby={undefined}
        aria-roledescription="sortable item"
        aria-pressed={undefined}
        aria-selected={!!attributes["aria-pressed"]}
        role="option"
      >
        {label}
      </OakDraggable>
    </OakDroppable>
  );
};

/**
 * A sortable list of items with drag and drop functionality. Items can be dragged over named slots to re-arrange them
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
export const OakQuizOrder = ({ initialItems, onChange }: OakQuizOrderProps) => {
  const [items, setItems] = useState<OakQuizOrderItem[]>(initialItems);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = items.find((item) => item.id === activeId);
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
      <OakDragAndDropInstructions $mb="space-between-m2" />
      <InternalDndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        accessibility={{
          announcements: createAccouncements(items),
        }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <OakFlex
            $gap="space-between-s"
            $flexDirection="column"
            role="listbox"
            aria-label="Sortable items"
          >
            {items.map((item) => (
              <ConnectedDraggable key={item.id} {...item} />
            ))}
          </OakFlex>
          {createPortal(
            <DragOverlay>
              {activeItem && (
                <OakDraggable isDragging>{activeItem.label}</OakDraggable>
              )}
            </DragOverlay>,
            document.body,
          )}
        </SortableContext>
      </InternalDndContext>
    </>
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveId(active.id.toString());
  }

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

    setActiveId(null);
  }
};

function createAccouncements(items: OakQuizOrderItem[]): Announcements {
  const getPosition = (id: UniqueIdentifier) =>
    items.findIndex((item) => item.id === id) + 1;
  const getItemLabel = (id: UniqueIdentifier) =>
    items.find((item) => item.id === id)?.label;
  let firstAnnouncement = true;

  return {
    onDragStart() {
      return undefined;
    },
    onDragOver({ active, over }) {
      // Don't make an announcement for the first drag over since this is the initial position
      if (over && !firstAnnouncement) {
        return `Sortable item ${getItemLabel(
          active.id,
        )} was moved into position ${getPosition(over.id)} of ${items.length}`;
      }
      firstAnnouncement = false;
    },
    onDragEnd({ active, over }) {
      firstAnnouncement = true;
      if (over) {
        return `Sortable item ${getItemLabel(
          active.id,
        )} was dropped into position ${getPosition(over.id)} of ${
          items.length
        }`;
      }
    },
    onDragCancel({ active }) {
      firstAnnouncement = true;
      return `Dragging was cancelled. Sortable item ${getItemLabel(
        active.id,
      )} was dropped.`;
    },
  };
}
