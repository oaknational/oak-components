import jscodeshift from "jscodeshift";
import transform from "./transform";

function runTransform(source: string): string {
  const j = jscodeshift.withParser("tsx");

  return transform(
    {
      path: "test-file.tsx",
      source,
    },
    {
      jscodeshift: j,
      j,
      stats: () => undefined,
      report: () => undefined,
    },
  );
}

describe("svg-tree-shakable", () => {
  it("replaces the name string with an imported identifier", () => {
    const input = `
import React from "react";
import { OakSvg } from "@oaknational/oak-components";

export function Example() {
    return (
        <div>
            <OakSvg name="header-underline" />
            <OakSvg name="underline" />
            <OakSvg name="horizontal-rule" />
            <OakSvg name="underline-3" />
            <OakSvg name="button-border-top" />
            <OakSvg name="button-border-bottom" />
            <OakSvg name="button-border-left" />
            <OakSvg name="button-border-right" />
            <OakSvg name="icon-background" />
            <OakSvg name="scribble" />
        </div>
    )
}
    `;

    const output = runTransform(input);

    expect(output).toEqual(`
import React from "react";
import {
    OakSvg,
    HeaderUnderline,
    Underline,
    HorizontalRule,
    Underline3,
    ButtonBorderTop,
    ButtonBorderBottom,
    ButtonBorderLeft,
    ButtonBorderRight,
    IconBackground,
    Scribble,
} from "@oaknational/oak-components";

export function Example() {
    return (
        <div>
            <OakSvg name={HeaderUnderline} />
            <OakSvg name={Underline} />
            <OakSvg name={HorizontalRule} />
            <OakSvg name={Underline3} />
            <OakSvg name={ButtonBorderTop} />
            <OakSvg name={ButtonBorderBottom} />
            <OakSvg name={ButtonBorderLeft} />
            <OakSvg name={ButtonBorderRight} />
            <OakSvg name={IconBackground} />
            <OakSvg name={Scribble} />
        </div>
    );
}
    `);
  });
});
