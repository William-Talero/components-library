import React, { useState } from 'react';
import '@/styles.scss';
import { TableProps, Column, PaginationProps } from './ITable';
import Icon from '../Icon/Icons';

export function Table<T>({
  $data,
  $columns,
  $actions,
  $selectionType = 'none',
  $onSelectionChange,
  $currentPage,
  $totalPages,
  $itemsPerPage,
  $totalItems,
  $onPageChange,
  $onSort,
  $itemsPerPageOptions,
  $onItemsPerPageChange,
}: TableProps<T>) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const getItemId = (item: T): string => {
    return (item as { id?: string }).id?.toString() || JSON.stringify(item);
  };

  const renderCell = (item: T, column: Column<T>) => {
    const value = item[column.$key];

    if (column.$isLink && column.$linkPath) {
      return <a href={column.$linkPath(item)}>{String(value)}</a>;
    }

    return String(value);
  };

  const toggleRowSelection = (item: T) => {
    const itemId = getItemId(item);
    const newSelectedIds = new Set(selectedIds);

    if ($selectionType === 'radio') {
      newSelectedIds.clear();
      newSelectedIds.add(itemId);
    } else {
      if (newSelectedIds.has(itemId)) {
        newSelectedIds.delete(itemId);
      } else {
        newSelectedIds.add(itemId);
      }
    }

    setSelectedIds(newSelectedIds);
    if ($onSelectionChange) {
      const selectedItems = $data.filter((item) =>
        newSelectedIds.has(getItemId(item))
      );
      $onSelectionChange(selectedItems);
    }
  };

  const handleSort = (key: keyof T) => {
    const direction: 'asc' | 'desc' = 'asc';
    if ($onSort) {
      $onSort(key, direction);
    }
  };

  const isItemSelected = (item: T) => selectedIds.has(getItemId(item));

  return (
    <div className="tvr-comp-table">
      <div className="tvr-comp-table-container">
        <table className="tvr-comp-custom-table">
          <colgroup>
            {$selectionType !== 'none' && <col style={{ width: '40px' }} />}
            {$columns.map((column, index) => (
              <col
                key={index}
                style={{
                  width: column.$width || 'auto',
                  minWidth: column.$width,
                }}
              />
            ))}
            {$actions && <col style={{ width: 'auto' }} />}
          </colgroup>
          <thead>
            <tr>
              {$selectionType !== 'none' && (
                <th style={{ width: '40px' }}>
                  {$selectionType === 'checkbox' && (
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        const newSelectedIds = e.target.checked
                          ? new Set($data.map(getItemId))
                          : new Set<string>();
                        setSelectedIds(newSelectedIds);
                        if ($onSelectionChange) {
                          $onSelectionChange(
                            $data.filter((item) =>
                              newSelectedIds.has(getItemId(item))
                            )
                          );
                        }
                      }}
                      checked={
                        $data.length > 0 && selectedIds.size === $data.length
                      }
                    />
                  )}
                </th>
              )}
              {$columns.map((column) => (
                <th
                  key={column.$key.toString()}
                  className={column.$sortable ? 'sortable' : ''}
                  style={{ width: column.$width, minWidth: column.$width }}
                  onClick={() => column.$sortable && handleSort(column.$key)}
                >
                  {column.$header}
                </th>
              ))}
              {$actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {$data.map((item) => (
              <tr
                key={getItemId(item)}
                className={isItemSelected(item) ? 'selected' : ''}
              >
                {$selectionType !== 'none' && (
                  <td style={{ width: '40px' }}>
                    <input
                      type={$selectionType}
                      checked={isItemSelected(item)}
                      onChange={() => toggleRowSelection(item)}
                    />
                  </td>
                )}
                {$columns.map((column) => (
                  <td
                    key={column.$key.toString()}
                    className={column.$isLink ? 'link-cell' : ''}
                    style={{ width: column.$width, minWidth: column.$width }}
                  >
                    {renderCell(item, column)}
                  </td>
                ))}
                {$actions && (
                  <td className="action-cell">
                    {$actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.$onClick(item)}
                      >
                        {action.$label}
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
        $currentPage={$currentPage}
        $totalPages={$totalPages}
        $itemsPerPage={$itemsPerPage}
        $totalItems={$totalItems}
        $onPageChange={$onPageChange}
        $itemsPerPageOptions={$itemsPerPageOptions}
        $onItemsPerPageChange={$onItemsPerPageChange}
      />
    </div>
  );
}

function Pagination({
  $currentPage,
  $totalPages,
  $itemsPerPage,
  $totalItems,
  $onPageChange,
  $itemsPerPageOptions,
  $onItemsPerPageChange,
}: PaginationProps) {
  if ($totalPages < 1) {
    return null;
  }

  return (
    <div className="tvr-comp-pagination">
      <div className="tvr-comp-pagination-controls">
        <button
          onClick={() => $onPageChange($currentPage - 1)}
          disabled={$currentPage === 1}
        >
          <Icon $name="leftArrow" $h="16px" />
        </button>
        <div className="tvr-comp-pagination-number">
          <div className="tvr-comp-pagination-number-current">{$currentPage}</div>
          <div className="tvr-comp-pagination-number-divider">of</div>
          <div className="tvr-comp-pagination-number-total">{$totalPages}</div>
        </div>
        <button
          onClick={() => $onPageChange($currentPage + 1)}
          disabled={$currentPage === $totalPages}
        >
          <Icon $name="rightArrow" $h="16px" />
        </button>
      </div>
      <div className="tvr-comp-pagination-input">
        <span>Registros por página:</span>
        <select
          value={$itemsPerPage}
          onChange={(e) => $onItemsPerPageChange(Number(e.target.value))}
          className="tvr-comp-pagination-select"
        >
          {$itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span>Total:</span>
        <input
          type="number"
          value={$totalItems}
          min={1}
          max={$totalItems}
          disabled
        />
      </div>
    </div>
  );
}

export default Table;
