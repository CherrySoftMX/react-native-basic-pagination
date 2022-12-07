import React, { useState } from 'react';
import { usePagination, isCurrentPage } from './src/hooks/usePagination';
import { PaginationButton } from './src/PaginationButton';
import { PaginationSideButtons } from './src/PaginationSideButtons';
const Pagination = ({ totalItems, pageSize, pagesToDisplay = 3, onPageChange = () => { }, showLastPagesButtons = false, currentPage = 1, }) => {
    const [totalPages] = useState(Math.ceil(totalItems / pageSize));
    const pagination = usePagination(totalItems, pageSize, pagesToDisplay, currentPage);
    const handleChangePage = (page) => {
        if (page !== '...') {
            onPageChange(parseInt(page, 10));
        }
    };
    return (<PaginationSideButtons {...{ totalPages, currentPage, handleChangePage, showLastPagesButtons }}>
      {pagination.map((pag, index) => (<PaginationButton key={index} isActive={isCurrentPage(pag, currentPage)} onPress={() => handleChangePage(pag)}>
          {pag}
        </PaginationButton>))}
    </PaginationSideButtons>);
};
export default Pagination;
