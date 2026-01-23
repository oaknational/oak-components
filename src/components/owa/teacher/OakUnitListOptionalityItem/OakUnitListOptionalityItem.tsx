import React, { MutableRefObject } from "react";
import styled from "styled-components";

import { OakUnitListOptionalityItemCard } from "@/components/owa/teacher/OakUnitListOptionalityItemCard";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakHeading } from "@/components/typography/OakHeading";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakLabel } from "@/components/form-elements/OakLabel";
import { OakGrid } from "@/components/layout-and-structure/OakGrid";
import { OakGridArea } from "@/components/layout-and-structure/OakGridArea";
import { FlexStyleProps } from "@/styles/utils/flexStyle";
import { BorderStyleProps } from "@/styles/utils/borderStyle";

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
    $width={["100%", "spacing-240"]}
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
      $ph={"spacing-8"}
      $pv={"spacing-4"}
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
} & FlexStyleProps &
  BorderStyleProps) => (
  <OakFlex
    $btlr={"border-radius-s"}
    $bblr={"border-radius-s"}
    $background={unavailable ? "bg-neutral-stronger" : "bg-decorative3-main"}
    $minWidth={["spacing-40", "spacing-64"]}
    $width={["spacing-40", "spacing-64", "auto"]}
    $height={["spacing-40", "auto", "auto"]}
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
    <OakFlex $maxWidth={"spacing-480"} $mr={["spacing-0", "spacing-16"]}>
      <OakHeading
        $color={unavailable ? "text-disabled" : "text-primary"}
        $font={"heading-7"}
        tag="h4"
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
  getIsSaving?: (unitSlug: string) => boolean;
  optionalityUnits: {
    title: string;
    slug: string;
    href: string;
    lessonCount: string;
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
    getIsSaving,
    ...rest
  } = props;

  return (
    <OakFlex
      $flexDirection={["column", "row", "row"]}
      $width={"100%"}
      as={"li"}
      $background="bg-primary"
      $borderRadius="border-radius-m"
      {...rest}
    >
      <OakFlex
        $display={["flex", "none"]}
        $ph="spacing-16"
        $pt="spacing-16"
        $gap="spacing-16"
      >
        <UnitIndex
          unavailable={unavailable}
          $bbrr="border-radius-s"
          $btrr="border-radius-s"
        >
          {index}
        </UnitIndex>

        <StyledUnitHeading unavailable={unavailable}>
          {nullTitle}
        </StyledUnitHeading>
      </OakFlex>
      <UnitIndex unavailable={unavailable} $display={["none", "flex", "flex"]}>
        {index}
      </UnitIndex>
      <OakBox $pa={"spacing-16"} $width={"100%"}>
        <OakFlex
          $alignItems={"center"}
          $mb={"spacing-16"}
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
          $mb={"spacing-16"}
          $display={["flex", "none", "none"]}
          $width={"100%"}
        >
          <OakBox $mb={"spacing-16"} $display={["none", "auto", "auto"]}>
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
        <OakGrid $rg={"spacing-12"} $cg={"spacing-12"}>
          {optionalityUnits.map((unit, index) => (
            <OakGridArea key={`${unit.title}-${index}`} $colSpan={[12, 6]}>
              <OakUnitListOptionalityItemCard
                {...unit}
                firstItemRef={index === 0 ? firstItemRef : null}
                unavailable={unavailable}
                onSave={onSave ?? undefined}
                isSaved={getIsSaved ? getIsSaved(unit.slug) : undefined}
                isSaving={getIsSaving ? getIsSaving(unit.slug) : undefined}
              />
            </OakGridArea>
          ))}
        </OakGrid>
      </OakBox>
    </OakFlex>
  );
};
