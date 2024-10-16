import React from 'react';
import '@/styles.scss';
import { TableProps, Column, SelectionType, PaginationProps } from './ITable';
import Icon from '../Icon/Icons';

export function Table<T>({
  data,
  columns,
  actions,
  selectionType = 'none',
  onSelectionChange,
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
}: TableProps<T>) {
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);

  const renderCell = (item: T, column: Column<T>) => {
    const value = item[column.key];

    if (column.isLink && column.linkPath) {
      return <a href={column.linkPath(item)}>{String(value)}</a>;
    }

    return String(value);
  };

  const toggleRowSelection = (index: number) => {
    let newSelectedRows: number[];
    if (selectionType === 'radio') {
      newSelectedRows = [index];
    } else {
      newSelectedRows = selectedRows.includes(index)
        ? selectedRows.filter((i) => i !== index)
        : [...selectedRows, index];
    }
    setSelectedRows(newSelectedRows);
    if (onSelectionChange) {
      onSelectionChange(newSelectedRows.map((i) => data[i]));
    }
  };

  return (
    <div className="tvr-comp-table">
      <div className="tvr-comp-table-container">
        <table className="tvr-comp-custom-table">
          <colgroup>
            {selectionType !== 'none' && <col style={{ width: '40px' }} />}
            {columns.map((column, index) => (
              <col
                key={index}
                style={{ width: column.width || 'auto', minWidth: column.width }}
              />
            ))}
            {actions && <col style={{ width: 'auto' }} />}
          </colgroup>
          <thead>
            <tr>
              {selectionType !== 'none' && (
                <th style={{ width: '40px' }}>
                  {selectionType === 'checkbox' && (
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        const newSelectedRows = e.target.checked
                          ? data.map((_, index) => index)
                          : [];
                        setSelectedRows(newSelectedRows);
                        if (onSelectionChange) {
                          onSelectionChange(newSelectedRows.map((i) => data[i]));
                        }
                      }}
                      checked={selectedRows.length === data.length}
                    />
                  )}
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key.toString()}
                  className={column.sortable ? 'sortable' : ''}
                  style={{ width: column.width, minWidth: column.width }}
                >
                  {column.header}
                </th>
              ))}
              {actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={selectedRows.includes(index) ? 'selected' : ''}
              >
                {selectionType !== 'none' && (
                  <td style={{ width: '40px' }}>
                    <input
                      type={selectionType}
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleRowSelection(index)}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.key.toString()}
                    className={column.isLink ? 'link-cell' : ''}
                    style={{ width: column.width, minWidth: column.width }}
                  >
                    {renderCell(item, column)}
                  </td>
                ))}
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
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
      />
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="tvr-comp-pagination">
      <div className="tvr-comp-pagination-controls">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icon $name="leftArrow" $h="16px" />
        </button>
        <div className="tvr-comp-pagination-number">
          <div className="tvr-comp-pagination-number-current">{currentPage}</div>
          <div className="tvr-comp-pagination-number-divider">of</div>
          <div className="tvr-comp-pagination-number-total">{totalPages}</div>
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Icon $name="rightArrow" $h="16px" />
        </button>
      </div>
      <div className="tvr-comp-pagination-input">
        <span>Registro por página:</span>
        <input
          type="number"
          value={itemsPerPage}
          min={1}
          max={totalPages}
          disabled
        />
        <span>Total:</span>
        <input
          type="number"
          value={totalItems}
          min={1}
          max={totalItems}
          disabled
        />
      </div>
    </div>
  );
}

export default Table;
