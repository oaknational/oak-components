import React, { MutableRefObject } from "react";
import styled from "styled-components";

import { OakUnitListOptionalityItemCard } from "@/components/organisms/teacher/OakUnitListOptionalityItemCard";
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

const StyledYearAndOptionFlex = styled(OakFlex)`
  @media (min-width: 356px) {
    min-width: 260px;
  }
`;

const UnitYearAndOptionCount = ({
  yearTitle,
  optionalityUnitsLength,
  unavailable,
}: {
  yearTitle: string | null | undefined;
  optionalityUnitsLength: number;
  unavailable: boolean | undefined;
}) => (
  <StyledYearAndOptionFlex
    $width={["100%", "all-spacing-19"]}
    $justifyContent={["space-between"]}
    $alignItems={"center"}
  >
    <OakSpan
      $color={unavailable ? "text-disabled" : "text-primary"}
      $font={"heading-light-7"}
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
    >
      <OakLabel
        $font={"heading-light-7"}
        $color={unavailable ? "text-disabled" : "text-primary"}
      >{`${optionalityUnitsLength} unit options`}</OakLabel>
    </OakBox>
  </StyledYearAndOptionFlex>
);

const UnitIndex = ({
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
    <OakFlex
      $maxWidth={"all-spacing-21"}
      $mr={["space-between-none", "space-between-s"]}
    >
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
  onSave?: (unitSlug: string) => void;
  getIsSaved?: (unitSlug: string) => boolean;
  optionalityUnits: {
    title: string;
    slug: string;
    href: string;
    lessonCount: number;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
    onSave,
    getIsSaved,
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
        <UnitIndex unavailable={unavailable}>{index}</UnitIndex>

        <OakFlex $alignItems={"center"} $ma={"space-between-xs"}>
          <StyledUnitHeading unavailable={unavailable}>
            {nullTitle}
          </StyledUnitHeading>
        </OakFlex>
      </OakFlex>
      <UnitIndex unavailable={unavailable} $display={["none", "flex", "flex"]}>
        {index}
      </UnitIndex>

      <OakBox
        $background={"white"}
        $pa={["inner-padding-m", "inner-padding-l"]}
        $width={"100%"}
      >
        <OakFlex
          $alignItems={"center"}
          $mb={"space-between-s"}
          $display={["none", "flex"]}
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
              <UnitYearAndOptionCount
                yearTitle={props.yearTitle}
                optionalityUnitsLength={optionalityUnits.length}
                unavailable={unavailable}
              />
            </OakFlex>
          </OakFlex>
        </OakFlex>
        <OakFlex
          $alignItems={"center"}
          $justifyContent={"space-between"}
          $mb={"space-between-s"}
          $display={["flex", "none", "none"]}
          $width={"100%"}
        >
          <OakBox $mb={"space-between-s"} $display={["none", "auto", "auto"]}>
            <StyledUnitHeading unavailable={unavailable}>
              {nullTitle}
            </StyledUnitHeading>
          </OakBox>

          <UnitYearAndOptionCount
            yearTitle={props.yearTitle}
            optionalityUnitsLength={optionalityUnits.length}
            unavailable={unavailable}
          />
        </OakFlex>
        <OakGrid $rg={"space-between-xs"} $cg={"space-between-xs"}>
          {optionalityUnits.map((unit, index) => (
            <OakGridArea key={`${unit.title}-${index}`} $colSpan={[12, 6]}>
              <OakUnitListOptionalityItemCard
                {...unit}
                firstItemRef={index === 0 ? firstItemRef : null}
                unavailable={unavailable}
                onSave={onSave ?? undefined}
                isSaved={getIsSaved ? getIsSaved(unit.slug) : undefined}
              />
            </OakGridArea>
          ))}
        </OakGrid>
      </OakBox>
    </OakFlex>
  );
};
