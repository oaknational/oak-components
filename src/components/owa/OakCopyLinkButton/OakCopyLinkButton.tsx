import React, { useState } from "react";

import { OakSmallSecondaryButton } from "@/components/buttons/OakSmallSecondaryButton";
import { OakBox } from "@/components/layout-and-structure/OakBox";

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
  const copyLinkMessage = "Copy link";
  const linkCopiedMessage = "Link copied";

  const [label, setLabel] = useState(copyLinkMessage);
  const [active, setActive] = useState(true);
  const [announce, setAnnounce] = useState("");

  const copyLink = () => {
    if (navigator.clipboard) {
      const urlToCopy = href || window.location.href;
      navigator.clipboard.writeText(urlToCopy);

      setLabel(linkCopiedMessage);
      setAnnounce(linkCopiedMessage);
      setActive(false);

      const resetCopyLinkButtonTimer = 4000;

      setTimeout(() => {
        setAnnounce(""); // used for aria-live announcement
        setActive(true);
        setLabel(copyLinkMessage);
      }, resetCopyLinkButtonTimer);
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
