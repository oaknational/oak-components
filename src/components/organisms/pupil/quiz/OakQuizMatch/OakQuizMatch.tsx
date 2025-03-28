import React, { ReactNode, useEffect, useState } from "react";
import {
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  Announcements,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { InternalDroppableHoldingPen } from "@/components/organisms/pupil/quiz/InternalDroppableHoldingPen";
import { OakFlex } from "@/components/atoms";
import {
  OakDragAndDropInstructions,
  OakDraggable,
  OakDroppable,
} from "@/components/molecules";
import { usePrefersReducedMotion } from "@/animation/usePrefersReducedMotion";
import { InternalDndContext } from "@/components/atoms/InternalDndContext/InternalDndContext";
import { InternalClientPortal } from "@/components/atoms/InternalClientPortal";

export const OakQuizMatchItemId = (id: string) => {
  return `oak-quiz-match-item-${id}`;
};

type DraggableId = string;
type DroppableId = string;
type DraggableItem = {
  id: DraggableId;
  label: ReactNode;
  announcement: string;
};
type DroppableItem = {
  id: DroppableId;
  label: ReactNode;
  announcement: string;
};
type Matches = Record<DroppableId, DraggableItem>;

export type OakQuizMatchProps = {
  /**
   * The initial options
   *
   * these are the items that can be dragged into a slot to form a match
   *
   * this cannot be updated on subsequent renders
   */
  initialOptions: DraggableItem[];
  /**
   * The initial slots
   *
   * these are the slots into which an option can be dropped to form a match
   *
   * this cannot be updated on subsequent renders
   */
  initialSlots: DroppableItem[];
  /**
   * Notify the consumer when matches have changed
   */
  onChange?: (matches: Matches) => void;
  /**
   * Highlight the droppable slots
   */
  isHighlighted?: boolean;
};

const ConnectedDraggable = ({
  id,
  label,
  announcement,
  isOver,
}: DraggableItem & { isOver?: boolean }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    data: { id, label, announcement },
  });

  return (
    <OakDraggable
      ref={setNodeRef}
      isDisabled={isOver}
      color="text-inverted"
      background="bg-btn-primary"
      iconColor="icon-main"
      {...attributes}
      {...listeners}
      role="option"
      aria-describedby={undefined}
      aria-roledescription="draggable item"
      aria-pressed={undefined}
      aria-selected={!!attributes["aria-pressed"]}
      style={{ opacity: isDragging ? 0 : 1 }}
      id={OakQuizMatchItemId(id)}
    >
      {label}
    </OakDraggable>
  );
};

const ConnectedDroppableHoldingPen = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "holding-pen",
    data: { label: "holding pen", announcement: "holding pen" },
  });

  return (
    <InternalDroppableHoldingPen
      ref={setNodeRef}
      isOver={isOver}
      aria-label="Available items"
      data-testid="holding-pen"
      role="listbox"
    >
      {children}
    </InternalDroppableHoldingPen>
  );
};

const ConnectedDroppable = ({
  id,
  label,
  announcement,
  match,
  isHighlighted,
}: DroppableItem & { match?: DraggableItem; isHighlighted?: boolean }) => {
  const { setNodeRef, isOver, active } = useDroppable({
    id,
    data: { id, label, announcement },
  });

  return (
    <OakDroppable
      isOver={isOver}
      isDisabled={!active}
      ref={setNodeRef}
      id={`droppable-${id}`}
      labelSlot={label}
      data-testid="slot"
      isHighlighted={isHighlighted}
    >
      {match && <ConnectedDraggable {...match} isOver={isOver} />}
    </OakDroppable>
  );
};

/**
 * A list of draggable items with matching slots to drop them into.
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
export const OakQuizMatch = ({
  initialOptions,
  initialSlots,
  isHighlighted,
  onChange,
}: OakQuizMatchProps) => {
  const [matches, setMatches] = useState<Matches>({});
  const [shuffledDraggables, setShuffledDraggables] =
    useState<DraggableItem[]>(initialOptions);
  const [activeId, setActiveId] = useState<DraggableId | null>(null);
  const activeDraggable = initialOptions.find((item) => item.id === activeId);
  const prefersReducedMotion = usePrefersReducedMotion();
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
      scrollBehavior: prefersReducedMotion ? "instant" : "smooth",
    }),
  );

  useEffect(() => {
    const matchedDraggableIds = Object.values(matches).map((item) => item.id);

    const unmatchedDraggables = initialOptions.filter(
      (draggable) => !matchedDraggableIds.includes(draggable.id),
    );
    setShuffledDraggables(unmatchedDraggables.sort(() => Math.random() - 0.5));
  }, [initialOptions, matches]);

  return (
    <>
      <OakDragAndDropInstructions $mb="space-between-m2" />
      <InternalDndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        accessibility={{ announcements }}
      >
        <ConnectedDroppableHoldingPen>
          {shuffledDraggables.map((item) => (
            <ConnectedDraggable key={item.id} {...item} />
          ))}
        </ConnectedDroppableHoldingPen>
        <OakFlex
          $gap="space-between-s"
          $flexDirection="column"
          aria-label="Matched items"
          role="listbox"
        >
          {initialSlots.map((droppable) => (
            <ConnectedDroppable
              key={droppable.id}
              {...droppable}
              isHighlighted={isHighlighted}
              match={matches[droppable.id]}
            />
          ))}
        </OakFlex>
        <InternalClientPortal show={true}>
          <DragOverlay dropAnimation={prefersReducedMotion ? null : undefined}>
            {activeDraggable && (
              <OakDraggable isDragging>{activeDraggable.label}</OakDraggable>
            )}
          </DragOverlay>
        </InternalClientPortal>
      </InternalDndContext>
    </>
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActiveId(active.id.toString());
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over) {
      setMatches((matches) => {
        // Remove the draggable from its current slot
        const entries = Object.entries(matches).filter(
          ([, draggable]) => draggable?.id !== active.id,
        );
        const newMatches = Object.fromEntries(entries);

        if (over.id !== "holding-pen") {
          // We've dropped the draggable into a slot so add it to the new slot
          newMatches[over.id] = active.data.current as DraggableItem;
        }

        onChange?.(newMatches);

        return newMatches;
      });
    }

    setActiveId(null);
  }
};

export const announcements: Announcements = {
  onDragStart() {
    return undefined;
  },
  onDragOver({ active, over }) {
    if (over?.data.current && active.data?.current) {
      return `Item ${active.data.current.announcement} is over ${over.data.current.announcement}`;
    }
  },
  onDragEnd({ active, over }) {
    if (over?.data.current && active.data?.current) {
      return `Item ${active.data.current.announcement} was dropped onto ${over.data.current.announcement}`;
    }
  },
  onDragCancel({ active }) {
    if (active.data?.current) {
      return `Dragging was cancelled. Item ${active.data.current.announcement} was dropped.`;
    }
  },
};
