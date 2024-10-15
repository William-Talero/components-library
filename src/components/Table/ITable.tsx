export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  isLink?: boolean;
  linkPath?: (item: T) => string;
}

export interface Action {
  label: string;
  onClick: (item: unknown) => void;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
  actions?: Action[];
}

export interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
