import React, { useState } from "react";

import { OakButton } from "@/components/buttons/OakButton";
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
        <OakButton
          variant="secondary"
          size="sm"
          iconName="sign-language"
          isTrailingIcon
          onClick={handleClick}
          data-testid={"sign-language-desktop-button"}
        >
          {showSignLanguage ? "Hide sign language" : "Show sign language"}
        </OakButton>
      </OakBox>
      <OakBox $display={["block", "none"]}>
        <OakButton variant="secondary" size="sm" onClick={handleClick}>
          {showSignLanguage ? "Hide sign language" : "Show sign language"}
        </OakButton>
      </OakBox>
    </>
  );
};
