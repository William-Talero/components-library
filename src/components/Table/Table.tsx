import React, { useState, useMemo } from 'react';
import '@/styles.scss';
import { TableProps, PaginationProps, Column } from './ITable';

export function Table<T>({
  data,
  columns,
  itemsPerPage = 10,
  actions,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = useMemo(() => {
    const sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return sortedData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, itemsPerPage, sortedData]);

  const requestSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const renderCell = (item: T, column: Column<T>) => {
    const value = item[column.key];

    if (column.isLink && column.linkPath) {
      return (
        <td className="link-cell">
          <a href={column.linkPath(item)}>
            {String(value)}
            <span className="link-icon">➚</span>
          </a>
        </td>
      );
    }

    return <td>{String(value)}</td>;
  };

  const pages = Math.ceil(data.length / itemsPerPage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value);
    setCurrentPage(Number.isNaN(number) ? 0 : number < pages ? number : pages);
  };

  return (
    <>
      <div className="tvr-comp-table-container">
        <table className="tvr-comp-custom-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key.toString()}
                  onClick={() => column.sortable && requestSort(column.key)}
                  className={column.sortable ? 'sortable' : ''}
                >
                  {column.header}
                  {sortConfig?.key === column.key && (
                    <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
              ))}
              {actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, index) => (
              <tr key={index}>
                {columns.map((column) => renderCell(item, column))}
                {actions && (
                  <td className="action-cell">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.onClick(item)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={itemsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
        onChange={handleChange}
      />
    </>
  );
}

function Pagination({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
  onChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="tvr-comp-pagination">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="text"
      >
        Ir al inicio
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>
      <div className="tvr-comp-pagination-number">
        <input value={currentPage} onChange={onChange} /> / {totalPages}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="text"
      >
        Ir al final
      </button>
    </div>
  );
}
