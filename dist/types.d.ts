import * as styled_components from 'styled-components';
import { CSSProperties as CSSProperties$1 } from 'styled-components';
import * as React$1 from 'react';
import React__default, { FC, CSSProperties, MouseEventHandler, ElementType, ComponentPropsWithoutRef, ReactNode, DetailedHTMLProps, TextareaHTMLAttributes, ComponentPropsWithRef, ReactElement, ComponentProps, HTMLAttributes, FocusEvent, InputHTMLAttributes, ChangeEventHandler, ButtonHTMLAttributes, MutableRefObject, RefObject } from 'react';
import * as _cloudinary_util_url_loader_dist_schema__7VfaAhu_cjs from '@cloudinary-util/url-loader/dist/schema-_7VfaAhu.cjs';
import { CldImage } from 'next-cloudinary';
import * as next_image from 'next/image';
import next_image__default, { ImageProps as ImageProps$1 } from 'next/image';
import * as next_dist_shared_lib_get_img_props from 'next/dist/shared/lib/get-img-props';
import * as csstype from 'csstype';
import { Announcements } from '@dnd-kit/core';
import { UrlObject } from 'url';

declare const oakColorTokens: {
    white: string;
    grey10: string;
    grey20: string;
    grey30: string;
    grey40: string;
    grey50: string;
    grey60: string;
    grey70: string;
    grey80: string;
    black: string;
    oakGreen: string;
    mint: string;
    mint30: string;
    mint50: string;
    mint110: string;
    aqua: string;
    aqua30: string;
    aqua50: string;
    aqua110: string;
    lavender: string;
    lavender30: string;
    lavender50: string;
    lavender110: string;
    pink: string;
    pink30: string;
    pink50: string;
    pink110: string;
    lemon: string;
    lemon30: string;
    lemon50: string;
    lemon110: string;
    amber: string;
    amber30: string;
    amber50: string;
    red: string;
    red30: string;
    red50: string;
    navy: string;
    navy110: string;
    navy120: string;
    blue: string;
    magenta: string;
    purple: string;
    teal: string;
    blackSemiTransparent: string;
    transparent: string;
    "rpf-syntax-blue": string;
    "rpf-syntax-green": string;
    "rpf-syntax-grey": string;
    "rpf-syntax-pink": string;
};
type OakColorToken = keyof typeof oakColorTokens;
/**
 *
 *  Use this tool to convert Hex to color filter values https://codepen.io/sosuke/pen/Pjoqqp
 *
 */
declare const oakColorFilterTokens: {
    black: string;
    red: string;
    oakGreen: string;
    white: string;
    grey40: string;
    grey50: string;
    grey60: string;
    navy: string;
    navy110: string;
    navy120: string;
    amber: string;
    lemon: string;
    pink: string;
    pink50: string;
    mint: string;
    mint30: string;
    mint50: string;
    mint110: string;
    aqua: string;
    lavender: string;
};
type OakColorFilterToken = keyof typeof oakColorFilterTokens;
declare const oakUiRoleTokensConst: readonly ["text-primary", "text-subdued", "text-error", "text-disabled", "text-link-active", "text-link-hover", "text-link-visited", "text-link-pressed", "text-inverted", "text-success", "text-warning", "text-promo", "bg-primary", "bg-inverted", "bg-neutral", "bg-neutral-stronger", "bg-btn-primary", "bg-btn-primary-hover", "bg-btn-primary-disabled", "bg-btn-secondary", "bg-btn-secondary-hover", "bg-btn-secondary-disabled", "bg-icon", "bg-icon-hover", "bg-decorative1-main", "bg-decorative1-subdued", "bg-decorative1-very-subdued", "bg-decorative2-main", "bg-decorative2-subdued", "bg-decorative2-very-subdued", "bg-decorative3-main", "bg-decorative3-subdued", "bg-decorative3-very-subdued", "bg-decorative4-main", "bg-decorative4-subdued", "bg-decorative4-very-subdued", "bg-decorative5-main", "bg-decorative5-subdued", "bg-decorative5-very-subdued", "bg-decorative6-main", "bg-decorative6-subdued", "bg-decorative6-very-subdued", "bg-interactive-element1", "bg-interactive-element2", "bg-correct", "bg-incorrect", "bg-success", "bg-error", "icon-main", "icon-inverted", "icon-disabled", "icon-brand", "icon-success", "icon-error", "icon-warning", "icon-primary", "icon-subdued", "icon-link-active", "icon-link-hover", "icon-link-pressed", "icon-link-visited", "icon-decorative1", "icon-decorative2", "icon-decorative3", "icon-decorative4", "icon-decorative5", "icon-decorative6", "icon-promo", "border-primary", "border-inverted", "border-neutral", "border-neutral-lighter", "border-neutral-stronger", "border-brand", "border-success", "border-error", "border-warning", "border-decorative1", "border-decorative1-stronger", "border-decorative2", "border-decorative2-stronger", "border-decorative3", "border-decorative3-stronger", "border-decorative4", "border-decorative4-stronger", "border-decorative5", "border-decorative5-stronger", "border-decorative6", "border-decorative6-stronger", "transparent", "code-blue", "code-green", "code-grey", "code-pink"];
type OakUiRoleToken = (typeof oakUiRoleTokensConst)[number];
declare const oakUiRoleTokens: ("transparent" | "text-primary" | "text-subdued" | "text-error" | "text-disabled" | "text-link-active" | "text-link-hover" | "text-link-visited" | "text-link-pressed" | "text-inverted" | "text-success" | "text-warning" | "text-promo" | "bg-primary" | "bg-inverted" | "bg-neutral" | "bg-neutral-stronger" | "bg-btn-primary" | "bg-btn-primary-hover" | "bg-btn-primary-disabled" | "bg-btn-secondary" | "bg-btn-secondary-hover" | "bg-btn-secondary-disabled" | "bg-icon" | "bg-icon-hover" | "bg-decorative1-main" | "bg-decorative1-subdued" | "bg-decorative1-very-subdued" | "bg-decorative2-main" | "bg-decorative2-subdued" | "bg-decorative2-very-subdued" | "bg-decorative3-main" | "bg-decorative3-subdued" | "bg-decorative3-very-subdued" | "bg-decorative4-main" | "bg-decorative4-subdued" | "bg-decorative4-very-subdued" | "bg-decorative5-main" | "bg-decorative5-subdued" | "bg-decorative5-very-subdued" | "bg-decorative6-main" | "bg-decorative6-subdued" | "bg-decorative6-very-subdued" | "bg-interactive-element1" | "bg-interactive-element2" | "bg-correct" | "bg-incorrect" | "bg-success" | "bg-error" | "icon-main" | "icon-inverted" | "icon-disabled" | "icon-brand" | "icon-success" | "icon-error" | "icon-warning" | "icon-primary" | "icon-subdued" | "icon-link-active" | "icon-link-hover" | "icon-link-pressed" | "icon-link-visited" | "icon-decorative1" | "icon-decorative2" | "icon-decorative3" | "icon-decorative4" | "icon-decorative5" | "icon-decorative6" | "icon-promo" | "border-primary" | "border-inverted" | "border-neutral" | "border-neutral-lighter" | "border-neutral-stronger" | "border-brand" | "border-success" | "border-error" | "border-warning" | "border-decorative1" | "border-decorative1-stronger" | "border-decorative2" | "border-decorative2-stronger" | "border-decorative3" | "border-decorative3-stronger" | "border-decorative4" | "border-decorative4-stronger" | "border-decorative5" | "border-decorative5-stronger" | "border-decorative6" | "border-decorative6-stronger" | "code-blue" | "code-green" | "code-grey" | "code-pink")[];
type UiRoleMap = Record<OakUiRoleToken, OakColorToken | null | undefined>;
type OakCombinedColorToken = OakColorToken | OakUiRoleToken;

type OakTheme = {
    name: string;
    uiColors: UiRoleMap;
};

type ResponsiveValues<Value> = (Value | null) | (Value | null)[];

declare const oakAllSpacingTokens: {
    "spacing-0": number;
    "spacing-2": number;
    "spacing-4": number;
    "spacing-8": number;
    "spacing-12": number;
    "spacing-16": number;
    "spacing-20": number;
    "spacing-24": number;
    "spacing-32": number;
    "spacing-40": number;
    "spacing-48": number;
    "spacing-56": number;
    "spacing-64": number;
    "spacing-72": number;
    "spacing-80": number;
    "spacing-92": number;
    "spacing-100": number;
    "spacing-120": number;
    "spacing-160": number;
    "spacing-180": number;
    "spacing-240": number;
    "spacing-360": number;
    "spacing-480": number;
    "spacing-640": number;
    "spacing-960": number;
    "spacing-1280": number;
};
type OakAllSpacingToken = keyof typeof oakAllSpacingTokens;
declare const oakInnerPaddingTokens: {
    "spacing-0": string;
    "spacing-4": string;
    "spacing-8": string;
    "spacing-12": string;
    "spacing-16": string;
    "spacing-20": string;
    "spacing-24": string;
    "spacing-32": string;
    "spacing-40": string;
    "spacing-48": string;
    "spacing-56": string;
    "spacing-64": string;
    "spacing-72": string;
    "spacing-80": string;
};
type OakInnerPaddingToken = keyof typeof oakInnerPaddingTokens;
declare const oakSpaceBetweenTokens: {
    "spacing-0": string;
    "spacing-4": string;
    "spacing-8": string;
    "spacing-12": string;
    "spacing-16": string;
    "spacing-24": string;
    "spacing-32": string;
    "spacing-48": string;
    "spacing-56": string;
    "spacing-72": string;
    "spacing-80": string;
};
type OakSpaceBetweenToken = keyof typeof oakSpaceBetweenTokens;
type AdditionalSpacingTypes = "100%" | 0 | "100vh" | "100vw" | "auto" | "fit-content" | "max-content" | "min-content" | "inherit" | "initial" | "unset";
type OakCombinedSpacingToken = OakAllSpacingToken | OakInnerPaddingToken | OakSpaceBetweenToken | AdditionalSpacingTypes;

type PaddingValues = ResponsiveValues<OakInnerPaddingToken | null | undefined>;
type PaddingStyleProps = {
    /**
     * Applies `padding` to all sides of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pa?: PaddingValues;
    /**
     * Applies `padding`  to the left and right of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $ph?: PaddingValues;
    /**
     * Applies `padding` to the top and bottom of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pv?: PaddingValues;
    /**
     * Applies `padding` to the left of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pl?: PaddingValues;
    /**
     * Applies `padding` to the right of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pr?: PaddingValues;
    /**
     * Applies `padding` to the top of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pt?: PaddingValues;
    /**
     * Applies `padding` to the bottom of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pb?: PaddingValues;
};
type MarginValue = "auto" | OakSpaceBetweenToken | null | undefined;
type MarginValues = ResponsiveValues<MarginValue>;
type MarginStyleProps = {
    /**
     * Applies `margin` to all sides of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $ma?: MarginValues;
    /**
     * Applies `margin` to the left and right of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mh?: MarginValues;
    /**
     * Applies `margin` to the top and bottom of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mv?: MarginValues;
    /**
     * Applies `margin` to the left of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $ml?: MarginValues;
    /**
     * Applies `margin` to the right of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mr?: MarginValues;
    /**
     * Applies `margin` to the top of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mt?: MarginValues;
    /**
     * Applies `margin` to the bottom of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mb?: MarginValues;
};
type SpacingStyleProps = PaddingStyleProps & MarginStyleProps;

type OakAnchorTargetProps = PaddingStyleProps;
/**
 *  * AnchorTarget is a component to enable in-page linking to a particular section
 *
 * Styled `span` component.
 *
 * ## Usage
 *
 * Drop AnchorTarget inside a relative or absolulely positioned element without content, passing
 * it a unique 'id'. Then link it elsewhere using `<a href='#${id}' />`.
 *
 * */
declare const OakAnchorTarget: styled_components.StyledComponent<"span", styled_components.DefaultTheme, PaddingStyleProps, never>;

declare const oakAllApectRatiosConst: readonly ["7:8", "2:3", "1:1", "3:2", "16:9"];
type OakAllApectRatios = (typeof oakAllApectRatiosConst)[number];
type OakAspectRatioValues = ResponsiveValues<OakAllApectRatios>;
type OakAspectRatioOuterProps = {
    ratio: OakAspectRatioValues;
};
type OakAspectRatioProps = {
    children?: React__default.ReactNode;
} & OakAspectRatioOuterProps;
/**
 *
 * AspectRatio provides a container of fixed aspect ratio
 *
 * ## Usage
 * Use this component when you want to ensure a box has a certain aspect ratio.
 * Wrap with component with <code>position: relative</code> and a width or min-width
 * The 'ratio' prop is responsive, so you can pass an array e.g. <code>["3:2", "16:9"]</code>
 * which will result in different aspect ratios on different screen widths.
 * For an example usage, see the <code>CardImage</code> component.
 */
declare const OakAspectRatio: FC<OakAspectRatioProps>;

/**
 * Color token!
 */
type ColorToken = ResponsiveValues<OakCombinedColorToken | null>;
type ColorStyleProps = {
    /**
     * Sets the `color` of the element.
     *
     * Accepts a color token or a responsive array of color tokens.
     */
    $color?: ColorToken;
    /**
     * Sets the `background-color` of the element.
     *
     * Accepts a color token or a responsive array of color tokens.
     */
    $background?: ColorToken;
};

type PositionSpacing = OakAllSpacingToken | OakSpaceBetweenToken | null | undefined;
type PositionStyleProps = {
    /**
     * Sets the `position` CSS property of the element.
     *
     * Accepts a `position` value or a responsive array of `position` values. Can be nulled.
     */
    $position?: ResponsiveValues<CSSProperties["position"]>;
    /**
     * Sets the `top` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $top?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `right` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $right?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `bottom` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $bottom?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `left` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $left?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `inset` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $inset?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `overflow` CSS property of the element.
     *
     * Accepts an `overflow` value or a responsive array of `overflow` values.
     */
    $overflow?: ResponsiveValues<CSSProperties["overflow"]>;
    /**
     * Sets the `overflow-x` CSS property of the element.
     *
     * Accepts an `overflow-x` value or a responsive array of `overflow-x` values.
     */
    $overflowX?: ResponsiveValues<CSSProperties["overflowX"]>;
    /**
     * Sets the `overflow-y` CSS property of the element.
     *
     * Accepts an `overflow-y` value or a responsive array of `overflow-y` values.
     */
    $overflowY?: ResponsiveValues<CSSProperties["overflowY"]>;
    /**
     * Sets the `object-fit` CSS property of the element.
     *
     * Accepts an `object-fit` value or a responsive array of `object-fit` values.
     */
    $objectFit?: ResponsiveValues<CSSProperties["objectFit"]>;
    /**
     * Sets the `pointer-events` CSS property of the element.
     *
     * Accepts a `pointer-events` value or a responsive array of `pointer-events` values.
     */
    $pointerEvents?: ResponsiveValues<CSSProperties["pointerEvents"]>;
    /**
     * Sets the `visibility` CSS property of the element.
     *
     * Accepts a `visibility` value or a responsive array of `visibility` values.
     */
    $visibility?: ResponsiveValues<CSSProperties["visibility"]>;
    /**
     * Sets the `vertical-align` CSS property of the element.
     *
     * Accepts a `vertical-align` value or a responsive array of `vertical-align` values.
     */
    $verticalAlign?: ResponsiveValues<CSSProperties["verticalAlign"]>;
};

type SizeValues = ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
type SizeStyleProps = {
    /**
     * Sets the `width` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $width?: SizeValues;
    /**
     * Sets the `min-width` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $minWidth?: SizeValues;
    /**
     * Sets the `max-width` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $maxWidth?: SizeValues;
    /**
     * Sets the `height` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $height?: SizeValues;
    /**
     * Sets the `min-height` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $minHeight?: SizeValues;
    /**
     * Sets the `max-height` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $maxHeight?: SizeValues;
    /**
     * Sets the `aspect-ratio` CSS property of the element.
     *
     * Accepts an `aspect-ratio` value or a responsive array of `aspect-ratio` values.
     */
    $aspectRatio?: ResponsiveValues<CSSProperties$1["aspectRatio"]>;
    /**
     * Sets the `box-sizing` CSS property of the element.
     *
     * Accepts a `box-sizing` value or a responsive array of `box-sizing` values.
     */
    $boxSizing?: ResponsiveValues<CSSProperties$1["boxSizing"]>;
};

declare const oakBorderWidthTokens: {
    "border-solid-none": number;
    "border-solid-s": number;
    "border-solid-m": number;
    "border-solid-l": number;
    "border-solid-xl": number;
};
declare const oakBorderRadiusTokens: {
    "border-radius-square": number;
    "border-radius-xs": number;
    "border-radius-s": number;
    "border-radius-m": number;
    "border-radius-m2": number;
    "border-radius-l": number;
    "border-radius-xl": number;
    "border-radius-circle": number;
};
type OakBorderRadiusToken = keyof typeof oakBorderRadiusTokens;
type OakBorderWidthToken = keyof typeof oakBorderWidthTokens;

type BorderWidth = ResponsiveValues<OakBorderWidthToken>;
type _BorderStyleProps = ResponsiveValues<CSSProperties$1["borderStyle"]>;
type BorderColorProps = ResponsiveValues<OakCombinedColorToken>;
type BorderRadiusProps = ResponsiveValues<OakBorderRadiusToken>;
type BorderStyleProps = {
    /**
     * Apply border on all sides
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $ba?: BorderWidth;
    /**
     * Apply border to the top
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bt?: BorderWidth;
    /**
     * Apply border to the right
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $br?: BorderWidth;
    /**
     * Apply border to the bottom
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bb?: BorderWidth;
    /**
     * Apply border to the left
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bl?: BorderWidth;
    /**
     * Apply border to the left and right
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bh?: BorderWidth;
    /**
     * Apply border to the top and bottom
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bv?: BorderWidth;
    /**
     * Apply `border-style` to the element
     *
     * Accepts a single value or a responsive array of values.
     */
    $borderStyle?: _BorderStyleProps;
    /**
     * Apply a border color to all sides of the element
     *
     * Accepts a color token or a responsive array of color tokens.
     */
    $borderColor?: BorderColorProps;
    $borderRadius?: BorderRadiusProps;
    /**
     * Apply border radius to the top left
     *
     * Accepts an `OakBorderRadiusToken` or a responsive array of `OakBorderRadiusToken`s.
     */
    $btlr?: BorderRadiusProps;
    /**
     * Apply border radius to the top right
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $btrr?: BorderRadiusProps;
    /**
     * Apply border radius to the bottom left
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $bblr?: BorderRadiusProps;
    /**
     * Apply border radius to the bottom right
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $bbrr?: BorderRadiusProps;
    /**
     * Apply border radius to the top right and top left
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $btr?: BorderRadiusProps;
    /**
     * Apply border radius to the bottom right and bottom left
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens
     */
    $bbr?: BorderRadiusProps;
};

type DisplayStyleProps = {
    /**
     * Sets the `display` CSS property of the element.
     *
     * Accepts a `display` value or a responsive array of `display` values.
     */
    $display?: ResponsiveValues<CSSProperties["display"]>;
};

declare const oakDropShadowTokens: {
    "drop-shadow-standard": string;
    "drop-shadow-lemon": string;
    "drop-shadow-wide-lemon": string;
    "drop-shadow-centered-lemon": string;
    "drop-shadow-grey": string;
    "drop-shadow-centered-grey": string;
    "drop-shadow-black": string;
    "drop-shadow-centred-standard": string;
};
type OakDropShadowToken = keyof typeof oakDropShadowTokens;

type DropShadowStyleProps = {
    /**
     * Applies a drop-shadow to the element.
     *
     * Accepts a drop-shadow token or a responsive array of drop-shadow tokens.
     */
    $dropShadow?: ResponsiveValues<OakDropShadowToken>;
};

declare const oakOpacityTokens: {
    transparent: number;
    "semi-transparent": number;
    "semi-opaque": number;
    opaque: number;
};
type OakOpacityToken = keyof typeof oakOpacityTokens;

type OpacityStyleProps = {
    /**
     * Sets the `opacity` CSS property of the element.
     *
     * Accepts an opacity token or a responsive array of opacity tokens.
     */
    $opacity?: ResponsiveValues<OakOpacityToken>;
};

type TransformStyleProps = {
    /**
     * Sets the `transform` CSS property of the element.
     *
     * Accepts a `transform` value or a responsive array of `transform` values. Can be nulled.
     */
    $transform?: ResponsiveValues<CSSProperties$1["transform"] | null>;
    /**
     * Sets the `transform-origin` CSS property of the element.
     *
     * Accepts a `transform-origin` value or a responsive array of `transform-origin` values. Can be nulled.
     */
    $transformOrigin?: ResponsiveValues<CSSProperties$1["transformOrigin"] | null>;
};

declare const oakTransitionTokens: {
    "standard-ease": string;
    "standard-transform": string;
};
type OakTransitionToken = keyof typeof oakTransitionTokens;

type Transition = OakTransitionToken;
type TransitionStyleProps = {
    /**
     * Sets the `transition` CSS property of the element.
     *
     * Accepts a transition token or a responsive array of transition tokens.
     */
    $transition?: ResponsiveValues<Transition>;
};

declare const oakFontSizeTokens: {
    "font-size-1": number;
    "font-size-2": number;
    "font-size-3": number;
    "font-size-4": number;
    "font-size-5": number;
    "font-size-6": number;
    "font-size-7": number;
    "font-size-8": number;
    "font-size-9": number;
    "font-size-10": number;
};
type OakFontSizeToken = keyof typeof oakFontSizeTokens;
declare const oakFontTokens: {
    "heading-1": ["font-size-10", 64, 600, "0.0115rem"];
    "heading-2": ["font-size-9", 56, 600, "0.0115rem"];
    "heading-3": ["font-size-8", 48, 600, "0.0115rem"];
    "heading-4": ["font-size-7", 40, 600, "0.0115rem"];
    "heading-5": ["font-size-6", 32, 600, "0.0115rem"];
    "heading-6": ["font-size-5", 24, 600, "0.0115rem"];
    "heading-7": ["font-size-3", 20, 600, "0.0115rem"];
    "heading-light-1": ["font-size-10", 64, 400, "0.0115rem"];
    "heading-light-2": ["font-size-9", 56, 400, "0.0115rem"];
    "heading-light-3": ["font-size-8", 48, 400, "0.0115rem"];
    "heading-light-4": ["font-size-7", 40, 400, "0.0115rem"];
    "heading-light-5": ["font-size-6", 32, 400, "0.0115rem"];
    "heading-light-6": ["font-size-5", 24, 400, "0.0115rem"];
    "heading-light-7": ["font-size-3", 20, 400, "0.0115rem"];
    "body-1": ["font-size-4", 28, 300, "-0.005rem"];
    "body-2": ["font-size-3", 24, 300, "-0.005rem"];
    "body-3": ["font-size-2", 20, 300, "-0.005rem"];
    "body-4": ["font-size-1", 16, 300, "-0.005rem"];
    "body-1-bold": ["font-size-4", 28, 700, "-0.005rem"];
    "body-2-bold": ["font-size-3", 24, 700, "-0.005rem"];
    "body-3-bold": ["font-size-2", 20, 700, "-0.005rem"];
    "list-item-1": ["font-size-4", 32, 300, "-0.005rem"];
    "list-item-2": ["font-size-3", 24, 300, "-0.005rem"];
    "code-1": ["font-size-6", 32, 300, "0.0115rem"];
    "code-1-bold": ["font-size-6", 32, 700, "0.0115rem"];
    "code-2": ["font-size-4", 24, 300, "0.0115rem"];
    "code-2-bold": ["font-size-4", 24, 700, "0.0115rem"];
    "code-3": ["font-size-3", 20, 300, "0.0115rem"];
    "code-3-bold": ["font-size-3", 20, 700, "0.0115rem"];
};
type OakFontToken = keyof typeof oakFontTokens;
declare const oakTextDecorationsConst: readonly ["underline", "overline", "line-through", "none"];
declare const oakWhiteSpacesConst: readonly ["normal", "nowrap", "wrap", "pre", "pre-wrap", "pre-line", "break-spaces"];
declare const oakWordWrapsConst: readonly ["normal", "break-word", "initial", "inherit"];
declare const oakTextOverflowsConst: readonly ["clip", "ellipsis"];
type OakTextDecoration = (typeof oakTextDecorationsConst)[number];
type OakWhiteSpace = (typeof oakWhiteSpacesConst)[number];
type OakWordWrap = (typeof oakWordWrapsConst)[number];
type OakTextOverflow = (typeof oakTextOverflowsConst)[number];

type TypographyStyleProps = {
    /**
     * Sets the `font-size`, `line-height`, `font-weight` and `letter-spacing` of the element.
     *
     * Accepts a font token or a responsive array of font tokens.
     */
    $font?: ResponsiveValues<OakFontToken>;
    /**
     * Sets the `text-decoration` CSS property of the element.
     *
     * Accepts a text-decoration token or a responsive array of text-decoration tokens.
     */
    $textDecoration?: ResponsiveValues<OakTextDecoration>;
    /**
     * Sets the `text-align` CSS property of the element.
     *
     * Accepts a `text-align` value or a responsive array of `text-align` values.
     */
    $textAlign?: ResponsiveValues<CSSProperties$1["textAlign"]>;
    /**
     * Sets the `white-space` CSS property of the element.
     *
     *  Accepts a white-space token or a responsive array of white-space tokens.
     */
    $whiteSpace?: ResponsiveValues<OakWhiteSpace>;
    /**
     * Sets the `word-wrap` CSS property of the element.
     *
     * Accepts a word-wrap token or a responsive array of word-wrap tokens.
     */
    $wordWrap?: ResponsiveValues<OakWordWrap>;
    /**
     * Sets the `text-overflow` CSS property of the element.
     *
     * Accepts a text-overflow token or a responsive array of text-overflow tokens.
     */
    $textOverflow?: ResponsiveValues<OakTextOverflow>;
    /**
     * Sets the `overflow` CSS property of the element.
     *
     * Accepts an overflow token or a responsive array of overflow tokens.
     */
    $overflow?: ResponsiveValues<CSSProperties$1["overflow"]>;
};

declare const oakZIndexTokens: {
    readonly behind: -1;
    readonly neutral: 0;
    readonly "in-front": 1;
    readonly "mobile-filters": 2;
    readonly "fixed-header": 100;
    readonly "modal-close-button": 150;
    readonly "modal-dialog": 300;
    readonly banner: number;
};
type OakZIndexToken = keyof typeof oakZIndexTokens | null;

type ZIndexStyleProps = {
    /**
     * Sets the `z-index` CSS property of the element.
     *
     * Accepts a z-index token or a responsive array of z-index tokens.
     */
    $zIndex?: ResponsiveValues<OakZIndexToken | number>;
};

type HTMLProps$1 = {
    onClick?: MouseEventHandler;
};
type OakBoxProps = {
    children?: React.ReactNode;
} & PositionStyleProps & SizeStyleProps & SpacingStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & HTMLProps$1;
declare const oakBoxCss: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<OakBoxProps, styled_components.DefaultTheme>>;
/**
 * OakBox exposes all the styles that are available styles on a div tag. These include:
 * - color
 * - size
 * - display
 * - spacing
 * - position
 * - border
 * - opacity
 * - z-index
 * - typography
 * - transition
 * - transform
 * - drop-shadow
 *
 */
declare const OakBox: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & HTMLProps$1, never>;

type ColorFilterToken = ResponsiveValues<OakCombinedColorToken | null>;
type ColorFilterStyleProps = {
    /**
     * Applies a color-filter to the element.
     *
     * Accepts a color filter token or a responsive array of color tokens.
     */
    $colorFilter?: ColorFilterToken;
};

type HTMLProps = {
    onClick?: MouseEventHandler;
};
type OakImageProps<C extends ElementType = typeof next_image__default> = Omit<ImageProps$1, "placeholder"> & OakBoxProps & ColorFilterStyleProps & HTMLProps & {
    as?: C;
    /**
     * The placeholder to use while the image is loading
     *
     * Defaults to `oak` which is a placeholder containing the Oak logo
     * also accepts the same options as next/image */
    placeholder?: ImageProps$1["placeholder"] | "oak";
    /**
     * Additional props forwarded to the underlying `Image` component `as`
     */
    imageProps?: Partial<ComponentPropsWithoutRef<C>>;
};
type StyledImageProps = Omit<OakImageProps, "as"> & {
    $showOakPlaceholder: boolean;
};
declare const oakPlaceholder = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzIyMiIgZD0iTTI4Ljc3OSAxOS4xNzZhMjcuMTkxIDI3LjE5MSAwIDAgMC0zLjggMS42IDE2LjcgMTYuNyAwIDAgMC03LjEgOC40YzAgLjEtLjEuMi0uMS4zLS43IDIuNC0uNiAyIDEuMyAyLjMgMS45LjMgMSAuNSAxIDEuMy0uMSA4LjggNC4xIDE1LjEgMTEuNCAxOS42YTEuNSAxLjUgMCAwIDAgMS43LjJjNS43LTIuNiA5LjMtNyAxMC4zLTEzLjJhMSAxIDAgMCAxIDEtMWwzLS4yYy44IDAgMS4zLjIgMS4yIDEuMmExNy45IDE3LjkgMCAwIDEtMy4yIDkuMiAyMy43IDIzLjcgMCAwIDEtMTAuOSA5LjEgNS40MDEgNS40MDEgMCAwIDEtNC41LS4yIDI2LjI5OCAyNi4yOTggMCAwIDEtOC41LTYuNiAyNS45IDI1LjkgMCAwIDEtNi40LTE0LjRjMC0uNi0uMi0uNy0uOC0uOC0yLjUtLjQtMi41LS4xLTIuMy0yLjlhMTkuMyAxOS4zIDAgMCAxIDEwLjgtMTYuNiAzOC45OTkgMzguOTk5IDAgMCAxIDUuNy0yLjEgMi4xIDIuMSAwIDAgMCAuOS0xLjMgMTQuMSAxNC4xIDAgMCAxIDMuNS02LjNsLjMtLjNjMS45LTIgMi42LTIgNC4zLjJsLjQuNWMxLjEgMS4xIDEgMS41LS4xIDIuNmExMS45IDExLjkgMCAwIDAtMy4yIDQuNCAxNi45IDE2LjkgMCAwIDEgNy41IDIuM2M1LjcgMy41IDkuMiA4LjMgOS45IDE1IC4wMTYuOTAxLS4wMTcgMS44MDItLjEgMi43IDAgLjgtLjYgMS0xLjIgMS4yYTE2LjEgMTYuMSAwIDAgMS0xMS0uNyAxNy45MDEgMTcuOTAxIDAgMCAxLTEwLjktMTMuNiA5Ljc5NiA5Ljc5NiAwIDAgMS0uMS0xLjlabTE4LjEgMTIuMmMuNC01LjUtNi45LTEyLjYtMTMtMTIuMS41IDYuNSA3LjYgMTIuOCAxMyAxMi4xWiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=";
declare const placeholderStyles: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<StyledImageProps, styled_components.DefaultTheme>>;
/**
 * A wrapper for NextJs's Image component.
 *
 * Use this for all image types as well as icons.
 * Can accept remote urls provided they are whitelisted in next.config.js and relative urls for local images provided they begin with a "/".
 * Set the width and height of the image through the `$width` and `$height` props when the aspect ratio is not known. This will letterbox the image to avoid stretching.
 * Alternatively pass `width` and `height` props when the aspect ratio is known and use $minWidth to set the rendered width, avoiding letter-boxing.
 * NB. for letterboxed images, $background controls the color of the letterbox not the image.
 * `positionStyle` and `spacingStyle` props are also exposed for container.
 * sizes is exposed for further optimisation read Next docs for more info.
 *
 */
declare const OakImage: <C extends React__default.ElementType = React__default.ForwardRefExoticComponent<Omit<React__default.DetailedHTMLProps<React__default.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref" | "width" | "height" | "src" | "srcSet" | "alt" | "loading"> & {
    src: string | next_dist_shared_lib_get_img_props.StaticImport;
    alt: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
    loader?: next_image.ImageLoader | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: "eager" | "lazy" | undefined;
    placeholder?: next_dist_shared_lib_get_img_props.PlaceholderValue | undefined;
    blurDataURL?: string | undefined;
    unoptimized?: boolean | undefined;
    overrideSrc?: string | undefined;
    onLoadingComplete?: next_dist_shared_lib_get_img_props.OnLoadingComplete | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
} & React__default.RefAttributes<HTMLImageElement | null>>>({ ...props }: OakImageProps<C>) => React__default.JSX.Element;

