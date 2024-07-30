import React, {
  ComponentPropsWithoutRef,
  ElementType,
  MutableRefObject,
} from "react";

import { OakUnitListOptionalityItemCard } from "../OakUnitListOptionalityItemCard";

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
  disabledOrUnavailable,
}: {
  yearTitle: string | null | undefined;
  optionalityUnitsLength: number;
  disabledOrUnavailable: boolean | undefined;
}) => (
  <>
    <OakSpan
      $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
      $mr={[null, "space-between-xxxl"]}
    >
      {yearTitle}
    </OakSpan>

    <OakBox
      $ph={"inner-padding-xs"}
      $pv={"inner-padding-ssx"}
      $ba={"border-solid-s"}
      $borderColor={
        disabledOrUnavailable ? "border-neutral-lighter" : "bg-decorative4-main"
      }
      $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
      $background={
        disabledOrUnavailable
          ? "bg-neutral-stronger"
          : "bg-decorative4-very-subdued"
      }
      $borderRadius={"border-radius-s"}
      $ml={[null, "space-between-s"]}
    >
      <OakLabel
        $font={"heading-light-7"}
        $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
      >{`${optionalityUnitsLength} unit options`}</OakLabel>
    </OakBox>
  </>
);

const StyledIndex = ({
  index,
  disabledOrUnavailable,
  ...rest
}: {
  index: number;
  disabledOrUnavailable: boolean | undefined;
} & FlexStyleProps) => (
  <OakFlex
    $btlr={"border-radius-s"}
    $bblr={"border-radius-s"}
    $background={disabledOrUnavailable ? "bg-neutral-stronger" : "lavender"}
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

const StyledUnitHeading = ({
  nullTitle,
  disabledOrUnavailable,
}: {
  nullTitle: string | undefined;
  disabledOrUnavailable: boolean | undefined;
}) => {
  if (nullTitle === undefined) {
    return null;
  }
  return (
    <OakFlex $maxWidth={"all-spacing-21"}>
      <OakHeading
        $color={disabledOrUnavailable ? "text-disabled" : "text-primary"}
        $font={"heading-7"}
        tag="h3"
      >
        {nullTitle}
      </OakHeading>
    </OakFlex>
  );
};

export type OakUnitListOptionalityItemProps<C extends ElementType> = {
  as?: C;
  disabled?: boolean;
  unavailable?: boolean;
  index: number;
  nullTitle: string | undefined;
  yearTitle?: string | null;

  optionalityUnits: {
    title: string;
    href: string;

    lessonCount: number;
    firstItemRef?:
      | MutableRefObject<HTMLAnchorElement | null>
      | null
      | undefined;
  }[];
} & ComponentPropsWithoutRef<C>;

/**
 *
 * OakUnitsListOptionalityItem component used as links for unit cards with optionality
 */
export const OakUnitListOptionalityItem = <C extends ElementType>(
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
        />

        <OakFlex $alignItems={"center"} $ma={"space-between-xs"}>
          <StyledUnitHeading
            nullTitle={nullTitle}
            disabledOrUnavailable={disabledOrUnavailable}
          />
        </OakFlex>
      </OakFlex>
      <StyledIndex
        index={index}
        disabledOrUnavailable={disabledOrUnavailable}
        $display={["none", "flex", "flex"]}
      />

      <OakBox
        $background={"white"}
        $pa={["inner-padding-m", "inner-padding-l"]}
        $width={"100%"}
      >
        <OakFlex
          $alignItems={"center"}
          $mb={"space-between-s"}
          $display={["none", "none", "flex"]}
        >
          <OakFlex
            $flexGrow={1}
            $alignItems={"center"}
            $justifyContent={"space-between"}
          >
            <StyledUnitHeading
              nullTitle={nullTitle}
              disabledOrUnavailable={disabledOrUnavailable}
            />
            <OakFlex $alignItems={"center"}>
              <StyledYearAndOptionCount
                yearTitle={props.yearTitle}
                optionalityUnitsLength={optionalityUnits.length}
                disabledOrUnavailable={disabledOrUnavailable}
              />
            </OakFlex>
          </OakFlex>
        </OakFlex>
        <OakBox $mb={"space-between-s"} $display={["none", "flex", "none"]}>
          <StyledUnitHeading
            nullTitle={nullTitle}
            disabledOrUnavailable={disabledOrUnavailable}
          />
        </OakBox>
        <OakFlex
          $display={["flex", "flex", "none"]}
          $mb={"space-between-s"}
          $justifyContent={"space-between"}
          $alignItems={"center"}
        >
          <StyledYearAndOptionCount
            yearTitle={props.yearTitle}
            optionalityUnitsLength={optionalityUnits.length}
            disabledOrUnavailable={disabledOrUnavailable}
          />
        </OakFlex>
        <OakGrid $gridGap={"space-between-xs"} role="list">
          {optionalityUnits.map((unit, index) => (
            <OakGridArea key={`${unit.title}-${index}`} $colSpan={[12, 6]}>
              <OakUnitListOptionalityItemCard
                key={unit.title}
                {...unit}
                disabled={disabledOrUnavailable}
                ref={index === 1 ? firstItemRef : null}
              />
            </OakGridArea>
          ))}
        </OakGrid>
      </OakBox>
    </OakFlex>
  );
};
