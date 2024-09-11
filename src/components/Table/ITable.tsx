export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
}

export interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
