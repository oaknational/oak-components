import React from "react";

import {
  OakModalCenter,
  OakModalCenterBody,
  OakPrimaryButton,
  OakPrimaryInvertedButton,
} from "@/components/molecules";
import { OakFlex, OakHeading } from "@/components/atoms";

export type OakPupilContentGuidance = {
  contentguidanceLabel: string | null;
  contentguidanceDescription: string | null;
  contentguidanceArea: string | null;
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
   * Title of the modal
   */
  title?: string;
  /**
   * An array of objects containing the content guidance label, description and area
   */
  contentGuidance?: OakPupilContentGuidance[] | null;
  /**
   * The level of supervision required for the content
   */
  supervisionLevel?: string | null;
  /**
   * The text to be displayed on the accept button
   */
  acceptText?: string;
  /**
   * The text to be displayed on the decline button
   */
  declineText?: string;
};

export const removedGuidanceDuplicates = (
  contentGuidance: OakPupilContentGuidance[] | null = [],
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
 * - **acceptText** \-              The text to be displayed on the accept button
 * - **declineText** \-             The text to be displayed on the decline button
 */
export const OakPupilJourneyContentGuidance = ({
  isOpen,
  onAccept,
  onDecline,
  title,
  contentGuidance,
  supervisionLevel = null,
  acceptText = "I understand, continue",
  declineText = "Take me back to lessons",
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
            {acceptText}
          </OakPrimaryButton>
          <OakPrimaryInvertedButton
            $font="heading-7"
            iconName="arrow-left"
            onClick={onDecline}
            data-testid="declineButton"
          >
            {declineText}
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
        title={title ?? "Content guidance"}
      >
        <OakFlex $flexDirection="column" $rowGap="space-between-m2">
          {removedGuidanceDuplicates(contentGuidance).map(
            (guidance, index: number) => (
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
