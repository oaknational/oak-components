import React from "react";

import {
  InternalCardWithBackgroundElement,
  InternalCardWithBackgroundElementProps,
} from "@/components/base/InternalCardWithBackgroundElement/InternalCardWithBackgroundElement";
import {
  InternalStyledSvg,
  InternalStyledSvgProps,
} from "@/components/base/InternalStyledSvg";

export type OakHandDrawnCardProps = Omit<
  InternalCardWithBackgroundElementProps,
  "backgroundElement"
> & {
  fill?: InternalStyledSvgProps["$fill"];
  stroke?: InternalStyledSvgProps["$stroke"];
  strokeWidth?: InternalStyledSvgProps["$strokeWidth"];
};

/**
 * A flexed card with a hand-drawn filled background
 *
 * An optional `stroke` and `strokeWidth` can be applied to give the background a border
 */
export const OakHandDrawnCard = ({
  $pa = "inner-padding-xl",
  fill = "bg-decorative1-main",
  stroke,
  strokeWidth,
  $width = "fit-content",
  ...props
}: OakHandDrawnCardProps) => {
  return (
    <InternalCardWithBackgroundElement
      $pa={$pa}
      $width={$width}
      backgroundElement={
        <InternalStyledSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 457 120"
          preserveAspectRatio="none"
          $fill={fill}
          $stroke={stroke}
          $strokeWidth={strokeWidth}
        >
          <path
            d="M27.442 2.59c5.262-.362 11.96-.656 18.624-.932 4.374-.19 8.748-.371 12.712-.578 1.367-.07 3.042-.087 4.716-.095C65.032.976 66.57.959 67.903.907 91.858-.017 115.164.268 139.325.57l6.22.078c20.333.12 40.768.086 61.033-.13 6.664-.025 13.294-.043 19.957-.06C243.656.415 260.777.363 277.83.234c8.85-.07 17.667-.052 26.518-.035 12.132.026 24.366.052 36.771-.147 8.475-.138 17.633.087 26.757.302 3.725.087 7.45.182 11.107.25 3.69.061 7.347.139 10.969.217 4.511.095 8.988.19 13.499.259 13.464.207 30.619 1.519 30.619 1.519 3.588.449 7.074 1.32 10.286 2.59 2.973 1.304 4.682 4.135 6.391 6.967.717 1.165 1.435 2.33 2.221 3.384.273.363.342.812.376 1.26.034.406.102.82.307 1.175 3.52 6.388 2.427 12.604 1.299 19.044a27.243 27.243 0 0 0-.273 1.658 70.082 70.082 0 0 0 .478 16.273l.205 5.31c.171 4.575.342 9.133.854 13.683.274 2.357.205 4.705.137 7.07-.102 3.238-.205 6.492.547 9.808.547 2.261-.308 4.705-1.162 7.13-.342.993-.684 1.986-.923 2.962-.239.984-.546 1.951-.82 2.926-.342 1.2-.718 2.392-.991 3.6-1.196 5.379-4.511 8.435-11.756 9.134-2.392.233-4.75.518-7.142.855h-6.937c-5.263.371-11.961.656-18.624.932-4.375.19-8.749.371-12.713.579-1.367.069-3.041.086-4.716.095-1.538.008-3.075.025-4.408.086-23.956.924-47.262.639-71.422.337l-6.186-.078a3693.945 3693.945 0 0 0-61.033.129c-6.664.026-13.294.044-19.958.061-17.121.043-34.241.095-51.294.224-8.851.069-17.667.052-26.518.035-12.132-.026-24.366-.052-36.771.147-8.475.138-17.633-.087-26.758-.303-3.725-.086-7.45-.181-11.106-.25-3.69-.06-7.313-.138-10.97-.216-4.51-.095-8.987-.19-13.498-.259-18.932-.293-30.175-1.079-33.66-2.754-1.47-.38-2.871-.837-4.238-1.355-3.076-1.304-4.887-4.135-6.664-6.967-.752-1.165-1.47-2.331-2.29-3.384-.273-.363-.341-.812-.376-1.261-.034-.405-.102-.82-.307-1.174C0 95.664 1.128 89.448 2.324 83.008l.308-1.658c.478-5.421.341-10.869-.513-16.273-.102-1.77-.17-3.548-.24-5.318-.17-4.567-.375-9.125-.888-13.675-.273-2.357-.205-4.705-.136-7.07.102-3.238.205-6.493-.581-9.808-.547-2.262.341-4.705 1.196-7.13.342-.994.717-1.986.99-2.962.24-.984.548-1.96.855-2.927.376-1.2.752-2.39 1.025-3.6C5.605 7.21 9.022 4.154 16.574 3.455c2.495-.233 10.936-.855 10.936-.855l-.069-.009Z"
            vectorEffect="non-scaling-stroke"
          />
        </InternalStyledSvg>
      }
      {...props}
    />
  );
};
