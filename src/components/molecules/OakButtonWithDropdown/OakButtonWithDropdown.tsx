import React, { useState, useRef, useEffect } from "react";

import { OakSecondaryButtonProps } from "../OakSecondaryButton";

import { OakBox, OakFlex, OakIconName } from "@/components/atoms";
import { ResponsiveValues } from "@/styles/utils/responsiveStyle";
import {
  OakAllSpacingToken,
  OakSpaceBetweenToken,
  OakCombinedSpacingToken,
} from "@/styles/theme/spacing";
import { PolymorphicPropsWithoutRef } from "@/components/polymorphic";

type ButtonComponent = <C extends React.ElementType = "button">({
  element,
  ...rest
}: OakSecondaryButtonProps &
  PolymorphicPropsWithoutRef<C>) => React.JSX.Element;

export type OakButtonWithDropdownProps = {
  primaryActionText: string;
  primaryActionIcon?: OakIconName;
  onPrimaryAction?: () => void;
  children?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  leadingButtonIcon?: React.ReactNode;
  ariaDescription?: string;
  "data-testid"?: string;
  buttonComponent: ButtonComponent;
  dropdownTopSpacing?: ResponsiveValues<
    OakAllSpacingToken | OakSpaceBetweenToken | null | undefined
  >;
  flexWidth?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
};

/**
 * A shared component that provides dropdown functionality for any button type.
 * Accepts the button component as a prop to eliminate code duplication.
 */
export const OakButtonWithDropdown = ({
  primaryActionText,
  primaryActionIcon = "chevron-down",
  onPrimaryAction,
  children,
  isLoading = false,
  disabled = false,
  ariaLabel,
  ariaDescription,
  leadingButtonIcon,
  "data-testid": dataTestId,
  buttonComponent: ButtonComponent,
  dropdownTopSpacing = "all-spacing-10",
  flexWidth,
}: OakButtonWithDropdownProps) => {
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
        <OakFlex $width={flexWidth} $gap="space-between-xs">
          <ButtonComponent
            iconName={primaryActionIcon}
            isTrailingIcon
            onClick={handlePrimaryAction}
            isLoading={isLoading}
            disabled={disabled}
            width="max-content"
            aria-expanded={isOpen}
            aria-haspopup="menu"
            aria-label={primaryActionText}
            data-testid={
              dataTestId ? `${dataTestId}-primary-action` : undefined
            }
          >
            <OakFlex $alignItems={"center"}>
              {leadingButtonIcon}
              {primaryActionText}
            </OakFlex>
          </ButtonComponent>
        </OakFlex>

        {isOpen && (
          <OakBox
            $background="bg-primary"
            $borderRadius="border-radius-s"
            $ba="border-solid-m"
            $borderColor="border-primary"
            $pa="inner-padding-xs"
            $position="absolute"
            $top={dropdownTopSpacing}
            $zIndex="modal-close-button"
            role="menu"
            aria-label="Dropdown menu. Use arrow keys to navigate, Tab to cycle through items, Escape to close."
            data-testid={dataTestId ? `${dataTestId}-dropdown` : undefined}
          >
            {children}
          </OakBox>
        )}
      </OakFlex>
    </OakBox>
  );
};
