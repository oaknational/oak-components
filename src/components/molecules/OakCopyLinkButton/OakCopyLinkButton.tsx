import React, { useState } from "react";

import { OakSmallSecondaryButton } from "@/components/molecules";
import { OakBox } from "@/components/atoms";

type OakCopyLinkButtonProps = {
  /**
   * Href of the link that should be copied
   */
  href?: string;
};

/**
 * Display copy link button
 */
export const OakCopyLinkButton = ({ href }: OakCopyLinkButtonProps) => {
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
      }, 4000);
    } else {
      alert("Please update your browser to support this feature");
    }
  };

  return (
    <>
      <OakBox $display={["none", "block"]}>
        <OakSmallSecondaryButton
          iconName={active ? "copy" : "tick"}
          iconAriaHidden={true}
          isTrailingIcon
          onClick={copyLink}
          data-testid={"copy-link-desktop-button"}
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
    </>
  );
};