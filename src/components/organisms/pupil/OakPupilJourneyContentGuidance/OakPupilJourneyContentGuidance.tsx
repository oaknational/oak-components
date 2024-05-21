import React from "react";

import {
  OakModalCenter,
  OakModalCenterBody,
  OakPrimaryButton,
  OakPrimaryInvertedButton,
} from "@/components/molecules";
import { OakFlex, OakHeading } from "@/components/atoms";

export type OakPupilContentGuidance = {
  contentguidanceLabel: string;
  contentguidanceDescription: string;
  contentguidanceArea: string;
};

export type OakPupilJourneyContentGuidanceProps = {
  /**
   * If true the modal will be open, if false it will be closed
   */
  isOpen: boolean;
  /**
   * Callback function to be called when the pupil accepts the content guidance
   */
  onAccept: () => void;
  /**
   * Callback function to be called when the pupil declines the content guidance
   */
  onDecline: () => void;
  /**
   * An array of objects containing the content guidance label, description and area
   */
  contentGuidance?: OakPupilContentGuidance[] | undefined;
  /**
   * The level of supervision required for the content
   */
  supervisionLevel?: string | null | undefined;
};

export const removedGuidanceDuplicates = (
  contentGuidance: OakPupilContentGuidance[] | undefined = [],
) => {
  return Array.from(
    new Set(
      contentGuidance?.map(
        (guidance: OakPupilContentGuidance) => guidance.contentguidanceLabel,
      ),
    ),
  );
};

/**
 * This component is used to display content guidance to the pupil before they proceed to the lesson
 *
 * ##Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onAccept** \-                Callback function to be called when the pupil accepts the content guidance
 * - **onDecline** \-               Callback function to be called when the pupil declines the content guidance
 * - **contentGuidance** \-         An array of objects containing the content guidance label, description and area
 * - **supervisionLevel** \-        The level of supervision required for the content
 */
export const OakPupilJourneyContentGuidance = ({
  isOpen,
  onAccept,
  onDecline,
  contentGuidance,
  supervisionLevel = null,
}: OakPupilJourneyContentGuidanceProps) => {
  return (
    <OakModalCenter
      isOpen={isOpen}
      modalFlexProps={{ "aria-label": "Content guidance modal" }}
      footerSlot={
        <OakFlex
          $alignItems="center"
          $flexDirection="column"
          $justifyContent="center"
          $pv="inner-padding-xl"
          $rowGap="space-between-m"
        >
          <OakPrimaryButton
            $font="heading-7"
            onClick={onAccept}
            data-testid="acceptButton"
          >
            I understand, continue
          </OakPrimaryButton>
          <OakPrimaryInvertedButton
            $font="heading-7"
            iconName="arrow-left"
            onClick={onDecline}
            data-testid="declineButton"
          >
            Take me home
          </OakPrimaryInvertedButton>
        </OakFlex>
      }
      hideCloseButton
    >
      <OakModalCenterBody
        iconName="warning"
        iconOverride={{
          $colorFilter: "amber",
        }}
        title="Content guidance"
      >
        <OakFlex $flexDirection="column" $rowGap="space-between-m2">
          {removedGuidanceDuplicates(contentGuidance).map(
            (guidance: string, index: number) => (
              <OakHeading
                key={index}
                $font={[
                  "heading-light-7",
                  "heading-light-7",
                  "heading-light-6",
                ]}
                $textAlign="center"
                tag="h2"
              >
                {guidance}
              </OakHeading>
            ),
          )}
          {supervisionLevel && (
            <OakHeading
              $font={["heading-light-7", "heading-light-7", "heading-light-6"]}
              $textAlign="center"
              tag="h2"
            >
              {supervisionLevel}
            </OakHeading>
          )}
        </OakFlex>
      </OakModalCenterBody>
    </OakModalCenter>
  );
};
