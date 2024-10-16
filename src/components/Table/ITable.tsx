export interface Column<T> {
  /** The key of the data object that this column represents */
  $key: keyof T;
  /** The text to display in the column header */
  $header: string;
  /** Whether this column can be sorted */
  $sortable?: boolean;
  /** Whether the cell content should be rendered as a link */
  $isLink?: boolean;
  /** A function that returns the URL for the link (if $isLink is true) */
  $linkPath?: (item: T) => string;
  /** The width of the column (e.g., '100px', '10%') */
  $width?: string;
}

/**
 * Represents an action that can be performed on a row.
 */
export interface Action {
  /** The text to display on the action button */
  $label: string;
  /** The function to call when the action is triggered */
  $onClick: (item: unknown) => void;
}

/** The type of row selection: checkbox for multiple selection,
 * radio for single selection, or none
 * @default 'none'
 * @example 'checkbox' | 'radio' | 'none'
 */
export type SelectionType = 'checkbox' | 'radio' | 'none';
export interface TableProps<T> {
  /** The data to display in the table */
  $data: T[];
  /** The column configurations for the table */
  $columns: Column<T>[];
  /** The actions that can be performed on each row */
  $actions?: Action[];
  /** The type of row selection to enable */
  $selectionType?: SelectionType;
  /** Callback function when row selection changes */
  $onSelectionChange?: (selectedItems: T[]) => void;
  /** The current page number */
  $currentPage: number;
  /** The total number of pages */
  $totalPages: number;
  /** The number of items to display per page */
  $itemsPerPage: number;
  /** The total number of items across all pages */
  $totalItems: number;
  /** Callback function when the page changes */
  $onPageChange: (newPage: number) => void;
  /** Callback function when a column is sorted
   * @param key The key of the column being sorted
   * @param direction The sort direction ('asc' or 'desc')
   */
  $onSort?: (key: keyof T, direction: 'asc' | 'desc') => void;
  /** The options for the number of items to display per page */
  $itemsPerPageOptions: number[];
  /** Callback function when the number of items per page changes */
  $onItemsPerPageChange: (newItemsPerPage: number) => void;
}
export interface PaginationProps {
  /** The current page number */
  $currentPage: number;
  /** The total number of pages */
  $totalPages: number;
  /** The number of items to display per page */
  $itemsPerPage: number;
  /** The total number of items across all pages */
  $totalItems: number;
  /** Callback function when the page changes */
  $onPageChange: (newPage: number) => void;
  /** The options for the number of items to display per page
   **/
  $itemsPerPageOptions: number[];
  /** Callback function when the number of items per page changes
   **/
  $onItemsPerPageChange: (newItemsPerPage: number) => void;
}
