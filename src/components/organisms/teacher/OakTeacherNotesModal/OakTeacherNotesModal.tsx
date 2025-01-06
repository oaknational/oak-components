import React from "react";

import {
  OakModalCenter,
  OakPrimaryInvertedButton,
  OakSmallPrimaryButton,
  OakSmallSecondaryButton,
} from "@/components/molecules";
import { OakFlex, OakHeading, OakIcon, OakP } from "@/components/atoms";

type EditorContainerProps = {
  editorNode: React.ReactNode;
  onBoldClick: () => void;
  onBulletListClick: () => void;
  remainingCharacters: number;
};

const EditorContainer = ({
  editorNode,
  remainingCharacters,
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
        $height={"all-spacing-16"}
        $minHeight={"all-spacing-12"}
        $borderRadius={"border-radius-s"}
        $borderColor={"border-primary"}
        $ba={"border-solid-m"}
        $alignSelf={"stretch"}
      >
        {editorNode}
      </OakFlex>
      <OakFlex
        $alignItems={"center"}
        $justifyContent={"space-between"}
        $alignSelf={"stretch"}
      >
        <OakP $font={"body-3"}>
          You have <b>{remainingCharacters}</b> characters remaining
        </OakP>
        <OakFlex $gap={"space-between-ssx"}>
          <OakSmallSecondaryButton onClick={onBoldClick}>
            Bold
          </OakSmallSecondaryButton>
          <OakSmallSecondaryButton onClick={onBulletListClick}>
            Bullet List
          </OakSmallSecondaryButton>
        </OakFlex>
      </OakFlex>
    </OakFlex>
  );
};

type OakTeacherNotesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onShareClicked: () => void;
  onSaveClicked: () => void;
  noteSaved: boolean;
  noteShared: boolean;
} & EditorContainerProps;

export const OakTeacherNotesModal = ({
  isOpen,
  onClose,
  onShareClicked,
  onSaveClicked,
  noteSaved,
  noteShared,
  ...rest
}: OakTeacherNotesModalProps) => {
  let message = undefined;
  if (noteSaved) {
    message = "Teacher note saved";
  } else if (noteShared) {
    message = "Link copied to clipboard";
  }

  return (
    <OakModalCenter isOpen={isOpen} onClose={onClose}>
      <OakFlex
        $flexDirection="column"
        $alignItems="center"
        $pb="inner-padding-xl"
        $gap="space-between-m"
      >
        <OakHeading tag="h1" $font={"body-3-bold"}>
          You can add a note to the link that will appear when it's opened, and
          share it easily.
        </OakHeading>

        <EditorContainer {...rest} />
        <OakFlex $justifyContent={"space-between"} $alignSelf={"stretch"}>
          <OakFlex
            $flexGrow={2}
            $gap={"space-between-sssx"}
            $alignItems={"center"}
          >
            {message && (
              <>
                <OakIcon
                  iconName={"tick"}
                  $colorFilter={"text-success"}
                  $width={"all-spacing-5"}
                  $height={"all-spacing-5"}
                />
                <OakHeading
                  tag="h2"
                  $font={"body-3-bold"}
                  $color={"text-success"}
                >
                  {message}
                </OakHeading>
              </>
            )}
          </OakFlex>
          <OakFlex $gap="space-between-s">
            <OakPrimaryInvertedButton onClick={onSaveClicked}>
              Save note for later
            </OakPrimaryInvertedButton>
            <OakSmallPrimaryButton
              onClick={onShareClicked}
              iconName="copy"
              isTrailingIcon
            >
              Share link
            </OakSmallPrimaryButton>
          </OakFlex>
        </OakFlex>
      </OakFlex>
    </OakModalCenter>
  );
};
