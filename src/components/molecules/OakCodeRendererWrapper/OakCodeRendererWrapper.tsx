import React, { ReactElement } from "react";
import styled from "styled-components";

import { OakBox, OakFlex, OakSpan } from "@/components/atoms";
import { OakCombinedColorToken } from "@/styles";

const StyledCodeContainer = styled(OakBox)`
  font-family: "Roboto Mono";
  font-style: normal;
`;

export const OakCodeRendererWrapper = ({ string }: { string: string }) => {
  const findAndStyleInlineCode = (text: string) => {
    const parts = text.split(/(`.*?`)/); // Matches text enclosed in backticks
    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        // Remove backticks and style the content
        return (
          <StyledCodeContainer
            key={index}
            $background={"grey70"}
            $color={"white"}
            $pv={"inner-padding-none"}
            $ph={"inner-padding-xs"}
            $borderRadius={"border-radius-m2"}
            $display={"inline-block"}
            $font={"code-2"}
          >
            {part.slice(1, -1)}
          </StyledCodeContainer>
        );
      }
      return part; // Return the unstyled part
    });
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
    let recursive = true;
    while (recursive) {
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
                <OakSpan key={index} $color={color}>
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
        recursive = false;
        return parts;
      }
    }
  };

  const StyleCodeBlock = (text: string) => {
    const matches = text.match(/```([\s\S]*?)```/);
    if (!matches) return <span>{text}</span>;

    // Extract the content inside the backticks
    const codeContent = matches[1];
    if (!codeContent) return <span>{text}</span>;
    // Apply syntax highlighting

    const codeWithSyntaxHighlighting = syntaxHighlight(codeContent);

    return (
      <StyledCodeContainer
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
          <OakBox $display={"inline-block"} $pl={"inner-padding-s"}>
            {codeWithSyntaxHighlighting}
          </OakBox>
        </OakFlex>
      </StyledCodeContainer>
    );
  };
  const extractAndMap = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/);
    return (
      <OakFlex $flexDirection={"column"}>
        {parts.map((part) => {
          if (part.startsWith("```") && part.endsWith("```")) {
            return StyleCodeBlock(part);
          }
          return <OakSpan>{findAndStyleInlineCode(part)}</OakSpan>;
        })}
      </OakFlex>
    );
  };

  return extractAndMap(string);
};
