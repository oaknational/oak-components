import React, { useState } from "react";

import { SurfingStudentSVG } from "./SurfingStudentSVG";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakBox, OakHeading, OakSpan } from "@/components/atoms";
import {
  OakJauntyAngleLabel,
  OakLink,
  OakPrimaryButton,
  OakTextInput,
} from "@/components/molecules";

export type OakIncompleteUnitsBannerProps = {
  formError: boolean;
  onClick: (email: string) => void;
};

export const OakIncompleteUnitsBanner = (
  props: OakIncompleteUnitsBannerProps,
) => {
  const { formError, onClick } = props;
  const [email, setEmail] = useState("");
  return (
    <OakBox
      $background="bg-decorative1-main"
      $pa="inner-padding-xl2"
      $mb={["space-between-m", "space-between-s"]}
    >
      <OakFlex $gap="space-between-m" $alignItems="center">
        <OakFlex $flexDirection="column" $gap="space-between-m">
          <OakFlex $alignItems="center" $gap="space-between-m">
            <OakHeading
              tag="h2"
              $font={["heading-5", "heading-4", "heading-4"]}
            >
              Full unit on the way!
            </OakHeading>
            <SurfingStudentSVG $display={["block", "none", "none"]} />
          </OakFlex>
          <OakSpan $font="body-1">
            We’re busy creating the final lessons for our new curriculum. Stay
            tuned for updates. You can unsubscribe at any time. Read our{" "}
            <OakLink>privacy policy</OakLink>.
          </OakSpan>
          <OakFlex $gap="space-between-s" $position="relative" $width="100%">
            <OakJauntyAngleLabel
              label="Email"
              $position="absolute"
              $zIndex="in-front"
              $background={formError ? "red" : "bg-decorative5-main"}
              $color={formError ? "white" : "text-primary"}
              $width="max-content"
              $ph="space-between-s"
              $font="heading-7"
              $top="-15px"
              $left="8px"
            />
            <OakTextInput
              placeholder="Enter email address"
              $maxHeight="all-spacing-10"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              wrapperWidth={[
                "all-spacing-18",
                "all-spacing-20",
                "all-spacing-20",
              ]}
            />
            <OakPrimaryButton onClick={() => onClick(email)}>
              Sign up
            </OakPrimaryButton>
          </OakFlex>
        </OakFlex>
        <SurfingStudentSVG $display={["none", "block", "block"]} />
      </OakFlex>
    </OakBox>
  );
};
