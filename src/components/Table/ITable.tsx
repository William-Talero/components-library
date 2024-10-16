export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  isLink?: boolean;
  linkPath?: (item: T) => string;
  width?: string;
}

export interface Action {
  label: string;
  onClick: (item: unknown) => void;
}

export type SelectionType = 'checkbox' | 'radio' | 'none';

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  actions?: Action[];
  selectionType?: SelectionType;
  onSelectionChange?: (selectedItems: T[]) => void;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
}
