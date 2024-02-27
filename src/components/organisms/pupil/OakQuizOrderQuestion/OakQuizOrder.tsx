import React, { useState } from "react";
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

import {
  OakSortableItem,
  OakSortableItemProps,
} from "@/components/molecules/OakSortableItem";
import { OakBox, OakFlex } from "@/components/atoms";

export type OakQuizOrderProps = {
  initialItems: OakSortableItemProps[];
  /**
   * Animate the sorting of items
   */
  animation?: boolean;
};

const ConnectedOakSortableItem = (
  props: OakSortableItemProps & { animation?: boolean },
) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: props.animation ? transition : undefined,
  };

  return (
    <OakSortableItem
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      {...props}
    />
  );
};

export const OakQuizOrder = ({
  initialItems,
  animation,
}: OakQuizOrderProps) => {
  const [items, setItems] = useState<OakSortableItemProps[]>(initialItems);
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
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <OakFlex as="ul" $gap="space-between-s" $flexDirection="column">
          {items.map((item, i) => (
            <OakFlex
              as="li"
              key={i}
              $gap="space-between-s"
              $background="bg-decorative2-subdued"
              $pa="inner-padding-m"
              $borderRadius="border-radius-m"
              $flexGrow={1}
            >
              <OakFlex
                $width="all-spacing-14"
                $background="bg-decorative2-very-subdued"
                $borderRadius="border-radius-m"
                $alignItems="center"
                $justifyContent="center"
                $font="heading-3"
              >
                {i + 1}
              </OakFlex>
              <OakBox
                $background="bg-neutral"
                $pa="inner-padding-xs"
                $borderRadius="border-radius-m"
                $ba="border-solid-l"
                $borderStyle="dashed"
                $borderColor="border-primary"
                $width="100%"
              >
                <ConnectedOakSortableItem
                  key={item.id}
                  animation={animation}
                  {...item}
                />
              </OakBox>
            </OakFlex>
          ))}
        </OakFlex>
        <DragOverlay>
          {activeItem && <OakSortableItem {...activeItem} />}
        </DragOverlay>
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
