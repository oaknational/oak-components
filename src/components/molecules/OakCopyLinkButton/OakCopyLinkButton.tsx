import React, { useState } from "react";

import { OakSmallSecondaryButton } from "@/components/molecules";
import { OakBox } from "@/components/atoms";

type OakCopyLinkButtonProps = {
  /**
   * Href of the link that should be copied
   */
  href: string;
};

/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
export const OakCopyLinkButton = ({ href }: OakCopyLinkButtonProps) => {
  // const [isLinkCopied, setIsLinkCopied] = useState(false);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setIsLinkCopied(!isLinkCopied);
  //   onClick(event);
  // }

  const [label, setLabel] = useState("Copy link");
  const [active, setActive] = useState(true);
  const [announce, setAnnounce] = useState("");

  const copyLink = () => {
    if (navigator.clipboard) {
      const urlToCopy = href || window.location.href;
      navigator.clipboard.writeText(urlToCopy);

      const copyMessage = "Link copied";
      setLabel(copyMessage);
      setAnnounce(copyMessage);
      setActive(false);

      setTimeout(() => {
        setAnnounce(""); // used for aria-live announcement
        setActive(true);
        setLabel("Copy link");
      }, 1000);
    } else {
      alert("Please update your browser to support this feature");
    }
  };

  return (
    <OakBox
      $mr={"space-between-s"}
      $mb={["space-between-s", "space-between-m2"]}
    >
      <OakBox $display={["none", "block"]}>
        <OakSmallSecondaryButton
          iconName={active ? "copy" : "tick"}
          isTrailingIcon
          onClick={copyLink}
        >
          {label}
        </OakSmallSecondaryButton>
      </OakBox>
      <OakBox $display={["block", "none"]}>
        <OakSmallSecondaryButton onClick={copyLink}>
          {label}
        </OakSmallSecondaryButton>
      </OakBox>
      {/* Live region for aria-live announcements */}
      {announce && (
        <div
          aria-relevant="all"
          aria-live="polite"
          style={{ position: "absolute", left: "-9999px" }}
          data-testid="announce"
        >
          {announce}
        </div>
      )}
    </OakBox>
  );
};
