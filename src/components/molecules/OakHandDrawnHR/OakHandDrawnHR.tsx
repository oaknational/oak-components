import React from "react";
import styled from "styled-components";

import { OakFlex } from "../../atoms";
import {
  InternalStyledSvg,
  InternalStyledSvgProps,
} from "../../atoms/InternalStyledSvg";

import { SizeStyleProps } from "@/styles/utils/sizeStyle";
import { SpacingStyleProps } from "@/styles/utils/spacingStyle";

const StyledOakFlex = styled(OakFlex)``;

export type OakHandDrawnHRProps = {
  fill?: InternalStyledSvgProps["$fill"];
  stroke?: InternalStyledSvgProps["$stroke"];
  strokeWidth?: InternalStyledSvgProps["$strokeWidth"];
} & SpacingStyleProps &
  SizeStyleProps;

/**
 * A Drawn HR svg inside a flex container
 *
 * An optional `stroke` and `strokeWidth` can be applied to give the background a border
 */
export const OakHandDrawnHR = (props: OakHandDrawnHRProps) => {
  const { fill, stroke, strokeWidth, ...flexProps } = props;

  return (
    <StyledOakFlex {...flexProps}>
      <InternalStyledSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 866 8"
        preserveAspectRatio="none"
        $fill={fill}
        $stroke={stroke}
        $strokeWidth={strokeWidth}
        height="100%"
        width="100%"
      >
        <g clipPath="url(#clip0_175_6785)">
          <path
            d="M865.845 2.15897C865.975 1.74492 865.563 1.33087 864.955 1.33087C788.833 1.21257 638.585 4.00739 558.84 1.30129C560.814 1.22736 562.55 1.36044 563.287 1.18299C546.019 0.946396 526.408 1.10906 509.119 1.44917C530.292 -0.0295749 543.785 1.41959 562.289 0.931608C559.556 0.872458 545.347 0.842884 554.436 0.798521C547.538 0.369686 533.003 0.754159 530.27 0.621072C522.113 0.177449 549.794 0.724584 549.23 0.399261C544.219 0.0295749 524.586 0.295749 522.937 0C522.959 0.369686 522.352 0.295749 522.612 0.399261C423.669 0.724584 317.892 0.340111 218.666 0.828096C218.861 0.828096 219.013 0.828096 219.078 0.857671C218.753 0.902033 217.451 0.857671 218.579 0.828096C154.909 1.71534 98.6582 -0.502773 49.7396 2.18854C59.3281 0.0887246 12.145 1.39002 8.34861 1.52311C2.75172 1.44917 6.69991 1.96673 8.13168 1.67098C8.43539 2.91312 0.799314 1.73013 2.20938 3.12015C-18.7247 12.7024 115.622 4.7024 130.504 6.96488C127.011 6.21072 147.056 7.34935 148.705 6.93531C147.859 6.89094 146.362 6.78743 144.692 6.75786C140.396 6.72828 151.525 6.07763 149.486 6.93531C150.354 7.18669 153.282 6.44732 152.935 6.93531C154.714 7.06839 166.385 5.75231 158.814 6.92052C165.647 6.52126 168.077 7.68946 162.046 6.26987C222.332 7.55638 283.247 5.8854 342.34 6.29945C458.66 5.97412 569.839 6.10721 682.124 6.69871C679.932 6.22551 684.532 6.07763 683.36 6.69871C715.076 6.71349 731.801 6.81701 762.432 6.99446C757.486 6.72828 758.68 6.13678 763.821 6.55083C784.278 7.51202 841.353 7.73383 863.784 6.96488C863.35 6.68392 864.804 6.77264 864.782 6.92052C864.955 5.84104 865.259 5.84104 864.717 5.95934C864.76 5.95934 863.697 6.32902 864.001 5.73752C864.153 5.44177 864.999 5.60444 864.088 5.30869C864.652 5.30869 866.192 4.90943 864.608 5.02773C861.723 4.17006 866.778 4.99815 865.91 4.42144C865.519 4.12569 865.606 2.95749 865.845 2.15897ZM526.43 0.606285C528.448 0.650647 526.539 0.754159 525.476 0.606285C524.825 0.547135 525.042 0.547135 526.43 0.606285ZM17.0694 1.61183C17.0694 1.61183 17.3731 1.58226 17.308 1.62662C17.2646 1.6414 17.0694 1.6414 17.0694 1.61183ZM18.0889 1.15342C18.1974 1.15342 18.2408 1.15342 18.3059 1.16821H17.8286C17.8286 1.16821 17.9805 1.15342 18.0889 1.15342ZM18.371 1.41959C18.371 1.41959 18.3059 1.40481 18.371 1.39002V1.41959ZM36.8971 2.04067C30.6928 1.68577 40.9321 1.62662 42.6242 2.08503C42.4072 2.08503 37.4611 2.04067 36.8971 2.04067ZM63.6451 1.34566C67.5933 1.34566 62.4302 1.41959 61.736 1.36044C62.018 1.34566 62.8641 1.34566 63.6451 1.34566ZM84.8395 3.88909C84.5141 3.88909 84.6226 3.87431 84.8395 3.87431V3.88909ZM92.1068 1.58226C80.2405 2.24769 61.6926 1.878 59.0461 1.61183C67.2028 1.43438 85.2734 1.52311 95.3608 1.47874C94.3629 1.47874 93.2565 1.52311 92.1068 1.58226ZM97.183 2.41035C96.6841 2.38078 97.5084 2.30684 97.4867 2.41035C97.4867 2.41035 97.3566 2.41035 97.183 2.41035ZM95.9899 1.47874C96.8142 1.44917 97.5518 1.46396 98.1809 1.47874C97.5084 1.49353 96.7709 1.49353 95.9899 1.47874ZM100.589 1.53789C100.589 1.53789 99.7862 1.50832 98.5714 1.47874C100.415 1.50832 101.348 1.46396 102.368 1.52311C102.238 1.53789 101.587 1.53789 100.589 1.53789ZM101.869 1.18299C101.869 1.18299 102.997 1.15342 103.105 1.18299C102.867 1.21257 101.999 1.21257 101.869 1.18299ZM107.704 1.84843C107.704 1.84843 107.509 1.84843 107.422 1.83364C107.769 1.83364 107.856 1.83364 107.704 1.84843ZM139.29 1.21257C138.704 1.18299 139.767 1.13863 139.724 1.18299C139.659 1.19778 139.463 1.21257 139.29 1.21257ZM141.633 5.6488C140.982 5.6488 141.199 5.60444 141.633 5.61922V5.6488ZM177.882 6.50647C162.654 6.71349 183.132 5.97412 183.588 5.73752C183.588 5.78189 181.006 6.50647 177.882 6.50647ZM185.779 0.946396H184.564C183.631 0.916821 186.56 0.931608 185.779 0.946396ZM209.945 1.00555C210.488 0.975971 210.813 0.975971 211.355 1.00555C212.18 1.02033 209.099 1.02033 209.945 1.00555ZM202.244 6.41775C199.077 6.46211 192.873 6.50647 188.989 6.66913C187.818 5.67837 202.873 6.38817 202.244 6.41775ZM213.264 6.41775C212.874 6.46211 208.492 6.46211 208.231 6.43253C207.667 6.50647 214.175 5.45656 213.264 6.41775ZM218.905 6.19593C218.601 6.19593 215.434 6.38817 215.087 6.38817C215.412 6.28466 220.336 6.01849 218.905 6.19593ZM226.801 0.857671C226.953 0.842884 227.343 0.842884 227.495 0.857671C227.3 0.872458 226.996 0.872458 226.801 0.857671ZM256.152 0.768946C258.018 0.768946 255.914 0.783734 255.588 0.783734C255.718 0.768946 255.914 0.768946 256.152 0.768946ZM252.855 4.00739C252.291 3.97782 254.742 3.26802 254.634 3.62292C254.46 3.66728 253.115 4.05176 252.855 4.00739ZM257.757 4.99815C257.302 4.92422 255.415 4.33272 254.677 4.43623C255.501 4.24399 258.625 4.87985 257.757 4.99815ZM254.785 3.46026C255.133 3.43068 257.541 3.38632 257.259 3.43068C257.888 3.46026 254.937 3.48983 254.785 3.46026ZM259.363 3.59335C258.669 3.59335 257.757 3.10536 257.757 3.07579C257.974 3.07579 261.836 2.88355 259.363 3.59335ZM258.886 2.01109C256.456 2.04067 254.72 1.65619 254.417 1.62662C253.332 1.44917 266.543 1.70055 258.886 2.01109ZM264.157 4.64325L263.181 4.02218C262.226 3.44547 265.35 4.40665 264.157 4.64325ZM289.712 3.50462C290.71 3.50462 291.686 4.24399 290.948 4.25878C288.432 3.90388 285.655 2.91312 289.712 3.50462ZM271.424 2.20333C273.203 2.45471 281.577 1.00555 275.394 2.54344C275.763 2.42514 267.389 2.15897 271.424 2.20333ZM275.893 3.12015C276.717 2.79482 278.345 3.6525 278.019 4.09612C277.542 4.09612 275.893 3.20887 275.893 3.12015ZM284.223 2.97227C281.447 2.45471 286.935 2.21811 287.022 2.07024C287.022 2.1146 285.351 3.01664 284.223 2.97227ZM290.862 5.36784C288.822 5.36784 287.477 5.33826 287.477 5.33826C286.653 3.91867 298.172 6.0037 290.862 5.36784ZM296.719 5.07209C293.053 4.39187 298.671 4.5841 298.91 4.61368C298.91 4.64325 297.717 5.07209 296.719 5.07209ZM317.219 3.43068C320.126 4.62847 316.178 3.7708 315.744 3.4159C315.917 3.38632 316.612 3.40111 317.219 3.43068ZM304.702 4.39187C302.967 5.13124 304.116 4.03697 304.42 3.93346C305.526 3.69686 306.459 4.12569 304.702 4.39187ZM307.587 3.35675C307.457 3.16451 302.858 2.43993 305.808 2.67653C306.741 2.5878 307.001 2.7061 305.895 2.67653C306.958 2.7061 307.978 3.32717 307.587 3.35675ZM310.928 2.54344C309.561 2.54344 311.253 1.78928 312.533 1.98152C312.403 1.9963 311.362 2.54344 310.928 2.54344ZM319.649 5.56007C320.343 5.58965 309.323 5.66359 314.572 5.54529C317.284 6.31423 322.751 2.98706 319.649 5.56007ZM329.411 5.24954C326.808 5.27911 331.884 4.64325 331.992 4.61368C332.339 4.67283 330.235 5.2939 329.411 5.24954ZM335.355 2.24769C334.704 2.01109 338.023 2.5878 338.413 2.29205C338.023 2.41035 335.897 3.00185 335.355 2.24769ZM346.201 4.12569C343.338 4.12569 344.097 3.97782 346.57 3.82994C349.499 4.52495 348.696 4.42144 346.201 4.12569ZM359.977 3.01664C359.977 3.01664 355.421 3.07579 355.248 3.061C355.226 3.19409 362.211 1.49353 359.977 3.01664ZM413.364 0.902033C414.102 0.857671 414.492 0.872459 414.536 0.902033C415.555 1.70055 411.889 0.842884 413.364 0.902033ZM371.886 1.52311C370.238 2.51386 367.656 1.52311 365.704 1.52311C365.704 1.47874 371.322 1.46396 371.886 1.52311ZM364.966 3.03142C363.816 3.87431 362.905 3.81516 364.25 2.60259C365.205 1.90758 366.919 2.01109 364.966 3.03142ZM370.954 6.01849C369.999 6.01849 366.81 6.01848 366.485 5.91497C367.266 5.8854 375.574 4.92422 370.954 6.01849ZM378.546 6.01849C375.943 5.90019 376.117 5.2939 377.722 5.4122C379.956 5.23475 382.581 5.50093 378.546 6.01849ZM387.267 3.57856C386.312 3.56377 386.963 2.76525 388.178 2.76525C390.413 2.98706 389.87 3.51941 387.267 3.57856ZM393.623 1.80407C389.545 1.58226 393.341 1.12384 394.795 1.34566C397.506 1.00555 397.745 1.37523 393.623 1.80407ZM401.303 5.84104C396.942 5.87061 401.216 5.38263 402.734 5.24954C403.429 5.2939 402.301 5.84104 401.303 5.84104ZM405.207 4.03697C405.164 4.14048 404.904 4.52495 403.472 4.02218C400.934 2.76525 406.162 3.82995 405.207 4.03697ZM408.722 4.11091C407.116 4.11091 404.253 3.68207 407.42 3.68207C407.746 2.60259 410.761 3.93346 408.722 4.11091ZM410.848 1.62662C409.958 1.46396 406.704 1.16821 409.546 0.680222C410.11 0.680222 413.581 1.81885 410.848 1.62662ZM412.93 5.4122C413.147 5.38263 414.232 4.33272 415.902 4.85028L412.93 5.4122ZM429.027 0.857671C430.393 0.857671 434.71 0.813309 435.708 0.887246C436.424 1.25693 425.643 2.52865 429.027 0.857671ZM437.878 0.857671C438.181 0.813309 439.309 0.828096 439.591 0.916821C431.587 2.83919 437.14 0.946396 437.878 0.857671ZM451.653 5.35305C451.176 5.35305 448.898 4.83549 448.898 4.80592C448.898 4.79113 450.807 4.5841 451.111 4.5841C453.562 4.65804 452.412 5.44177 451.653 5.35305ZM480.245 3.4159C478.661 3.6525 474.822 3.6525 474.822 3.4159C474.149 3.38632 481.568 3.14972 480.245 3.4159ZM485.69 5.32348C473.325 5.45656 491.829 4.64325 490.983 5.0573C490.983 5.23475 491.46 5.23475 485.69 5.32348ZM495.018 2.51386C494.454 2.51386 493.977 2.43993 493.977 2.36599C494.194 1.98152 497.252 2.45471 495.018 2.51386ZM502.524 2.26248C502.307 2.45471 501.656 2.49908 500.159 2.60259C492.285 2.85397 502.871 1.65619 502.524 2.26248ZM506.429 2.39556C510.377 2.3512 507.275 2.89834 505.105 2.41035C505.214 2.39556 505.648 2.39556 506.429 2.39556ZM506.559 3.13494C507.926 3.13494 509.01 3.22366 509.01 3.31238C508.338 3.4159 501.136 3.12015 506.559 3.13494ZM522.243 5.75231C518.36 6.38817 511.418 5.91497 507.253 5.4122C510.16 5.66359 522.547 5.33826 522.243 5.75231ZM590.057 3.48983C589.319 3.59335 587.128 3.59335 586.391 3.48983C587.367 3.2976 588.972 3.31238 590.057 3.48983ZM582.551 2.20333C586.109 1.98152 588.083 1.98152 588.083 2.20333C588.777 2.41035 577.019 2.61738 582.551 2.20333ZM564.545 1.71534C566.302 1.71534 566.064 2.83919 564.155 2.07024C563.699 1.86322 563.374 1.67098 564.545 1.71534ZM558.84 1.71534C560.619 1.7597 562.007 1.83364 563.049 2.07024C561.899 2.29205 549.273 1.70055 558.84 1.71534ZM553.438 3.72643C543.893 3.4159 556.107 3.20887 556.801 3.72643C556.801 3.87431 555.564 3.87431 553.438 3.72643ZM562.897 3.23845C561.205 3.26802 556.15 2.92791 560.749 2.89834C562.398 2.86876 567.474 3.19409 562.897 3.23845ZM567.17 2.54344C565.261 2.54344 563.96 2.54344 563.504 2.4695C565.977 2.17375 576.846 2.57301 567.17 2.54344ZM573.939 5.51571C571.704 5.51571 569.708 5.42699 569.708 5.35305C570.62 4.89464 582.79 5.45656 573.939 5.51571ZM588.885 5.67837C588.712 5.87061 575.37 6.15157 583.354 5.57486C586.911 5.23475 590.859 5.33826 588.885 5.67837ZM595.979 4.09612C594.678 4.18484 594.743 5.14603 593.137 3.99261C593.051 3.99261 587.28 4.37708 587.193 4.37708C588.517 3.50462 594.981 3.80037 595.979 4.09612ZM602.444 2.49908C606.913 2.54344 602.097 2.61738 600.795 2.52865C600.795 2.52865 601.489 2.49908 602.444 2.49908ZM601.576 4.53974C601.12 4.53974 600.556 4.4658 600.405 4.37708C599.428 3.66728 603.767 4.76155 601.576 4.53974ZM605.112 4.42144C603.724 4.42144 602.769 4.25878 602.422 4.09612C602.986 3.44547 611.468 4.28836 605.112 4.42144ZM622.315 5.24954C616.544 5.14603 619.365 3.68207 624.311 4.74677C626.09 4.99815 625.612 5.24954 622.315 5.24954ZM654.269 2.97227C655.788 2.8244 656.482 2.8244 657.068 2.97227C657.849 3.1793 651.926 3.13494 654.269 2.97227ZM651.124 2.39556C656.243 2.43993 650.712 2.5878 649.714 2.52865C648.651 2.39556 649.28 2.39556 651.124 2.39556ZM633.943 5.51571C634.767 5.11645 637.066 5.13124 637.826 5.51571C636.763 5.7671 635.006 5.7671 633.943 5.51571ZM646.047 3.97782C638.368 3.59335 651.774 3.72643 653.553 3.97782C660.907 4.89464 647.241 4.25878 646.047 3.97782ZM653.271 5.97412C652.859 5.72274 661.211 5.73752 660.777 5.97412C660.322 6.34381 654.031 6.16636 653.271 5.97412ZM667.611 3.09057C661.276 3.2976 665.398 1.89279 669.563 2.92791C670.691 3.09057 670.236 3.09057 667.611 3.09057ZM676.18 6.3586C675.789 6.38817 669.715 6.53605 669.476 6.38817C670.214 5.91497 676.245 6.37338 676.657 6.3586C676.375 6.38817 676.223 6.3586 676.18 6.3586ZM683.121 4.21442C682.774 4.21442 682.514 4.03697 682.514 3.85952C682.579 2.83919 684.814 4.3475 683.121 4.21442ZM696.875 5.5305C694.445 5.75231 693.122 5.75231 693.122 5.5305C692.558 5.32348 700.476 5.11645 696.875 5.5305ZM699.283 4.61368C691.17 4.48059 701.713 3.99261 702.754 4.49538C702.754 4.49538 701.257 4.61368 699.283 4.61368ZM701.474 3.80037C693.231 3.84473 704.598 3.1793 705.205 3.66728C705.205 3.80037 703.643 3.80037 701.474 3.80037ZM706.03 5.81146C705.27 5.11645 709.436 5.70795 709.327 5.81146C709.978 6.16636 706.811 6.16636 706.03 5.81146ZM716.746 6.56562C716.985 6.90573 706.919 6.50647 711.844 6.26987C714.815 6.122 717.679 6.26987 716.746 6.56562ZM718.091 4.22921C714.75 4.19963 714.707 3.72643 718.091 3.82994C721.28 3.72643 721.237 4.19963 718.091 4.22921ZM770.459 3.20887C772.455 3.20887 773.995 3.44547 773.995 3.68207C772.889 4.56932 763.083 3.25324 770.459 3.20887ZM730.934 4.08133C730.5 4.08133 730.76 3.96303 731.715 3.84473C736.856 3.28281 732.322 4.36229 730.934 4.08133ZM735.663 6.49168C732.799 6.49168 732.799 5.95934 735.663 5.95934C738.44 5.95934 738.44 6.49168 735.663 6.49168ZM737.854 4.49538C736.986 4.49538 736.27 4.42144 736.27 4.34751C735.771 4.09612 741.108 4.45102 737.854 4.49538ZM738.591 3.97782C737.767 3.97782 736.682 3.94824 736.27 3.84473C736.791 3.68207 744.687 3.91867 738.591 3.97782ZM756.922 5.5305C723.276 5.90019 765.556 4.73198 769.83 5.33826C769.83 5.33826 763.843 5.5305 756.922 5.5305ZM767.726 6.83179C758.745 6.56562 775.687 6.68392 775.34 6.83179C776.056 6.96488 772.997 6.96488 767.726 6.83179ZM785.124 4.96858C784.451 5.73752 778.572 6.75786 782.022 5.78189C782.868 5.54529 788.009 3.60813 785.124 4.96858ZM787.705 6.4769C789.289 6.04806 793.454 6.07763 795.016 6.4769C793.02 6.75786 789.701 6.75786 787.705 6.4769ZM808.206 5.87061C802.066 5.47135 813.868 4.61368 811.633 5.58965C811.633 6.13678 811.112 6.13678 808.206 5.87061ZM839.986 5.57486C838.229 5.57486 836.559 5.57486 836.277 5.4122C836.993 4.53974 847.601 5.58965 839.986 5.57486ZM858.404 5.94455C847.839 5.7671 869.988 0.635859 859.163 5.7671C858.361 6.21072 859.163 6.4769 858.404 5.94455ZM862.461 5.8854C862.461 5.97412 859.424 6.40296 859.185 6.37338C860.009 6.22551 863.61 4.15527 862.461 5.8854ZM864.088 5.07209C864.088 5.07209 864.174 5.04251 864.218 5.04251C864.348 5.14603 863.914 5.19039 864.088 5.07209Z"
            fill="inherit"
          />
        </g>
        {/* <defs>
          <clipPath id="clip0_175_6785">
            <rect width="866" height="8" fill="white" />
          </clipPath>
        </defs> */}
      </InternalStyledSvg>
    </StyledOakFlex>
  );
};
