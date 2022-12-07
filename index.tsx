import React, { useState, useEffect } from 'react';
import { PaginationProps } from './props';
import { usePagination, isCurrentPage } from './src/hooks/usePagination';
import { PaginationButton } from './src/PaginationButton';
import { PaginationSideButtons } from './src/PaginationSideButtons';

const Pagination = ({
  totalItems,
  pageSize = 1,
  pagesToDisplay = 3,
  onPageChange = () => {},
  showLastPagesButtons = false,
  currentPage = 1,
}: PaginationProps) => {
  const [totalPages] = useState(Math.ceil(totalItems / pageSize));
  const pagination = usePagination(
    totalItems,
    pageSize,
    pagesToDisplay,
    currentPage,
  );

  useEffect(() => {
    if (currentPage < 1) {
      onPageChange(1);
    } else if (currentPage > totalPages) {
      onPageChange(totalPages);
    }
  }, [currentPage, totalPages, onPageChange]);

  const handleChangePage = (page: string) => {
    if (page !== '...') {
      onPageChange(parseInt(page, 10));
    }
  };

  return (
    <PaginationSideButtons
      {...{ totalPages, currentPage, handleChangePage, showLastPagesButtons }}>
      {pagination.map((pag, index) => (
        <PaginationButton
          key={index}
          isActive={isCurrentPage(pag, currentPage)}
          onPress={() => handleChangePage(pag)}>
          {pag}
        </PaginationButton>
      ))}
    </PaginationSideButtons>
  );
};

export default Pagination;
