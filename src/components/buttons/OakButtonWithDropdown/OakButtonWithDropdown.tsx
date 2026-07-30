import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
  ElementType,
} from "react";

import { OakButtonWithDropdownProvider } from "./OakButtonWithDropdownProvider";

import {
  OakSecondaryButton,
  OakSecondaryButtonProps,
} from "@/components/buttons/OakSecondaryButton";
import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakBox } from "@/components/layout-and-structure/OakBox";
import { OakIconName } from "@/components/images-and-icons/OakIcon";
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

export type OakButtonWithDropdownType = "menu" | "disclosure";

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
  closeOnChange?: boolean;
  /**
   * `menu` — menuitem children with arrow-key navigation (default, used by OWA).
   * `disclosure` — expandable panel for checkbox groups and custom content (e.g. Studio multi-select).
   */
  dropdownType?: OakButtonWithDropdownType;
  dropdownProps?: {
    /** The ARIA role for the dropdown panel. Defaults to "menu" in menu mode. Omitted in disclosure mode. */
    role?: React.AriaRole;
    /** The ARIA label for the dropdown panel. Omitted by default; prefer a visible legend in disclosure mode. */
    "aria-label"?: string;
  };
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
  dropdownTopSpacing = "spacing-56",
  flexWidth,
  closeOnChange,
  dropdownType = "menu",
  dropdownProps,
}: OakButtonWithDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wasOpenRef = useRef(false);
  const shouldRestoreFocusRef = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const generatedPanelId = useId();
  const dropdownPanelId = dataTestId
    ? `${dataTestId}-dropdown`
    : generatedPanelId.replace(/:/g, "");

  const isMenuDropdown = dropdownType === "menu";

  const getTriggerElement = () =>
    dropdownRef.current?.querySelector<HTMLElement>("button[aria-expanded]");

  const closeDropdown = useCallback(
    ({ restoreFocus = false }: { restoreFocus?: boolean } = {}) => {
      shouldRestoreFocusRef.current = restoreFocus;
      setIsOpen(false);
    },
    [],
  );

  // Return focus to the trigger only when close was initiated from inside the panel.
  useEffect(() => {
    if (!isOpen && wasOpenRef.current && shouldRestoreFocusRef.current) {
      const trigger = getTriggerElement();
      if (trigger && document.activeElement !== trigger) {
        // Defer so the closing keypress does not activate the trigger.
        requestAnimationFrame(() => {
          trigger.focus();
        });
      }
    }
    if (!isOpen) {
      shouldRestoreFocusRef.current = false;
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Get all focusable elements within the dropdown
  const getFocusableElements = () => {
    if (!dropdownRef.current) return [];
    return Array.from(
      dropdownRef.current.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ) as HTMLElement[];
  };

  // Handle clicks and keyboard events while the dropdown is open
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeDropdown({ restoreFocus: true });
        return;
      }

      if (!isMenuDropdown) return;

      const focusableElements = getFocusableElements();
      const currentIndex = focusableElements.indexOf(
        document.activeElement as HTMLElement,
      );

      switch (event.key) {
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

        case "Enter":
        case "Return":
        case " ": {
          if (closeOnChange) {
            // Defer close so native button activation (click) runs first.
            setTimeout(() => closeDropdown({ restoreFocus: true }), 0);
          }
          break;
        }
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (
        closeOnChange &&
        isMenuDropdown &&
        dropdownRef.current?.contains(event.target as Node)
      ) {
        closeDropdown({ restoreFocus: true });
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("click", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isMenuDropdown, closeOnChange, closeDropdown]);

  const handlePrimaryAction = () => {
    setIsOpen(!isOpen);
    onPrimaryAction?.();
  };

  const panelRole = isMenuDropdown
    ? (dropdownProps?.role ?? "menu")
    : undefined;
  const panelAriaLabel = isMenuDropdown
    ? (dropdownProps?.["aria-label"] ??
      "Dropdown menu. Use arrow keys to navigate, Tab to cycle through items, Escape to close.")
    : dropdownProps?.["aria-label"];

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
      <OakFlex $flexDirection="column" $gap="spacing-12">
        <OakFlex $width={flexWidth} $gap="spacing-12">
          <ButtonComponent
            iconName={primaryActionIcon}
            isTrailingIcon
            onClick={handlePrimaryAction}
            isLoading={isLoading}
            disabled={disabled}
            width="max-content"
            aria-expanded={isOpen}
            {...(isMenuDropdown
              ? { "aria-haspopup": "menu" as const }
              : isOpen
                ? { "aria-controls": dropdownPanelId }
                : {})}
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
            id={dropdownPanelId}
            $background="bg-primary"
            $borderRadius="border-radius-s"
            $ba="border-solid-m"
            $borderColor="border-primary"
            $pa={isMenuDropdown ? "spacing-8" : "spacing-12"}
            $position="absolute"
            $top={dropdownTopSpacing}
            $zIndex="modal-close-button"
            role={panelRole}
            aria-label={panelAriaLabel}
            data-testid={dataTestId ? `${dataTestId}-dropdown` : undefined}
          >
            <OakFlex
              $flexDirection="column"
              $gap={isMenuDropdown ? "spacing-8" : "spacing-12"}
            >
              <OakButtonWithDropdownProvider
                onClose={() => closeDropdown({ restoreFocus: true })}
              >
                {children}
              </OakButtonWithDropdownProvider>
            </OakFlex>
          </OakBox>
        )}
      </OakFlex>
    </OakBox>
  );
};

OakButtonWithDropdown.Divider = (): React.ReactElement => (
  <OakBox
    $height="spacing-0"
    $width="100%"
    $bt="border-solid-s"
    $borderColor="border-neutral-lighter"
    aria-hidden="true"
  />
);

OakButtonWithDropdown.Item = <C extends ElementType = "button">({
  children,
  element,
  ...rest
}: {
  children: React.ReactNode;
} & OakSecondaryButtonProps &
  PolymorphicPropsWithoutRef<C>): React.ReactElement => (
  <OakSecondaryButton element="a" role="menuitem" isTrailingIcon {...rest}>
    {children}
  </OakSecondaryButton>
);
