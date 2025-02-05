import React, { ReactElement } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakSpan } from "@/components/atoms";
import { OakCombinedColorToken } from "@/styles";
import { TypographyStyleProps } from "@/styles/utils/typographyStyle";

const StyledCodeContainer = styled(OakBox)`
  font-family: "Roboto Mono", --font-roboto-mono, monospace;
`;

export type OakCodeRendererProps = {
  string: string;
} & TypographyStyleProps;

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
                $background={"grey70"}
                $color={"white"}
                $pv={["inner-padding-none", "inner-padding-ssx"]}
                $ph={["inner-padding-xs", "inner-padding-xs"]}
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
    const patterns: { regex: RegExp; color: OakCombinedColorToken }[] = [
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
        $background={"grey70"}
        $color={"code-grey"}
        $pv={"inner-padding-xs"}
        $ph={"inner-padding-s"}
        $borderRadius={"border-radius-m2"}
        $whiteSpace={"pre-wrap"}
        $mt={"space-between-xl"}
        $font={"code-2"}
      >
        <OakFlex $flexDirection={"row"}>
          <OakFlex
            $flexDirection={"column"}
            $br={"border-solid-s"}
            $borderColor={"border-neutral"}
            $pr={"inner-padding-s"}
          >
            {codeContent.split("\n").map((line, index) => (
              <OakSpan key={`${line}-${index}`}>{index + 1}</OakSpan>
            ))}
          </OakFlex>
          <OakSpan $pl={"inner-padding-s"}>
            {codeWithSyntaxHighlighting}
          </OakSpan>
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
      </OakFlex>
    );
  };

  return extractAndMap(string);
};