type OakCloudinaryImageProps = Omit<OakImageProps<typeof CldImage>, "src" | "imageProps"> & {
    /**
     * The cloudinary image id or the full cloudinary URL
     *
     * Usually in the format `v1234567890/image.jpg`
     */
    cloudinaryId: string;
};
/**
 * Provides a Cloudinary config to all descendent `OakCloudinaryImage` elements.
 *
 * See https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
 * for documentation of the config object.
 */
declare const OakCloudinaryConfigProvider: React__default.Provider<_cloudinary_util_url_loader_dist_schema__7VfaAhu_cjs.e | undefined>;
/**
 * OakCloudinaryImage wraps OakImage providing responsive images from Cloudinary
 * based on the `sizes` prop.
 *
 * Cloudinary cloud name can be set globally with `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` or a config
 * can be passed with `OakCloudinaryConfigProvider`.
 */
declare const OakCloudinaryImage: ({ cloudinaryId, unoptimized, ...props }: OakCloudinaryImageProps) => React__default.JSX.Element;

type OakFieldsetProps = OakBoxProps;
/**
 * OakFieldset renders a custom `fieldset` component, removes default styling of fieldset.
  color, opacity, margin, padding, border and typography styles can be passed in also.
 */
declare const OakFieldset: styled_components.StyledComponent<"fieldset", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
}, never>;

type FlexStyleProps = DisplayStyleProps & {
    /**
     * Sets the `flex-direction` CSS property of the element.
     *
     * Accepts a `flex-direction` value or a responsive array of flex-direction values.
     */
    $flexDirection?: ResponsiveValues<CSSProperties["flexDirection"]>;
    /**
     * Sets the `flex-wrap` CSS property of the element.
     *
     * Accepts a `flex-wrap` value or a responsive array of flex-wrap values.
     */
    $flexWrap?: ResponsiveValues<CSSProperties["flexWrap"]>;
    /**
     * Sets the `align-items` CSS property of the element.
     *
     * Accepts an `align-items` value or a responsive array of `align-items` values.
     */
    $alignItems?: ResponsiveValues<CSSProperties["alignItems"]>;
    /**
     * Sets the `align-content` CSS property of the element.
     *
     * Accepts an `align-content` value or a responsive array of `align-content` values.
     */
    $alignContent?: ResponsiveValues<CSSProperties["alignContent"]>;
    /**
     * Sets the `justify-content` CSS property of the element.
     *
     * Accepts a `justify-content` value or a responsive array of `justify-content` values.
     */
    $justifyContent?: ResponsiveValues<CSSProperties["justifyContent"]>;
    /**
     * Sets the `align-self` CSS property of the element.
     *
     * Accepts an `align-self` value or a responsive array of `align-self` values.
     */
    $alignSelf?: ResponsiveValues<CSSProperties["alignSelf"]>;
    /**
     * Sets the `flex-grow` CSS property of the element.
     *
     * Accepts a `flex-grow` value or a responsive array of `flex-grow` values.
     */
    $flexGrow?: ResponsiveValues<CSSProperties["flexGrow"]>;
    /**
     * Sets the `flex-shrink` CSS property of the element.
     *
     * Accepts a `flex-shrink` value or a responsive array of `flex-shrink` values.
     */
    $flexShrink?: ResponsiveValues<CSSProperties["flexShrink"]>;
    /**
     * Sets the `order` CSS property of the element.
     *
     * Accepts an `order` value or a responsive array of `order` values.
     */
    $order?: ResponsiveValues<CSSProperties["order"]>;
    /**
     * Sets the `flex-basis` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    /**
     * Sets the `gap` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $gap?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    /**
     * Sets the `column-gap` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $columnGap?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    /**
     * Sets the `row-gap` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $rowGap?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    focusable?: boolean;
};

type OakFlexProps = FlexStyleProps & OakBoxProps;
declare const oakFlexCss: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<FlexStyleProps, styled_components.DefaultTheme>>;
/**
 * Flex sets `display: flex;` and exposes various flex props, along with Box
 * props.
 *
 * ## Usage
 * Before adding props to this component, think about whether it makes sense
 * to add it to Box instead, as this component extends that.
 */
declare const OakFlex: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
} & {
    $flexDirection?: ResponsiveValues<csstype.Property.FlexDirection | undefined>;
    $flexWrap?: ResponsiveValues<csstype.Property.FlexWrap | undefined>;
    $alignItems?: ResponsiveValues<csstype.Property.AlignItems | undefined>;
    $alignContent?: ResponsiveValues<csstype.Property.AlignContent | undefined>;
    $justifyContent?: ResponsiveValues<csstype.Property.JustifyContent | undefined>;
    $alignSelf?: ResponsiveValues<csstype.Property.AlignSelf | undefined>;
    $flexGrow?: ResponsiveValues<csstype.Property.FlexGrow | undefined>;
    $flexShrink?: ResponsiveValues<csstype.Property.FlexShrink | undefined>;
    $order?: ResponsiveValues<csstype.Property.Order | undefined>;
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    $gap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $columnGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $rowGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    focusable?: boolean | undefined;
}, never>;

/**
 *
 * Inherit everything from OakBox, but change the element to a form.
 *
 * @deprecated Use `<OakBox as="form">` instead
 */
declare const OakForm: styled_components.StyledComponent<"form", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
}, never>;
type OakFormProps = OakBoxProps;

/**
 *
 * Currently this is just for storybook as it is already applied in OWA
 *
 */
declare const OakGlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare const oakDefaultTheme: OakTheme;

declare const oakDarkTheme: OakTheme;

type OakGridProps = OakBoxProps & {
    /**
     * Applies `row-gap` to the grid
     *
     * Accepts a spacing token or a responsive array of spacing tokens.
     */
    $rg?: ResponsiveValues<OakCombinedSpacingToken>;
    /**
     * Applies `column-gap` to the grid
     *
     * Accepts a spacing token or a responsive array of spacing tokens.
     */
    $cg?: ResponsiveValues<OakCombinedSpacingToken>;
    /**
     * Applies `grid-auto-rows` to the grid
     *
     * Accepts a `grid-auto-rows` value or a responsive array of `grid-auto-rows` values.
     */
    $gridAutoRows?: ResponsiveValues<CSSProperties$1["gridAutoRows"]>;
    /**
     * Applies `grid-template-areas` to the grid
     *
     * Accepts a `grid-template-areas` value or a responsive array of `grid-template-areas` values.
     */
    $gridTemplateAreas?: ResponsiveValues<CSSProperties$1["gridTemplateAreas"]>;
    /**
     * Applies `grid-template-columns` to the grid
     *
     * Accepts a `grid-template-columns` value or a responsive array of `grid-template-columns` values.
     */
    $gridTemplateColumns?: ResponsiveValues<CSSProperties$1["gridTemplateColumns"]>;
    /**
     * Applies `grid-template-rows` to the grid
     *
     * Accepts a `grid-template-rows` value or a responsive array of `grid-template-rows` values.
     */
    $gridTemplateRows?: ResponsiveValues<CSSProperties$1["gridTemplateRows"]>;
};
/**
 * Creates a grid layout
 *
 * Defaults to a 12 column grid
 */
declare const OakGrid: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
} & {
    /**
     * Applies `row-gap` to the grid
     *
     * Accepts a spacing token or a responsive array of spacing tokens.
     */
    $rg?: ResponsiveValues<OakCombinedSpacingToken> | undefined;
    /**
     * Applies `column-gap` to the grid
     *
     * Accepts a spacing token or a responsive array of spacing tokens.
     */
    $cg?: ResponsiveValues<OakCombinedSpacingToken> | undefined;
    /**
     * Applies `grid-auto-rows` to the grid
     *
     * Accepts a `grid-auto-rows` value or a responsive array of `grid-auto-rows` values.
     */
    $gridAutoRows?: ResponsiveValues<CSSProperties$1["gridAutoRows"]>;
    /**
     * Applies `grid-template-areas` to the grid
     *
     * Accepts a `grid-template-areas` value or a responsive array of `grid-template-areas` values.
     */
    $gridTemplateAreas?: ResponsiveValues<CSSProperties$1["gridTemplateAreas"]>;
    /**
     * Applies `grid-template-columns` to the grid
     *
     * Accepts a `grid-template-columns` value or a responsive array of `grid-template-columns` values.
     */
    $gridTemplateColumns?: ResponsiveValues<CSSProperties$1["gridTemplateColumns"]>;
    /**
     * Applies `grid-template-rows` to the grid
     *
     * Accepts a `grid-template-rows` value or a responsive array of `grid-template-rows` values.
     */
    $gridTemplateRows?: ResponsiveValues<CSSProperties$1["gridTemplateRows"]>;
}, never>;

type ColRowSpan = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type OakGridAreaProps = {
    /**
     * Determines the number of columns the element should span.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colSpan: ResponsiveValues<ColRowSpan>;
    /**
     * Determines the number of rows the element should span.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $rowSpan?: ResponsiveValues<ColRowSpan>;
    /**
     * Sets the order of the element.
     *
     * Accepts a number or a responsive array of numbers.
     */
    $order?: ResponsiveValues<CSSProperties$1["order"]>;
    /**
     * The start column of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colStart?: ResponsiveValues<ColRowSpan>;
    /**
     * The end column of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colEnd?: ResponsiveValues<ColRowSpan>;
    /**
     * The start row of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $rowStart?: ResponsiveValues<ColRowSpan>;
} & SpacingStyleProps;
/**
 *
 * OakGridArea is a flex container that should be used inside OakGrid.
 *
 * - There is no nesting of OakGridAreas
 * - Column and row arrangements are achieved through $colSpan, $rowSpan, $colStart, $colEnd, $rowStart, $rowEnd
 *
 */
declare const OakGridArea: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
} & {
    $flexDirection?: ResponsiveValues<csstype.Property.FlexDirection | undefined>;
    $flexWrap?: ResponsiveValues<csstype.Property.FlexWrap | undefined>;
    $alignItems?: ResponsiveValues<csstype.Property.AlignItems | undefined>;
    $alignContent?: ResponsiveValues<csstype.Property.AlignContent | undefined>;
    $justifyContent?: ResponsiveValues<csstype.Property.JustifyContent | undefined>;
    $alignSelf?: ResponsiveValues<csstype.Property.AlignSelf | undefined>;
    $flexGrow?: ResponsiveValues<csstype.Property.FlexGrow | undefined>;
    $flexShrink?: ResponsiveValues<csstype.Property.FlexShrink | undefined>;
    $order?: ResponsiveValues<csstype.Property.Order | undefined>;
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    $gap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $columnGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $rowGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    focusable?: boolean | undefined;
} & {
    /**
     * Determines the number of columns the element should span.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colSpan: ResponsiveValues<ColRowSpan>;
    /**
     * Determines the number of rows the element should span.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $rowSpan?: ResponsiveValues<ColRowSpan> | undefined;
    /**
     * Sets the order of the element.
     *
     * Accepts a number or a responsive array of numbers.
     */
    $order?: ResponsiveValues<CSSProperties$1["order"]>;
    /**
     * The start column of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colStart?: ResponsiveValues<ColRowSpan> | undefined;
    /**
     * The end column of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colEnd?: ResponsiveValues<ColRowSpan> | undefined;
    /**
     * The start row of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $rowStart?: ResponsiveValues<ColRowSpan> | undefined;
}, never>;

declare const oakHeadingTagsConst: readonly ["div", "h1", "h2", "h3", "h4", "h5", "h6"];
type OakHeadingTag = (typeof oakHeadingTagsConst)[number];
declare const oakHeadingTags: ("div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6")[];
type OakHeadingTagProps = {
    children?: React__default.ReactNode;
    id?: string;
    /**
     * HTML tag to be used for the heading
     *
     * Accepts a heading tag token
     */
    tag: OakHeadingTag;
    ariaLabel?: string;
    ariaHidden?: boolean;
};
declare const HeadingTagComponent: FC<OakHeadingTagProps>;
type OakHeadingProps = TypographyStyleProps & OakHeadingTagProps & ColorStyleProps & OpacityStyleProps & MarginStyleProps;
/**
 *
 * OakHeading can be one of the following style tags dependant on its role: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6".
 * Use the controls to view different font styles.
 *
 */
declare const OakHeading: styled_components.StyledComponent<React__default.FC<OakHeadingTagProps>, styled_components.DefaultTheme, TypographyStyleProps & OakHeadingTagProps & ColorStyleProps & OpacityStyleProps & MarginStyleProps, never>;

