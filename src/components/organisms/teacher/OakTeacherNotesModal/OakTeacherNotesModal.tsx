import React from "react";

import {
  OakLink,
  OakModalCenter,
  OakPrimaryButton,
  OakSecondaryButton,
} from "@/components/molecules";
import { OakFlex, OakHeading, OakP } from "@/components/atoms";

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
        $pa={"inner-padding-l"}
        $background={"bg-primary"}
        $height={"all-spacing-18"}
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
        <OakP>
          You have <b>{remainingCharacters}</b> characters remaining
        </OakP>
        <OakFlex $gap={"space-between-ssx"}>
          <OakSecondaryButton onClick={onBoldClick}>Bold</OakSecondaryButton>
          <OakSecondaryButton onClick={onBulletListClick}>
            Bullet List
          </OakSecondaryButton>
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
  return (
    <OakModalCenter isOpen={isOpen} onClose={onClose}>
      <OakFlex
        $flexDirection="column"
        $alignItems="center"
        $pb="inner-padding-xl5"
        $gap="space-between-m2"
      >
        <OakFlex
          $flexDirection={"column"}
          $gap="space-between-s"
          $alignItems={"center"}
        >
          <OakHeading tag="h1" $font={"heading-5"}>
            Add note about the lesson and share
          </OakHeading>
          <OakHeading tag="h2" $font={"body-2"}>
            You can add a note that will be displayed when the copied link is
            opened.
          </OakHeading>
        </OakFlex>
        <EditorContainer {...rest} />
        <OakFlex
          $flexDirection={"column"}
          $gap="space-between-m"
          $alignItems={"center"}
        >
          <OakPrimaryButton onClick={onShareClicked}>
            Share link
          </OakPrimaryButton>
          {noteShared && "Link copied to clipboard"}
          <OakLink onClick={onSaveClicked} element="button">
            Save note for later
          </OakLink>
          {noteSaved && "Teacher note saved"}
        </OakFlex>
      </OakFlex>
    </OakModalCenter>
  );
};
