import React from 'react';
export interface PaginationSideButtonsProps {
    totalPages: number;
    currentPage: number;
    showLastPagesButtons?: boolean;
    handleChangePage: (page: string) => void;
    children: React.ReactNode;
}
