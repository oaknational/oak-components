import React, { useState } from "react";

import { OakSmallSecondaryButton } from "@/components/molecules";
import { OakBox } from "@/components/atoms";

type OakSignLanguageButtonProps = {
  /**
   * On click function
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
export const OakSignLanguageButton = ({
  onClick,
}: OakSignLanguageButtonProps) => {
  const [showSignLanguage, setShowSignLanguage] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShowSignLanguage(!showSignLanguage);
    onClick(event);
  };

  return (
    <OakBox
      $mr={"space-between-s"}
      $mb={["space-between-s", "space-between-m2"]}
    >
      <OakBox $display={["none", "block"]}>
        <OakSmallSecondaryButton
          iconName="sign-language"
          isTrailingIcon
          onClick={handleClick}
        >
          {showSignLanguage ? "Hide sign language" : "Show sign language"}
        </OakSmallSecondaryButton>
      </OakBox>
      <OakBox $display={["block", "none"]}>
        <OakSmallSecondaryButton onClick={handleClick}>
          {showSignLanguage ? "Hide sign language" : "Show sign language"}
        </OakSmallSecondaryButton>
      </OakBox>
    </OakBox>
  );
};
