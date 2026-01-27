import React, { useState } from "react";

import { OakSmallSecondaryButton } from "@/components/buttons/OakSmallSecondaryButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";

type OakSignLanguageButtonProps = {
  /**
   * On click function
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

/**
 * Display a button to toggle sign language
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
    <>
      <OakBox $display={["none", "block"]}>
        <OakSmallSecondaryButton
          iconName="sign-language"
          isTrailingIcon
          onClick={handleClick}
          data-testid={"sign-language-desktop-button"}
        >
          {showSignLanguage ? "Hide sign language" : "Show sign language"}
        </OakSmallSecondaryButton>
      </OakBox>
      <OakBox $display={["block", "none"]}>
        <OakSmallSecondaryButton onClick={handleClick}>
          {showSignLanguage ? "Hide sign language" : "Show sign language"}
        </OakSmallSecondaryButton>
      </OakBox>
    </>
  );
};
