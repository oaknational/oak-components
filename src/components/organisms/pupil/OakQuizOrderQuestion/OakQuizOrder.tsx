import React, { ReactNode, useState } from "react";
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
import { restrictToVerticalAxis as restrictToVerticalAxisModifier } from "@dnd-kit/modifiers";

import { OakSortableItem } from "@/components/molecules/OakSortableItem";
import { OakFlex } from "@/components/atoms";
import { OakSortableSlot } from "@/components/molecules/OakSortableSlot";

type OakQuizOrderItem = {
  id: string;
  children: ReactNode;
};

export type OakQuizOrderProps = {
  initialItems: OakQuizOrderItem[];
  /**
   * Animate the sorting of items
   */
  animation?: boolean;
  /**
   * Show a semi-opaque ghost of the item being dragged
   *
   * This provides a visual indication of where the item will be placed
   */
  showGhost?: boolean;
  /**
   * Restrict to dragging vertically
   */
  restrictToVerticalAxis?: boolean;
  /**
   * Move the item into position when the drag ends
   *
   * This does not provide a visual indication of which slot the unseated item will be moved to
   * only which item will be replaced
   */
  moveOnRelease?: boolean;
};

const ConnectedOakSortableItem = ({
  slotName,
  animation,
  showGhost,
  moveOnRelease,
  id,
  ...props
}: OakQuizOrderItem & {
  slotName: ReactNode;
  animation?: boolean;
  showGhost?: boolean;
  moveOnRelease?: boolean;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    active,
    over,
  } = useSortable({ id });

  const isGhostItem = (() => {
    if (moveOnRelease) {
      return over?.id === id && showGhost;
    }

    return active?.id === id && showGhost;
  })();
  const opacity = (() => {
    if (moveOnRelease) {
      return active?.id === id ? 0 : 1;
    }

    return active?.id === id && !showGhost ? 0 : 1;
  })();

  const style = {
    transform: !moveOnRelease && CSS.Transform.toString(transform),
    transition: !moveOnRelease && animation ? transition : undefined,
    opacity,
  };

  const isGhostSlot = over?.id === id && showGhost;

  return (
    <OakSortableSlot slotName={slotName} isGhost={isGhostSlot}>
      <OakSortableItem
        ref={setNodeRef}
        style={style}
        isGhost={isGhostItem}
        {...attributes}
        {...listeners}
        {...props}
      />
    </OakSortableSlot>
  );
};

/**
 * A sortable list of items with drag and drop functionality. Items can be dragged over named slots to re-arrange them
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 *
 * There are a few props to experiment with to tailor the UX to what works best for pupils
 */
export const OakQuizOrder = ({
  initialItems,
  animation,
  showGhost,
  restrictToVerticalAxis,
  moveOnRelease,
}: OakQuizOrderProps) => {
  const [items, setItems] = useState<OakQuizOrderItem[]>(initialItems);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = items.find((item) => item.id === activeId);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      modifiers={
        restrictToVerticalAxis ? [restrictToVerticalAxisModifier] : undefined
      }
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <OakFlex as="ul" $gap="space-between-s" $flexDirection="column">
          {items.map((item, i) => (
            <ConnectedOakSortableItem
              key={item.id}
              slotName={i + 1}
              animation={animation}
              showGhost={showGhost}
              moveOnRelease={moveOnRelease}
              {...item}
            />
          ))}
        </OakFlex>
        {createPortal(
          <DragOverlay>
            {activeItem && <OakSortableItem {...activeItem} isActive />}
          </DragOverlay>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
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

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }
};
