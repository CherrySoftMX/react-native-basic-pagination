import { useState, useEffect } from 'react';
export const usePagination = (totalItems, pageSize, pagesToDisplay, currentPage) => {
    const [pagination, setPagination] = useState([]);
    const getPagination = () => {
        const totalPages = Math.ceil(totalItems / pageSize);
        let newLimit = 1;
        if (totalPages > pagesToDisplay + 1) {
            newLimit = calculateLowerLimit(totalPages, pagesToDisplay, currentPage);
        }
        const newPagination = calculatePagination(pagesToDisplay, currentPage, newLimit, totalPages);
        setPagination(newPagination);
    };
    useEffect(() => {
        getPagination();
    }, [currentPage, totalItems, pagesToDisplay, pageSize]);
    return pagination;
};
const calculateLowerLimit = (totalPages, pagesToDisplay, currentPage) => {
    let lowerLimit = 1;
    const centralPage = Math.ceil(pagesToDisplay / 2);
    if (currentPage >= centralPage + 1 &&
        currentPage + centralPage < totalPages) {
        lowerLimit = currentPage - Math.floor(pagesToDisplay / 2);
    }
    else if (currentPage + centralPage >= totalPages) {
        lowerLimit = totalPages - pagesToDisplay;
    }
    return lowerLimit;
};
const calculatePagination = (pagesToDisplay, currentPage, lowerLimit, totalPages) => {
    let pageLimit = pagesToDisplay;
    if (totalPages <= pagesToDisplay + 1) {
        pageLimit = totalPages;
    }
    const paginationNumbers = getPaginationNumbers(pageLimit, lowerLimit);
    if (totalPages > pagesToDisplay + 1) {
        addPaginationUpperLimit(currentPage, pagesToDisplay, totalPages, paginationNumbers);
    }
    return paginationNumbers;
};
export const isCurrentPage = (page, currentPage) => {
    return parseInt(page, 10) === currentPage;
};
const getPaginationNumbers = (pageLimit, lowerLimit) => {
    const paginationNumbers = [];
    for (let i = 0; i < pageLimit; i++) {
        paginationNumbers.push(`${lowerLimit + i}`);
    }
    return paginationNumbers;
};
const addPaginationUpperLimit = (currentPage, pagesToDisplay, totalPages, pagination) => {
    if (!(currentPage + Math.ceil(pagesToDisplay / 2) >= totalPages)) {
        pagination.push('...');
    }
    pagination.push(`${totalPages}`);
    return pagination;
};
