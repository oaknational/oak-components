import React, { ReactElement } from "react";
import styled from "styled-components";

import { OakFlex } from "@/components/layout-and-structure/OakFlex";
import { OakSpan } from "@/components/typography/OakSpan";
import { OakBoxProps } from "@/components/layout-and-structure/OakBox";
import { OakP } from "@/components/typography/OakP";
import { OakUL } from "@/components/typography/OakUL";
import { OakLI } from "@/components/typography/OakLI";
import { OakUiRoleToken } from "@/styles";
import { TypographyStyleProps } from "@/styles/utils/typographyStyle";
import { OakInfo } from "@/components/owa/OakInfo/OakInfo";

const StyledCodeContainer = styled(OakSpan)`
  font-family: "Roboto Mono", --font-roboto-mono, monospace;
`;

export type OakCodeRendererProps = {
  string: string;
} & TypographyStyleProps &
  OakBoxProps;

export const OakCodeRenderer = ({ string, ...rest }: OakCodeRendererProps) => {
  const findAndStyleInlineCode = (text: string) => {
    const parts = text.split(/(`.*?`)/); // Matches text enclosed in backticks
    if (parts.length === 1 && !text.startsWith("`")) {
      return text;
    }
    return (
      <OakSpan>
        {parts.map((part, index) => {
          if (part.startsWith("`") && part.endsWith("`")) {
            // Remove backticks and style the content
            return (
              <StyledCodeContainer
                key={index}
                $background={"bg-inverted"}
                $color={"text-inverted"}
                $pv={["spacing-0", "spacing-4"]}
                $ph={["spacing-8", "spacing-8"]}
                $borderRadius={"border-radius-m2"}
                $display={"inline-block"}
                $font={["code-2", "code-1"]}
                {...rest}
              >
                {part.slice(1, -1)}
              </StyledCodeContainer>
            );
          }
          return part; // Return the unstyled part
        })}
      </OakSpan>
    );
  };

  const syntaxHighlight = (code: string) => {
    // Define regex patterns for different code parts
    const patterns: { regex: RegExp; color: OakUiRoleToken }[] = [
      { regex: /"(.*?)"|'(.*?)'/g, color: "code-green" }, // Strings
      {
        regex:
          /\b(and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,
        color: "code-pink",
      }, // Keywords
      {
        regex: /\b(False|None|True)\b/g,
        color: "code-blue",
      }, // Keywords

      { regex: /\b\d+\b/g, color: "code-blue" }, // Numbers
      // { regex: /(#.*?$)/gm, color: "code-grey" }, // Comments
      //   { regex: /(=|==|!=|<=|>=|\+|-|\*|\/|:)/g, color: "red" }, // Operators
    ];

    // Apply syntax highlighting by replacing matches with styled spans
    const parts: (string | ReactElement)[] = [code];
    let isCheckingMatches = true;
    while (isCheckingMatches) {
      let matchFound = false;
      parts.forEach((part, index) => {
        for (const { regex, color } of patterns) {
          if (typeof part === "string") {
            const match = regex.exec(part);
            if (match) {
              matchFound = true;
              const [matchedText] = match;
              parts.splice(index, 1);
              parts.splice(index, 0, part.slice(0, match.index));
              parts.splice(
                index + 1,
                0,
                <OakSpan key={`${part}-${index}`} $color={color}>
                  {matchedText}
                </OakSpan>,
              );
              parts.splice(
                index + 2,
                0,
                part.slice(match.index + matchedText.length),
              );
              break;
            }
          }
        }
      });
      if (!matchFound) {
        isCheckingMatches = false;
        return parts;
      }
    }
  };

  const StyleCodeBlock = (text: string, index: number) => {
    const matches = text.match(/```([\s\S]*?)```/);
    if (!matches) return text;

    // Extract the content inside the backticks
    const codeContent = matches[1];
    if (!codeContent) return text;
    // Apply syntax highlighting

    const codeWithSyntaxHighlighting = syntaxHighlight(codeContent);

    return (
      <StyledCodeContainer
        key={`${text}-${index}`}
        $background={"bg-inverted"}
        $color={"code-grey"}
        $pv={"spacing-8"}
        $ph={"spacing-12"}
        $borderRadius={"border-radius-m2"}
        $whiteSpace={"pre-wrap"}
        $mt={"spacing-56"}
        $font={"code-2"}
        {...rest}
      >
        <OakFlex $flexDirection={"row"}>
          <OakFlex
            $flexDirection={"column"}
            $br={"border-solid-s"}
            $borderColor={"border-neutral"}
            $pr={"spacing-12"}
          >
            {codeContent.split("\n").map((line, index) => (
              <OakSpan key={`${line}-${index}`}>{index + 1}</OakSpan>
            ))}
          </OakFlex>
          <OakSpan $pl={"spacing-12"}>{codeWithSyntaxHighlighting}</OakSpan>
        </OakFlex>
      </StyledCodeContainer>
    );
  };
  const extractAndMap = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/);
    if (parts.length === 1 && !text.startsWith("```")) {
      return findAndStyleInlineCode(text);
    }
    return (
      <OakFlex $flexDirection={"column"}>
        {parts.map((part, index) => {
          if (part.startsWith("```") && part.endsWith("```")) {
            return StyleCodeBlock(part, index);
          }
          return (
            <OakSpan key={`${part}-${index}`}>
              {findAndStyleInlineCode(part)}
            </OakSpan>
          );
        })}
        <OakFlex
          $alignSelf="flex-end"
          $width={"fit-content"}
          $alignItems={"center"}
          $gap={"spacing-12"}
          $mt={"spacing-16"}
        >
          <OakSpan $font={"heading-light-7"}>Code colour</OakSpan>
          <OakInfo
            hint={
              <OakFlex $flexDirection="column">
                <OakP>
                  When programmers write code, they use a special tool called an
                  IDE (Integrated Development Environment). In an IDE, different
                  colours are used to help programmers understand the code:
                </OakP>
                <br />
                <OakUL $reset $pl={"spacing-8"}>
                  <OakLI>
                    <OakSpan $font={"heading-7"}>• Blue</OakSpan>
                    <OakSpan $font={"heading-light-7"}>
                      &nbsp;- numbers and boolean values
                    </OakSpan>
                  </OakLI>
                  <OakLI>
                    <OakSpan $font={"heading-7"}>• Green</OakSpan>
                    <OakSpan $font={"heading-light-7"}>&nbsp;- strings</OakSpan>
                  </OakLI>
                  <OakLI>
                    <OakSpan $font={"heading-7"}>• Purple</OakSpan>
                    <OakSpan $font={"heading-light-7"}>
                      &nbsp;- keywords
                    </OakSpan>
                  </OakLI>
                </OakUL>
              </OakFlex>
            }
            id="oak-code-renderer-tooltip"
            tooltipPosition="bottom-right"
            buttonProps={{
              type: "button",
            }}
          />
        </OakFlex>
      </OakFlex>
    );
  };

  return extractAndMap(string);
};
