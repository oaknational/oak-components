import type { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * Augment JSX without using a top-level `declare global { namespace JSX { ... } }`.
 * For Next.js (automatic JSX runtime), augment React’s JSX types.
 * We declare for both 'react' and 'react/jsx-runtime' to cover all TS setups.
 */

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      selectedcontent: DetailedHTMLProps<HTMLAttributes<unknown>, unknown>;
    }
  }
}

declare module "react/jsx-runtime" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      selectedcontent: DetailedHTMLProps<HTMLAttributes<unknown>, unknown>;
    }
  }
}
