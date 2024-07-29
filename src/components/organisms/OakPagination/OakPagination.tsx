import React, { RefObject, useState } from "react";
import styled, { css } from "styled-components";

import { generatePageNumbers } from "./utils";

import { OakFlex, OakIcon, OakLI, OakUL } from "@/components/atoms";
import { InternalButton } from "@/components/atoms/InternalButton";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";

export type OakPaginationProps = {
  currentPage: number;
  totalPages: number;
  firstItemRef?: RefObject<HTMLAnchorElement> | null;
  nextHref?: string;
  prevHref?: string;
  paginationHref: string;
  pageName: string;
};

type OakPageNumberProps = {
  currentPage: number;
  pageNumber: number;
  totalPages?: number;
  firstItemRef?: RefObject<HTMLAnchorElement> | null;
  href: string;
  onClick?: (event: React.MouseEvent) => void;
  pageName: string;
};

const StyledChevronButton = styled(InternalButton)<{ disabledColor: string }>`
  display: inline-block;
  ${(props) => css`
    &:disabled {
      color: ${props.disabledColor};
      cursor: pointer;
    }
    &:focus {
      outline: 2px solid #374cf1;
      outline-offset: 2px;
    }
  `}
`;

const StyledIcon = styled(OakIcon)<{ disabled: boolean }>`
  ${(props) => {
    if (props.disabled) {
      return css`
        filter: ${parseColorFilter("grey50")};
      `;
    }
  }}
`;

const StyledNumberButton = styled(InternalButton)<{ selected: boolean }>`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => css`
    background-color: ${props.selected ? "black" : "white"};
    color: ${props.selected ? "white" : "black"};
  `}
  &:focus {
    outline: 2px solid #374cf1;
    outline-offset: 2px;
  }
`;

const StyledEllipsis = styled(InternalButton)`
  &:disabled {
    cursor: pointer;
  }
`;

const OakPageNumber = ({
  currentPage,
  pageNumber,
  onClick,
  href,
  pageName,
}: OakPageNumberProps) => {
  const isActive = currentPage === pageNumber;
  return (
    <StyledNumberButton
      element="a"
      data-testid="page-number-component"
      aria-label={`${pageName} page ${pageNumber}`}
      aria-current={isActive ? "page" : false}
      $font={"heading-7"}
      onClick={onClick}
      selected={isActive}
      href={href}
    >
      {pageNumber}
    </StyledNumberButton>
  );
};

const OakEllipsis = () => {
  return (
    <StyledEllipsis
      $color="text-primary"
      $font={"heading-7"}
      $background="white"
      aria-label="Hidden page numbers"
      disabled
    >
      ...
    </StyledEllipsis>
  );
};

export const OakPagination = ({
  currentPage,
  totalPages,
  nextHref,
  prevHref,
  paginationHref,
  pageName,
}: OakPaginationProps) => {
  const [activePage, setActivePage] = useState(currentPage);

  const pages = generatePageNumbers(activePage, totalPages);

  const isFirstPage = activePage <= 1;
  const isLastPage = activePage >= totalPages;

  const handleNumberClick = (num: number) => {
    setActivePage(num);
  };

  const handleChevronClick = (direction: "backwards" | "forwards") => {
    setActivePage((currNum) => currNum + (direction === "backwards" ? -1 : 1));
  };

  if (currentPage === 1 && totalPages < 2) {
    return null;
  }
  return (
    <nav aria-label="pagination" data-testid="pagination">
      <OakFlex
        $alignItems={"center"}
        $justifyContent={"center"}
        $gap={["space-between-ssx", "space-between-s", "space-between-s"]}
      >
        <StyledChevronButton
          element={isFirstPage ? "button" : "a"}
          rel="prev"
          data-testid="backwards-button"
          onClick={() => {
            handleChevronClick("backwards");
          }}
          onKeyDown={(
            e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
          ) => {
            if (e.key === "Enter") {
              handleChevronClick("backwards");
            }
          }}
          tabIndex={isFirstPage ? -1 : 0}
          href={prevHref}
          aria-disabled={isFirstPage}
          disabled={isFirstPage}
          aria-label={isFirstPage ? "No previous pages" : "Go to previous page"}
        >
          <StyledIcon disabled={isFirstPage} iconName="chevron-left" />
        </StyledChevronButton>
        <OakUL $reset $display={"flex"}>
          {pages.map((page, i) => {
            if (typeof page === "number") {
              return (
                <OakLI
                  key={`${page} ${i}`}
                  $mh={[
                    "space-between-sssx",
                    "space-between-ssx",
                    "space-between-ssx",
                  ]}
                >
                  <OakPageNumber
                    pageName={pageName}
                    key={page}
                    pageNumber={page + 1}
                    currentPage={activePage}
                    href={`${paginationHref}?page=${page + 1}`}
                    onClick={() => handleNumberClick(page + 1)}
                  />
                </OakLI>
              );
            } else {
              return (
                <OakLI
                  $mh={[
                    "space-between-sssx",
                    "space-between-ssx",
                    "space-between-ssx",
                  ]}
                  key={`${page} ${i}`}
                >
                  <OakFlex $height={"100%"} $alignSelf={"center"}>
                    <OakEllipsis />
                  </OakFlex>
                </OakLI>
              );
            }
          })}
        </OakUL>
        <StyledChevronButton
          element={isLastPage ? "button" : "a"}
          rel="next"
          tabIndex={isLastPage ? -1 : 0}
          data-testid="forwards-button"
          href={nextHref}
          onClick={() => {
            handleChevronClick("forwards");
          }}
          onKeyDown={(
            e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
          ) => {
            if (e.key === "Enter") {
              handleChevronClick("forwards");
            }
          }}
          aria-disabled={isLastPage}
          disabled={isLastPage}
          aria-label={isLastPage ? "No further pages" : "Go to next page"}
        >
          <StyledIcon disabled={isLastPage} iconName="chevron-right" />
        </StyledChevronButton>
      </OakFlex>
    </nav>
  );
};

/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * Pagination component for navigating through pages
 *
 */
