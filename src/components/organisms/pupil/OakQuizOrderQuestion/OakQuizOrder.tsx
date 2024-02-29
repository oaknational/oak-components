import React, { FC, createContext, useContext, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
  Announcements,
  DndContextProps,
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

import { OakSortableItem } from "@/components/molecules/OakSortableItem";
import { OakFlex } from "@/components/atoms";
import { OakSortableSlot } from "@/components/molecules/OakSortableSlot";
import { OakDragAndDropInstructions } from "@/components/molecules/OakDragAndDropInstructions";

type OakQuizOrderItem = {
  id: string;
  label: string;
};

export type OakQuizOrderProps = {
  initialItems: OakQuizOrderItem[];
  onChange?: (items: OakQuizOrderItem[]) => void;
};

const ConnectedOakSortableItem = ({ id, label }: OakQuizOrderItem) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    active,
    over,
  } = useSortable({ id });
  const isGhostItem = active?.id === id;
  const isGhostSlot = over?.id === id;
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <OakSortableSlot isActive={isGhostSlot}>
      <OakSortableItem
        ref={setNodeRef}
        style={style}
        isGhost={isGhostItem}
        {...attributes}
        {...listeners}
        aria-describedby={undefined}
        aria-roledescription="order item"
        aria-pressed={undefined}
        aria-selected={!!attributes["aria-pressed"]}
        role="option"
      >
        {label}
      </OakSortableItem>
    </OakSortableSlot>
  );
};

/**
 * Facilitates DI for the DndContext
 */
export const injectDndContext = createContext<FC<DndContextProps>>(DndContext);

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
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const DndContext = useContext(injectDndContext);

  return (
    <>
      <OakDragAndDropInstructions $mb="space-between-m2" />
      <DndContext
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
          >
            {items.map((item) => (
              <ConnectedOakSortableItem key={item.id} {...item} />
            ))}
          </OakFlex>
          {createPortal(
            <DragOverlay>
              {activeItem && (
                <OakSortableItem isActive>{activeItem.label}</OakSortableItem>
              )}
            </DragOverlay>,
            document.body,
          )}
        </SortableContext>
      </DndContext>
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
        return `Item ${getItemLabel(
          active.id,
        )} was moved into position ${getPosition(over.id)} of ${items.length}`;
      }
      firstAnnouncement = false;
    },
    onDragEnd({ active, over }) {
      firstAnnouncement = true;
      if (over) {
        return `Item ${getItemLabel(
          active.id,
        )} was dropped into position ${getPosition(over.id)} of ${
          items.length
        }`;
      }
    },
    onDragCancel({ active }) {
      firstAnnouncement = true;
      return `Dragging was cancelled. Item ${getItemLabel(
        active.id,
      )} was dropped.`;
    },
  };
}
