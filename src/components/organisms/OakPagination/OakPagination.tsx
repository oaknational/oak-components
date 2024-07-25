import React, { RefObject, useState } from "react";
import styled, { css } from "styled-components";

import { OakFlex, OakIcon, OakLI, OakUL } from "@/components/atoms";
import { InternalButton } from "@/components/atoms/InternalButton";

/**
 * TODO: Pagination component
 * ! - refactor chevron button to OakIconButton component
 * ! - refactor code to make it clean
 * ! - Add tests
 * ? - Create and OakIconButton compoent?
 */

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
  pageIndex: number;
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
  `}
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
`;

const StyledEllipsis = styled(InternalButton)`
  &:disabled {
    cursor: pointer;
  }
`;

const OakPageNumber = ({
  currentPage,
  pageIndex,
  onClick,
  href,
  pageName,
}: OakPageNumberProps) => {
  const isActive = currentPage === pageIndex;
  return (
    <StyledNumberButton
      data-testid="page-number-component"
      aria-label={`${pageName} page ${pageIndex}`}
      $font={"heading-7"}
      onClick={onClick}
      element="a"
      selected={isActive}
      href={href}
    >
      {pageIndex}
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
  const generatePageNumbers = (activePage: number, totalPages: number) => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }
    if (totalPages > 7 && activePage <= 3) {
      const pages = [0, 1, 2, 3, "...", totalPages - 1];
      return pages;
    }

    if (totalPages > 7 && activePage >= 4 && activePage < totalPages - 3) {
      const pages = [
        0,
        "...",
        activePage - 1,
        activePage,
        "...",
        totalPages - 1,
      ];
      return pages;
    }

    if (totalPages > 7 && activePage >= 5) {
      const pages = [
        0,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
      ];
      return pages;
    }
    return pageNumbers;
  };

  const [activePage, setActivePage] = useState(currentPage);

  const pageNumbers = generatePageNumbers(activePage, totalPages);

  const isFirstPage = activePage <= 1;
  const isLastPage = activePage >= totalPages;

  const handleNumberClick = (num: number) => {
    setActivePage(num);
  };

  const handleChevronClick = (direction: "backwards" | "forwards") => {
    setActivePage((currNum) => {
      if (direction === "backwards") {
        return (currNum = currNum - 1);
      } else {
        return (currNum = currNum + 1);
      }
    });
  };

  if (currentPage === 1 && totalPages < 2) {
    return null;
  }
  return (
    <nav aria-label="pagination" data-testid="pagination">
      <OakFlex
        $alignItems={"center"}
        $justifyContent={"center"}
        $gap={"space-between-s"}
      >
        <StyledChevronButton
          element={isFirstPage ? "button" : "a"}
          data-testid="backwards-button"
          onClick={() => {
            handleChevronClick("backwards");
          }}
          href={prevHref}
          aria-disabled={isFirstPage}
          disabled={activePage <= 1}
          aria-label={isFirstPage ? "No previous pages" : "Go to previous page"}
        >
          <OakIcon
            iconName="chevron-left"
            $colorFilter={isFirstPage ? "icon-disabled" : null}
          />
        </StyledChevronButton>
        <OakUL $reset $display={"flex"}>
          {pageNumbers.map((pageIndex) => {
            if (typeof pageIndex === "number") {
              return (
                <OakLI key={pageIndex} $mh={"space-between-ssx"}>
                  <OakPageNumber
                    pageName={pageName}
                    key={pageIndex}
                    pageIndex={pageIndex + 1}
                    currentPage={activePage}
                    href={`${paginationHref}/${pageIndex + 1}`}
                    onClick={() => handleNumberClick(pageIndex + 1)}
                  />
                </OakLI>
              );
            } else {
              return (
                <OakLI $mh={"space-between-ssx"} key={pageIndex}>
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
          data-testid="forwards-button"
          href={nextHref}
          onClick={() => {
            handleChevronClick("forwards");
          }}
          aria-disabled={isLastPage}
          disabled={isLastPage}
          aria-label={isLastPage ? "No further pages" : "Go to next page"}
        >
          <OakIcon
            iconName="chevron-right"
            $colorFilter={isLastPage ? "icon-disabled" : null}
          />
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
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
