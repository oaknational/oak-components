import React, { RefObject, useState } from "react";
import styled, { css } from "styled-components";

import { generatePageNumbers } from "./utils";

import { OakFlex, OakIcon, OakLI, OakUL } from "@/components/atoms";
import { InternalButton } from "@/components/atoms/InternalButton";
import { parseColorFilter } from "@/styles/helpers/parseColorFilter";
import { OakLink } from "@/components/molecules";
import { typographyStyle } from "@/styles/utils/typographyStyle";

export type OakPaginationProps = {
  initialPage: number;
  totalPages: number;
  firstItemRef?: RefObject<HTMLAnchorElement> | null;
  nextHref?: string;
  prevHref?: string;
  paginationHref: string;
  pageName: string;
  onPageChange: (page: number) => void;
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

const StyledChevronButton = styled(OakLink)<{ disabledColor: string }>`
  display: inline-block;
  ${(props) => css`
    &:disabled {
      color: ${props.disabledColor};
      cursor: pointer;
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

const StyledNumberButton = styled(OakLink)<{ selected: boolean }>`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${typographyStyle}
  color: black;

  ${(props) => css`
    background-color: ${props.selected ? "black" : "white"};
  `};

  ${(props) =>
    props.selected &&
    css`
      color: white;
      &:visited {
        color: white;
      }
    `}

  &:hover {
    text-decoration: underline;
    ${(props) =>
      props.selected &&
      css`
        color: white;
        @media (hover: hover) {
    &:hover:not(:disabled) {
      color: white;
    }
      `}
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
  initialPage,
  totalPages,
  nextHref,
  prevHref,
  paginationHref,
  pageName,
  onPageChange,
}: OakPaginationProps) => {
  const [activePage, setActivePage] = useState(initialPage);

  const pages = generatePageNumbers(activePage, totalPages);

  const isFirstPage = activePage <= 1;
  const isLastPage = activePage >= totalPages;

  const handleNumberClick = (num: number, event: React.MouseEvent) => {
    event.preventDefault();
    setActivePage(num);
    onPageChange(num);
  };

  const handleChevronClick = (
    direction: "backwards" | "forwards",
    event:
      | React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
      | React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    const newPage = activePage + (direction === "backwards" ? -1 : 1);
    onPageChange(newPage);
    setActivePage(newPage);
  };

  if (initialPage === 1 && totalPages < 2) {
    return null;
  }
  return (
    <nav aria-label="pagination" data-testid="pagination">
      <OakFlex
        $alignItems={"center"}
        $justifyContent={"center"}
        $width={"100%"}
        $gap={["space-between-ssx", "space-between-s", "space-between-s"]}
      >
        <StyledChevronButton
          element={isFirstPage ? "button" : "a"}
          rel="prev"
          href={prevHref}
          data-testid="backwards-button"
          onClick={(
            e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
          ) => {
            e.preventDefault();
            handleChevronClick("backwards", e);
          }}
          onKeyDown={(
            e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
          ) => {
            if (e.key === "Enter") {
              handleChevronClick("backwards", e);
            }
          }}
          tabIndex={isFirstPage ? -1 : 0}
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
                    onClick={(e: React.MouseEvent) =>
                      handleNumberClick(page + 1, e)
                    }
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
          onClick={(
            e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
          ) => {
            handleChevronClick("forwards", e);
          }}
          onKeyDown={(
            e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
          ) => {
            if (e.key === "Enter") {
              handleChevronClick("forwards", e);
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
 * @param router - Next.js router object
 * @param initialPage - Current page number
 * @param totalPages - Total number of pages
 * @param nextHref - URL for the next page
 * @param prevHref - URL for the previous page
 * @param paginationHref - Base URL for the pagination
 * @param pageName - Name of the page
 * @param onPageChange - Callback function for iterating through pages
 *
 */
