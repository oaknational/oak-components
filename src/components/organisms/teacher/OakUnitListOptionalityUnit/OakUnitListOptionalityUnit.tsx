import React, {
  ComponentPropsWithoutRef,
  ElementType,
  MutableRefObject,
} from "react";

import { OakUnitListItemProps } from "../OakUnitListItem";
import { OakUnitListOptionalityItem } from "../OakUnitListOptionalityItem";

import {
  OakFlex,
  OakBox,
  OakHeading,
  OakSpan,
  OakLabel,
  OakGrid,
  OakGridArea,
} from "@/components/atoms";
import { FlexStyleProps } from "@/styles/utils/flexStyle";

const StyledYearAndOptionCount = ({
  yearTitle,
  optionalityUnitsLength,
}: {
  yearTitle: string | null | undefined;
  optionalityUnitsLength: number;
}) => (
  <>
    <OakSpan $mr={[null, "space-between-xxxl"]}>{yearTitle}</OakSpan>
    <OakBox
      $ph={"inner-padding-xs"}
      $ba={"border-solid-s"}
      $borderColor={"bg-decorative4-main"}
      $background={"bg-decorative4-very-subdued"}
      $borderRadius={"border-radius-s"}
      $ml={[null, "space-between-s"]}
    >
      <OakLabel>{`${optionalityUnitsLength} unit options`}</OakLabel>
    </OakBox>
  </>
);

const StyledIndex = ({
  index,
  disabledOrUnavailable,
  isLegacy,
  ...rest
}: {
  index: number;
  disabledOrUnavailable?: boolean;
  isLegacy: boolean;
} & FlexStyleProps) => (
  <OakFlex
    $btlr={"border-radius-s"}
    $bblr={"border-radius-s"}
    $background={
      disabledOrUnavailable
        ? "bg-neutral-stronger"
        : isLegacy
          ? "lavender50"
          : "lavender"
    }
    $minWidth={"all-spacing-11"}
    $width={["all-spacing-11", "all-spacing-11", "auto"]}
    $height={["all-spacing-11", "auto", "auto"]}
    $justifyContent={"center"}
    $alignItems={"center"}
    {...rest}
  >
    <OakSpan
      $font={"heading-5"}
      $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
    >
      {index}
    </OakSpan>
  </OakFlex>
);

const StyledUnitHeading = ({ nullTitle }: { nullTitle: string }) => (
  <OakBox $maxWidth={"all-spacing-21"}>
    <OakHeading $font={"heading-7"} tag="h3">
      {nullTitle}
    </OakHeading>
  </OakBox>
);

export type OakUnitListOptionalityItemProps<C extends ElementType> = {
  as?: C;
  disabled?: boolean;
  unavailable?: boolean;
  index: number;
  nullTitle: string;
  yearTitle?: string | null;
  isLegacy: boolean;
  firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
  optionalityUnits: OakUnitListItemProps<C>[];
} & ComponentPropsWithoutRef<C>;

/**
 *
 * OakUnitsListOptionalityItem component used as links for unit cards with optionality
 */
export const OakUnitListOptionalityUnit = <C extends ElementType>(
  props: OakUnitListOptionalityItemProps<C>,
) => {
  const {
    as,
    lessonSectionName,
    lessonCount,
    progress,
    disabled,
    href,
    unavailable,
    onClick,
    index,
    isLegacy,
    firstItemRef,
    optionalityUnits,
    nullTitle,
    ...rest
  } = props;

  const disabledOrUnavailable = disabled || unavailable;

  return (
    <OakFlex
      $flexDirection={["column", "row", "row"]}
      $width={"100%"}
      role="listitem"
      {...rest}
    >
      <OakFlex $display={["flex", "none"]} $background={"white"}>
        <StyledIndex
          index={index}
          disabledOrUnavailable={disabledOrUnavailable}
          isLegacy={false}
        />
        <OakFlex $alignItems={"center"} $pl={"inner-padding-l"}>
          <StyledUnitHeading nullTitle={nullTitle} />
        </OakFlex>
      </OakFlex>
      <StyledIndex
        index={index}
        disabledOrUnavailable={disabledOrUnavailable}
        isLegacy={false}
        $display={["none", "flex", "flex"]}
      />

      <OakBox $background={"white"} $pa={"inner-padding-l"} $width={"100%"}>
        <OakFlex
          $alignItems={"center"}
          $mb={"space-between-s"}
          $display={["none", "none", "flex"]}
        >
          <OakFlex $flexGrow={1} $justifyContent={"space-between"}>
            <StyledUnitHeading nullTitle={nullTitle} />
            <OakFlex>
              <StyledYearAndOptionCount
                yearTitle={props.yearTitle}
                optionalityUnitsLength={optionalityUnits.length}
              />
            </OakFlex>
          </OakFlex>
        </OakFlex>
        <OakBox $mb={"space-between-s"} $display={["none", "flex", "none"]}>
          <StyledUnitHeading nullTitle={nullTitle} />
        </OakBox>
        <OakFlex
          $display={["flex", "flex", "none"]}
          $mb={"space-between-s"}
          $justifyContent={"space-between"}
        >
          <StyledYearAndOptionCount
            yearTitle={props.yearTitle}
            optionalityUnitsLength={optionalityUnits.length}
          />
        </OakFlex>
        <OakGrid $gridGap={"space-between-s"} role="list">
          {optionalityUnits.map(
            (unit: OakUnitListItemProps<C>, index: number) => (
              <OakGridArea key={`${unit.title}-${index}`} $colSpan={[12, 6]}>
                <OakUnitListOptionalityItem
                  key={unit.title}
                  {...unit}
                  disabled={disabledOrUnavailable}
                  ref={index === 1 ? firstItemRef : null}
                />
              </OakGridArea>
            ),
          )}
        </OakGrid>
      </OakBox>
    </OakFlex>
  );
};
