import React, { MutableRefObject } from "react";

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
  unavailable,
}: {
  yearTitle: string | null | undefined;
  optionalityUnitsLength: number;
  unavailable: boolean | undefined;
}) => (
  <>
    <OakSpan
      $color={unavailable ? "text-disabled" : "text-primary"}
      $mr={[null, "space-between-xxxl"]}
    >
      {yearTitle}
    </OakSpan>

    <OakBox
      $ph={"inner-padding-xs"}
      $pv={"inner-padding-ssx"}
      $ba={"border-solid-s"}
      $borderColor={
        unavailable ? "border-neutral-lighter" : "bg-decorative4-main"
      }
      $color={unavailable ? "text-disabled" : "text-primary"}
      $background={
        unavailable ? "bg-neutral-stronger" : "bg-decorative4-very-subdued"
      }
      $borderRadius={"border-radius-s"}
      $ml={[null, "space-between-s"]}
    >
      <OakLabel
        $font={"heading-light-7"}
        $color={unavailable ? "text-disabled" : "text-primary"}
      >{`${optionalityUnitsLength} unit options`}</OakLabel>
    </OakBox>
  </>
);

const StyledIndex = ({
  children,
  unavailable,
  ...rest
}: {
  children: React.ReactNode;
  unavailable: boolean | undefined;
} & FlexStyleProps) => (
  <OakFlex
    $btlr={"border-radius-s"}
    $bblr={"border-radius-s"}
    $background={unavailable ? "bg-neutral-stronger" : "lavender"}
    $minWidth={"all-spacing-11"}
    $width={["all-spacing-11", "all-spacing-11", "auto"]}
    $height={["all-spacing-11", "auto", "auto"]}
    $justifyContent={"center"}
    $alignItems={"center"}
    {...rest}
  >
    <OakSpan
      $font={"heading-5"}
      $color={unavailable ? "text-disabled" : "text-primary"}
    >
      {children}
    </OakSpan>
  </OakFlex>
);

const StyledUnitHeading = ({
  children,
  unavailable,
}: {
  children: React.ReactNode;
  unavailable: boolean | undefined;
}) => {
  return (
    <OakFlex $maxWidth={"all-spacing-21"}>
      <OakHeading
        $color={unavailable ? "text-disabled" : "text-primary"}
        $font={"heading-7"}
        tag="h3"
      >
        {children}
      </OakHeading>
    </OakFlex>
  );
};

export type OakUnitListOptionalityItemProps = {
  unavailable?: boolean;
  index: number;
  nullTitle: string;
  yearTitle?: string | null;
  firstItemRef: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
  optionalityUnits: {
    title: string;
    href: string;
    lessonCount: number;
    firstItemRef?:
      | MutableRefObject<HTMLAnchorElement | null>
      | null
      | undefined;
  }[];
};

/**
 *
 * OakUnitsListOptionalityItem component used as links for unit cards with optionality
 */
export const OakUnitListOptionalityItem = (
  props: OakUnitListOptionalityItemProps,
) => {
  const {
    unavailable,
    index,
    optionalityUnits,
    nullTitle,
    firstItemRef,
    ...rest
  } = props;

  return (
    <OakFlex
      $flexDirection={["column", "row", "row"]}
      $width={"100%"}
      as={"li"}
      {...rest}
    >
      <OakFlex $display={["flex", "none"]} $background={"white"}>
        <StyledIndex unavailable={unavailable}>{index}</StyledIndex>

        <OakFlex $alignItems={"center"} $ma={"space-between-xs"}>
          <StyledUnitHeading unavailable={unavailable}>
            {nullTitle}
          </StyledUnitHeading>
        </OakFlex>
      </OakFlex>
      <StyledIndex
        unavailable={unavailable}
        $display={["none", "flex", "flex"]}
      >
        {index}
      </StyledIndex>

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
            <StyledUnitHeading unavailable={unavailable}>
              {nullTitle}
            </StyledUnitHeading>
            <OakFlex $alignItems={"center"}>
              <StyledYearAndOptionCount
                yearTitle={props.yearTitle}
                optionalityUnitsLength={optionalityUnits.length}
                unavailable={unavailable}
              />
            </OakFlex>
          </OakFlex>
        </OakFlex>
        <OakBox $mb={"space-between-s"} $display={["none", "flex", "none"]}>
          <StyledUnitHeading unavailable={unavailable}>
            {nullTitle}
          </StyledUnitHeading>
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
            unavailable={unavailable}
          />
        </OakFlex>
        <OakGrid $rg={"space-between-xs"} $cg={"space-between-xs"} role="list">
          {optionalityUnits.map((unit, index) => (
            <OakGridArea key={`${unit.title}-${index}`} $colSpan={[12, 6]}>
              <OakUnitListOptionalityItemCard
                {...unit}
                disabled={unavailable}
                ref={index === 0 ? firstItemRef : null}
              />
            </OakGridArea>
          ))}
        </OakGrid>
      </OakBox>
    </OakFlex>
  );
};
