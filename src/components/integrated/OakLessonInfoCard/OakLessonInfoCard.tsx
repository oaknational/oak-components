import React from "react";

import {
  OakFlex,
  OakHeading,
  OakHeadingTag,
  OakIcon,
  OakIconName,
} from "@/components/base";
import { OakHandDrawnCard, OakPrimaryInvertedButton } from "@/components/ui";

export type LessonInfoCardProps = {
  iconName: OakIconName;
  infoCardTitle: string;
  infoCardDescription: string | string[];
  tag: OakHeadingTag;
  downloadLabel?: string;
  onDownloadClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
};

export const OakLessonInfoCard = (props: LessonInfoCardProps) => {
  const {
    iconName,
    infoCardTitle,
    infoCardDescription,
    tag,
    downloadLabel,
    onDownloadClick,
    ...rest
  } = props;

  return (
    <OakFlex
      $borderRadius={"border-radius-l"}
      $pa={"inner-padding-xl"}
      $flexDirection={"column"}
      $gap={"space-between-s"}
      $background={"white"}
      {...rest}
    >
      <OakFlex $alignItems={"center"} $gap={"space-between-ssx"}>
        <OakIcon iconName={iconName} />
        <OakHeading $font={"heading-6"} tag={tag}>
          {infoCardTitle}
        </OakHeading>
      </OakFlex>
      <OakFlex
        $font={"text-primary"}
        $flexDirection={"column"}
        $gap={"space-between-m"}
      >
        {Array.isArray(infoCardDescription) ? (
          infoCardDescription.map((description) => {
            return <OakFlex>{description}</OakFlex>;
          })
        ) : (
          <OakFlex>{infoCardDescription}</OakFlex>
        )}
        {onDownloadClick && downloadLabel && (
          <OakFlex $justifyContent={"flex-end"}>
            <OakPrimaryInvertedButton
              onClick={onDownloadClick}
              iconName="download"
              isTrailingIcon
              $font={"heading-7"}
            >
              {downloadLabel}
            </OakPrimaryInvertedButton>
          </OakFlex>
        )}
      </OakFlex>
    </OakFlex>
  );
};

export const OakStaticMessageCard = (props: LessonInfoCardProps) => {
  const {
    iconName,
    infoCardTitle,
    infoCardDescription,
    tag,
    downloadLabel,
    onDownloadClick,
    ...rest
  } = props;

  return (
    <OakHandDrawnCard {...rest} fill={"bg-decorative2-subdued"}>
      <OakFlex
        $pa={"inner-padding-none"}
        $flexDirection={"column"}
        $gap={"space-between-s"}
      >
        {" "}
        <OakFlex $alignItems={"center"} $gap={"space-between-ssx"}>
          <OakIcon iconName={iconName} />
          <OakHeading $font={"heading-6"} tag={tag}>
            {infoCardTitle}
          </OakHeading>
        </OakFlex>
        <OakFlex
          $font={"text-primary"}
          $flexDirection={"column"}
          $gap={"space-between-m"}
        >
          {Array.isArray(infoCardDescription) ? (
            infoCardDescription.map((description) => {
              return <OakFlex>{description}</OakFlex>;
            })
          ) : (
            <OakFlex>{infoCardDescription}</OakFlex>
          )}
          {onDownloadClick && downloadLabel && (
            <OakFlex $justifyContent={"flex-end"}>
              <OakPrimaryInvertedButton
                onClick={onDownloadClick}
                iconName="download"
                isTrailingIcon
                $font={"heading-7"}
              >
                {downloadLabel}
              </OakPrimaryInvertedButton>
            </OakFlex>
          )}
        </OakFlex>
      </OakFlex>
    </OakHandDrawnCard>
  );
};