declare const icons: {
    readonly "question-mark": "v1706872277/icons/question-mark.svg";
    readonly ai: "v1754063273/icons/ai_cqaksa.svg";
    readonly "ai-additional-material": "v1756224441/icons/AI_additional_material_oopjax.svg";
    readonly "ai-quiz": "v1756224440/icons/AI_quiz_eivb2s.svg";
    readonly "ai-slide-deck": "v1756224440/icons/Ai_slidedeck_xuo49n.svg";
    readonly "ai-worksheet": "v1756224441/icons/AI_worksheet_cm4f0q.svg";
    readonly home: "v1699887218/icons/gvqxjxcw07ei2kkmwnes.svg";
    readonly send: "v1699893673/icons/rmvytilpjgvh3pgwc8ph.svg";
    readonly rocket: "v1699894015/icons/u26xm5hteot875ozfnk9.svg";
    readonly edit: "v1699894149/icons/qxlunbg5tfrdherzsvlt.svg";
    readonly expand: "v1730982187/Icon_Expand_arrktl.svg";
    readonly minimise: "v1730982213/Icon_Minimise_btcdbz.svg";
    readonly hamburger: "v1699895123/icons/jaqdnomtbhqvjcap962u.svg";
    readonly cross: "v1699895179/icons/xigimrbivcaxt4omxamp.svg";
    readonly copy: "v1727861316/icons/Icon_Copy_qxgynv.svg";
    readonly bell: "v1699895207/icons/ecejtvqerx81prxyxh9b.svg";
    readonly twitter: "v1699895251/icons/bq6a50xtkvnzhltfggzz.svg";
    readonly x: "v1748452854/icons/x_fpmv5f.svg";
    readonly worksheet: "v1699895300/icons/ez1s6mtpe5jkunnxzvlw.svg";
    readonly facebook: "v1699895330/icons/iojlvh3o5lshy2jupyph.svg";
    readonly share: "v1699895363/icons/agcmduftef3wcla6gzec.svg";
    readonly "arrow-right": "v1707149070/icons/fv0z57zerrioft52dd9n.svg";
    readonly "arrow-down": "v1699954152/icons/wpfmbmwpyfinipg0d61y.svg";
    readonly "arrow-left": "v1707149179/icons/ejrm9dpgpzb7ddbo8z2i.svg";
    readonly "arrow-up": "v1699954152/icons/arrow-up.svg";
    readonly "worksheet-3": "v1699895429/icons/bzhojpjxp9rukdvh7daz.svg";
    readonly "chevron-right": "v1707752509/icons/vk9xxxhnsltsickom6q9.svg";
    readonly save: "v1699895505/icons/rh1ahwwtbemvz0ihluew.svg";
    readonly success: "v1699895534/icons/Icon-Success_aiiprx.svg";
    readonly error: "v1699895534/icons/Icon-Error_r25aza.svg";
    readonly filter: "v1727783280/icons/Icon_Filter_eitb2p.svg";
    readonly "quiz-3": "v1699895534/icons/zoayhgtrotv32fad7d3k.svg";
    readonly "chevron-down": "v1699953557/icons/botfld6brychmttwtv6u.svg";
    readonly linkedin: "v1699953592/icons/leqneklorqqzb1zo6rf1.svg";
    readonly "magic-carpet": "v1699953622/icons/jifivg9xxm7sb0fjdilm.svg";
    readonly books: "v1699953657/icons/hz4l3iq6i68kazvkvorq.svg";
    readonly "supervision-level": "v1699953696/icons/cwqhknapp3maa4g0t3lj.svg";
    readonly "quiz-white": "v1699953730/icons/gpcehpgr9mqoumsa25xe.svg";
    readonly "additional-material": "v1699953798/icons/ntoq4tqvcm2uj1pajubt.svg";
    readonly "slide-deck-3": "v1699953830/icons/sm92moja9d5utu3cj16c.svg";
    readonly "sign-language": "v1699953861/icons/ns94ozvozzi22enxkx0x.svg";
    readonly external: "v1699953892/icons/hlxmejse3mcr4tqo6t8u.svg";
    readonly "equipment-required": "v1699953925/icons/pw22bdhj2vrzfv2ogi4e.svg";
    readonly "chevron-left": "v1707752509/icons/rbvzan0ozubmr4j0uqdn.svg";
    readonly download: "v1699953991/icons/dk0f6a6hdpzxftjosngn.svg";
    readonly search: "v1704901279/icons/canbi3fuz5fanzom2hvi.svg";
    readonly "chevron-up": "v1699954058/icons/pay71thmhhylj7z28sj1.svg";
    readonly go: "v1699954090/icons/vdzptyvmitylra8x4usy.svg";
    readonly copyright: "v1699954118/icons/boiod3rflocgsnfokyo8.svg";
    readonly project: "v1699954186/icons/zofq5pheud6spnwjpewk.svg";
    readonly "slide-deck": "v1699954241/icons/sjjy5f3g4eciwcuxxr33.svg";
    readonly "content-guidance": "v1699954277/icons/tm3uhcqenaznq4fxys7j.svg";
    readonly tick: "v1699954310/icons/efd3esaor6zqk7seh6kt.svg";
    readonly instagram: "v1699954343/icons/ayfeljric0kkimdymvva.svg";
    readonly dot: "v1699954371/icons/knykdclphkm8lgff4u2g.svg";
    readonly warning: "v1704901279/icons/zzszodmk7fvxm9xzzg9s.svg";
    readonly "lightbulb-yellow": "v1705078631/icons/q2v4sqxouy1ngcajoavv.svg";
    readonly lightbulb: "v1705078631/icons/zldisxmbff36z68rwcef.svg";
    readonly quiz: "v1705416077/icons/kaaizjcudy0jfgfrrdel.svg";
    readonly video: "v1705416078/icons/wzey1zfxrvv3apeebbf5.svg";
    readonly intro: "v1705662092/icons/pl7bnmb13txese9yxkjv.svg";
    readonly loopdown: "v1699887218/ui-graphics/loopdown.svg";
    readonly "teacher-lesson": "v1714060653/icons/teacher-lesson.svg";
    readonly "teacher-unit": "v1714060657/icons/teacher-unit.svg";
    readonly "move-arrows": "v1709052869/icons/hoddjsgpzkszgvnmn91q.svg";
    readonly info: "v1709052869/icons/Icon_Info_vsx3xi.svg";
    readonly play: "v1732099511/icons/g1xehzuhjnb0xeftmdno.svg";
    readonly "bookmark-outlined": "v1734519491/icons/bookmark-outlined_rxe5v0.svg";
    readonly "bookmark-filled": "v1734519491/icons/bookmark-filled_jz828n.svg";
    readonly "microsoft-teams": "v1736429692/microsoft-teams_gelfmi.svg";
    readonly "google-classroom": "v1736429692/google-classroom_pedfpd.svg";
    readonly clipboard: "v1749031463/icons/clipboard_yll2yj.svg";
    readonly "book-steps": "v1749034739/icons/book-steps_qwku6h.svg";
    readonly "free-tag": "v1749033815/icons/free-tag_lijptf.svg";
    readonly threads: "v1749034800/icons/threads_sqlqoe.svg";
    readonly spreadsheet: "v1754386968/icons/spreadsheet_rsndeb.svg";
    readonly "curriculum-plan": "v1754386969/icons/curriculum-plan_qygyuo.svg";
    readonly data: "v1763393164/icons/data-illustration_ukwdxg.svg";
    readonly chatting: "v1763393163/icons/chatting-illustration_l52zaf.svg";
    readonly "snack-break": "v1763393167/icons/snackbreak_illustration_fguw7l.svg";
    readonly "subject-art": "v1706616347/subject-icons/art.svg";
    readonly "subject-biology": "v1706616415/subject-icons/biology.svg";
    readonly "subject-chemistry": "v1706616415/subject-icons/chemistry.svg";
    readonly "subject-citizenship": "v1706616415/subject-icons/citizenship.svg";
    readonly "subject-gcse-citizenship": "v1706616415/subject-icons/citizenship.svg";
    readonly "subject-core-citizenship": "v1706616415/subject-icons/citizenship.svg";
    readonly "subject-combined-science": "v1734523570/subject-icons/science.svg";
    readonly "subject-communication-and-language": "v1706616415/subject-icons/communication-and-language.svg";
    readonly "subject-computing": "v1729171080/subject-icons/computing.svg";
    readonly "subject-computer-science": "v1729171080/subject-icons/computing.svg";
    readonly "subject-core-computing": "v1729171080/subject-icons/computing.svg";
    readonly "subject-cooking-nutrition": "v1734523014/subject-icons/cooking-nutrition.svg";
    readonly "subject-computing-non-gcse": "v1729171080/subject-icons/computing.svg";
    readonly "subject-creative-arts": "v1706616415/subject-icons/creative-arts.svg";
    readonly "subject-design-technology": "v1706616417/subject-icons/design-technology.svg";
    readonly "subject-drama": "v1706616417/subject-icons/drama.svg";
    readonly "subject-english": "v1706616417/subject-icons/english.svg";
    readonly "subject-english-language": "v1706616419/subject-icons/language.svg";
    readonly "subject-english-grammar": "v1706616417/subject-icons/english-grammar.svg";
    readonly "subject-english-handwriting": "v1706616419/subject-icons/handwriting.svg";
    readonly "subject-english-reading-for-pleasure": "v1706616421/subject-icons/literature.svg";
    readonly "subject-english-spelling": "v1706616417/subject-icons/english-spelling.svg";
    readonly "subject-english-reading-writing-oracy": "v1706616424/subject-icons/reading-writing-oracy.svg";
    readonly "subject-english-vocabulary": "v1706616425/subject-icons/vocabulary.svg";
    readonly "subject-expressive-arts-and-design": "v1706616415/subject-icons/creative-arts.svg";
    readonly "subject-financial-education": "v1729171111/subject-icons/finance.svg";
    readonly "subject-french": "v1729171111/subject-icons/french.svg";
    readonly "subject-geography": "v1734523108/subject-icons/geography.svg";
    readonly "subject-german": "v1734523165/subject-icons/german.svg";
    readonly "subject-history": "v1728568980/subject-icons/history.svg";
    readonly "subject-independent-living": "v1706616419/subject-icons/independent-living.svg";
    readonly "subject-latin": "v1706616420/subject-icons/latin.svg";
    readonly "subject-literacy": "v1706616417/subject-icons/english.svg";
    readonly "subject-maths": "v1706616421/subject-icons/maths.svg";
    readonly "subject-music": "v1728570203/subject-icons/music-hollow.svg";
    readonly "subject-numeracy": "v1706616422/subject-icons/numeracy.svg";
    readonly "occupational-therapy": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-personal-social-and-emotional-development": "v1706616423/subject-icons/rshe-pshe.svg";
    readonly "subject-physical-development": "v1706616422/subject-icons/physical-development.svg";
    readonly "subject-physical-education": "v1728568932/subject-icons/physical-education.svg";
    readonly "subject-core-physical-education": "v1728568932/subject-icons/physical-education.svg";
    readonly "subject-gcse-physical-education": "v1728568932/subject-icons/physical-education.svg";
    readonly "subject-physical-therapy": "v1706632882/subject-icons/physical-therapy.svg";
    readonly "subject-physics": "v1728568898/subject-icons/physics.svg";
    readonly "subject-religious-education": "v1706616425/subject-icons/religious-education.svg";
    readonly "subject-core-religious-education": "v1706616425/subject-icons/religious-education.svg";
    readonly "subject-gcse-religious-education": "v1706616425/subject-icons/religious-education.svg";
    readonly "subject-rshe-pshe": "v1706616423/subject-icons/rshe-pshe.svg";
    readonly "subject-rshe": "v1706616423/subject-icons/rshe-pshe.svg";
    readonly "subject-philosophy": "v1741794495/subject-icons/philosophy.svg";
    readonly "subject-social-science": "v1741794495/subject-icons/social-science.svg";
    readonly "subject-theology": "v1741794496/subject-icons/theology.svg";
    readonly "subject-science": "v1734523570/subject-icons/science.svg";
    readonly "subject-sensory-integration": "v1706626743/subject-icons/sensory-integration.svg";
    readonly "subject-spanish": "v1729171166/subject-icons/spanish.svg";
    readonly "subject-speech-and-language-therapy": "v1706632882/subject-icons/speech-and-language.svg";
    readonly "subject-specialist": "v1706616415/subject-icons/communication-and-language.svg";
    readonly "subject-therapy": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-therapies": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-occupational-therapy": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-understanding-the-world": "v1706616425/subject-icons/understanding-the-world.svg";
    readonly swimming: "v1728649514/subject-icons/swimming.svg";
    readonly "homepage-robot-waving": "v1734523528/homepage/robot_waving_malpc3.svg";
    readonly "homepage-three-pupils": "v1734523221/homepage/image-students_g0jtxe.svg";
    readonly "homepage-teacher": "v1734523680/homepage/teacher-carrying-stuff_gab2ec.svg";
    readonly "homepage-teacher-map": "v1734523721/homepage/teacher-reading-map_glwhyh.svg";
    readonly "audio-clip-large": "v1731950937/teacher-journey/audio_clip.svg";
    readonly "audio-clip-small": "v1731951210/teacher-journey/audio_clip_small.svg";
    readonly "box-border-bottom": "v1734537219/OWA/ui-graphics/box-border-bottom_oa1riy.svg";
    readonly "box-border-left": "v1734537223/OWA/ui-graphics/box-border-left_eqgplm.svg";
    readonly "box-border-right": "v1734537228/OWA/ui-graphics/box-border-right_unznsm.svg";
    readonly "box-border-top": "v1734537228/OWA/ui-graphics/box-border-right_unznsm.svg";
    readonly "bubble-1": "v1734537172/OWA/ui-graphics/bubble-1_nhgg0w.svg";
    readonly "bubble-2": "v1734537180/OWA/ui-graphics/bubble-2_mfms6f.svg";
    readonly burst: "v1734537152/OWA/ui-graphics/burst_k0mkht.svg";
    readonly confetti: "v1763546694/ui-graphics/confetti-background_xbvfrc.svg";
    readonly "header-underline": "v1734536947/OWA/ui-graphics/header-underline_ejbffz.svg";
    readonly "icon-background-square": "v1734537276/OWA/ui-graphics/icon-background-square_qajipb.svg";
    readonly "looping-arrow-1": "v1734537133/OWA/ui-graphics/looping-arrow-1_zizllb.svg";
    readonly "looping-line-1": "v1734536929/OWA/ui-graphics/looping-line-1_krbrht.svg";
    readonly "looping-line-2": "v1734536933/OWA/ui-graphics/looping-line-2_sdinei.svg";
    readonly "looping-line-3": "v1734537015/OWA/ui-graphics/looping-line-3_b8dque.svg";
    readonly "looping-line-4": "v1734537039/OWA/ui-graphics/looping-line-4_xtjj4r.svg";
    readonly "looping-line-5": "v1740665310/OWA/ui-graphics/looping-line-5_vdknco.svg";
    readonly "speech-bubble": "v1734537300/OWA/ui-graphics/speech-bubble_magqjf.svg";
    readonly "tag-promotional": "v1734537244/OWA/ui-graphics/tag-promotional_v4p3oa.svg";
    readonly "tick-mark-happiness": "v1734537080/OWA/ui-graphics/tick-mark-happiness_fyst07.svg";
    readonly "underline-1": "v1734537060/OWA/ui-graphics/underline-1_zaegqi.svg";
    readonly image: "v1763680546/icons/Icon_Image_uatq6d.svg";
    readonly logo: "v1711468346/logo-mark.svg";
    readonly trash: "v1764692488/icons/icon_delete_edzcua.svg";
};
type IconName = keyof typeof icons;

declare const oakIconNames: ("data" | "search" | "video" | "filter" | "image" | "copy" | "x" | "download" | "error" | "play" | "question-mark" | "ai" | "ai-additional-material" | "ai-quiz" | "ai-slide-deck" | "ai-worksheet" | "home" | "send" | "rocket" | "edit" | "expand" | "minimise" | "hamburger" | "cross" | "bell" | "twitter" | "worksheet" | "facebook" | "share" | "arrow-right" | "arrow-down" | "arrow-left" | "arrow-up" | "worksheet-3" | "chevron-right" | "save" | "success" | "quiz-3" | "chevron-down" | "linkedin" | "magic-carpet" | "books" | "supervision-level" | "quiz-white" | "additional-material" | "slide-deck-3" | "sign-language" | "external" | "equipment-required" | "chevron-left" | "chevron-up" | "go" | "copyright" | "project" | "slide-deck" | "content-guidance" | "tick" | "instagram" | "dot" | "warning" | "lightbulb-yellow" | "lightbulb" | "quiz" | "intro" | "loopdown" | "teacher-lesson" | "teacher-unit" | "move-arrows" | "info" | "bookmark-outlined" | "bookmark-filled" | "microsoft-teams" | "google-classroom" | "clipboard" | "book-steps" | "free-tag" | "threads" | "spreadsheet" | "curriculum-plan" | "chatting" | "snack-break" | "subject-art" | "subject-biology" | "subject-chemistry" | "subject-citizenship" | "subject-gcse-citizenship" | "subject-core-citizenship" | "subject-combined-science" | "subject-communication-and-language" | "subject-computing" | "subject-computer-science" | "subject-core-computing" | "subject-cooking-nutrition" | "subject-computing-non-gcse" | "subject-creative-arts" | "subject-design-technology" | "subject-drama" | "subject-english" | "subject-english-language" | "subject-english-grammar" | "subject-english-handwriting" | "subject-english-reading-for-pleasure" | "subject-english-spelling" | "subject-english-reading-writing-oracy" | "subject-english-vocabulary" | "subject-expressive-arts-and-design" | "subject-financial-education" | "subject-french" | "subject-geography" | "subject-german" | "subject-history" | "subject-independent-living" | "subject-latin" | "subject-literacy" | "subject-maths" | "subject-music" | "subject-numeracy" | "occupational-therapy" | "subject-personal-social-and-emotional-development" | "subject-physical-development" | "subject-physical-education" | "subject-core-physical-education" | "subject-gcse-physical-education" | "subject-physical-therapy" | "subject-physics" | "subject-religious-education" | "subject-core-religious-education" | "subject-gcse-religious-education" | "subject-rshe-pshe" | "subject-rshe" | "subject-philosophy" | "subject-social-science" | "subject-theology" | "subject-science" | "subject-sensory-integration" | "subject-spanish" | "subject-speech-and-language-therapy" | "subject-specialist" | "subject-therapy" | "subject-therapies" | "subject-occupational-therapy" | "subject-understanding-the-world" | "swimming" | "homepage-robot-waving" | "homepage-three-pupils" | "homepage-teacher" | "homepage-teacher-map" | "audio-clip-large" | "audio-clip-small" | "box-border-bottom" | "box-border-left" | "box-border-right" | "box-border-top" | "bubble-1" | "bubble-2" | "burst" | "confetti" | "header-underline" | "icon-background-square" | "looping-arrow-1" | "looping-line-1" | "looping-line-2" | "looping-line-3" | "looping-line-4" | "looping-line-5" | "speech-bubble" | "tag-promotional" | "tick-mark-happiness" | "underline-1" | "logo" | "trash")[];
type OakIconName = IconName;
type OakIconProps = Omit<OakImageProps, "alt" | "src"> & {
    /**
     * The name of the icon to display
     *
     * Accepts an icon name token
     */
    iconName: OakIconName;
    alt?: string;
    iconWidth?: OakAllSpacingToken;
    iconHeight?: OakAllSpacingToken;
};
/**
 * returns true if the given string is a valid `OakIconName`
 */
declare function isValidIconName(iconName: string): iconName is OakIconName;
/**
 * returns a Icon URL from Cloudinary if is a valid icon, otherwise returns undefined
 */
declare function generateOakIconURL(iconName: string): string;
/**
 * A wrapper around OakImage which uses the image-map.json file to map icon names to image paths.
 */
declare const OakIcon: (props: OakIconProps) => React__default.JSX.Element;

type OakKbdProps = {
    children: ReactNode;
};
/**
 * Represents textual user input from a keyboard, voice input, or any other text entry device.
 * */
declare const OakKbd: ({ children }: OakKbdProps) => React__default.JSX.Element;

type ListStyleProps = {
    /**
     * Sets the `list-style` CSS property of the element.
     *
     * Accepts a `list-style` value or a responsive array of `list-style` values.
     */
    $listStyle?: ResponsiveValues<CSSProperties$1["listStyle"]>;
};

type OakLIProps = OakFlexProps & TypographyStyleProps & ListStyleProps & DisplayStyleProps;
/**
 * Styled `li` (list item) component.
 *
 * ## Usage
 *
 * Places where we directly want to style a list item
 *
 **/
declare const OakLI: styled_components.StyledComponent<"li", styled_components.DefaultTheme, DisplayStyleProps & {
    $flexDirection?: ResponsiveValues<csstype.Property.FlexDirection | undefined>;
    $flexWrap?: ResponsiveValues<csstype.Property.FlexWrap | undefined>;
    $alignItems?: ResponsiveValues<csstype.Property.AlignItems | undefined>;
    $alignContent?: ResponsiveValues<csstype.Property.AlignContent | undefined>;
    $justifyContent?: ResponsiveValues<csstype.Property.JustifyContent | undefined>;
    $alignSelf?: ResponsiveValues<csstype.Property.AlignSelf | undefined>;
    $flexGrow?: ResponsiveValues<csstype.Property.FlexGrow | undefined>;
    $flexShrink?: ResponsiveValues<csstype.Property.FlexShrink | undefined>;
    $order?: ResponsiveValues<csstype.Property.Order | undefined>;
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    $gap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $columnGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $rowGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    focusable?: boolean | undefined;
} & {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
} & ListStyleProps, never>;

type OakLabelProps = TypographyStyleProps & ColorStyleProps;
/**
 * Label renders a `label` element, exposing all the typography props.
 * ## Usage
 * Use this component when you want to apply styles to a label, likely within
 * a form.
 */
declare const OakLabel: styled_components.StyledComponent<"label", styled_components.DefaultTheme, TypographyStyleProps & ColorStyleProps, never>;

/**
 * This component will provide a default maxWidth and ph value, it take Flex props.
 * ## Usage
 * Use this component on pages to limit the max-width to a specific container.
 * This will make it easier to create full browser width or custom width containers on the same page
 * with different background colors / image url.
 */
declare const OakMaxWidth: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
} & {
    $flexDirection?: ResponsiveValues<csstype.Property.FlexDirection | undefined>;
    $flexWrap?: ResponsiveValues<csstype.Property.FlexWrap | undefined>;
    $alignItems?: ResponsiveValues<csstype.Property.AlignItems | undefined>;
    $alignContent?: ResponsiveValues<csstype.Property.AlignContent | undefined>;
    $justifyContent?: ResponsiveValues<csstype.Property.JustifyContent | undefined>;
    $alignSelf?: ResponsiveValues<csstype.Property.AlignSelf | undefined>;
    $flexGrow?: ResponsiveValues<csstype.Property.FlexGrow | undefined>;
    $flexShrink?: ResponsiveValues<csstype.Property.FlexShrink | undefined>;
    $order?: ResponsiveValues<csstype.Property.Order | undefined>;
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    $gap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $columnGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $rowGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    focusable?: boolean | undefined;
}, never>;

type OakOLProps = MarginStyleProps & ColorStyleProps & TypographyStyleProps;
/**
 * Styled `ol` (ordered list) component.
 *
 * ## Usage
 *
 * Use where we have an ordered list to ensure numbers are styled
 *
 * */
declare const OakOL: styled_components.StyledComponent<"ol", styled_components.DefaultTheme, MarginStyleProps & ColorStyleProps & TypographyStyleProps, never>;

type OakPProps = MarginStyleProps & TypographyStyleProps & ColorStyleProps;
/**
 * Styled `p` (paragraph) component.
 * ## Usage
 * In general, using a `p` as a descendant of `<Body>` should suffice.
 * However, if you want different styles for a particular paragraph,
 * you can use this component to apply additional styles.
 */
declare const OakP: styled_components.StyledComponent<"p", styled_components.DefaultTheme, MarginStyleProps & TypographyStyleProps & ColorStyleProps, never>;

/**
 * This component will visually hide its contents but will still be available
 * to screen readers, assitive technology, and scrapers.
 * ## Usage
 * Use this component in places where content shouldn't be visible, but should
 * be accessible to assistive technology.
 */
declare const OakScreenReader: styled_components.StyledComponent<"span", styled_components.DefaultTheme, {}, never>;

type OakSpanProps = ColorStyleProps & OpacityStyleProps & MarginStyleProps & PaddingStyleProps & BorderStyleProps & TypographyStyleProps & PositionStyleProps;
/**
 * Span renders a `span` (inline text) component, exposing all the typography props.
 * ## Usage
 * Use this component when you want to apply styles to a piece of inline text.
 */
declare const OakSpan: styled_components.StyledComponent<"span", styled_components.DefaultTheme, ColorStyleProps & OpacityStyleProps & MarginStyleProps & PaddingStyleProps & BorderStyleProps & TypographyStyleProps & PositionStyleProps, never>;

/**
 * Map of the svg names to the actual svg components
 * Only components that are used in the OakSvg component should be added here
 * Should be used only in cases where OakIcon can't be used and if this list grows much bigger in the future we should consider refactoring
 */
declare const svgMap: {
    "header-underline": () => React__default.JSX.Element;
    underline: () => React__default.JSX.Element;
    "horizontal-rule": () => React__default.JSX.Element;
    "underline-3": () => React__default.JSX.Element;
    "button-border-top": () => React__default.JSX.Element;
    "button-border-bottom": () => React__default.JSX.Element;
    "button-border-left": () => React__default.JSX.Element;
    "button-border-right": () => React__default.JSX.Element;
    "icon-background": () => React__default.JSX.Element;
    scribble: () => React__default.JSX.Element;
};
type OakSvgNames = keyof typeof svgMap;
type OakSvgProps = OakBoxProps & {
    /**
     * The name of the svg to render
     * Accepts an svg name token from the svgMap
     */
    name: OakSvgNames;
    color?: OakColorToken;
};
/**
 * This is component used for rendering SVGs that don't belong to be rendered with OakIcon component
 * ie. UI elements that are not icons/illustratons but are part of the design system (underline, etc)
 */
declare const OakSvg: FC<OakSvgProps>;

type OakTextAreaProps = Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & StyledTextAreaProps;
type StyledTextAreaProps = SizeStyleProps & BorderStyleProps & SpacingStyleProps & TypographyStyleProps & PositionStyleProps & ColorStyleProps;
/**
 *
 * A textarea that can be used for longer text inputs where text should wrap.
 *
 */
declare const OakTextArea: styled_components.StyledComponent<React__default.ForwardRefExoticComponent<Omit<React__default.DetailedHTMLProps<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & SizeStyleProps & BorderStyleProps & PaddingStyleProps & MarginStyleProps & TypographyStyleProps & PositionStyleProps & ColorStyleProps & React__default.RefAttributes<HTMLTextAreaElement>>, styled_components.DefaultTheme, {}, never>;

type OakThemeProviderProps = {
    theme: OakTheme;
    children: React__default.ReactNode;
};
/**
 *
 * OakThemeProvider wraps Styled Components ThemeProvider allowing the use of the custom type OakTheme.
 *
 */
declare const OakThemeProvider: ({ theme, children, }: OakThemeProviderProps) => React__default.JSX.Element;

type OakTypographyProps = OakBoxProps & TypographyStyleProps;
/**
 * The Typography component sets a typography style context from which children
 * inherit style properties through the cascade.
 * ## Usage
 * This should be the primary component to set a typography context.
 * Use this component whenever you want to style blocks of 'body' text.
 */
declare const OakTypography: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
}, never>;

type OakULProps = OakBoxProps & OakFlexProps & {
    $reset?: boolean;
};
/**
 * Styled `ul` (unordered list) component.
 *
 * ## Usage
 *
 * Resets browser spacing and other styles, accepts BoxProps' style props.
 *
 * */
declare const OakUL: styled_components.StyledComponent<"ul", styled_components.DefaultTheme, {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler | undefined;
} & {
    $flexDirection?: ResponsiveValues<csstype.Property.FlexDirection | undefined>;
    $flexWrap?: ResponsiveValues<csstype.Property.FlexWrap | undefined>;
    $alignItems?: ResponsiveValues<csstype.Property.AlignItems | undefined>;
    $alignContent?: ResponsiveValues<csstype.Property.AlignContent | undefined>;
    $justifyContent?: ResponsiveValues<csstype.Property.JustifyContent | undefined>;
    $alignSelf?: ResponsiveValues<csstype.Property.AlignSelf | undefined>;
    $flexGrow?: ResponsiveValues<csstype.Property.FlexGrow | undefined>;
    $flexShrink?: ResponsiveValues<csstype.Property.FlexShrink | undefined>;
    $order?: ResponsiveValues<csstype.Property.Order | undefined>;
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    $gap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $columnGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $rowGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    focusable?: boolean | undefined;
} & {
    $reset?: boolean | undefined;
}, never>;

type OakAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * The heading tag the header of the accordion is to assume
     */
    headerTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * Slot to place content after the header and outside the button
     */
    headerAfterSlot?: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
};
/**
 * An accordion component that can be used to show/hide content
 */
declare const OakAccordion: (props: OakAccordionProps) => React__default.JSX.Element;

type OakBackLinkProps<C extends ElementType> = {
    as?: C;
    label?: string;
} & ComponentPropsWithoutRef<C>;
/**
 * Used to navigate the user back to the previous page in the app.
 *
 * Polymorphic rendering as any HTML element or component using `as` — defaults to `a`.
 *
 * E.g.
 *
 * * Default (Anchor) `<OakBackLink href="https://www.thenational.academy/" />`
 * * Button `<OakBackLink as="button" onClick={() => goBack(-1)} />`
 */
declare const OakBackLink: <C extends React__default.ElementType = "a">({ as, label, ...props }: OakBackLinkProps<C>) => React__default.JSX.Element;

type OakBasicAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * Optional subheading to display above the fold
     */
    subheading?: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
} & BorderStyleProps & FlexStyleProps;
declare const OakBasicAccordion: ({ header, children, id, initialOpen, subheading, ...styleProps }: OakBasicAccordionProps) => React__default.JSX.Element;

type OakBulletListProps = {
    listItems: string[];
} & OakSpanProps;
/**
 * An inline bulleted list
 */
declare const OakBulletList: (props: OakBulletListProps) => React__default.JSX.Element;

type OakButtonAsRadioGroupProps = {
    label?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    name: string;
    disabled?: boolean;
    children: React__default.ReactNode;
    onChange?: (value: string) => void;
    /**
     * Sets the value of the radio group
     * for use as a controlled component
     */
    value?: string;
    /**
     * Sets the initial value of the radio group
     * for use as an uncontrolled component
     */
    defaultValue?: string;
} & Pick<TypographyStyleProps, "$font"> & ColorStyleProps & Pick<FlexStyleProps, "$flexDirection" | "$alignItems" | "$gap" | "$flexWrap" | "$justifyContent">;
/**
 *
 * A react context supporting a list of mutually exclusive options rendered as buttons.
 *
 * ## Usage
 *
 * the nested items should be OakSecondaryButtonAsRadio or implement the same logic.
 * use the callback onChange to get the value of the clicked button.
 *
 */
declare const OakButtonAsRadioGroup: (props: OakButtonAsRadioGroupProps) => React__default.JSX.Element;

type ElementProp<C extends ElementType> = {
    element?: C;
};
type PolymorphicPropsWithoutRef<C extends ElementType> = ElementProp<C> & ComponentPropsWithoutRef<C>;
type PolymorphicRef<C extends React.ElementType> = ComponentPropsWithRef<C>["ref"];
type PolymorphicPropsWithRef<C extends ElementType> = ElementProp<C> & ComponentPropsWithoutRef<C> & {
    ref?: PolymorphicRef<C>;
};

