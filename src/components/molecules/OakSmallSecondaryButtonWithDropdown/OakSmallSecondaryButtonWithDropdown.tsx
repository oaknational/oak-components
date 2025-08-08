import React, { useState, useRef, useEffect } from "react";

import { OakBox, OakFlex, OakIcon, OakIconName } from "@/components/atoms";
import {
  OakSmallPrimaryInvertedButton,
  OakSmallPrimaryInvertedButtonProps,
  OakSmallSecondaryButton,
} from "@/components/molecules";

export type OakSmallSecondaryButtonWithDropdownItem =
  OakSmallPrimaryInvertedButtonProps & {
    label: string;
    href?: string;
    onClick?: () => void;
    ariaLabel?: string;
    iconName?: OakIconName;
  };

export type OakSmallSecondaryButtonWithDropdownProps = {
  primaryActionText: string;
  primaryActionIcon?: OakIconName;
  onPrimaryAction?: () => void;
  items: OakSmallSecondaryButtonWithDropdownItem[];
  footer?: React.ReactNode;
  leadingItemIcon?: OakIconName;
  isLoading?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  leadingButtonIcon?: React.ReactNode;
  ariaDescription?: string;
  "data-testid"?: string;
};

/**
 * A secondary button with a dropdown of items.
 */
export const OakSmallSecondaryButtonWithDropdown = ({
  primaryActionText,
  primaryActionIcon = "chevron-down",
  onPrimaryAction,
  items,
  footer,
  leadingItemIcon,
  isLoading = false,
  disabled = false,
  ariaLabel,
  ariaDescription,
  leadingButtonIcon,
  "data-testid": dataTestId,
}: OakSmallSecondaryButtonWithDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get all focusable elements within the dropdown
  const getFocusableElements = () => {
    if (!dropdownRef.current) return [];
    return Array.from(
      dropdownRef.current.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ) as HTMLElement[];
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      const focusableElements = getFocusableElements();
      const currentIndex = focusableElements.indexOf(
        document.activeElement as HTMLElement,
      );

      switch (event.key) {
        case "Escape": {
          event.preventDefault();
          setIsOpen(false);
          break;
        }

        case "ArrowDown": {
          event.preventDefault();
          if (focusableElements.length === 0) return;
          const nextDownIndex =
            currentIndex >= focusableElements.length - 1 ? 0 : currentIndex + 1;
          focusableElements[nextDownIndex]?.focus();
          break;
        }
        case "ArrowUp": {
          event.preventDefault();
          if (focusableElements.length === 0) return;
          const nextUpIndex =
            currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
          focusableElements[nextUpIndex]?.focus();
          break;
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, dataTestId]);

  const handlePrimaryAction = () => {
    setIsOpen(!isOpen);
    onPrimaryAction?.();
  };

  const handleItemClick = (item: OakSmallSecondaryButtonWithDropdownItem) => {
    if (item.onClick) {
      item.onClick();
    }
    // Close dropdown when an item is clicked
    setIsOpen(false);
  };

  return (
    <OakBox
      as="section"
      aria-label={ariaLabel}
      aria-describedby={
        ariaDescription ? `${dataTestId}-description` : undefined
      }
      data-testid={dataTestId}
      ref={dropdownRef}
      $position="relative"
    >
      <OakFlex $flexDirection="column" $gap="space-between-xs">
        {/* Primary Action Button */}

        <OakFlex $gap="space-between-xs">
          <OakSmallSecondaryButton
            iconName={primaryActionIcon}
            isTrailingIcon
            onClick={handlePrimaryAction}
            isLoading={isLoading}
            disabled={disabled}
            width="max-content"
            aria-expanded={isOpen}
            aria-haspopup="menu"
            aria-label={`${primaryActionText}${
              items.length > 0
                ? `, ${items.length} item${
                    items.length === 1 ? "" : "s"
                  } available`
                : ""
            }`}
            data-testid={
              dataTestId ? `${dataTestId}-primary-action` : undefined
            }
          >
            <OakFlex $alignItems={"center"}>
              {leadingButtonIcon && leadingButtonIcon}
              {primaryActionText}
            </OakFlex>
          </OakSmallSecondaryButton>
        </OakFlex>

        {isOpen && (
          <OakBox
            $background="bg-primary"
            $borderRadius="border-radius-s"
            $ba="border-solid-m"
            $borderColor="border-primary"
            $pa="inner-padding-xs"
            $position="absolute"
            $top="all-spacing-8"
            $zIndex="modal-close-button"
            role="menu"
            aria-label={`${items.length} item${
              items.length === 1 ? "" : "s"
            }. Use arrow keys to navigate, Tab to cycle through items, Escape to close.`}
            data-testid={dataTestId ? `${dataTestId}-dropdown` : undefined}
          >
            <OakFlex
              $flexDirection="column"
              $mb={footer ? "space-between-xs" : "space-between-none"}
              $gap={"space-between-ssx"}
            >
              {items.map((item, index) => (
                <OakSmallPrimaryInvertedButton
                  key={index}
                  element={item.href ? "a" : "button"}
                  href={item.href}
                  onClick={item.href ? undefined : () => handleItemClick(item)}
                  iconName={item.iconName || "external"}
                  isTrailingIcon
                  role="menuitem"
                  aria-label={item.ariaLabel || `${item.label}`}
                  data-testid={
                    dataTestId ? `${dataTestId}-item-${index}` : undefined
                  }
                  {...(item.href && {
                    target: "_blank",
                  })}
                >
                  <OakFlex $justifyContent={"center"} $alignItems={"center"}>
                    {leadingItemIcon && (
                      <OakIcon
                        $height={"all-spacing-6"}
                        iconName={leadingItemIcon}
                      />
                    )}
                    {item.label}
                  </OakFlex>
                </OakSmallPrimaryInvertedButton>
              ))}
            </OakFlex>

            {/* Footer Section */}
            {footer && (
              <>
                {/* Divider Line */}
                <OakBox
                  $height="all-spacing-0"
                  $width="100%"
                  $bt="border-solid-s"
                  $borderColor="border-neutral-lighter"
                  $mb="space-between-ssx"
                  role="separator"
                  aria-hidden="true"
                />

                {footer}
              </>
            )}
          </OakBox>
        )}
      </OakFlex>
    </OakBox>
  );
};
