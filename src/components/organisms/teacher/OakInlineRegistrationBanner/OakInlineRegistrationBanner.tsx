import React, { useState } from "react";

import { SurfingStudentSVG } from "./SurfingStudentSVG";

import { OakFlex } from "@/components/atoms/OakFlex";
import { OakBox, OakP } from "@/components/atoms";
import {
  OakFieldError,
  OakJauntyAngleLabel,
  OakPrimaryButton,
  OakTextInput,
} from "@/components/molecules";
import { ColorStyleProps } from "@/styles/utils/colorStyle";
import { BorderStyleProps } from "@/styles/utils/borderStyle";

export type OakInlineRegistrationBannerProps = {
  onSubmit: (email: string) => Promise<string | undefined>;
  headerText: React.ReactNode;
  bodyText: React.ReactNode;
} & ColorStyleProps &
  BorderStyleProps;

export const OakInlineRegistrationBanner = (
  props: OakInlineRegistrationBannerProps,
) => {
  const { onSubmit, bodyText, headerText, ...style } = props;
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <OakBox
      $background="bg-decorative1-main"
      $pa="inner-padding-xl2"
      $mb={["space-between-m", "space-between-s"]}
      $borderRadius="border-radius-m"
      {...style}
    >
      <OakFlex $gap="space-between-m" $alignItems="center">
        <OakFlex $flexDirection="column" $gap="space-between-m">
          <OakFlex $alignItems="center" $gap="space-between-m">
            {headerText}
            <SurfingStudentSVG $display={["block", "none", "none"]} />
          </OakFlex>
          {bodyText}
          <OakBox
            as="form"
            noValidate
            onSubmit={async (e) => {
              e.preventDefault();
              setSuccess(false);
              setFormError(false);
              if (email.length === 0) {
                setFormError(true);
                return;
              }
              try {
                await onSubmit(email);
                setSuccess(true);
                setEmail("");
              } catch (e) {
                setFormError(true);
              }
            }}
          >
            <OakFieldError>
              {formError && "Please enter a valid email address"}
            </OakFieldError>

            <OakFlex
              $gap="space-between-s"
              $position="relative"
              $width="100%"
              $mt="space-between-m"
            >
              <OakBox $position="relative" $width="100%">
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
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email address"
                  $maxHeight="all-spacing-10"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  wrapperWidth="100%"
                />
              </OakBox>
              <OakPrimaryButton innerWidth="max-content">
                Sign up
              </OakPrimaryButton>
            </OakFlex>
            {success && (
              <OakP $font="body-1-bold" $mt="space-between-s">
                Thank you for signing up
              </OakP>
            )}
          </OakBox>
        </OakFlex>
        <SurfingStudentSVG $display={["none", "block", "block"]} />
      </OakFlex>
    </OakBox>
  );
};
