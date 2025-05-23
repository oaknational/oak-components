import React from "react";

import {
  OakInlineBanner,
  OakLink,
  OakModalCenter,
  OakSmallPrimaryButton,
} from "@/components/molecules";
import {
  OakFlex,
  OakGrid,
  OakGridArea,
  OakHeading,
  OakIcon,
  OakP,
} from "@/components/atoms";
import { OakSmallSecondaryToggleButton } from "@/components/molecules/OakSmallSecondaryToggleButton";

type EditorContainerProps = {
  editorNode: React.ReactNode;
  onBoldClick: () => void;
  onBulletListClick: () => void;
  isBold: boolean;
  isBulletList: boolean;
  remainingCharacters: number;
};

const EditorContainer = ({
  editorNode,
  remainingCharacters,
  isBold,
  isBulletList,
  onBoldClick,
  onBulletListClick,
}: EditorContainerProps) => {
  return (
    <OakFlex
      $pa={"inner-padding-s"}
      $background={"bg-neutral"}
      $flexDirection={"column"}
      $alignItems={"flex-start"}
      $borderRadius={"border-radius-m2"}
      $alignSelf={"stretch"}
      $gap={"space-between-xs"}
    >
      <OakFlex
        $pa={"inner-padding-s"}
        $background={"bg-primary"}
        $height={"all-spacing-19"}
        $minHeight={"all-spacing-12"}
        $borderRadius={"border-radius-s"}
        $borderColor={"border-primary"}
        $ba={"border-solid-m"}
        $alignSelf={"stretch"}
        $overflowY="scroll"
      >
        {editorNode}
      </OakFlex>
      <OakGrid>
        <OakGridArea $colSpan={[5, 6]}>
          <OakP $font={"body-3"}>
            You have <b>{remainingCharacters}</b> characters remaining
          </OakP>
        </OakGridArea>
        <OakGridArea $colSpan={[7, 6]}>
          <OakFlex $gap={"space-between-ssx"} $justifyContent={"flex-end"}>
            <OakSmallSecondaryToggleButton
              onClick={onBoldClick}
              toggleOn={isBold}
            >
              Bold
            </OakSmallSecondaryToggleButton>
            <OakSmallSecondaryToggleButton
              onClick={onBulletListClick}
              toggleOn={isBulletList}
            >
              Bullet List
            </OakSmallSecondaryToggleButton>
          </OakFlex>
        </OakGridArea>
      </OakGrid>
    </OakFlex>
  );
};

export type OakTeacherNotesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onShareClicked: () => void;
  progressSaved: boolean;
  noteShared: boolean;
  error?: boolean;
  termsAndConditionsHref: string;
  shareLinkDisabled?: boolean;
  footer?: React.ReactNode;
} & EditorContainerProps;

export const OakTeacherNotesModal = ({
  isOpen,
  onClose,
  onShareClicked,
  progressSaved,
  noteShared,
  error,
  termsAndConditionsHref,
  shareLinkDisabled,
  footer,
  ...rest
}: OakTeacherNotesModalProps) => {
  let message = undefined;

  if (error) {
    message = "An error occurred";
  } else if (progressSaved) {
    message = "Progress saved";
  } else if (noteShared) {
    message = "Link copied to clipboard";
  }

  const messageColor = error ? "text-error" : "text-success";
  const messageIcon = error ? "error" : "tick";

  const messageRender = message && (
    <OakFlex $gap={"space-between-sssx"} $alignItems={"center"}>
      <OakIcon
        iconName={messageIcon}
        $colorFilter={messageColor}
        $width={"all-spacing-5"}
        $height={"all-spacing-5"}
      />
      <OakHeading tag="h2" $font={"body-3-bold"} $color={messageColor}>
        {message}
      </OakHeading>
    </OakFlex>
  );

  return (
    <OakModalCenter
      isOpen={isOpen}
      onClose={onClose}
      modalInnerFlexProps={{
        $ph: ["inner-padding-m", "inner-padding-xl2"],
      }}
      modalFlexProps={{
        "aria-label": "teacher notes dialog",
        "aria-describedby":
          "use this dialog enter and to store teacher notes about a lesson",
      }}
    >
      <OakFlex
        $flexDirection="column"
        $alignItems="center"
        $pb="inner-padding-xl"
        $gap="space-between-m"
      >
        <OakHeading tag="h1" $font={"body-3-bold"}>
          Add a teacher note to the page and share the link with your colleague.
        </OakHeading>

        <EditorContainer {...rest} />
        <OakGrid>
          <OakGridArea $colSpan={[0, 6]} $display={["none", "block"]}>
            {messageRender}
          </OakGridArea>
          <OakGridArea $colSpan={12}>
            <OakFlex
              $gap="space-between-s"
              $width={"100%"}
              $justifyContent={["center", "flex-end"]}
              $alignItems="center"
              $flexDirection={["column", "row"]}
            >
              {footer && (
                <OakFlex $flexGrow={1} $alignSelf="flex-start">
                  {footer}
                </OakFlex>
              )}
              <OakSmallPrimaryButton
                onClick={onShareClicked}
                iconName="copy"
                isTrailingIcon
                disabled={shareLinkDisabled}
              >
                Share link
              </OakSmallPrimaryButton>
            </OakFlex>
          </OakGridArea>
        </OakGrid>
        <OakFlex
          $alignSelf={"stretch"}
          $justifyContent={"center"}
          $display={["flex", "none"]}
        >
          {messageRender}
        </OakFlex>
        <OakInlineBanner
          isOpen={true}
          type="alert"
          message={
            <>
              <OakP $font="heading-light-7">
                Please do not include any personal or sensitive information that
                could be used to identify, locate, or contact an individual,
                either directly or indirectly.
              </OakP>
              <OakP $font="body-2" $mt="space-between-sssx">
                Names, email addresses, or other personal information will be
                redacted from your note to help keep everyone safe. For more
                guidance, see our{" "}
                <OakLink
                  target={"_blank"}
                  href="https://www.thenational.academy/legal/terms-and-conditions"
                  aria-label="Oak's terms and conditions(opens in a new tab)"
                >
                  Terms & conditions
                </OakLink>
                .
              </OakP>
            </>
          }
        />
      </OakFlex>
    </OakModalCenter>
  );
};
