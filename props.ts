export interface PaginationProps {
  totalItems: number;
  pagesToDisplay?: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  showLastPagesButtons?: boolean;
  currentPage: number;
}
