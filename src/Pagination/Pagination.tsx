import React, { useState, useEffect } from 'react';
import { PaginationProps } from './props';
import { usePagination, isCurrentPage } from '../hooks/usePagination';
import { PaginationButton } from '../PaginationButton';
import { PaginationSideButtons } from '../PaginationSideButtons';

const Pagination = ({
  totalItems,
  pageSize,
  pagesToDisplay = 3,
  onPageChange,
  showLastPagesButtons = false,
  startOnPage = 1,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(startOnPage);
  const [totalPages] = useState(Math.ceil(totalItems / pageSize));
  const pagination = usePagination(
    totalItems,
    pageSize,
    pagesToDisplay,
    currentPage,
  );

  const handleChangePage = (page: string) => {
    if (page !== '...') {
      setCurrentPage(parseInt(page, 10));
      onPageChange(parseInt(page, 10));
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [totalItems, pageSize]);

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