type StyledButtonProps = TypographyStyleProps & SpacingStyleProps & ColorStyleProps & DisplayStyleProps & BorderStyleProps & DropShadowStyleProps & {
    isLoading?: boolean;
};
type InternalButtonProps = StyledButtonProps & {
    onHovered?: (event: React__default.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;
};

type OakLoadingSpinnerTokenSubset = Extract<OakAllSpacingToken, "spacing-20" | "spacing-24">;
type InternalShadowRectButtonProps = Omit<InternalButtonProps, "$pa" | "$ph" | "$pv" | "$pt" | "$pb" | "$ba" | "$borderRadius" | "$borderColor" | "$background" | "$color"> & {
    iconName?: OakIconName;
    iconAriaHidden?: boolean;
    /**
     *  we can set a custom icon if we want different sizes and padding
     */
    iconOverride?: React__default.ReactNode;
    isTrailingIcon?: boolean;
    /**
     *  we can arrange the icon vertically or horizontally
     */
    iconLayout?: FlexStyleProps["$flexDirection"];
    /**
     *  we can adjust the gap between the icon and the text
     */
    loadingSpinnerSize?: OakLoadingSpinnerTokenSubset;
    iconGap?: FlexStyleProps["$gap"];
    defaultTextColor: OakCombinedColorToken;
    defaultBackground: OakCombinedColorToken;
    defaultBorderColor: OakCombinedColorToken;
    hoverTextColor: OakCombinedColorToken;
    hoverBackground: OakCombinedColorToken;
    hoverBorderColor: OakCombinedColorToken;
    disabledBackground: OakCombinedColorToken;
    disabledBorderColor: OakCombinedColorToken;
    disabledTextColor: OakCombinedColorToken;
    width?: SizeStyleProps["$width"];
    maxWidth?: SizeStyleProps["$maxWidth"];
    hoverShadow?: OakDropShadowToken | null;
    pv?: SpacingStyleProps["$pv"];
    ph?: SpacingStyleProps["$ph"];
    font?: TypographyStyleProps["$font"];
    innerWidth?: SizeStyleProps["$width"];
    textAlign?: TypographyStyleProps["$textAlign"];
} & PositionStyleProps;

type OakSecondaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSecondaryButton: <C extends React__default.ElementType = "button">({ element, ...rest }: OakSecondaryButtonProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type ButtonComponent = <C extends React__default.ElementType = "button">({ element, ...rest }: OakSecondaryButtonProps & PolymorphicPropsWithoutRef<C>) => React__default.JSX.Element;
type OakButtonWithDropdownProps = {
    primaryActionText: string;
    primaryActionIcon?: OakIconName;
    onPrimaryAction?: () => void;
    children?: React__default.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    leadingButtonIcon?: React__default.ReactNode;
    ariaDescription?: string;
    "data-testid"?: string;
    buttonComponent: ButtonComponent;
    dropdownTopSpacing?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    flexWidth?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
};
/**
 * A shared component that provides dropdown functionality for any button type.
 * Accepts the button component as a prop to eliminate code duplication.
 */
declare const OakButtonWithDropdown: {
    ({ primaryActionText, primaryActionIcon, onPrimaryAction, children, isLoading, disabled, ariaLabel, ariaDescription, leadingButtonIcon, "data-testid": dataTestId, buttonComponent: ButtonComponent, dropdownTopSpacing, flexWidth, }: OakButtonWithDropdownProps): React__default.JSX.Element;
    Divider(): React__default.ReactElement;
};

type InternalCardProps = OakFlexProps;

type InternalCardWithBackgroundElementProps = InternalCardProps & {
    backgroundElement: ReactElement;
};

type InternalStyledSvgProps = {
    $fill?: ResponsiveValues<OakCombinedColorToken>;
    $stroke?: ResponsiveValues<OakCombinedColorToken>;
    $strokeWidth?: ResponsiveValues<OakBorderWidthToken>;
};

type OakCardWithHandDrawnBorderProps = Omit<InternalCardWithBackgroundElementProps, "backgroundElement"> & {
    fill?: InternalStyledSvgProps["$fill"];
    stroke?: InternalStyledSvgProps["$stroke"];
    strokeWidth?: InternalStyledSvgProps["$strokeWidth"];
};
/**
 * A flexed card with a hand-drawn border
 *
 * An optional `stroke` and `fill` can be applied to change the color of the border
 */
declare const OakCardWithHandDrawnBorder: ({ $pa, fill, stroke, $width, ...props }: OakCardWithHandDrawnBorderProps) => React__default.JSX.Element;

type OakCarouselProps = {
    content: ReactNode[];
    isLooping?: boolean;
    backLabel: string;
    fwdLabel: string;
    containerLabel: string;
};
declare const OakCarousel: ({ content, isLooping, backLabel, fwdLabel, containerLabel, }: OakCarouselProps) => React__default.JSX.Element;

/**
 *
 * These components can be used with InternalCheckBoxWrapper which allows for customisable icons
 *
 * Several flavours of checkbox are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 */
type BaseCheckBoxProps = {
    id: string;
    disabled?: boolean;
    value: string;
    name?: string;
    /**
     * Uncontrolled checked state
     */
    defaultChecked?: boolean;
    /**
     * Controlled checked state
     */
    checked?: boolean;
    onHovered?: (value: string, id: string, duration: number) => void;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "data-testid"?: string;
};

type InternalCheckBoxLabelProps = {
    labelAlignItems?: FlexStyleProps["$alignItems"];
    labelGap?: FlexStyleProps["$gap"];
    disabled?: boolean;
    pointerEvents?: CSSProperties$1["pointerEvents"];
    "data-testid"?: string;
} & OakLabelProps;

type OakCheckBoxProps = BaseCheckBoxProps & {
    checkboxSize?: OakAllSpacingToken;
    checkboxBorder?: OakBorderWidthToken;
    checkboxBorderRadius?: OakBorderRadiusToken;
    checkedBorderColor?: OakCombinedColorToken;
    uncheckedBorderColor?: OakCombinedColorToken;
    checkedIcon?: React__default.JSX.Element;
    checkedBackgroundFill?: boolean;
    hoverBorderRadius?: OakBorderRadiusToken;
    iconPadding?: OakInnerPaddingToken;
    defaultColor?: OakCombinedColorToken;
    disabledColor?: OakCombinedColorToken;
    displayValue?: string;
} & InternalCheckBoxLabelProps;
/**
 *
 * Default checkbox which can be extended to create specialised checkboxes.
 * - if provided, displayValue is used to display a different value to the value prop.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */
declare const OakCheckBox: (props: OakCheckBoxProps) => React__default.JSX.Element;

type OakCloseButtonProps = {
    onClose: () => void;
};
/**
 *
 * An icon button that can be used for closing items such as in navigation menus and modals.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14493-15312>
 *
 */
declare function OakCloseButton({ onClose, ...rest }: OakCloseButtonProps): React__default.JSX.Element;

type OakCollapsibleContentProps = ComponentProps<typeof OakFlex> & {
    /**
     * Whether the content is displayed or not
     */
    isOpen: boolean;
};
/**
 * A filled scrollable box that can be hidden with the `isOpen` prop.
 * Useful for hiding content that is not immediately relevant
 */
declare const OakCollapsibleContent: ({ isOpen, children, id, ...rest }: OakCollapsibleContentProps) => React__default.JSX.Element;

type OakCopyLinkButtonProps = {
    /**
     * Href of the link that should be copied
     */
    href?: string;
};
/**
 * Display copy link button
 */
declare const OakCopyLinkButton: ({ href }: OakCopyLinkButtonProps) => React__default.JSX.Element;

type OakDownloadCardProps = BaseCheckBoxProps & {
    titleSlot: React__default.ReactNode;
    fileSizeSlot?: React__default.ReactNode;
    formatSlot: React__default.ReactNode;
    iconName: IconName;
    displayValue?: string;
    asRadio?: boolean;
} & InternalCheckBoxLabelProps;
/**
 *
 * Used for choosing teaching resources, curriculum maps, or any downloadable items.
 *
 * Design document: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14795-5603>
 *
 */
declare const OakDownloadCard: (props: OakDownloadCardProps) => React__default.JSX.Element;

/**
 * Displays instructions for drag and drop functionality
 */
declare const OakDragAndDropInstructions: (props: ComponentPropsWithoutRef<typeof OakFlex>) => React__default.JSX.Element;

type OakDraggableProps = {
    /**
     * Whether the item is currently being dragged
     */
    isDragging?: boolean;
    /**
     * Present the element in a subdued state with hover effects disabled
     */
    isDisabled?: boolean;
    /**
     * Read only
     *
     * Disables hover effects
     */
    isReadOnly?: boolean;
    /**
     * Icon to display
     */
    iconName?: IconName;
    /**
     * Icon color when not being dragged or hovered
     */
    iconColor?: OakCombinedColorToken;
    /**
     * The alt text for the icon
     */
    iconAlt?: string;
    /**
     * The background color of the draggable when not being dragged or hovered
     */
    background?: OakCombinedColorToken;
    /**
     * The color of the draggable when not being dragged or hovered
     */
    color?: OakCombinedColorToken;
};
/**
 * The component has no intrinsic draggable functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
declare const OakDraggable: FC<ComponentPropsWithRef<OakDraggableProps & typeof OakBox>>;

type OakDraggableFeedbackProps = ComponentPropsWithoutRef<typeof OakDraggable> & {
    /**
     * Alters the appearance of the element to indicate whether or not it is in a correct state
     */
    feedback: "correct" | "incorrect";
};
/**
 * A draggable element that visually indicates whether or not its state is correct or not
 */
declare const OakDraggableFeedback: ({ feedback, ...props }: OakDraggableFeedbackProps) => React__default.JSX.Element;

type OakDroppableProps = {
    /**
     * Indicates whether a draggable is currently being dragged over the droppable
     */
    isOver?: boolean;
    /**
     * Present the element in a state making it clear that it can be dropped into
     */
    isDisabled?: boolean;
    /**
     * Give the droppable a highlight to draw attention to it
     */
    isHighlighted?: boolean;
    /**
     * A slot for a label to be displayed to the RHS of the droppable
     *
     * useful for giving the user a hint about what to drop
     */
    labelSlot?: ReactNode;
    /**
     * A slot for the draggable that is currently occupying the droppable
     */
    children?: ReactNode;
};
/**
 * A drop zone for a draggable
 *
 * Has no intrinsic drop functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
declare const OakDroppable: FC<OakDroppableProps & ComponentPropsWithRef<typeof OakFlex>>;

type OakFieldErrorProps = {
    children?: React__default.ReactNode;
};
/**
 *
 * OakFieldError renders a error message when passed children.
 *
 */
declare const OakFieldError: (props: OakFieldErrorProps) => React__default.JSX.Element | null;

type OakFilterDrawerProps = {
    /**
     * Called when the clear button is clicked
     */
    clearAllInputs: () => void;
    /**
     * The content of the modal.
     * Use with `<OakModalBody>` for best results.
     */
    children: ReactNode;
    /**
     * Slot for the footer of the modal.
     * Use with `<OakModalFooter>` for best results.
     */
    footerSlot?: ReactNode;
    /**
     * Indicates whether the modal is open or closed
     */
    isOpen: boolean;
    /**
     * Called when the modal is closed
     */
    onClose: () => void;
    /**
     * The DOM container to render the modal portal into.
     *
     * @default document.body
     */
    domContainer?: Element;
    /**
     * Optional z-index override.
     *
     * Defaults to token: `modal-dialog`
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     *
     * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
     */
    zIndex?: number;
    /**
     * Whether the modal should be anchored to the left side of the screen.
     */
    isLeftHandSide?: boolean;
} & Pick<HTMLAttributes<Element>, "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby">;
/**
 *
 * Based on the OakModal component, this component is a filter drawer that slides in from the right side of the screen.
 * Designed for mobile and tablet devices
 *
 * ### Callbacks
 * clearAllInputs: used to clear filter options
 *
 */
declare const OakFilterDrawer: ({ isOpen, domContainer, onClose, zIndex, children, clearAllInputs, footerSlot, ...rest }: OakFilterDrawerProps) => React__default.ReactPortal | null;

type StyledInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & SpacingStyleProps & SizeStyleProps;
type InternalTextInputProps = Omit<StyledInputProps, "placeholder"> & {
    /**
     * A textual hint or example to display before a value has been entered
     */
    placeholder?: string;
    /**
     * Fired only when the input is focused for the first time
     */
    onInitialFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

type OakFormInputProps = {
    /**
     * Disables user input and updates the appearance accordingly.
     */
    disabled?: boolean;
    /**
     * Sets the value. Use this in controlled components;
     */
    value?: string;
    /**
     * Sets the initial value. Use this for an uncontrolled component;
     */
    defaultValue?: string;
    /**
     * Used to target the input element in tests.
     */
    "data-testid"?: string;
    /**
     * Callback function that is called when the input value changes.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Alters the appearance of the input field to indicate when the input is invalid.
     */
    invalid?: boolean;
    /**
     * Give the field a highlight to draw attention to it
     */
    invalidBorderColor?: OakCombinedColorToken;
    color?: OakCombinedColorToken;
    background?: OakCombinedColorToken;
    borderColor?: OakCombinedColorToken;
    hoverBackground?: OakCombinedColorToken;
    hoverBorderColor?: OakCombinedColorToken;
    focusBorderColor?: OakCombinedColorToken;
    focusBackgroundColor?: OakCombinedColorToken;
    disabledColor?: OakCombinedColorToken;
    disabledBorderColor?: OakCombinedColorToken;
    disabledBackgroundColor?: OakCombinedColorToken;
    /**
     * The width of the surrounding div - the input will fill this with padding.
     */
    wrapperWidth?: SizeStyleProps["$width"];
    wrapperMaxWidth?: SizeStyleProps["$maxWidth"];
} & InternalTextInputProps;
/**
 * Default input which can be extended to create specialised inputs.
 */
declare const OakFormInput: ({ type, borderColor, focusBorderColor, focusBackgroundColor, background, hoverBackground, hoverBorderColor, disabledBackgroundColor, color, disabledBorderColor, disabledColor, invalid, invalidBorderColor, wrapperWidth, wrapperMaxWidth, ...props }: OakFormInputProps) => React__default.JSX.Element;

interface OakFormInputWithLabelsProps {
    /**
     * The label for the input field.
     */
    label: string;
    /**
     * Optional helper text displayed below the label.
     */
    helperText?: string;
    /**
     * Placeholder text for the input field.
     */
    placeholder?: string;
    /**
     * Indicates if the input is invalid (to be used after form submission or validation).
     */
    invalid?: boolean;
    /**
     * Feedback text to display when the input is invalid.
     */
    invalidText?: string;
    /**
     * The value of the input field. Use this in controlled components.
     */
    value?: string;
    /**
     * The initial value of the input field. Use this in controlled components.
     */
    defaultValue?: string;
    /**
     * Disables the input field, preventing user interaction.
     */
    disabled?: boolean;
    /**
     * Optional name of the input field. This is used to identify the field in forms.
     */
    required?: boolean;
    inputName?: string;
    /**
     * Callback function that is called when the input value changes.
     */
    onChange?: React__default.ChangeEventHandler<HTMLInputElement>;
    /**
     * Callback function that is called when the input is focused initially.
     */
    onInitialFocus?: React__default.FocusEventHandler<HTMLInputElement>;
    /**
     * Callback function that is called when the input loses focus.
     */
    onBlur?: React__default.FocusEventHandler<HTMLInputElement>;
}
declare const OakFormInputWithLabels: ({ label, helperText, placeholder, invalid, invalidText, value, inputName, disabled, required, defaultValue, onChange, onInitialFocus, onBlur, }: OakFormInputWithLabelsProps) => React__default.JSX.Element;

type OakHandDrawnCardProps = Omit<InternalCardWithBackgroundElementProps, "backgroundElement"> & {
    fill?: InternalStyledSvgProps["$fill"];
    stroke?: InternalStyledSvgProps["$stroke"];
    strokeWidth?: InternalStyledSvgProps["$strokeWidth"];
};
/**
 * A flexed card with a hand-drawn filled background
 *
 * An optional `stroke` and `strokeWidth` can be applied to give the background a border
 */
declare const OakHandDrawnCard: ({ $pa, fill, stroke, strokeWidth, $width, ...props }: OakHandDrawnCardProps) => React__default.JSX.Element;

type OakHandDrawnBoxWithIconProps = Omit<OakHandDrawnCardProps, "children"> & {
    iconName: OakIconProps["iconName"];
    alt?: OakIconProps["alt"];
    iconColor?: OakIconProps["$colorFilter"];
    iconWidth?: OakIconProps["$width"];
    iconHeight?: OakIconProps["$height"];
};
/**
 * A hand-drawn card with an icon in the center
 */
declare const OakHandDrawnCardWithIcon: ({ iconName, iconColor, iconWidth, iconHeight, alt, $width, $height, $alignItems, $justifyContent, ...props }: OakHandDrawnBoxWithIconProps) => React__default.JSX.Element;

type OakHandDrawnFocusUnderlineProps = {
    FocusUnderlineColor?: InternalStyledSvgProps["$fill"];
} & SpacingStyleProps & SizeStyleProps;
/**
 * A Drawn FocusUnderline svg inside a flex container
 *
 * use prop FocusUnderlineColor to change the color of the FocusUnderline
 *
 * change the sizeProps of the flex container to change the size and dimentions of the FocusUnderline
 */
declare const OakHandDrawnFocusUnderline: (props: OakHandDrawnFocusUnderlineProps) => React__default.JSX.Element;

type OakHandDrawnHRProps = {
    hrColor?: InternalStyledSvgProps["$fill"];
} & SpacingStyleProps & SizeStyleProps;
/**
 * A Drawn HR svg inside a flex container
 *
 * use prop hrColor to change the color of the HR
 *
 * change the sizeProps of the flex container to change the size and dimentions of the HR
 */
declare const OakHandDrawnHR: (props: OakHandDrawnHRProps) => React__default.JSX.Element;

type InternalLinkProps = {
    /**
     * The icon to display before or after the children.
     */
    iconName?: OakIconProps["iconName"];
    /**
     * Whether the icon should be displayed after the children.
     */
    isTrailingIcon?: boolean;
    /**
     * Displays a loading spinner in place of the icon.
     */
    isLoading?: boolean;
    color: OakCombinedColorToken;
    visitedColor: OakCombinedColorToken;
    hoverColor: OakCombinedColorToken;
    activeColor: OakCombinedColorToken;
    disabledColor: OakCombinedColorToken;
    iconWidth?: OakAllSpacingToken;
    iconHeight?: OakAllSpacingToken;
};

type OakHoverLinkProps = Pick<InternalLinkProps, "iconName" | "isTrailingIcon" | "isLoading"> & {
    iconWidth?: OakAllSpacingToken;
    iconHeight?: OakAllSpacingToken;
};
type OakHoverLinkComponent = <C extends React__default.ElementType = "a">(props: {
    /**
     * This colours the link as disabled, but does not disable the link.
     * It should be used when the link is wrapped in an element which prevents cursor interaction, such as a card
     */
    displayDisabled?: boolean;
} & PolymorphicPropsWithRef<C> & OakHoverLinkProps) => React__default.ReactNode;
declare const OakHoverLink: OakHoverLinkComponent;

type ImageProps = OakImageProps & {
    iconName?: undefined;
};
type IconProps = OakIconProps & {
    src?: undefined;
};
type OakRoundIconProps = IconProps | ImageProps;
/**
 * A wrapper around `OakIcon` which applies a rounded background.
 * Supports either an icon name or an image src
 */
declare const OakRoundIcon: ({ $background, $borderRadius, $width, $height, $pa, className, ...rest }: OakRoundIconProps) => React__default.JSX.Element;

type InternalShadowRoundButtonProps = Omit<InternalButtonProps, "$pa" | "$ph" | "$pv" | "$ba" | "$borderRadius" | "$borderColor" | "$background" | "$color"> & {
    iconName?: OakIconName;
    isTrailingIcon?: boolean;
    defaultTextColor: OakCombinedColorToken;
    hoverTextColor: OakCombinedColorToken;
    disabledTextColor: OakCombinedColorToken;
    defaultIconBackground: OakCombinedColorToken;
    hoverIconBackground: OakCombinedColorToken;
    hoverIconColor?: OakCombinedColorToken;
    disabledIconBackground: OakCombinedColorToken;
    defaultIconColor?: OakRoundIconProps["$colorFilter"];
    disabledIconColor?: OakRoundIconProps["$colorFilter"];
    defaultIconBorderColor?: OakCombinedColorToken;
    disabledIconBorderColor?: OakCombinedColorToken;
    width?: SizeStyleProps["$width"];
    maxWidth?: SizeStyleProps["$maxWidth"];
    iconBackgroundSize: SizeStyleProps["$width"];
    iconSize: SizeStyleProps["$width"];
    hoverDropShadow?: OakDropShadowToken | null;
} & PositionStyleProps;
/**
 *
 * A styled button with round icons, not intended to be used directly.
 * Instead used by OakTertiaryButton and OakHintButton.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const InternalShadowRoundButton: <C extends React__default.ElementType = "button">(props: Omit<InternalButtonProps, "$pa" | "$ph" | "$pv" | "$ba" | "$borderColor" | "$color" | "$background" | "$borderRadius"> & {
    iconName?: "data" | "search" | "video" | "filter" | "image" | "copy" | "x" | "download" | "error" | "play" | "question-mark" | "ai" | "ai-additional-material" | "ai-quiz" | "ai-slide-deck" | "ai-worksheet" | "home" | "send" | "rocket" | "edit" | "expand" | "minimise" | "hamburger" | "cross" | "bell" | "twitter" | "worksheet" | "facebook" | "share" | "arrow-right" | "arrow-down" | "arrow-left" | "arrow-up" | "worksheet-3" | "chevron-right" | "save" | "success" | "quiz-3" | "chevron-down" | "linkedin" | "magic-carpet" | "books" | "supervision-level" | "quiz-white" | "additional-material" | "slide-deck-3" | "sign-language" | "external" | "equipment-required" | "chevron-left" | "chevron-up" | "go" | "copyright" | "project" | "slide-deck" | "content-guidance" | "tick" | "instagram" | "dot" | "warning" | "lightbulb-yellow" | "lightbulb" | "quiz" | "intro" | "loopdown" | "teacher-lesson" | "teacher-unit" | "move-arrows" | "info" | "bookmark-outlined" | "bookmark-filled" | "microsoft-teams" | "google-classroom" | "clipboard" | "book-steps" | "free-tag" | "threads" | "spreadsheet" | "curriculum-plan" | "chatting" | "snack-break" | "subject-art" | "subject-biology" | "subject-chemistry" | "subject-citizenship" | "subject-gcse-citizenship" | "subject-core-citizenship" | "subject-combined-science" | "subject-communication-and-language" | "subject-computing" | "subject-computer-science" | "subject-core-computing" | "subject-cooking-nutrition" | "subject-computing-non-gcse" | "subject-creative-arts" | "subject-design-technology" | "subject-drama" | "subject-english" | "subject-english-language" | "subject-english-grammar" | "subject-english-handwriting" | "subject-english-reading-for-pleasure" | "subject-english-spelling" | "subject-english-reading-writing-oracy" | "subject-english-vocabulary" | "subject-expressive-arts-and-design" | "subject-financial-education" | "subject-french" | "subject-geography" | "subject-german" | "subject-history" | "subject-independent-living" | "subject-latin" | "subject-literacy" | "subject-maths" | "subject-music" | "subject-numeracy" | "occupational-therapy" | "subject-personal-social-and-emotional-development" | "subject-physical-development" | "subject-physical-education" | "subject-core-physical-education" | "subject-gcse-physical-education" | "subject-physical-therapy" | "subject-physics" | "subject-religious-education" | "subject-core-religious-education" | "subject-gcse-religious-education" | "subject-rshe-pshe" | "subject-rshe" | "subject-philosophy" | "subject-social-science" | "subject-theology" | "subject-science" | "subject-sensory-integration" | "subject-spanish" | "subject-speech-and-language-therapy" | "subject-specialist" | "subject-therapy" | "subject-therapies" | "subject-occupational-therapy" | "subject-understanding-the-world" | "swimming" | "homepage-robot-waving" | "homepage-three-pupils" | "homepage-teacher" | "homepage-teacher-map" | "audio-clip-large" | "audio-clip-small" | "box-border-bottom" | "box-border-left" | "box-border-right" | "box-border-top" | "bubble-1" | "bubble-2" | "burst" | "confetti" | "header-underline" | "icon-background-square" | "looping-arrow-1" | "looping-line-1" | "looping-line-2" | "looping-line-3" | "looping-line-4" | "looping-line-5" | "speech-bubble" | "tag-promotional" | "tick-mark-happiness" | "underline-1" | "logo" | "trash" | undefined;
    isTrailingIcon?: boolean | undefined;
    defaultTextColor: OakCombinedColorToken;
    hoverTextColor: OakCombinedColorToken;
    disabledTextColor: OakCombinedColorToken;
    defaultIconBackground: OakCombinedColorToken;
    hoverIconBackground: OakCombinedColorToken;
    hoverIconColor?: OakCombinedColorToken | undefined;
    disabledIconBackground: OakCombinedColorToken;
    defaultIconColor?: OakRoundIconProps["$colorFilter"];
    disabledIconColor?: OakRoundIconProps["$colorFilter"];
    defaultIconBorderColor?: OakCombinedColorToken | undefined;
    disabledIconBorderColor?: OakCombinedColorToken | undefined;
    width?: SizeStyleProps["$width"];
    maxWidth?: SizeStyleProps["$maxWidth"];
    iconBackgroundSize: SizeStyleProps["$width"];
    iconSize: SizeStyleProps["$width"];
    hoverDropShadow?: "drop-shadow-standard" | "drop-shadow-lemon" | "drop-shadow-wide-lemon" | "drop-shadow-centered-lemon" | "drop-shadow-grey" | "drop-shadow-centered-grey" | "drop-shadow-black" | "drop-shadow-centred-standard" | null | undefined;
} & PositionStyleProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakInfoButtonProps = {
    onClick: MouseEventHandler;
    isOpen: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    buttonProps?: Partial<InternalShadowRoundButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;
};
/**
 * Presents an  info icon button with an open and closed state
 *
 * onClick: MouseEventHandler
 *
 */
declare const OakInfoButton: (props: OakInfoButtonProps) => React__default.JSX.Element;

declare const OakInformativeModalBorderColor: React__default.Context<(OakCombinedColorToken | (OakCombinedColorToken | null)[] | null) | undefined>;
type OakInformativeModalCloseAction = "close_button" | undefined;
type OakInformativeModalProps = {
    /**
     * The content of the modal.
     * Use with `<OakInformativeModalBody>` for best results.
     */
    children: ReactNode;
    /**
     * Slot for the footer of the modal.
     * Use with `<OakInformativeModalFooter>` for best results.
     */
    footerSlot?: ReactNode;
    /**
     * Indicates whether the modal is open or closed
     */
    isOpen: boolean;
    /**
     * Called when the modal is closed
     */
    onClose: (action?: OakInformativeModalCloseAction) => void;
    /**
     * The DOM container to render the modal portal into.
     *
     * @default document.body
     */
    domContainer?: Element;
    /**
     * Optional z-index override.
     *
     * Defaults to token: `modal-dialog`
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     *
     * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
     */
    zIndex?: number;
    isLeftHandSide?: boolean;
    /**
     * Close the modal when clicking the background
     *
     * @default false;
     */
    closeOnBackgroundClick?: boolean;
} & Pick<HTMLAttributes<Element>, "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby">;
/**
 * Modal dialog with trapped focus and a close button. See the [design specification](https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=15135-2063)
 */
declare const OakInformativeModal: ({ children, footerSlot, domContainer, isOpen, onClose, zIndex, isLeftHandSide, closeOnBackgroundClick, ...rest }: OakInformativeModalProps) => React__default.ReactPortal | null;

type OakInformativeModalBodyProps = {
    children: ReactNode;
};
/**
 * Intended to be used in the `children` slot of `OakInformativeModal`
 * it applies some padding and margin to ensure that the contents
 * line up with the modal's header and footer
 */
declare const OakInformativeModalBody: (props: OakInformativeModalBodyProps) => React__default.JSX.Element;

type OakInformativeModalFooterProps = {
    children: ReactNode;
};
/**
 * Intended to be used in the `footer` slot of `OakInformativeModal`
 * it is ideal as a container for one or more buttons.
 * It switches from a horizontal to vertical layout on smaller screens
 */
declare const OakInformativeModalFooter: (props: OakInformativeModalFooterProps) => React__default.JSX.Element;

type OakInlineBannerTypes = "info" | "neutral" | "success" | "alert" | "error" | "warning";
type OakInlineBannerVariants = "regular" | "large";
type OakInlineBannerProps = OakFlexProps & {
    /**
     * If true the modal will be open, if false it will be closed
     */
    isOpen: boolean;
    /**
     * The optional title to display in the banner
     */
    title?: string;
    /**
     * The message to display in the banner
     */
    message: string | ReactNode;
    /**
     * The type of banner to display
     */
    type?: OakInlineBannerTypes;
    /**
     * The icon to display in the banner
     */
    icon?: OakIconName;
    /**
     * The color filter to apply to the icon
     */
    iconColorFilter?: OakColorFilterToken;
    /**
     * The optional call to action to display in the banner
     */
    cta?: ReactNode;
    /**
     * If true the banner can be dismissed (show close icon)
     */
    canDismiss?: boolean;
    /**
     * The function to call when the banner is dismissed
     */
    onDismiss?: () => void;
    /**
     * Props to override the close button
     */
    closeButtonOverrideProps?: Partial<typeof InternalShadowRoundButton>;
    /**
     * The variant of an Inline Banner to display
     */
    variant?: OakInlineBannerVariants;
    titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
type BannerTypes = {
    [key in OakInlineBannerTypes]: {
        icon: OakIconName;
        iconColorFilter: OakColorFilterToken;
        backgroundColour: OakColorToken;
        borderColour: OakColorToken;
    };
};
declare const bannerTypes: BannerTypes;
type OakInlineBannerVariantProps = {
    [key in OakInlineBannerVariants]: {
        icon: Partial<OakIconProps>;
        heading: Partial<OakHeadingProps>;
        closeButtonWrapper?: Partial<OakBoxProps>;
        ctaWrapper?: Partial<OakBoxProps>;
        flexDirection: FlexStyleProps["$flexDirection"];
        bannerPadding: PaddingStyleProps["$pa"];
        textContentGap?: FlexStyleProps["$gap"];
    };
};
declare const bannerVariants: OakInlineBannerVariantProps;
/**
 * A inline banner that can be used to display important information to the user.
 *
 * ## Props
 *
 * - **isOpen** \-                      If true the banner will be displayed
 * - **title?** \-                      Optional title to display in the banner, without this the banner will be more compact
 * - **message** \-                     Message to display in the banner
 * - **type?** \-                       Optional type of banner to display (info, neutral, success, alert, error, warning) (default: info)
 * - **icon?** \-                       Optional icon to display in the banner
 * - **iconColorFilter?** \-            Optional color filter to apply to the icon
 * - **cta?** \-                        Optional call to action to display in the banner (ReactNode)
 * - **canDismiss?** \-                 If true the banner can be dismissed (show close icon) (default: false)
 * - **onDismiss?** \-                  Function called when the banner is dismissed
 * - **closeButtonOverrideProps?** \-   Props to override the close button (aria-label, etc)
 * - **variant?** \-                    The variant of the inline banner to display (regular, large) (default: regular)
 * - **...rest** \-                     Other props to be passed to the wrapper OakFlex component (can be used to override styles of the banner)
 */
declare const OakInlineBanner: ({ isOpen, title, message, type, cta, canDismiss, onDismiss, icon, iconColorFilter, closeButtonOverrideProps, variant, titleTag, ...props }: OakInlineBannerProps) => React__default.JSX.Element;

type OakJauntyAngleLabelProps = {
    label: string;
} & ComponentProps<typeof OakBox>;
declare const OakJauntyAngleLabel: (props: OakJauntyAngleLabelProps) => React__default.JSX.Element;

type OakInfoCardProps = {
    children: React__default.ReactNode;
};
type OakCardHeaderprops = {
    iconName: OakIconName;
    tag: OakHeadingTag;
    children: string;
};
declare const OakCardHeader: (props: OakCardHeaderprops) => React__default.JSX.Element;
/**
 *
 * OakLessonInfoCards are created using the custom card either oakLessoninfoCard or oakStaticMessageCard and the content is added as children. And use the oakCardHeader to create the header of the card.
 *
 */
declare const OakLessonInfoCard: (props: OakInfoCardProps) => React__default.JSX.Element;
declare const OakStaticMessageCard: (props: OakInfoCardProps) => React__default.JSX.Element;

type OakLinkProps = Pick<InternalLinkProps, "iconName" | "isTrailingIcon" | "isLoading"> & {
    iconWidth?: OakAllSpacingToken;
    iconHeight?: OakAllSpacingToken;
};
type OakLinkComponent$1 = <C extends React__default.ElementType = "a">(props: PolymorphicPropsWithRef<C> & OakLinkProps) => React__default.ReactNode;
/**
 * A blue link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
declare const OakLink: OakLinkComponent$1;

type OakLinkCardProps = {
    /**
     * The main content section including header, body, and link.
     */
    mainSection: ReactNode;
    /**
     * The name of the icon to be displayed in the card.
     */
    iconName: OakIconName;
    /**
     * The alternative text for the icon, used for accessibility.
     */
    iconAlt: string;
    /**
     * The color filter applied to the icon.
     */
    iconColor?: OakIconProps["$colorFilter"];
    /**
     * The fill color applied inside the icon.
     */
    iconFill?: InternalStyledSvgProps["$fill"];
    /**
     * The URL that the entire card navigates to when clicked.
     */
    href: string;
    /**
     * Whether to display the "New" promo tag in the top-left corner.
     */
    showNew?: boolean;
    /**
     * Whether to display the card in a narrow layout.
     */
    narrow?: boolean;
    /**
     * Whether to apply a background animation effect.
     */
    hasAnimation?: boolean;
};
/**
 * A card component that displays an icon, text content, and an external link.
 *
 * ## Props
 *
 * - **mainSection** - Main content (ReactNode) - Can include OakHeading, OakP, OakLink, etc.
 * - **iconName** - Name of the icon to be displayed
 * - **iconAlt** - Alternative text for the icon (for accessibility)
 * - **iconColor** - Optional color filter for the icon
 * - **iconFill** - Optional fill color for the icon
 * - **href** - Destination URL when the card is clicked
 * - **showNew** - Whether to display the "New" promo tag
 * - **narrow** - Whether to display the card in a narrow layout
 */
declare const OakLinkCard: ({ mainSection, iconName, iconAlt, iconColor, iconFill, href, showNew, hasAnimation, narrow, }: OakLinkCardProps) => React__default.JSX.Element;

type OakLoadingSpinnerProps = Pick<SizeStyleProps, "$width"> & ColorStyleProps & {
    loaderColor?: OakCombinedColorToken;
    /**
     * Delay the appearance of the spinner
     *
     * Accepts a number in milliseconds
     */
    $delay?: number;
};
/**
 *
 * A loading spinner of variable size.
 *
 */
declare const OakLoadingSpinner: (props: OakLoadingSpinnerProps) => React__default.JSX.Element;

type OakSolidBorderAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
} & FlexStyleProps & SizeStyleProps & SpacingStyleProps;
/**
 * An accordion component that can be used to show/hide content
 */
declare const OakMediaClipListAccordion: ({ header, children, id, initialOpen, ...styleProps }: OakSolidBorderAccordionProps) => React__default.JSX.Element;

type OakModalCenterProps = {
    /**
     * The content of the modal. Use with `<OakModalCenterBody>` for best results.
     */
    children: ReactNode;
    /**
     * Determines whether to show the modal or not
     */
    isOpen: boolean;
    /**
     * Override HTMLAttributes & OakFlex props for the modal container
     */
    modalFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * Override HTMLAttributes & OakFlex props for the outer modal container
     */
    modalOuterFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * Override HTMLAttributes & OakFlex props for the inner modal container
     */
    modalInnerFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * Override HTMLAttributes & OakFlex props for the backdrop container
     */
    backdropFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * If true, clicking the backdrop will not call onClose
     */
    disableBackdropClick?: boolean;
    /**
     * If true, pressing the escape key will not call onClose
     */
    disableEscapeKey?: boolean;
    /**
     * If true, the close button will be hidden
     */
    hideCloseButton?: boolean;
    /**
     * Called when the modal is closed via the close button, backdrop click, or escape key
     */
    onClose?: () => void;
    /**
     * The DOM container to render the modal portal into.
     */
    domContainer?: Element;
    /**
     * Slot for the footer of the modal
     */
    footerSlot?: ReactNode;
    /**
     * Override for returnFocus behavior of FocusOn
     */
    returnFocus?: (returnTo: Element) => boolean | FocusOptions;
};
/**
 * Centered modal dialog with trapped focus, close button, backdrop click, and escape key handling.
 *
 * ## Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onClose** \-                 Called when the modal is closed via the close button, backdrop click, or escape key
 * - **children** \-                The content of the modal. Use with `<OakModalCenterBody>` for best results.
 * - **domContainer** \-            The DOM container to render the modal portal into.
 * - **disableBackdropClick?** \-   If true, clicking the backdrop will not call onClose
 * - **disableEscapeKey?** \-       If true, pressing the escape key will not call onClose
 * - **hideCloseButton?** \-        If true, the close button will be hidden
 * - **modalFlexProps?** \-         Override HTMLAttributes & OakFlex props for the modal container
 * - **modalOuterFlexProps?** \-    Override HTMLAttributes & OakFlex props for the outer modal container
 * - **modalInnerFlexProps?** \-    Override HTMLAttributes & OakFlex props for the inner modal container
 * - **backdropFlexProps?** \-      Override HTMLAttributes & OakFlex props for the backdrop container
 * - **footerSlot?** \-             Fixed area at the bottom of the modal, this will remain fixed in view if the content is scrollable
 */
declare const OakModalCenter: ({ children, domContainer, isOpen, onClose, disableBackdropClick, disableEscapeKey, hideCloseButton, modalFlexProps, modalOuterFlexProps, modalInnerFlexProps, backdropFlexProps, footerSlot, returnFocus, }: OakModalCenterProps) => React__default.JSX.Element;

type OakModalCenterBodyProps = {
    /**
     * The name of the icon to display. Accepts an icon name token
     */
    iconName: OakIconName;
    /**
     * The title of the modal
     */
    title: string;
    /**
     * The content of the modal body
     */
    children: ReactNode;
    /**
     * Override props for the heading
     */
    headingOverride?: Partial<OakHeadingProps>;
    /**
     * Override props for the icon
     */
    iconOverride?: Partial<OakIconProps>;
    /**
     * Hide icon
     */
    hideIcon?: boolean;
};
/**
 * Intended to be used within the `OakModalCenter` component
 * it provides a consistent layout for the body of the modal
 * It includes an icon, a title, and the children passed to it.
 * The icon and title can be extended/overridden with the `iconOverride` and `headingOverride` props.
 *
 *  ## Props
 *
 * - **iconName** \-            The name of the icon to display. Accepts an icon name token
 * - **title** \-               The title of the modal
 * - **children** \-            The content of the modal body
 * - **headingOverride** \-     Override HTMLAttributes & OakHEading props for the heading
 * - **iconOverride** \-        Override HTMLAttributes & OakIcon props for the icon
 */
declare const OakModalCenterBody: ({ children, iconName, title, headingOverride, iconOverride, hideIcon, }: OakModalCenterBodyProps) => React__default.JSX.Element;

type OakMultilineTextProps = {
    /**
     * Set the textarea text on first render
     */
    initialValue?: string;
    /**
     * Maximum number of characters
     */
    charLimit: number;
    /**
     * Whether to allow carriage return (new line) when the Enter key is pressed and in clipboard pastes.
     */
    allowCarriageReturn?: boolean;
    allowLeadingTrailingSpaces?: boolean;
    ariaLabel?: string;
    /**
     * Display an error
     */
    invalidText?: string;
    label?: string;
    /**
     * Callback for internally handled errors (e.g. character limit exceeded)
     */
    onError?: (error: string) => void;
    onTextAreaChange?: (input: string) => void;
    onTextAreaBlur?: (input: string) => void;
} & Omit<OakTextAreaProps, "onChange" | "onBlur" | "onError" | "$width" | "value">;
/**
 *
 * This component wraps OakTextArea and provides the following functionality
 * - Manages its own state
 * - Displays errors for character limit exceeded (on paste), leading/trailing spaces removed, carriage returns removed
 * - Displays and updates character count on focus only
 * - Prevents carriage returns (Enter key and pasted text) when allowCarriageReturn is false
 * - Passes stored text to onTextAreaChange and onTextAreaBlur callbacks
 *
 *
 * ### Callbacks
 *
 * onTextAreaBlur
 * onTextAreaChange
 * onFocus: display character count
 * onError: returns error messages for internally handled errors
 *
 * ### Notes
 *  - Current method of clearing the component is to reset its key in the parent component
 *  - useImperativeHandle could be used to expose a clear method
 */
declare const OakMultilineText: React__default.ForwardRefExoticComponent<{
    /**
     * Set the textarea text on first render
     */
    initialValue?: string | undefined;
    /**
     * Maximum number of characters
     */
    charLimit: number;
    /**
     * Whether to allow carriage return (new line) when the Enter key is pressed and in clipboard pastes.
     */
    allowCarriageReturn?: boolean | undefined;
    allowLeadingTrailingSpaces?: boolean | undefined;
    ariaLabel?: string | undefined;
    /**
     * Display an error
     */
    invalidText?: string | undefined;
    label?: string | undefined;
    /**
     * Callback for internally handled errors (e.g. character limit exceeded)
     */
    onError?: ((error: string) => void) | undefined;
    onTextAreaChange?: ((input: string) => void) | undefined;
    onTextAreaBlur?: ((input: string) => void) | undefined;
} & Omit<OakTextAreaProps, "onBlur" | "onChange" | "onError" | "$width" | "value"> & React__default.RefAttributes<HTMLTextAreaElement>>;

type OakOutlineAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
} & FlexStyleProps & SizeStyleProps & SpacingStyleProps;
/**
 * An accordion component that can be used to show/hide content
 */
declare const OakOutlineAccordion: ({ header, children, id, initialOpen, ...styleProps }: OakOutlineAccordionProps) => React__default.JSX.Element;

type OakPrimaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakPrimaryButton: <C extends React__default.ElementType = "button">({ element, ...rest }: OakPrimaryButtonProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakPrimaryInvertedButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakPrimaryInvertedButton: <C extends React__default.ElementType = "button">({ element, ...rest }: OakPrimaryInvertedButtonProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakPromoTagProps = {
    width?: SizeStyleProps["$width"];
    display?: DisplayStyleProps["$display"];
};
/**
 * Renders a tag with the text "New"
 */
declare const OakPromoTag: (props: OakPromoTagProps) => React__default.JSX.Element;

type RadioButtonLabelProps = {
    $labelAlignItems?: FlexStyleProps["$alignItems"];
    $labelGap?: FlexStyleProps["$gap"];
    disabled?: boolean;
} & OakLabelProps;
type OakRadioButtonProps = {
    id: string;
    label: ReactNode;
    value: string;
    tabIndex?: number;
    "data-testid"?: string;
    disabled?: boolean;
    required?: boolean;
    /**
     * Allows the focus ring to be disabled. This is useful when focus is indicated
     * by other means, such as a border or background color change.
     */
    disableFocusRing?: boolean;
    /**
     * Allows the size of the radio button to be customized.
     */
    radioOuterSize?: OakAllSpacingToken;
    /**
     * Allows the size of the inner "checked" circle of the radio button to be customized.
     */
    radioInnerSize?: OakAllSpacingToken;
    /**
     * Allows the width of the radio button border to be customized.
     */
    radioBorderWidth?: OakBorderWidthToken;
    /**
     * Allows the background color of the radio button to be customized.
     */
    radioBackground?: OakCombinedColorToken;
    /**
     * Allows the width of the radio button border to be customized when the radio button is checked.
     */
    checkedRadioBorderWidth?: OakBorderWidthToken;
} & OakBoxProps & RadioButtonLabelProps;
/**
 * A radio button component.
 *
 * Use within `OakRadioGroup` component.
 */
declare const OakRadioButton: React__default.ForwardRefExoticComponent<{
    id: string;
    label: ReactNode;
    value: string;
    tabIndex?: number | undefined;
    "data-testid"?: string | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    /**
     * Allows the focus ring to be disabled. This is useful when focus is indicated
     * by other means, such as a border or background color change.
     */
    disableFocusRing?: boolean | undefined;
    /**
     * Allows the size of the radio button to be customized.
     */
    radioOuterSize?: "spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | undefined;
    /**
     * Allows the size of the inner "checked" circle of the radio button to be customized.
     */
    radioInnerSize?: "spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | undefined;
    /**
     * Allows the width of the radio button border to be customized.
     */
    radioBorderWidth?: "border-solid-none" | "border-solid-s" | "border-solid-m" | "border-solid-l" | "border-solid-xl" | undefined;
    /**
     * Allows the background color of the radio button to be customized.
     */
    radioBackground?: OakCombinedColorToken | undefined;
    /**
     * Allows the width of the radio button border to be customized when the radio button is checked.
     */
    checkedRadioBorderWidth?: "border-solid-none" | "border-solid-s" | "border-solid-m" | "border-solid-l" | "border-solid-xl" | undefined;
} & {
    children?: React__default.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React__default.MouseEventHandler | undefined;
} & {
    $labelAlignItems?: FlexStyleProps["$alignItems"];
    $labelGap?: FlexStyleProps["$gap"];
    disabled?: boolean | undefined;
} & React__default.RefAttributes<HTMLInputElement>>;

type RadioContextType = {
    currentValue: string;
    name: string;
    disabled?: boolean;
    onValueUpdated?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
};
declare const RadioContext: React__default.Context<RadioContextType>;
type OakRadioGroupProps = {
    label?: string;
    name: string;
    disabled?: boolean;
    children: React__default.ReactNode;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Sets the value of the radio group
     * for use as a controlled component
     */
    value?: string;
    /**
     * Sets the initial value of the radio group
     * for use as an uncontrolled component
     */
    defaultValue?: string;
} & Pick<TypographyStyleProps, "$font"> & ColorStyleProps & FlexStyleProps;
/**
 *
 * OakRadioGroup allow users to select a single item from a list of mutually exclusive options .
 * OakRadioGroup consists of a set of OakRadioButtons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.
 * ## Usage
 *
 * use the callback onChange to get the value of the selected radio button.
 *
 */
declare const OakRadioGroup: (props: OakRadioGroupProps) => React__default.JSX.Element;

type TileItem = {
    id: string;
    label: string;
};
declare const isTileItem: (u: unknown) => u is TileItem;
type OakRadioTileProps = {
    tileItem: TileItem;
    isChecked: boolean;
    id: string;
    onChange: (tileItem: TileItem) => void;
};
declare const OakRadioTile: styled_components.StyledComponent<(props: OakRadioTileProps) => React__default.JSX.Element, styled_components.DefaultTheme, {}, never>;

type OakSaveButtonProps = {
    isSaved: boolean;
    isLoading: boolean;
    onSave: () => void;
    unavailable?: boolean;
    saveButtonId?: string;
    title: string;
};
declare const OakSaveButton: (props: OakSaveButtonProps) => React__default.JSX.Element;

type OakSaveCountProps = {
    count: number;
    href: string;
    loading: boolean;
};
declare const OakSaveCount: ({ count, href, loading }: OakSaveCountProps) => React__default.JSX.Element;

type OakScaleImageButtonProps = Omit<InternalShadowRectButtonProps, "defaultTextColor" | "hoverTextColor" | "disabledTextColor" | "defaultBackground" | "defaultBorderColor" | "hoverBackground" | "hoverBorderColor" | "disabledBackground" | "disabledBorderColor" | "iconGap" | "pv" | "ph" | "$bblr" | "$btlr" | "width" | "onClick"> & {
    onImageScaleCallback: (event: React__default.MouseEvent<HTMLButtonElement>) => void;
    isExpanded: boolean;
};
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callback is available for tracking focus events:
 *
 * ### onImageScaleCallback
 * `onImageScaleCallback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 */
declare const OakScaleImageButton: <C extends React__default.ElementType = "button">({ onImageScaleCallback, isExpanded, }: Omit<InternalShadowRectButtonProps, "onClick" | "width" | "$btlr" | "$bblr" | "defaultBackground" | "defaultBorderColor" | "defaultTextColor" | "disabledTextColor" | "hoverTextColor" | "hoverBackground" | "hoverBorderColor" | "disabledBackground" | "disabledBorderColor" | "pv" | "ph" | "iconGap"> & {
    onImageScaleCallback: (event: React__default.MouseEvent<HTMLButtonElement>) => void;
    isExpanded: boolean;
} & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakSecondaryButtonAsRadioProps = {
    children?: React__default.ReactNode;
    value: string;
};
/**
 *
 * To be used as a child of OakButtonAsRadioGroup.
 * Highlights when the value matches the current value of the group.
 * Changes the current value of the group when clicked.
 *
 * ## Usage
 *
 * See OakButtonAsRadioGroup.
 *
 */
declare const OakSecondaryButtonAsRadio: ({ children, value, }: OakSecondaryButtonAsRadioProps) => React__default.JSX.Element;

type OakSecondaryButtonWithDropdownProps = {
    primaryActionText: string;
    primaryActionIcon?: OakIconName;
    onPrimaryAction?: () => void;
    children?: React__default.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    leadingButtonIcon?: React__default.ReactNode;
    ariaDescription?: string;
    "data-testid"?: string;
};
/**
 * A oak secondary button that takes custom menu items or .Item and .Divider compound components as children.
 */
declare const OakSecondaryButtonWithDropdown: {
    (props: OakSecondaryButtonWithDropdownProps): React__default.JSX.Element;
    Divider(): React__default.ReactElement;
    Item<C extends React__default.ElementType = "button">({ children, element, ...rest }: {
        children: React__default.ReactNode;
    } & OakPrimaryInvertedButtonProps & {
        element?: C | undefined;
    } & React__default.PropsWithoutRef<React__default.ComponentProps<C>>): React__default.ReactElement;
};

type OakSecondaryLinkProps = {
    displayDisabled?: boolean;
} & Pick<InternalLinkProps, "iconName" | "isTrailingIcon" | "isLoading">;
type OakLinkComponent = <C extends React__default.ElementType = "a">(props: PolymorphicPropsWithRef<C> & OakSecondaryLinkProps) => React__default.ReactNode;
/**
 * A black link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
declare const OakSecondaryLink: OakLinkComponent;

type OakSignLanguageButtonProps = {
    /**
     * On click function
     */
    onClick: (event: React__default.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
/**
 * Display a button to toggle sign language
 */
declare const OakSignLanguageButton: ({ onClick, }: OakSignLanguageButtonProps) => React__default.JSX.Element;

type OakSmallPrimaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallPrimaryButton: <C extends React__default.ElementType = "button">({ element, ...rest }: OakSmallPrimaryButtonProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakSmallPrimaryInvertedButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallPrimaryInvertedButton: <C extends React__default.ElementType = "button">({ element, ...rest }: OakSmallPrimaryInvertedButtonProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakSmallSecondaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallSecondaryButton: <C extends React__default.ElementType = "button">({ element, ...rest }: OakSmallSecondaryButtonProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakSmallSecondaryButtonWithDropdownProps = {
    primaryActionText: string;
    primaryActionIcon?: OakIconName;
    onPrimaryAction?: () => void;
    children?: React__default.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    leadingButtonIcon?: React__default.ReactNode;
    ariaDescription?: string;
    "data-testid"?: string;
};
/**
 * A secondary button that allows children to be passed in as a dropdown menu.
 */
declare const OakSmallSecondaryButtonWithDropdown: {
    (props: OakSmallSecondaryButtonWithDropdownProps): React__default.JSX.Element;
    Divider(): React__default.ReactElement;
    Item<C extends React__default.ElementType = "button">({ children, element, ...rest }: {
        children: React__default.ReactNode;
    } & OakSmallPrimaryInvertedButtonProps & {
        element?: C | undefined;
    } & React__default.PropsWithoutRef<React__default.ComponentProps<C>>): React__default.ReactElement;
};

type OakSmallSecondaryToggleButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font"> & {
    toggleOn?: boolean;
};
/**
 *
 * A specific implementation of InternalRectButton which can be displayed in two different states using the toggleOn prop
 *
 * This button does not manage its own state but could be adapted to do so at some point in the future
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallSecondaryToggleButton: <C extends React__default.ElementType = "button">({ element, toggleOn, ...rest }: Omit<InternalShadowRectButtonProps, "font" | "defaultBackground" | "defaultBorderColor" | "defaultTextColor" | "disabledTextColor" | "hoverTextColor" | "hoverBackground" | "hoverBorderColor" | "disabledBackground" | "disabledBorderColor" | "pv" | "ph"> & {
    toggleOn?: boolean | undefined;
} & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type InternalShadowIconButtonProps = Omit<InternalButtonProps, "$pa" | "$ph" | "$pv" | "$ba" | "$borderRadius" | "$borderColor" | "$background" | "$color"> & {
    iconName?: OakIconName;
    isTrailingIcon?: boolean;
    defaultTextColor: OakCombinedColorToken;
    hoverTextColor: OakCombinedColorToken;
    disabledTextColor: OakCombinedColorToken;
    hoverIconColor?: OakCombinedColorToken;
    defaultIconColor?: OakRoundIconProps["$colorFilter"];
    disabledIconColor?: OakRoundIconProps["$colorFilter"];
    width?: SizeStyleProps["$width"];
    maxWidth?: SizeStyleProps["$maxWidth"];
} & PositionStyleProps & FlexStyleProps;

type OakSmallTertiaryInvertedButtonProps = Omit<InternalShadowIconButtonProps, "defaultBorderColor" | "defaultTextColor" | "hoverTextColor" | "disabledTextColor" | "iconSize">;
/**
 *
 * A specific implementation of InternalShadowIconButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallTertiaryInvertedButton: <C extends React__default.ElementType = "button">({ element, ...rest }: OakSmallTertiaryInvertedButtonProps & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakTagFunctionalProps = {
    label: string;
    iconName?: OakIconName;
    isTrailingIcon?: boolean;
    useSpan?: boolean;
} & Omit<OakFlexProps, "onClick" | "label">;
declare const OakTagFunctional: (props: OakTagFunctionalProps) => React__default.JSX.Element;

/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 */
declare const OakTertiaryButton: <C extends React__default.ElementType = "button">({ element, isTrailingIcon, iconName, children, ...props }: TypographyStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & DisplayStyleProps & BorderStyleProps & DropShadowStyleProps & {
    isLoading?: boolean | undefined;
} & {
    onHovered?: ((event: React__default.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void) | undefined;
} & {
    iconBackground?: OakRoundIconProps["$background"];
    iconColorFilter?: OakRoundIconProps["$colorFilter"];
    isTrailingIcon?: boolean | undefined;
    iconName?: "data" | "search" | "video" | "filter" | "image" | "copy" | "x" | "download" | "error" | "play" | "question-mark" | "ai" | "ai-additional-material" | "ai-quiz" | "ai-slide-deck" | "ai-worksheet" | "home" | "send" | "rocket" | "edit" | "expand" | "minimise" | "hamburger" | "cross" | "bell" | "twitter" | "worksheet" | "facebook" | "share" | "arrow-right" | "arrow-down" | "arrow-left" | "arrow-up" | "worksheet-3" | "chevron-right" | "save" | "success" | "quiz-3" | "chevron-down" | "linkedin" | "magic-carpet" | "books" | "supervision-level" | "quiz-white" | "additional-material" | "slide-deck-3" | "sign-language" | "external" | "equipment-required" | "chevron-left" | "chevron-up" | "go" | "copyright" | "project" | "slide-deck" | "content-guidance" | "tick" | "instagram" | "dot" | "warning" | "lightbulb-yellow" | "lightbulb" | "quiz" | "intro" | "loopdown" | "teacher-lesson" | "teacher-unit" | "move-arrows" | "info" | "bookmark-outlined" | "bookmark-filled" | "microsoft-teams" | "google-classroom" | "clipboard" | "book-steps" | "free-tag" | "threads" | "spreadsheet" | "curriculum-plan" | "chatting" | "snack-break" | "subject-art" | "subject-biology" | "subject-chemistry" | "subject-citizenship" | "subject-gcse-citizenship" | "subject-core-citizenship" | "subject-combined-science" | "subject-communication-and-language" | "subject-computing" | "subject-computer-science" | "subject-core-computing" | "subject-cooking-nutrition" | "subject-computing-non-gcse" | "subject-creative-arts" | "subject-design-technology" | "subject-drama" | "subject-english" | "subject-english-language" | "subject-english-grammar" | "subject-english-handwriting" | "subject-english-reading-for-pleasure" | "subject-english-spelling" | "subject-english-reading-writing-oracy" | "subject-english-vocabulary" | "subject-expressive-arts-and-design" | "subject-financial-education" | "subject-french" | "subject-geography" | "subject-german" | "subject-history" | "subject-independent-living" | "subject-latin" | "subject-literacy" | "subject-maths" | "subject-music" | "subject-numeracy" | "occupational-therapy" | "subject-personal-social-and-emotional-development" | "subject-physical-development" | "subject-physical-education" | "subject-core-physical-education" | "subject-gcse-physical-education" | "subject-physical-therapy" | "subject-physics" | "subject-religious-education" | "subject-core-religious-education" | "subject-gcse-religious-education" | "subject-rshe-pshe" | "subject-rshe" | "subject-philosophy" | "subject-social-science" | "subject-theology" | "subject-science" | "subject-sensory-integration" | "subject-spanish" | "subject-speech-and-language-therapy" | "subject-specialist" | "subject-therapy" | "subject-therapies" | "subject-occupational-therapy" | "subject-understanding-the-world" | "swimming" | "homepage-robot-waving" | "homepage-three-pupils" | "homepage-teacher" | "homepage-teacher-map" | "audio-clip-large" | "audio-clip-small" | "box-border-bottom" | "box-border-left" | "box-border-right" | "box-border-top" | "bubble-1" | "bubble-2" | "burst" | "confetti" | "header-underline" | "icon-background-square" | "looping-arrow-1" | "looping-line-1" | "looping-line-2" | "looping-line-3" | "looping-line-4" | "looping-line-5" | "speech-bubble" | "tag-promotional" | "tick-mark-happiness" | "underline-1" | "logo" | "trash" | undefined;
} & Partial<InternalShadowRoundButtonProps> & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 */
declare const OakTertiaryInvertedButton: <C extends React__default.ElementType = "button">({ element, isTrailingIcon, iconName, children, ...props }: TypographyStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & DisplayStyleProps & BorderStyleProps & DropShadowStyleProps & {
    isLoading?: boolean | undefined;
} & {
    onHovered?: ((event: React__default.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void) | undefined;
} & {
    iconBackground?: OakRoundIconProps["$background"];
    iconColorFilter?: OakRoundIconProps["$colorFilter"];
    isTrailingIcon?: boolean | undefined;
    iconName?: "data" | "search" | "video" | "filter" | "image" | "copy" | "x" | "download" | "error" | "play" | "question-mark" | "ai" | "ai-additional-material" | "ai-quiz" | "ai-slide-deck" | "ai-worksheet" | "home" | "send" | "rocket" | "edit" | "expand" | "minimise" | "hamburger" | "cross" | "bell" | "twitter" | "worksheet" | "facebook" | "share" | "arrow-right" | "arrow-down" | "arrow-left" | "arrow-up" | "worksheet-3" | "chevron-right" | "save" | "success" | "quiz-3" | "chevron-down" | "linkedin" | "magic-carpet" | "books" | "supervision-level" | "quiz-white" | "additional-material" | "slide-deck-3" | "sign-language" | "external" | "equipment-required" | "chevron-left" | "chevron-up" | "go" | "copyright" | "project" | "slide-deck" | "content-guidance" | "tick" | "instagram" | "dot" | "warning" | "lightbulb-yellow" | "lightbulb" | "quiz" | "intro" | "loopdown" | "teacher-lesson" | "teacher-unit" | "move-arrows" | "info" | "bookmark-outlined" | "bookmark-filled" | "microsoft-teams" | "google-classroom" | "clipboard" | "book-steps" | "free-tag" | "threads" | "spreadsheet" | "curriculum-plan" | "chatting" | "snack-break" | "subject-art" | "subject-biology" | "subject-chemistry" | "subject-citizenship" | "subject-gcse-citizenship" | "subject-core-citizenship" | "subject-combined-science" | "subject-communication-and-language" | "subject-computing" | "subject-computer-science" | "subject-core-computing" | "subject-cooking-nutrition" | "subject-computing-non-gcse" | "subject-creative-arts" | "subject-design-technology" | "subject-drama" | "subject-english" | "subject-english-language" | "subject-english-grammar" | "subject-english-handwriting" | "subject-english-reading-for-pleasure" | "subject-english-spelling" | "subject-english-reading-writing-oracy" | "subject-english-vocabulary" | "subject-expressive-arts-and-design" | "subject-financial-education" | "subject-french" | "subject-geography" | "subject-german" | "subject-history" | "subject-independent-living" | "subject-latin" | "subject-literacy" | "subject-maths" | "subject-music" | "subject-numeracy" | "occupational-therapy" | "subject-personal-social-and-emotional-development" | "subject-physical-development" | "subject-physical-education" | "subject-core-physical-education" | "subject-gcse-physical-education" | "subject-physical-therapy" | "subject-physics" | "subject-religious-education" | "subject-core-religious-education" | "subject-gcse-religious-education" | "subject-rshe-pshe" | "subject-rshe" | "subject-philosophy" | "subject-social-science" | "subject-theology" | "subject-science" | "subject-sensory-integration" | "subject-spanish" | "subject-speech-and-language-therapy" | "subject-specialist" | "subject-therapy" | "subject-therapies" | "subject-occupational-therapy" | "subject-understanding-the-world" | "swimming" | "homepage-robot-waving" | "homepage-three-pupils" | "homepage-teacher" | "homepage-teacher-map" | "audio-clip-large" | "audio-clip-small" | "box-border-bottom" | "box-border-left" | "box-border-right" | "box-border-top" | "bubble-1" | "bubble-2" | "burst" | "confetti" | "header-underline" | "icon-background-square" | "looping-arrow-1" | "looping-line-1" | "looping-line-2" | "looping-line-3" | "looping-line-4" | "looping-line-5" | "speech-bubble" | "tag-promotional" | "tick-mark-happiness" | "underline-1" | "logo" | "trash" | undefined;
} & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakTextInputProps = {
    /**
     * Disables user input and updates the appearance accordingly.
     */
    disabled?: boolean;
    /**
     * Makes the input read-only. Preventing the user from changing the value.
     */
    readOnly?: boolean;
    /**
     * Sets the value. Use this in controlled components;
     */
    value?: string;
    /**
     * Sets the initial value. Use this for an uncontrolled component;
     */
    defaultValue?: string;
    /**
     * Used to target the input element in tests.
     */
    "data-testid"?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Alters the appearance of the input field to indicate whether the input is valid or invalid.
     */
    validity?: "valid" | "invalid";
    /**
     * Adds an icon to the input
     *
     * Defaults to the start of the input
     */
    iconName?: OakIconName;
    /**
     * Position the icon at the end of the input
     */
    isTrailingIcon?: boolean;
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
    iconColor?: OakCombinedColorToken;
    validBorderColor?: OakCombinedColorToken;
    invalidBorderColor?: OakCombinedColorToken;
    validIconColor?: OakCombinedColorToken;
    invalidIconColor?: OakCombinedColorToken;
    color?: OakCombinedColorToken;
    hoverBackground?: OakCombinedColorToken;
    background?: OakCombinedColorToken;
    borderColor?: OakCombinedColorToken;
    focusRingDropShadows?: OakDropShadowToken[];
    disabledBackgroundColor?: OakCombinedColorToken;
    readOnlyBorderColor?: OakCombinedColorToken;
    disabledColor?: OakCombinedColorToken;
    readOnlyColor?: OakCombinedColorToken;
    highlightBackgroundColor?: OakCombinedColorToken;
    /**
     * The width of the surrounding div - the input and icon will fill this
     */
    wrapperWidth?: SizeStyleProps["$width"];
    wrapperMaxWidth?: SizeStyleProps["$maxWidth"];
    iconAlt?: string;
} & InternalTextInputProps;
/**
 * Default input which can be extended to create specialised inputs.
 */
declare const OakTextInput: ({ type, borderColor, readOnlyBorderColor, focusRingDropShadows, background, hoverBackground, disabledBackgroundColor, highlightBackgroundColor, color, disabledColor, readOnlyColor, validity, iconColor, validBorderColor, invalidBorderColor, validIconColor, invalidIconColor, iconName, iconAlt, isTrailingIcon, isHighlighted, wrapperWidth, wrapperMaxWidth, ...props }: OakTextInputProps) => React__default.JSX.Element;

type OakTimerProps = {
    timeCode: number;
} & Omit<OakBoxProps, "onClick" | "label">;
declare const formatTimeCode: (seconds: number) => string;
declare const OakTimer: (props: OakTimerProps) => React__default.JSX.Element;

type OakToastProps = {
    message: React__default.ReactNode;
    variant: VariantKey;
    autoDismissDuration?: number;
    autoDismiss: boolean;
    showIcon: boolean;
    onClose?: () => void;
    id?: number;
};
type VariantKey = "green" | "yellow" | "pink" | "blue" | "aqua" | "light" | "dark" | "error" | "success";
declare const OakToast: ({ message, variant, autoDismiss, autoDismissDuration, showIcon, onClose, id, }: OakToastProps) => React__default.JSX.Element;

type InternalTooltipProps = OakFlexProps & HTMLAttributes<Element> & {
    children?: ReactNode;
    tooltipPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
};

type OakTooltipProps = InternalTooltipProps & {
    /**
     * The target element that triggers the tooltip
     */
    children: ReactElement;
    /**
     * The content of the tooltip
     */
    tooltip: ReactNode;
    /**
     * Whether the tooltip is open or not
     */
    isOpen?: boolean;
    /**
     * The DOM container to render the tooltip portal into
     *
     * @default document.body
     */
    domContainer?: Element;
};
/**
 * A tooltip with oven-ready styling and positioning.
 */
declare const OakTooltip: ({ tooltipPosition, children, tooltip, isOpen, domContainer, ...props }: OakTooltipProps) => React__default.JSX.Element;

declare const IconUp: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React__default.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React__default.MouseEventHandler | undefined;
} & {
    $flexDirection?: ResponsiveValues<csstype.Property.FlexDirection | undefined>;
    $flexWrap?: ResponsiveValues<csstype.Property.FlexWrap | undefined>;
    $alignItems?: ResponsiveValues<csstype.Property.AlignItems | undefined>;
    $alignContent?: ResponsiveValues<csstype.Property.AlignContent | undefined>;
    $justifyContent?: ResponsiveValues<csstype.Property.JustifyContent | undefined>;
    $alignSelf?: ResponsiveValues<csstype.Property.AlignSelf | undefined>;
    $flexGrow?: ResponsiveValues<csstype.Property.FlexGrow | undefined>;
    $flexShrink?: ResponsiveValues<csstype.Property.FlexShrink | undefined>;
    $order?: ResponsiveValues<csstype.Property.Order | undefined>;
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    $gap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $columnGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $rowGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    focusable?: boolean | undefined;
}, never>;
declare const IconDown: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    children?: React__default.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React__default.MouseEventHandler | undefined;
} & {
    $flexDirection?: ResponsiveValues<csstype.Property.FlexDirection | undefined>;
    $flexWrap?: ResponsiveValues<csstype.Property.FlexWrap | undefined>;
    $alignItems?: ResponsiveValues<csstype.Property.AlignItems | undefined>;
    $alignContent?: ResponsiveValues<csstype.Property.AlignContent | undefined>;
    $justifyContent?: ResponsiveValues<csstype.Property.JustifyContent | undefined>;
    $alignSelf?: ResponsiveValues<csstype.Property.AlignSelf | undefined>;
    $flexGrow?: ResponsiveValues<csstype.Property.FlexGrow | undefined>;
    $flexShrink?: ResponsiveValues<csstype.Property.FlexShrink | undefined>;
    $order?: ResponsiveValues<csstype.Property.Order | undefined>;
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    $gap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $columnGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    $rowGap?: ResponsiveValues<"spacing-0" | "spacing-4" | "spacing-8" | "spacing-12" | "spacing-16" | "spacing-20" | "spacing-24" | "spacing-32" | "spacing-40" | "spacing-48" | "spacing-56" | "spacing-64" | "spacing-72" | "spacing-80" | "spacing-2" | "spacing-92" | "spacing-100" | "spacing-120" | "spacing-160" | "spacing-180" | "spacing-240" | "spacing-360" | "spacing-480" | "spacing-640" | "spacing-960" | "spacing-1280" | null | undefined>;
    focusable?: boolean | undefined;
}, never>;
type OakSelectProps = {
    id?: string;
    children: ReactNode;
    /**
     * Disables user input and updates the appearance accordingly.
     */
    disabled?: boolean;
    /**
     * Makes the input read-only. Preventing the user from changing the value.
     */
    readOnly?: boolean;
    /**
     * Sets the value. Use this in controlled components;
     */
    value?: string;
    /**
     * Used to target the input element in tests.
     */
    "data-testid"?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    /**
     * Alters the appearance of the input field to indicate whether the input is valid or invalid.
     */
    validity?: "valid" | "invalid";
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
    validBorderColor?: OakUiRoleToken;
    invalidBorderColor?: OakUiRoleToken;
    validIconColor?: OakUiRoleToken;
    invalidIconColor?: OakUiRoleToken;
    color?: OakUiRoleToken;
    hoverBackground?: OakUiRoleToken;
    background?: OakUiRoleToken;
    borderColor?: OakUiRoleToken;
    focusRingDropShadows?: OakDropShadowToken[];
    disabledBackgroundColor?: OakUiRoleToken;
    readOnlyBorderColor?: OakUiRoleToken;
    disabledColor?: OakUiRoleToken;
    readOnlyColor?: OakUiRoleToken;
    highlightBackgroundColor?: OakUiRoleToken;
    $display?: DisplayStyleProps["$display"];
    name?: HTMLSelectElement["name"];
};
declare function OakSelect({ id, borderColor, readOnlyBorderColor, focusRingDropShadows, background, hoverBackground, disabledBackgroundColor, highlightBackgroundColor, color, disabledColor, readOnlyColor, validity, validBorderColor, invalidBorderColor, isHighlighted, $display, children, name, onChange, ...props }: Readonly<OakSelectProps>): React__default.JSX.Element;

type OakOptionProps = {
    children: ReactNode;
    disabled?: boolean;
    selected?: boolean;
    value?: string;
    asDefault?: boolean;
    $focusRingDropShadows?: OakDropShadowToken[];
};
declare function OakOption({ selected, disabled, value, children, asDefault, $focusRingDropShadows, }: Readonly<OakOptionProps>): React__default.JSX.Element;

type OakOptGroupProps = {
    label: string;
    children: ReactNode;
};
declare function OakOptGroup({ label, children }: Readonly<OakOptGroupProps>): React__default.JSX.Element;

type OakDownloadsAccordionProps = {
    /**
     * Text to render in the subheading
     */
    downloadsText: string;
    /**
     * Event handler for select all checkbox
     */
    handleToggleSelectAll: () => void;
    /**
     * State of select all checkbox
     */
    selectAllChecked: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
    /**
     * Whether the accordion starts in the open state, defaults to false
     */
    initialOpen?: boolean;
} & FlexStyleProps & OakBoxProps & ColorStyleProps;
/**
 * OakDownloadsAccordion
 *
 */
declare const OakDownloadsAccordion: ({ initialOpen, ...props }: OakDownloadsAccordionProps) => React__default.JSX.Element;

type OakInlineRegistrationBannerProps = {
    onSubmit: (email: string) => Promise<string | undefined>;
    headerText: React__default.ReactNode;
    bodyText: React__default.ReactNode;
} & ColorStyleProps & BorderStyleProps;
declare const OakInlineRegistrationBanner: (props: OakInlineRegistrationBannerProps) => React__default.JSX.Element;

type OakSearchFilterCheckBoxProps = Omit<BaseCheckBoxProps, "defaultChecked"> & {
    innerRef?: React__default.RefObject<HTMLInputElement>;
    displayValue: string;
    icon?: OakIconName;
    keepIconColor?: boolean;
};
/**
 * A checkbox for search filters.
 *
 * Takes a displayValue and optional icon, for subject icons 'subject-[subjectSlug]' should be used.
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 */
declare const OakSearchFilterCheckBox: (props: OakSearchFilterCheckBoxProps) => React__default.JSX.Element;

type OakTeacherNotesInlineProps = {
    sanitizedHtml?: string | TrustedHTML;
};
declare const OakTeacherNotesInline: ({ sanitizedHtml, }: OakTeacherNotesInlineProps) => React__default.JSX.Element;

type EditorContainerProps = {
    editorNode: React__default.ReactNode;
    onBoldClick: () => void;
    onBulletListClick: () => void;
    isBold: boolean;
    isBulletList: boolean;
    remainingCharacters: number;
};
type OakTeacherNotesModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onShareClicked: () => void;
    progressSaved: boolean;
    noteShared: boolean;
    error?: boolean;
    termsAndConditionsHref: string;
    shareLinkDisabled?: boolean;
    footer?: React__default.ReactNode;
} & EditorContainerProps;
declare const OakTeacherNotesModal: ({ isOpen, onClose, onShareClicked, progressSaved, noteShared, error, termsAndConditionsHref, shareLinkDisabled, footer, ...rest }: OakTeacherNotesModalProps) => React__default.JSX.Element;

type OakTertiaryOLNavProps = {
    title?: string;
    items: {
        title: string;
        href: string;
    }[];
    ariaLabel?: string;
    anchorTarget?: string;
    onClick?: (event: React__default.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
declare const OakTertiaryOLNav: ({ items, ariaLabel, title, anchorTarget, onClick, ...rest }: OakTertiaryOLNavProps) => React__default.JSX.Element;

type OakUnitListItemProps<element extends ElementType> = {
    unavailable?: boolean;
    index: number;
    title: string;
    yearTitle?: string | null;
    lessonCount: string | null;
    isLegacy: boolean;
    href: string;
    firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
    onClick?: (event: React__default.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onSave?: () => void;
    isSaved?: boolean;
    isSaving?: boolean;
    saveButtonId?: string;
    as?: element;
};
/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
declare const OakUnitListItem: <element extends React__default.ElementType = "a">(props: OakUnitListItemProps<element>) => React__default.JSX.Element;

type OakUnitListOptionalityItemProps = {
    unavailable?: boolean;
    index: number;
    nullTitle: string;
    yearTitle?: string | null;
    firstItemRef: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
    onSave?: (unitSlug: string) => void;
    getIsSaved?: (unitSlug: string) => boolean;
    getIsSaving?: (unitSlug: string) => boolean;
    optionalityUnits: {
        title: string;
        slug: string;
        href: string;
        lessonCount: string;
        onClick?: (event: React__default.MouseEvent<HTMLElement, MouseEvent>) => void;
        firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
    }[];
};
/**
 *
 * OakUnitsListOptionalityItem component used as links for unit cards with optionality
 */
declare const OakUnitListOptionalityItem: (props: OakUnitListOptionalityItemProps) => React__default.JSX.Element;

type OakUnitListOptionalityItemCardProps = {
    unavailable?: boolean;
    title: string;
    lessonCount: string | null;
    href: string;
    slug: string;
    firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
    onClick?: (event: React__default.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onSave?: (unitSlug: string) => void;
    isSaved?: boolean;
    isSaving?: boolean;
};
/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
declare const OakUnitListOptionalityItemCard: (props: OakUnitListOptionalityItemCardProps) => React__default.JSX.Element;

type OakUnitsHeaderProps = {
    isLegacy: boolean;
    subject: string;
    phase: string;
    curriculumHref: string | null;
    isCustomUnit?: boolean;
    customHeadingText?: string;
    banner?: React__default.ReactNode;
} & SizeStyleProps;
declare const OakUnitsHeader: styled_components.StyledComponent<(props: OakUnitsHeaderProps) => React__default.JSX.Element, styled_components.DefaultTheme, {}, never>;

type OakUnitsContainerProps = OakUnitsHeaderProps & {
    showHeader: boolean;
    unitCards: Array<React__default.ReactNode>;
};
declare const OakUnitsContainer: styled_components.StyledComponent<(props: OakUnitsContainerProps) => React__default.JSX.Element, styled_components.DefaultTheme, {}, never>;

type OakPupilContentGuidance = {
    contentguidanceLabel: string | null;
    contentguidanceDescription: string | null;
    contentguidanceArea: string | null;
};
type OakPupilJourneyContentGuidanceProps = {
    /**
     * If true the modal will be open, if false it will be closed
     */
    isOpen: boolean;
    /**
     * Callback function to be called when the pupil accepts the content guidance
     */
    onAccept: () => void;
    /**
     * Callback function to be called when the pupil declines the content guidance
     */
    onDecline: () => void;
    /**
     * Title of the modal
     */
    title?: string;
    /**
     * An array of objects containing the content guidance label, description and area
     */
    contentGuidance?: OakPupilContentGuidance[] | null;
    /**
     * The level of supervision required for the content
     */
    supervisionLevel?: string | null;
    /**
     * The text to be displayed on the accept button
     */
    acceptText?: string;
    /**
     * The text to be displayed on the decline button
     */
    declineText?: string;
};
declare const removedGuidanceDuplicates: (contentGuidance?: OakPupilContentGuidance[] | null) => (string | null)[];
/**
 * This component is used to display content guidance to the pupil before they proceed to the lesson
 *
 * ##Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onAccept** \-                Callback function to be called when the pupil accepts the content guidance
 * - **onDecline** \-               Callback function to be called when the pupil declines the content guidance
 * - **contentGuidance** \-         An array of objects containing the content guidance label, description and area
 * - **supervisionLevel** \-        The level of supervision required for the content
 * - **acceptText** \-              The text to be displayed on the accept button
 * - **declineText** \-             The text to be displayed on the decline button
 */
declare const OakPupilJourneyContentGuidance: ({ isOpen, onAccept, onDecline, title, contentGuidance, supervisionLevel, acceptText, declineText, }: OakPupilJourneyContentGuidanceProps) => React__default.JSX.Element;

type OakPupilJourneyHeaderProps = {
    title: string;
    iconName: OakIconProps["iconName"];
    alt?: OakIconProps["alt"];
    iconBackground?: "primary" | "secondary";
    breadcrumbs: OakBulletListProps["listItems"];
    optionalityTitle?: string;
} & FlexStyleProps;
/**
 * This component is the header for the pupil journey;
 *
 * the icon, title and list of items are passed as props and change change depending on which page it is called
 *
 *
 */
declare const OakPupilJourneyHeader: ({ iconBackground, title, iconName, alt, breadcrumbs, optionalityTitle, }: OakPupilJourneyHeaderProps) => React__default.JSX.Element;

type PupilJourneySectionName = "tier-listing" | "examboard-listing" | "unit-listing" | "lesson-listing" | "subject-listing" | "year-listing";
type Phase$1 = "primary" | "secondary";
type OakPupilJourneyLayoutProps = {
    sectionName: PupilJourneySectionName;
    phase?: Phase$1;
    topNavSlot?: ReactNode;
    children: ReactNode;
};
/**
 * Provides overall page layout and colours for the pupil journey
 *
 * Used for the unit, lesson and tiers/programme factor listing pages
 *
 * the sections of the page are passed in as props and children
 */
declare const OakPupilJourneyLayout: ({ sectionName, topNavSlot, phase, children, }: OakPupilJourneyLayoutProps) => React__default.JSX.Element;
declare function getBackgroundUrlForSection(sectionName: PupilJourneySectionName, phase?: Phase$1): string;

type OakPupilJourneyListProps = {
    children: React__default.ReactNode;
    phase: "primary" | "secondary";
    titleSlot?: React__default.ReactNode;
    filterSlot?: React__default.ReactNode;
    subheadingSlot: React__default.ReactNode;
};
/**
 *
 * A styled list container for use with OakPupilJourneyListItems
 *
 *
 */
declare const OakPupilJourneyList: ({ children, phase, titleSlot, subheadingSlot, filterSlot, }: OakPupilJourneyListProps) => React__default.JSX.Element;

type OakPupilJourneyListCounterProps = {
    count: number;
    countHeader: string;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
declare const OakPupilJourneyListCounter: (props: OakPupilJourneyListCounterProps) => React__default.JSX.Element;

type OakPupilJourneyListItemProps<C extends ElementType> = {
    as?: C;
    /**
     * Disable the section preventing navigation to it.
     */
    disabled?: boolean;
    /**
     * shows that a section is unavailable
     */
    unavailable?: boolean;
    index: number;
    title: string;
    numberOfLessons?: number;
} & ComponentPropsWithoutRef<C>;
/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
declare const OakPupilJourneyListItem: <C extends React__default.ElementType = "a">(props: OakPupilJourneyListItemProps<C>) => React__default.JSX.Element;

type OakPupilJourneyListItemSubheadingProps = {
    textSlot?: React__default.ReactNode;
} & OakBulletListProps;
/**
 * This component displays a heading for the previous lessons
 *
 *
 * listItems - List of labels to be displayed
 * textSlot? - Can pass if any react node, but <OakPupilJourneyListCounter /> is recommended
 *
 */
declare const OakPupilJourneyListItemSubheading: (props: OakPupilJourneyListItemSubheadingProps) => React__default.JSX.Element;

type OakPupilJourneyOptionalityButtonProps<C extends ElementType> = {
    /**
     * Disable the section preventing navigation to it.
     */
    disabled?: boolean;
    /**
     * shows that a section is unavailable
     */
    unavailable?: boolean;
    title: string;
    numberOfLessons: number;
} & ComponentPropsWithoutRef<C>;
/**
 * Button for units with optionality it is only used as the child of the PupilJourneyOptionailityitem component
 */
declare const OakPupilJourneyOptionalityButton: <C extends React__default.ElementType = "a">(props: OakPupilJourneyOptionalityButtonProps<C>) => React__default.JSX.Element;

type OakPupilJourneyOptionalityItemProps = {
    children: React__default.ReactNode;
    index: number;
    title: string;
    unavailable?: boolean;
    disabled?: boolean;
};
/**
 *
 * OakPupilJourneyOptionalityItem is a styled container to be used for units with optionality, OakPupilJourneyOptionalityButton should be used as children
 *
 */
declare const OakPupilJourneyOptionalityItem: (props: OakPupilJourneyOptionalityItemProps) => React__default.JSX.Element;

type OakPupilJourneyProgrammeOptionsProps = {
    children: React__default.ReactNode;
    phase: "primary" | "secondary";
    titleSlot?: React__default.ReactNode;
    optionTitleSlot: React__default.ReactNode;
};
/**
 *
 * A styled list container with a option title to be use with OakPupilJourneyYearButton as the option Buttons
 *
 *
 */
declare const OakPupilJourneyProgrammeOptions: ({ children, phase, titleSlot, optionTitleSlot, }: OakPupilJourneyProgrammeOptionsProps) => React__default.JSX.Element;

type OakPupilJourneySubjectButtonProps = {
    phase: "primary" | "secondary" | "non-curriculum";
    subjectIconName: OakIconName;
} & Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * Changes colour according to the phase prop. Can be used as a link or a button.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakPupilJourneySubjectButton: <C extends React__default.ElementType = "button">({ phase, element, subjectIconName, ...rest }: {
    phase: "primary" | "secondary" | "non-curriculum";
    subjectIconName: OakIconName;
} & Omit<InternalShadowRectButtonProps, "font" | "defaultBackground" | "defaultBorderColor" | "defaultTextColor" | "disabledTextColor" | "hoverTextColor" | "hoverBackground" | "hoverBorderColor" | "disabledBackground" | "disabledBorderColor" | "pv" | "ph"> & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type MenuItem = {
    displayText: string;
    value: string;
};
type OakPupilJourneyUnitsFilterProps = {
    menuItems: MenuItem[];
    selected: string;
    onSelected: (arg0: MenuItem) => void;
    onSkipCallback: () => void;
};
/**
 *
 * OakPupilJourneyUnitsFilter component is a radio group of buttons that can be used to filter pupil journey units
 * add the menu items as an array of objects with text and id properties and provide a selected item id, and a callback function to handle the selection event.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * onSelected: Callback when a menu item is selected, takes the selected item as an argument
 *
 */
declare const OakPupilJourneyUnitsFilter: (props: OakPupilJourneyUnitsFilterProps) => React__default.JSX.Element;

type OakPupilJourneyYearButtonProps = {
    phase: "primary" | "secondary";
} & Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * Changes colour according to the phase prop. Can be used as a link or a button.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakPupilJourneyYearButton: <C extends React__default.ElementType = "button">({ phase, element, ...rest }: {
    phase: "primary" | "secondary";
} & Omit<InternalShadowRectButtonProps, "font" | "defaultBackground" | "defaultBorderColor" | "defaultTextColor" | "disabledTextColor" | "hoverTextColor" | "hoverBackground" | "hoverBorderColor" | "disabledBackground" | "disabledBorderColor" | "pv" | "ph"> & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakQuizHintProps = {
    /**
     * Some content to give as a hint to answer a question
     */
    hint: ReactNode;
    id: string;
    hintToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Presents a button which will show a hint when clicked
 */
declare const OakQuizHint: ({ hint, id, hintToggled }: OakQuizHintProps) => React__default.JSX.Element;

type OakQuizFeedbackProps = {
    /**
     * Feedback for an answer
     * `partially-correct` can be used to feedback on a multi-answer MCQ where some
     * correct options were not selected and/or some incorrect answers were selected
     */
    feedback: "correct" | "incorrect" | "partially-correct";
    /**
     * Some additional content to present with the feedback.
     * This is likely the correct answer(s) to the question or some praise.
     *
     * Only displayed when `feedback` has been applied.
     */
    answerFeedback?: ReactNode;
};
/**
 * Gives feedback after a question has been answered
 */
declare const OakQuizFeedback: ({ feedback, answerFeedback, }: OakQuizFeedbackProps) => React__default.JSX.Element;

type OakLessonBottomNavProps = {
    children?: ReactNode;
    feedback?: OakQuizFeedbackProps["feedback"] | null;
    answerFeedback?: OakQuizFeedbackProps["answerFeedback"];
    hint?: OakQuizHintProps["hint"];
    hintToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Renders feedback for an answer and onward navigation buttons to continue the lesson
 */
declare const OakLessonBottomNav: ({ hint, hintToggled, feedback, answerFeedback, children, }: OakLessonBottomNavProps) => React__default.JSX.Element;

declare const lessonSectionNames: string[];
type LessonSectionName$1 = (typeof lessonSectionNames)[number];
type Phase = "primary" | "secondary";
type OakLessonLayoutProps = {
    lessonSectionName: LessonSectionName$1;
    phase?: Phase;
    celebrate?: boolean;
    topNavSlot: ReactNode;
    bottomNavSlot: ReactNode;
    children: ReactNode;
};
/**
 * Provides overall page layout and colours for the sections of a lesson.
 */
declare const OakLessonLayout: ({ lessonSectionName, phase, celebrate, topNavSlot, bottomNavSlot, children, }: OakLessonLayoutProps) => React__default.JSX.Element;

type BaseOakLessonNavItemProps<C extends ElementType> = {
    as?: C;
    /**
     * Disable the section preventing navigation to it.
     */
    disabled?: boolean;
} & ComponentPropsWithoutRef<C>;
type QuizSectionProps$1 = {
    lessonSectionName: "starter-quiz" | "exit-quiz";
    /**
     * The number of questions in the quiz
     */
    numQuestions: number;
    /**
     * The number of questions answered correctly
     */
    grade: number;
};
type VideoSectionProps$2 = {
    lessonSectionName: "video";
};
type IntroSectionProps$2 = {
    lessonSectionName: "intro";
};
type SectionProps = {
    /**
     * Denotes the progress in the lesson section
     */
    progress: "not-started" | "in-progress" | "complete";
} & (IntroSectionProps$2 | QuizSectionProps$1 | VideoSectionProps$2);
type OakLessonNavItemProps<C extends ElementType> = BaseOakLessonNavItemProps<C> & SectionProps;
/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
declare const OakLessonNavItem: <C extends React__default.ElementType = "a">(props: OakLessonNavItemProps<C>) => React__default.JSX.Element;

type LessonSectionName = "intro" | "video";
type BaseOakLessonReviewItemProps$1 = {
    completed: boolean;
};
type VideoSectionProps$1 = {
    lessonSectionName: "video";
};
type IntroSectionProps$1 = {
    lessonSectionName: "intro";
};
type OakLessonReviewIntroVideoProps = BaseOakLessonReviewItemProps$1 & {
    lessonSectionName: LessonSectionName;
} & (IntroSectionProps$1 | VideoSectionProps$1);
declare const OakLessonReviewIntroVideo: (props: OakLessonReviewIntroVideoProps) => React__default.JSX.Element;

type BaseOakLessonReviewItemProps = {
    completed: boolean;
};
type QuizSectionProps = {
    lessonSectionName: "starter-quiz" | "exit-quiz";
    /**
     * The number of questions in the quiz
     */
    numQuestions: number;
    /**
     * The number of questions answered correctly
     */
    grade: number;
};
type VideoSectionProps = {
    lessonSectionName: "video";
};
type IntroSectionProps = {
    lessonSectionName: "intro";
};
type OakLessonReviewItemProps = BaseOakLessonReviewItemProps & (IntroSectionProps | QuizSectionProps | VideoSectionProps);
declare const OakLessonReviewItem: (props: OakLessonReviewItemProps) => React__default.JSX.Element;

type LessonQuizName = "starter-quiz" | "exit-quiz";
type OakLessonReviewQuizProps = {
    completed: boolean;
    lessonSectionName: LessonQuizName;
    /**
     * The number of questions in the quiz
     */
    numQuestions: number;
    /**
     * The number of questions answered correctly
     */
    grade: number;
    /**
     * You MUST use the OakLessonExpandableReviewItem as the container component for this slot
     */
    resultsSlot?: React__default.ReactNode;
};
type OakLessonReviewItemContainerProps = {
    $background?: OakCombinedColorToken;
    $borderColor?: OakCombinedColorToken;
    children: React__default.ReactNode;
};
declare const ReviewItemContainer: (props: OakLessonReviewItemContainerProps) => React__default.JSX.Element;
type ReviewItemTitleSectionProps = {
    sectionHeader: string;
    completed: boolean;
    summaryForIncomplete: ReactNode;
};
declare const ReviewItemTitleSection: (props: ReviewItemTitleSectionProps) => React__default.JSX.Element;
declare const OakLessonReviewQuiz: (props: OakLessonReviewQuizProps) => React__default.JSX.Element;

type LessonTopNavSectionName = Omit<LessonSectionName$1, "overview" | "review">;
type OakLessonTopNavProps = {
    lessonSectionName: LessonTopNavSectionName;
    /**
     * Slot to render `OakBackLink` or similar
     */
    backLinkSlot: ReactNode;
    heading: ReactNode;
    /**
     * Displayed at the mobile breakpoint where the counter is not rendered.
     * Provides alternative content for the counter/progress in the lesson.
     */
    mobileSummary: ReactNode;
    /**
     * Slot to render `OakQuizCounter` or similar
     */
    counterSlot?: ReactNode;
};
/**
 * Controls for navigating back and displaying progress in a lesson
 */
declare const OakLessonTopNav: ({ lessonSectionName, backLinkSlot, counterSlot, heading, mobileSummary, }: OakLessonTopNavProps) => React__default.JSX.Element;

type OakLessonVideoTranscriptProps = {
    /**
     * The transcript content
     */
    children: ReactNode;
    /**
     * The id of the collapsible content element. This is used to link the button to the content
     */
    id: string;
    /**
     * A control to toggle the video to display sign language
     */
    signLanguageControl?: ReactNode;
    transcriptToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
declare const OakLessonVideoTranscript: ({ children, id, signLanguageControl, transcriptToggled, }: OakLessonVideoTranscriptProps) => React__default.JSX.Element;

type OakHintButtonProps = {
    isOpen: boolean;
    onClick?: MouseEventHandler;
    isLoading?: boolean;
    disabled?: boolean;
    buttonProps?: Partial<InternalShadowRoundButtonProps & HTMLAttributes<Element>>;
};
/**
 *
 * A specific implementation of InternalShadowRoundButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakHintButton: (props: OakHintButtonProps) => React__default.JSX.Element;

type OakQuizCheckBoxProps = Omit<BaseCheckBoxProps, "defaultChecked"> & {
    feedback?: "correct" | "incorrect" | null;
    image?: React__default.JSX.Element;
    innerRef?: React__default.RefObject<HTMLInputElement>;
    displayValue?: string | React__default.JSX.Element;
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
};
/**
 * A checkbox representing the options in a multiple choice question.
 */
declare const OakQuizCheckBox: (props: OakQuizCheckBoxProps) => React__default.JSX.Element;

type OakQuizCounterProps = {
    counter: number;
    total: number;
};
/**
 * A counter representing progress through the questions in a quiz
 */
declare const OakQuizCounter: (props: OakQuizCounterProps) => React__default.JSX.Element;

declare const OakQuizMatchItemId: (id: string) => string;
type DraggableId = string;
type DroppableId = string;
type DraggableItem = {
    id: DraggableId;
    label: ReactNode;
    announcement: string;
};
type DroppableItem = {
    id: DroppableId;
    label: ReactNode;
    announcement: string;
};
type Matches = Record<DroppableId, DraggableItem>;
type OakQuizMatchProps = {
    /**
     * The initial options
     *
     * these are the items that can be dragged into a slot to form a match
     *
     * this cannot be updated on subsequent renders
     */
    initialOptions: DraggableItem[];
    /**
     * The initial slots
     *
     * these are the slots into which an option can be dropped to form a match
     *
     * this cannot be updated on subsequent renders
     */
    initialSlots: DroppableItem[];
    /**
     * Notify the consumer when matches have changed
     */
    onChange?: (matches: Matches) => void;
    /**
     * Highlight the droppable slots
     */
    isHighlighted?: boolean;
};
/**
 * A list of draggable items with matching slots to drop them into.
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
declare const OakQuizMatch: ({ initialOptions, initialSlots, isHighlighted, onChange, }: OakQuizMatchProps) => React__default.JSX.Element;
declare const announcements: Announcements;

type OakQuizOrderItem = {
    id: string;
    label: string;
};
declare const OakQuizOrderitemId: (id: string) => string;
type OakQuizOrderProps = {
    /**
     * The initial order of items
     *
     * this cannot be updated on subsequent renders
     */
    initialItems: OakQuizOrderItem[];
    /**
     * Notified the consumer when the order of items has changed
     */
    onChange?: (items: OakQuizOrderItem[]) => void;
    /**
     * Highlight all items to indicate that they can be interacted with
     */
    isHighlighted?: boolean;
    announcements?: OakQuizOrderItem[];
};
/**
 * A sortable list of items with drag and drop functionality. Items can be dragged over named slots to re-arrange them
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
declare const OakQuizOrder: ({ initialItems, announcements, onChange, isHighlighted, }: OakQuizOrderProps) => React__default.JSX.Element;

type OakQuizPrintableHeaderProps = {
    title: string;
    iconName: OakIconProps["iconName"];
    alt?: OakIconProps["alt"];
    breadcrumbs: OakBulletListProps["listItems"];
    optionalityTitle?: string;
    worksheetDownloaded: boolean;
    workSheetAvailable: boolean;
    videoPercentage: number;
} & FlexStyleProps;
/**
 * This component is the header for the printable view;
 *
 *
 *
 */
declare const OakQuizPrintableHeader: ({ title, iconName, alt, breadcrumbs, worksheetDownloaded, workSheetAvailable, videoPercentage, }: OakQuizPrintableHeaderProps) => React__default.JSX.Element;

type OakQuizPrintableSubHeaderProps = {
    title: string;
    grade: number;
    numQuestions: number;
    attempts: number;
} & FlexStyleProps;
/**
 * This component is the header for quiz section in the printable view;
 *
 *
 *
 */
declare const OakQuizPrintableSubHeader: ({ title, grade, numQuestions, attempts, }: OakQuizPrintableSubHeaderProps) => React__default.JSX.Element;

type OakQuizRadioButtonProps = OakRadioButtonProps & {
    /**
     * Present the element with answer feedback
     */
    feedback?: "correct" | "incorrect" | null;
    /**
     * An image to display above the label
     */
    image?: JSX.Element;
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
};
/**
 * A radio button representing the options in a multiple choice question.
 *
 * Use with `OakRadioGroup` to create a group of radio buttons.
 */
declare const OakQuizRadioButton: (props: OakQuizRadioButtonProps) => React__default.JSX.Element;

type InternalQuizResultItemProps = {
    feedbackState?: "correct" | "incorrect" | null;
    standardText?: string;
    boldPrefixText?: string;
    imageURL?: string;
    imageAlt?: string;
};
/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
declare const OakQuizResultItem: ({ standardText, boldPrefixText, feedbackState, imageURL, imageAlt, }: InternalQuizResultItemProps) => React__default.JSX.Element;

type OakQuizTextInputProps = Omit<OakTextInputProps, "validity" | "iconName" | "iconAlt" | "isTrailingIcon"> & {
    /**
     * Alters the appearance of the input to indicate whether or not a correct answer was given.
     * Also sets the input to read-only.
     */
    feedback?: "correct" | "incorrect" | null;
};
/**
 * A text input for a free-text question in a quiz
 */
declare const OakQuizTextInput: ({ feedback, readOnly, ...props }: OakQuizTextInputProps) => React__default.JSX.Element;

interface Tier {
    tier: string;
    tierSlug: string;
}
interface Subject {
    subject: string;
    subjectSlug: string;
}
type OakDownloadsJourneyChildSubjectTierSelectorProps = {
    tiers?: Tier[];
    childSubjects?: Subject[];
    getTierSubjectValues: (tierSlug: string, childSubjectSlug: string | null) => void;
};
/**
 *
 * The component is used in the Curriculum Downloads journey for KS4 Maths and Science, where a tier
 * must be selected before download (Maths) as well as a child subject (Science).
 *
 * ### Callbacks
 * `getTierSubjectValues(tier, childSubject)`: a callback function to retrieve the selected values
 * once the Next button is pressed to continue on the Downloads journey.
 *
 */
declare const OakDownloadsJourneyChildSubjectTierSelector: styled_components.StyledComponent<(props: OakDownloadsJourneyChildSubjectTierSelectorProps) => React__default.JSX.Element, styled_components.DefaultTheme, {}, never>;

/**
 *
 * These components can be used with InternalRadioWrapper which allows for customisable icons
 *
 * Several flavours of Radio are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 */
type BaseRadioProps = {
    id: string;
    disabled?: boolean;
    value: string;
    name?: string;
    /**
     * Uncontrolled checked state
     */
    defaultChecked?: boolean;
    /**
     * Controlled checked state
     */
    checked?: boolean;
    onHovered?: (value: string, id: string, duration: number) => void;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React__default.FocusEvent<HTMLInputElement>) => void;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "data-testid"?: string;
};

type OakRadioAsButtonProps = Omit<BaseRadioProps, "defaultChecked" | "id" | "checked"> & {
    innerRef?: React__default.RefObject<HTMLInputElement>;
    displayValue: string;
    icon?: OakIconName;
    keepIconColor?: boolean;
    disabled?: HTMLInputElement["disabled"];
    value?: HTMLInputElement["value"];
    "aria-labelledby"?: React__default.AriaAttributes["aria-labelledby"];
    "aria-label"?: React__default.AriaAttributes["aria-label"];
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
};
/**
 * A radio input styled as a button, to be used within `<OakRadioGroup/>` this is
 * the radio inputs version of `<OakSearchFilterCheckBox/>`
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 *  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 */
declare const OakRadioAsButton: (props: OakRadioAsButtonProps) => React__default.JSX.Element;

type OakCodeRendererProps = {
    string: string;
} & TypographyStyleProps & OakBoxProps;
declare const OakCodeRenderer: ({ string, ...rest }: OakCodeRendererProps) => string | React__default.JSX.Element;

type OakCookieBannerProps = {
    /**
     * Triggered when the user clicks the "Hide this message" button.
     */
    onHide(): void;
    /**
     * Triggered when the user clicks the "Accept all cookies" button.
     */
    onAccept(): void;
    /**
     * Triggered when the user clicks the "Reject non-essential cookies" button.
     */
    onReject(): void;
    /**
     * Triggered when the user clicks the "Cookie settings" button.
     */
    onOpenSettings(): void;
    /**
     * The banner is intended to span the full width of the viewport.
     * this prop will set the maximum width of the inner content so that
     * it can line up with the rest of the content on the page.
     **/
    innerMaxWidth?: ResponsiveValues<OakAllSpacingToken>;
    /**
     * The current state of the cookie banner.
     *
     * - `initial` - The user has not made any choices.
     * - `accepted` - The user has accepted all cookies.
     * - `rejected` - The user has rejected non-essential cookies.
     */
    state: "accepted" | "rejected" | "initial";
    /**
     * Whether the banner should be fixed to the bottom of the viewport.
     *
     * @default false
     */
    isFixed?: boolean;
    /**
     * Optional z-index override of the banner.
     *
     * Defaults to token: `banner`
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     */
    zIndex?: number;
};
/**
 * A banner presenting the user with options to accept or reject cookies.
 */
declare const OakCookieBanner: ({ state, innerMaxWidth, onOpenSettings, onHide, onAccept, onReject, isFixed, zIndex, }: OakCookieBannerProps) => React__default.JSX.Element;

type CookieConsentReducerState = {
    isSettingsModalOpen: boolean;
    bannerState: "initial" | "accepted" | "rejected" | "hidden";
};

type Party = {
    name: ReactNode;
    url: string;
};
type Consent = {
    /**
     * Unique identifier for the policy.
     */
    policyId: string;
    /**
     * The user's consent state for the policy.
     */
    consentState: ConsentState;
};
type PolicyConsent = {
    /**
     * Unique identifier for the policy.
     */
    policyId: string;
    /**
     * Label for the policy.
     */
    policyLabel: string;
    /**
     * Description of the policy. This should explain what the policy does and why it is needed.
     */
    policyDescription: ReactNode;
    /**
     * Whether the policy is strictly necessary for the site to function.
     * If true, the policy will be enabled by default and cannot be disabled.
     */
    isStrictlyNecessary: boolean;
    /**
     * List of 3rd parties that the policy allows data to be shared with.
     */
    policyParties: Party[];
    /**
     * The current consent state of the policy
     */
    consentState: ConsentStateWithPending;
};
type ConsentState = "granted" | "denied";
type ConsentStateWithPending = ConsentState | "pending";
type OakCookieConsentContextType = {
    /**
     * Whether the cookie settings modal is open.
     */
    isSettingsModalOpen: boolean;
    /**
     * List of cookie policies with the current consent state.
     */
    policyConsents: PolicyConsent[];
    /**
     * Open the cookie settings modal.
     **/
    openSettings(): void;
    /**
     * Close the cookie settings modal.
     */
    closeSettings(): void;
    /**
     * Show the cookie consent banner.
     */
    showBanner(): void;
    /**
     * Hide the cookie consent banner.
     */
    hideBanner(): void;
    /**
     * Reject all non-essential cookies from the settings modal.
     */
    rejectModalConsents(): void;
    /**
     * Confirm the user's consent settings from the modal.
     * @param consents The user's chosen consent settings.
     */
    confirmModalConsents(consents: Consent[]): void;
    /**
     * Consent to all cookies from the modal.
     */
    acceptModalConsents(): void;
    /**
     * Reject all non-essential cookies from the banner.
     */
    rejectBannerConsents(): void;
    /**
     * Accept all cookies from the banner.
     */
    acceptBannerConsents(): void;
    /**
     * The current state of the cookie banner.
     */
    bannerState: CookieConsentReducerState["bannerState"];
};
declare function getDefaultContextState(): OakCookieConsentContextType;
declare const OakCookieConsentContext: React__default.Context<OakCookieConsentContextType>;
type OakCookieConsentProviderProps = Pick<OakCookieConsentContextType, "policyConsents"> & {
    children: ReactNode;
    /**
     * Callback triggered when the user's consent settings change.
     * @param consents The user's updated consent settings.
     */
    onConsentChange(consents: Consent[]): void;
};
/**
 * Enables opening of the cookie settings modal and showing the cookie consent banner.
 */
declare function useCookieConsent(): {
    showBanner: () => void;
    openSettings: () => void;
};
/**
 * Provides a context through which the cookie consent UI can be configured and controlled
 *
 * Intended to be used with `OakCookieConsent`
 */
declare const OakCookieConsentProvider: ({ children, policyConsents, onConsentChange, }: OakCookieConsentProviderProps) => React__default.JSX.Element;

type OakCookieSettingsModalProps = Pick<OakInformativeModalProps, "isOpen" | "onClose" | "zIndex"> & {
    /**
     * Triggered when the user rejects all non-essential cookies.
     */
    onReject(): void;
    /**
     * Triggered when the user confirms their cookie consent settings.
     * @param consents The user's chosen consent settings.
     */
    onConfirm(consents: Consent[]): void;
    /**
     * Triggered when the user accepts all cookies.
     */
    onAccept(): void;
    /**
     * URL of the site's cookie policy.
     */
    policyURL: string;
    /**
     * List of cookie policies with the current consent state.
     */
    policyConsents: PolicyConsent[];
};
/**
 * Modal for managing cookie consent settings.
 */
declare const OakCookieSettingsModal: ({ isOpen, onClose, onReject, onConfirm, onAccept, policyURL, policyConsents, zIndex, }: OakCookieSettingsModalProps) => React__default.JSX.Element;

type OakCookieConsentProps = Pick<OakCookieSettingsModalProps, "policyURL"> & Pick<OakCookieBannerProps, "isFixed" | "innerMaxWidth"> & {
    /**
     * Optional stacking context for the entire consent UI
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     */
    zIndex?: number;
};
/**
 * Connects `OakCookieBanner` and `OakCookieSettingsModal` to `OakCookieConsentProvider`.
 */
declare const OakCookieConsent: ({ policyURL, isFixed, innerMaxWidth, zIndex, }: OakCookieConsentProps) => React__default.JSX.Element;

type OakHeaderHeroProps = {
    authorImageSrc?: string;
    authorImageAlt?: string;
    authorName?: string;
    authorTitle?: string;
    heroImageSrc: string;
    heroImageAlt: string;
    headingTitle?: string;
    subHeadingText: string;
    breadcrumbs: ReactElement;
    cmsImage?: ReactElement;
    children?: ReactNode;
};
/**
 *
 * Oak Heading component with hero image, can be used for blog posts, articles, and other content pages.
 *
 * This Oak component can be passed the OWA breadcrumbs component as a prop. Currently this component does not exist in the component library.
 */
declare const OakHeaderHero: styled_components.StyledComponent<(props: OakHeaderHeroProps) => React__default.JSX.Element, styled_components.DefaultTheme, {}, never>;

type OakHomepageTabButtonProps = InternalButtonProps & {
    title: string;
    iconName: OakIconName;
    isActive?: boolean;
    showNewIcon?: boolean;
};
declare const OakHomepageTabButton: <C extends React__default.ElementType = "button">(props: TypographyStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & DisplayStyleProps & BorderStyleProps & DropShadowStyleProps & {
    isLoading?: boolean | undefined;
} & {
    onHovered?: ((event: React__default.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void) | undefined;
} & {
    title: string;
    iconName: OakIconName;
    isActive?: boolean | undefined;
    showNewIcon?: boolean | undefined;
} & {
    element?: C | undefined;
} & React__default.PropsWithoutRef<React__default.ComponentProps<C>>) => React__default.JSX.Element;

type OakInfoProps = {
    /**
     * Some content to give as a hint to answer a question
     */
    hint: ReactNode;
    id: string;
    isLoading?: boolean;
    disabled?: boolean;
    buttonProps?: Partial<InternalShadowRoundButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;
} & Omit<OakTooltipProps, "children" | "tooltip" | "id">;
/**
 * Presents a button which will show a hint when clicked
 */
declare const OakInfo: (props: OakInfoProps) => React__default.JSX.Element;

type MuxPlayingState = "standard" | "playing" | "played";
type OakMediaClipProps = {
    thumbnailImage?: string;
    timeCode: number;
    clipName: string;
    learningCycle?: string;
    muxPlayingState: MuxPlayingState;
    onClick: () => void;
    disabled?: boolean;
    imageAltText: string;
    isAudioClip?: boolean;
    element?: "button" | "a";
};
declare const StyledMediaClipImage: styled_components.StyledComponent<(<C extends React__default.ElementType = React__default.ForwardRefExoticComponent<Omit<React__default.DetailedHTMLProps<React__default.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref" | "width" | "height" | "src" | "srcSet" | "alt" | "loading"> & {
    src: string | next_dist_shared_lib_get_img_props.StaticImport;
    alt: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
    loader?: next_image.ImageLoader | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: "eager" | "lazy" | undefined;
    placeholder?: next_dist_shared_lib_get_img_props.PlaceholderValue | undefined;
    blurDataURL?: string | undefined;
    unoptimized?: boolean | undefined;
    overrideSrc?: string | undefined;
    onLoadingComplete?: next_dist_shared_lib_get_img_props.OnLoadingComplete | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
} & React__default.RefAttributes<HTMLImageElement | null>>>({ ...props }: OakImageProps<C>) => React__default.JSX.Element), styled_components.DefaultTheme, Omit<OakImageProps<React__default.ForwardRefExoticComponent<Omit<React__default.DetailedHTMLProps<React__default.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref" | "width" | "height" | "src" | "srcSet" | "alt" | "loading"> & {
    src: string | next_dist_shared_lib_get_img_props.StaticImport;
    alt: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
    loader?: next_image.ImageLoader | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: "eager" | "lazy" | undefined;
    placeholder?: next_dist_shared_lib_get_img_props.PlaceholderValue | undefined;
    blurDataURL?: string | undefined;
    unoptimized?: boolean | undefined;
    overrideSrc?: string | undefined;
    onLoadingComplete?: next_dist_shared_lib_get_img_props.OnLoadingComplete | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
} & React__default.RefAttributes<HTMLImageElement | null>>>, "as"> & {
    $showOakPlaceholder: boolean;
}, never>;
declare const OakMediaClip: ({ thumbnailImage, timeCode, clipName, learningCycle, muxPlayingState, onClick, disabled, imageAltText, isAudioClip, element, }: OakMediaClipProps) => React__default.JSX.Element;

type OakMediaClipListProps = {
    lessonTitle: string;
    currentClipCounter: number;
    totalClipCounter: number;
    children: ReactNode;
};
/**
 *
 * OakMediaClipList is a scrollable list of OakMediaClip components with clip counter and the title
 *
 */
declare const OakMediaClipList: ({ lessonTitle, currentClipCounter, totalClipCounter, children, }: OakMediaClipListProps) => React__default.JSX.Element;

type OakMediaClipStackListItemProps = {
    title: string;
    href: string;
    imageUrl?: string;
    imageAltText: string;
    numberOfClips: number;
    isAudioClip: boolean;
    onClick?: () => void;
    rel?: string;
};
declare const OakMediaClipStackListItem: (props: OakMediaClipStackListItemProps) => React__default.JSX.Element;

type OakPaginationProps = {
    currentPage: number;
    totalPages: number;
    firstItemRef?: RefObject<HTMLAnchorElement> | null;
    nextHref?: string;
    prevHref?: string;
    paginationHref: string;
    pageName: string;
    onPageChange: (page: number) => void;
};
declare const OakPagination: ({ totalPages, nextHref, prevHref, paginationHref, pageName, onPageChange, currentPage, }: OakPaginationProps) => React__default.JSX.Element | null;

type Url = string | UrlObject;
type OakPrimaryNavItemProps = {
    href: Url;
    isCurrent?: boolean;
    shallow?: boolean;
    children: ReactNode;
} & OakPrimaryButtonProps & OakPrimaryInvertedButtonProps;
/**
 *
 * A specific implementation of OakPrimaryButton and OakPrimaryInvertedButton rendering
 * relevant view depending on isCurrent prop
 *
 */
declare const OakPrimaryNavItem: ({ href, isCurrent, shallow, children, }: OakPrimaryNavItemProps) => React__default.JSX.Element;

type OakPrimaryNavProps = {
    ariaLabel?: string;
    navItems: OakPrimaryNavItemProps[];
};
/**
 * A row of buttons for navigating between different sections
 */
declare const OakPrimaryNav: ({ ariaLabel, navItems }: OakPrimaryNavProps) => React__default.JSX.Element;

type OakQuoteProps = {
    quote: string;
    color?: OakCombinedColorToken;
    authorName?: string;
    authorTitle?: string;
    authorImageSrc?: string;
};
declare const OakQuote: (props: OakQuoteProps) => React__default.JSX.Element;

type MenuItemProps = {
    heading: string;
    subheading?: string;
    href: string;
};
type OakSideMenuNavLinkProps = FlexStyleProps & PaddingStyleProps & {
    item: MenuItemProps;
    isSelected: boolean;
    onClick: () => void;
};
/**
 *
 * The OakSideMenuNavLink component is a styled link that represents a navigation item in the side menu.
 * It is designed to be used within the OakSideMenuNav component, but can also be used independently.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * - `onClick`: A callback function that is triggered when the link is clicked.
 *
 * ### Props
 * - `item`: An object containing the heading, subheading, and href of the link.
 * - `isSelected`: A boolean indicating whether the link is currently selected.
 * - `onClick`: A callback function that is triggered when the link is clicked.
 */
declare const OakSideMenuNavLink: styled_components.StyledComponent<(props: OakSideMenuNavLinkProps) => React__default.JSX.Element, styled_components.DefaultTheme, {}, never>;

type OakSideMenuNavProps = {
    heading: string;
    menuItems: MenuItemProps[];
    anchorTargetId: string;
};
declare const OakSideMenuNav: (props: OakSideMenuNavProps) => React__default.JSX.Element;

type OakSubjectIconProps = Pick<OakHandDrawnBoxWithIconProps, "iconName" | "fill" | "iconColor" | "alt"> & {
    iconName: `subject-${string}`;
    showPromoTag?: boolean;
};
/**
 * A large illuminated hand-drawn box with a subject icon in the center
 *
 * Accepts an optional `showPromoTag` prop to display a "New" tag in the top left corner
 */
declare const OakSubjectIcon: ({ showPromoTag, ...rest }: OakSubjectIconProps) => React__default.JSX.Element;

type OakVideoTranscriptProps = {
    /**
     * The transcript content
     */
    children: ReactNode;
    /**
     * The id of the collapsible content element. This is used to link the button to the content
     */
    id: string;
    /**
     * A control to toggle sign language button (OakSignLanguageButton)
     */
    signLanguageControl?: ReactNode;
    /**
     * A control to toggle copy link button (OakCopyLinkButton)
     */
    copyLinkControl?: ReactNode;
    /**
     * A flag to control state of a transcript
     */
    transcriptToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
declare const OakVideoTranscript: ({ children, id, signLanguageControl, copyLinkControl, transcriptToggled, }: OakVideoTranscriptProps) => React__default.JSX.Element;

type Status = "error" | "selected" | "neutral";
type OakCATQuestionProps = {
    questionNumber: number;
    status: Status;
    initialOpen?: boolean;
    questionTypeInput: ReactNode;
    questionStem: ReactNode;
    hintInput: ReactElement;
    feedbackInput: ReactElement;
    answersSection: ReactNode;
    hintInputId: string;
    feedbackInputId: string;
};
declare const OakCATQuestion: (props: OakCATQuestionProps) => React__default.JSX.Element;

interface OakCaptionCardProps {
    captionId: string;
    videoTitle: string;
    lessonUid: string;
    videoType: "lesson";
    lastUpdated: string;
    lastEdited?: string;
    checked?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    onCheckChanged?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React__default.MouseEvent<HTMLDivElement>) => void;
    editHref: string;
    lessonHref: string;
    "data-testid"?: string;
}
/**
 * A caption card with links to the associated lesson and rev edit page.
 *
 * ## Events
 * The following callbacks are available for tracking checkbox events:
 *
 * ### onCheckChanged
 *  onCheckChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 */
declare const OakCaptionCard: (props: OakCaptionCardProps) => React__default.JSX.Element;

interface OakCaptionSearchProps {
    defaultValue?: string;
    /**
     * Callback function that is called when the search is submitted.
     * It receives the caption ID string as an argument.
     */
    onSearch?: (captionIdString: string) => void;
    /**
     * Indicates if there is an error in the search input.
     */
    hasError?: boolean;
    /**
     * Text to display when there is an error in the search input.
     */
    errorText?: string;
    /**
     * Indicates if the search is currently loading. will disable the input and button.
     */
    isLoading?: boolean;
}
declare const OakCaptionSearch: ({ onSearch, hasError, errorText, isLoading, defaultValue, }: OakCaptionSearchProps) => React__default.JSX.Element;

/**
 * Installs a mock of IntersectionObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
declare function installMockIntersectionObserver(): void;

/**
 * Installs a mock of ResizeObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
declare function installMockResizeObserver(): void;

declare const rgbToHex: (rgb: string) => string;

export { type BannerTypes, type Consent, HeadingTagComponent, IconDown, IconUp, type InternalQuizResultItemProps, type LessonSectionName$1 as LessonSectionName, type MenuItemProps, OakAccordion, type OakAccordionProps, type OakAllSpacingToken, OakAnchorTarget, type OakAnchorTargetProps, OakAspectRatio, type OakAspectRatioProps, OakBackLink, type OakBackLinkProps, OakBasicAccordion, type OakBasicAccordionProps, type OakBorderRadiusToken, type OakBorderWidthToken, OakBox, type OakBoxProps, OakBulletList, type OakBulletListProps, OakButtonAsRadioGroup, OakButtonWithDropdown, type OakButtonWithDropdownProps, OakCATQuestion, type OakCATQuestionProps, OakCaptionCard, type OakCaptionCardProps, OakCaptionSearch, type OakCaptionSearchProps, OakCardHeader, type OakCardHeaderprops, OakCardWithHandDrawnBorder, type OakCardWithHandDrawnBorderProps, OakCarousel, type OakCarouselProps, OakCheckBox, type OakCheckBoxProps, OakCloseButton, type OakCloseButtonProps, OakCloudinaryConfigProvider, OakCloudinaryImage, type OakCloudinaryImageProps, OakCodeRenderer, type OakCodeRendererProps, OakCollapsibleContent, type OakCollapsibleContentProps, type OakColorFilterToken, type OakColorToken, type OakCombinedColorToken, type OakCombinedSpacingToken, OakCookieBanner, type OakCookieBannerProps, OakCookieConsent, OakCookieConsentContext, type OakCookieConsentProps, OakCookieConsentProvider, OakCookieSettingsModal, type OakCookieSettingsModalProps, OakCopyLinkButton, OakDownloadCard, type OakDownloadCardProps, OakDownloadsAccordion, type OakDownloadsAccordionProps, OakDownloadsJourneyChildSubjectTierSelector, type OakDownloadsJourneyChildSubjectTierSelectorProps, OakDragAndDropInstructions, OakDraggable, OakDraggableFeedback, type OakDropShadowToken, OakDroppable, type OakDroppableProps, OakFieldError, type OakFieldErrorProps, OakFieldset, type OakFieldsetProps, OakFilterDrawer, OakFlex, type OakFlexProps, type OakFontSizeToken, type OakFontToken, OakForm, OakFormInput, type OakFormInputProps, OakFormInputWithLabels, type OakFormInputWithLabelsProps, type OakFormProps, OakGlobalStyle, OakGrid, OakGridArea, type OakGridAreaProps, type OakGridProps, type OakHandDrawnBoxWithIconProps, OakHandDrawnCard, type OakHandDrawnCardProps, OakHandDrawnCardWithIcon, OakHandDrawnFocusUnderline, type OakHandDrawnFocusUnderlineProps, OakHandDrawnHR, type OakHandDrawnHRProps, OakHeaderHero, type OakHeaderHeroProps, OakHeading, type OakHeadingProps, type OakHeadingTag, OakHintButton, type OakHintButtonProps, OakHomepageTabButton, type OakHomepageTabButtonProps, OakHoverLink, type OakHoverLinkProps, OakIcon, type OakIconName, type OakIconProps, OakImage, type OakImageProps, OakInfo, OakInfoButton, type OakInfoButtonProps, type OakInfoCardProps, type OakInfoProps, OakInformativeModal, OakInformativeModalBody, type OakInformativeModalBodyProps, OakInformativeModalBorderColor, type OakInformativeModalCloseAction, OakInformativeModalFooter, type OakInformativeModalFooterProps, type OakInformativeModalProps, OakInlineBanner, type OakInlineBannerProps, type OakInlineBannerTypes, type OakInlineBannerVariantProps, type OakInlineBannerVariants, OakInlineRegistrationBanner, type OakInlineRegistrationBannerProps, type OakInnerPaddingToken, OakJauntyAngleLabel, type OakJauntyAngleLabelProps, OakKbd, type OakKbdProps, OakLI, type OakLIProps, OakLabel, type OakLabelProps, OakLessonBottomNav, type OakLessonBottomNavProps, OakLessonInfoCard, OakLessonLayout, type OakLessonLayoutProps, OakLessonNavItem, type OakLessonNavItemProps, OakLessonReviewIntroVideo, type OakLessonReviewIntroVideoProps, OakLessonReviewItem, type OakLessonReviewItemProps, OakLessonReviewQuiz, OakLessonTopNav, type OakLessonTopNavProps, OakLessonVideoTranscript, OakLink, OakLinkCard, type OakLinkCardProps, type OakLinkProps, OakLoadingSpinner, type OakLoadingSpinnerProps, OakMaxWidth, OakMediaClip, OakMediaClipList, OakMediaClipListAccordion, type OakMediaClipListProps, type OakMediaClipProps, OakMediaClipStackListItem, type OakMediaClipStackListItemProps, OakModalCenter, OakModalCenterBody, type OakModalCenterBodyProps, type OakModalCenterProps, OakMultilineText, type OakMultilineTextProps, OakOL, type OakOLProps, type OakOpacityToken, OakOptGroup, type OakOptGroupProps, OakOption, type OakOptionProps, OakOutlineAccordion, type OakOutlineAccordionProps, OakP, type OakPProps, OakPagination, type OakPaginationProps, OakPrimaryButton, type OakPrimaryButtonProps, OakPrimaryInvertedButton, type OakPrimaryInvertedButtonProps, OakPrimaryNav, OakPrimaryNavItem, type OakPrimaryNavItemProps, type OakPrimaryNavProps, OakPromoTag, type OakPromoTagProps, type OakPupilContentGuidance, OakPupilJourneyContentGuidance, type OakPupilJourneyContentGuidanceProps, OakPupilJourneyHeader, type OakPupilJourneyHeaderProps, OakPupilJourneyLayout, type OakPupilJourneyLayoutProps, OakPupilJourneyList, OakPupilJourneyListCounter, OakPupilJourneyListItem, OakPupilJourneyListItemSubheading, type OakPupilJourneyListItemSubheadingProps, type OakPupilJourneyListProps, OakPupilJourneyOptionalityButton, OakPupilJourneyOptionalityItem, type OakPupilJourneyOptionalityItemProps, OakPupilJourneyProgrammeOptions, type OakPupilJourneyProgrammeOptionsProps, OakPupilJourneySubjectButton, type OakPupilJourneySubjectButtonProps, OakPupilJourneyUnitsFilter, type OakPupilJourneyUnitsFilterProps, OakPupilJourneyYearButton, type OakPupilJourneyYearButtonProps, OakQuizCheckBox, type OakQuizCheckBoxProps, OakQuizCounter, type OakQuizCounterProps, OakQuizFeedback, type OakQuizFeedbackProps, OakQuizHint, type OakQuizHintProps, OakQuizMatch, OakQuizMatchItemId, type OakQuizMatchProps, OakQuizOrder, type OakQuizOrderProps, OakQuizOrderitemId, OakQuizPrintableHeader, type OakQuizPrintableHeaderProps, OakQuizPrintableSubHeader, type OakQuizPrintableSubHeaderProps, OakQuizRadioButton, type OakQuizRadioButtonProps, OakQuizResultItem, OakQuizTextInput, OakQuote, type OakQuoteProps, OakRadioAsButton, type OakRadioAsButtonProps, OakRadioButton, OakRadioGroup, type OakRadioGroupProps, OakRadioTile, type OakRadioTileProps, OakRoundIcon, type OakRoundIconProps, OakSaveButton, type OakSaveButtonProps, OakSaveCount, type OakSaveCountProps, OakScaleImageButton, type OakScaleImageButtonProps, OakScreenReader, OakSearchFilterCheckBox, type OakSearchFilterCheckBoxProps, OakSecondaryButton, OakSecondaryButtonAsRadio, type OakSecondaryButtonAsRadioProps, type OakSecondaryButtonProps, OakSecondaryButtonWithDropdown, type OakSecondaryButtonWithDropdownProps, OakSecondaryLink, type OakSecondaryLinkProps, OakSelect, type OakSelectProps, OakSideMenuNav, OakSideMenuNavLink, type OakSideMenuNavLinkProps, type OakSideMenuNavProps, OakSignLanguageButton, OakSmallPrimaryButton, type OakSmallPrimaryButtonProps, OakSmallPrimaryInvertedButton, type OakSmallPrimaryInvertedButtonProps, OakSmallSecondaryButton, type OakSmallSecondaryButtonProps, OakSmallSecondaryButtonWithDropdown, type OakSmallSecondaryButtonWithDropdownProps, OakSmallSecondaryToggleButton, type OakSmallSecondaryToggleButtonProps, OakSmallTertiaryInvertedButton, type OakSmallTertiaryInvertedButtonProps, type OakSolidBorderAccordionProps, type OakSpaceBetweenToken, OakSpan, type OakSpanProps, OakStaticMessageCard, OakSubjectIcon, type OakSubjectIconProps, OakSvg, type OakSvgNames, type OakSvgProps, OakTagFunctional, type OakTagFunctionalProps, OakTeacherNotesInline, type OakTeacherNotesInlineProps, OakTeacherNotesModal, type OakTeacherNotesModalProps, OakTertiaryButton, OakTertiaryInvertedButton, OakTertiaryOLNav, type OakTertiaryOLNavProps, OakTextArea, type OakTextAreaProps, OakTextInput, type OakTextInputProps, type OakTheme, OakThemeProvider, type OakThemeProviderProps, OakTimer, type OakTimerProps, OakToast, type OakToastProps, OakTooltip, type OakTooltipProps, type OakTransitionToken, OakTypography, type OakTypographyProps, OakUL, type OakULProps, type OakUiRoleToken, OakUnitListItem, type OakUnitListItemProps, OakUnitListOptionalityItem, OakUnitListOptionalityItemCard, type OakUnitListOptionalityItemCardProps, type OakUnitListOptionalityItemProps, OakUnitsContainer, type OakUnitsContainerProps, OakUnitsHeader, type OakUnitsHeaderProps, OakVideoTranscript, type OakZIndexToken, type Phase$1 as Phase, type PolicyConsent, type PupilJourneySectionName, RadioContext, ReviewItemContainer, ReviewItemTitleSection, StyledMediaClipImage, type Subject, type Tier, type TileItem, announcements, bannerTypes, bannerVariants, formatTimeCode, generateOakIconURL, getBackgroundUrlForSection, getDefaultContextState, installMockIntersectionObserver, installMockResizeObserver, isTileItem, isValidIconName, lessonSectionNames, oakAllSpacingTokens, oakBorderRadiusTokens, oakBorderWidthTokens, oakBoxCss, oakColorTokens, oakDarkTheme, oakDefaultTheme, oakDropShadowTokens, oakFlexCss, oakFontSizeTokens, oakFontTokens, oakHeadingTags, oakIconNames, oakInnerPaddingTokens, oakOpacityTokens, oakPlaceholder, oakSpaceBetweenTokens, oakTransitionTokens, oakUiRoleTokens, oakZIndexTokens, placeholderStyles, removedGuidanceDuplicates, rgbToHex, useCookieConsent };
