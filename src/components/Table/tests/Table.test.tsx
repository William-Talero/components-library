import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from './../Table';
import { Column, Action, TableProps } from './../ITable';
import {
  DataItem,
  allData,
  columns,
  actions,
  data,
} from '@/Data/Table/DataTable';

const mockData = allData;

const mockColumns = columns;

const mockActions: Action[] = [
  {
    $label: 'Editar',
    $onClick: jest.fn(),
  },
  {
    $label: 'Eliminar',
    $onClick: jest.fn(),
  },
];

describe('Table Component', () => {
  const defaultProps: TableProps<DataItem> = {
    $data: mockData,
    $columns: mockColumns,
    $actions: mockActions,
    $currentPage: 1,
    $totalPages: 2,
    $itemsPerPage: 2,
    $totalItems: mockData.length,
    $onPageChange: jest.fn(),
    $onSort: jest.fn(),
    $itemsPerPageOptions: [2, 10, 20, 30],
    $onItemsPerPageChange: jest.fn(),
    $onSelectionChange: jest.fn(),
  };

  it('renders the correct number of rows and columns', () => {
    render(<Table {...defaultProps} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockData.length + 1);
    expect((rows[1] as HTMLTableRowElement).cells).toHaveLength(
      mockColumns.length + 1
    );
  });

  it('renders the correct column headers', () => {
    render(<Table {...defaultProps} />);
    mockColumns.forEach((column) => {
      expect(screen.getByText(column.$header)).toBeInTheDocument();
    });
  });

  it('handles sorting when clicking on sortable column headers', () => {
    render(<Table {...defaultProps} />);

    const idHeader = screen.getByText('ID Aporte');
    fireEvent.click(idHeader);
    expect(defaultProps.$onSort).toHaveBeenCalledWith('id', 'asc');

    fireEvent.click(idHeader);
    expect(defaultProps.$onSort).toHaveBeenCalledWith('id', 'desc');
  });

  it('handles row selection for radio type', () => {
    const mockOnSelectionChange = jest.fn();
    const { container } = render(
      <Table
        {...defaultProps}
        $selectionType="radio"
        $onSelectionChange={mockOnSelectionChange}
      />
    );
    const selectionElements = container.querySelectorAll(
      'input[type="radio"], input[type="checkbox"], [role="radio"]'
    );

    if (selectionElements.length === 0) {
      console.error('No se encontraron elementos de selección en la tabla');
      throw new Error('No se encontraron elementos de selección en la tabla');
    }

    fireEvent.click(selectionElements[0]);
    expect(mockOnSelectionChange).toHaveBeenCalledWith([mockData[0]]);

    fireEvent.click(selectionElements[1]);
    expect(mockOnSelectionChange).toHaveBeenCalledWith([mockData[1]]);

    expect(mockOnSelectionChange).toHaveBeenCalledTimes(2);
  });

  it('handles pagination', () => {
    const mockOnPageChange = jest.fn();
    const { container } = render(
      <Table
        {...defaultProps}
        $currentPage={1}
        $totalPages={2}
        $onPageChange={mockOnPageChange}
      />
    );

    const buttons = container.querySelectorAll(
      '.tvr-comp-pagination-controls button'
    );
    const nextButton = buttons[1]; // Asumiendo que el segundo botón es "next"

    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('handles items per page change', () => {
    const mockOnItemsPerPageChange = jest.fn();
    const { container } = render(
      <Table {...defaultProps} $onItemsPerPageChange={mockOnItemsPerPageChange} />
    );

    const select = container.querySelector('.tvr-comp-pagination-select');
    fireEvent.change(select!, { target: { value: '20' } });
    expect(mockOnItemsPerPageChange).toHaveBeenCalledWith(20);
  });

  it('renders link cells correctly', () => {
    render(<Table {...defaultProps} />);

    const linkCells = screen.getAllByRole('link');
    expect(linkCells).toHaveLength(mockData.length);
    expect(linkCells[0]).toHaveAttribute('href', `/user/${mockData[0].id}`);
  });

  it('renders actions correctly', () => {
    render(<Table {...defaultProps} />);

    const actionButtons = screen.getAllByRole('button', {
      name: /editar|eliminar/i,
    });
    expect(actionButtons).toHaveLength(mockData.length * 2);

    fireEvent.click(actionButtons[0]); // Click first Edit button
    expect(mockActions[0].$onClick).toHaveBeenCalledWith(mockData[0]);

    fireEvent.click(actionButtons[1]); // Click first Delete button
    expect(mockActions[1].$onClick).toHaveBeenCalledWith(mockData[0]);
  });

  it('uses "none" as default selection type when not specified', () => {
    render(<Table {...defaultProps} />);
    const checkboxes = screen.queryAllByRole('checkbox');
    const radios = screen.queryAllByRole('radio');
    expect(checkboxes.length).toBe(0);
    expect(radios.length).toBe(0);
  });

  it('handles items without id property correctly', () => {
    const dataWithoutId: DataItem[] = [data];

    const { container } = render(
      <Table {...defaultProps} $data={dataWithoutId} $selectionType="checkbox" />
    );

    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox!);
    expect(defaultProps.$onSelectionChange).toHaveBeenCalledWith(dataWithoutId);
  });

  it('uses JSON.stringify as fallback for getItemId', () => {
    const complexItem: DataItem = data;

    const { container } = render(
      <Table<DataItem>
        {...defaultProps}
        $data={[complexItem]}
        $selectionType="checkbox"
        $onSort={(key: keyof DataItem, direction: 'asc' | 'desc') => {
          console.log(key, direction);
        }}
      />
    );
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox!);
    expect(defaultProps.$onSelectionChange).toHaveBeenCalledWith([complexItem]);
  });

  it('handles row selection for checkbox type', () => {
    const mockOnSelectionChange = jest.fn();
    const { container } = render(
      <Table
        {...defaultProps}
        $selectionType="checkbox"
        $onSelectionChange={mockOnSelectionChange}
      />
    );

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');

    fireEvent.click(checkboxes[1]);
    expect(mockOnSelectionChange).toHaveBeenCalledWith([mockData[0]]);

    fireEvent.click(checkboxes[2]);
    expect(mockOnSelectionChange).toHaveBeenCalledWith([
      mockData[0],
      mockData[1],
    ]);

    fireEvent.click(checkboxes[1]);
    expect(mockOnSelectionChange).toHaveBeenCalledWith([mockData[1]]);
  });

  it('does not render pagination when there are no pages', () => {
    const { container } = render(
      <Table
        {...defaultProps}
        $totalPages={0}
        $currentPage={1}
        $itemsPerPage={10}
        $totalItems={0}
        $onPageChange={() => {}}
        $itemsPerPageOptions={[10, 20, 30]}
        $onItemsPerPageChange={() => {}}
      />
    );

    const pagination = container.querySelector('.tvr-comp-pagination');
    expect(pagination).not.toBeInTheDocument();
  });

  it('handles select all checkbox', () => {
    const mockOnSelectionChange = jest.fn();
    const { container } = render(
      <Table
        {...defaultProps}
        $selectionType="checkbox"
        $onSelectionChange={mockOnSelectionChange}
      />
    );

    const selectAllCheckbox = container.querySelector('input[type="checkbox"]');

    // Seleccionar todas las filas
    fireEvent.click(selectAllCheckbox!);
    expect(mockOnSelectionChange).toHaveBeenCalledWith(mockData);

    // Deseleccionar todas las filas
    fireEvent.click(selectAllCheckbox!);
    expect(mockOnSelectionChange).toHaveBeenCalledWith([]);
  });

  it('renders non-sortable columns correctly', () => {
    const columnsWithNonSortable: Column<DataItem>[] = [
      ...mockColumns.slice(0, -1),
      { $key: 'valor', $header: 'Valor', $sortable: false },
    ];

    const { container } = render(
      <Table {...defaultProps} $columns={columnsWithNonSortable} />
    );

    const headers = container.querySelectorAll('th');
    const lastHeader = headers[headers.length - 1];

    expect(lastHeader).not.toHaveClass('sortable');
    expect(headers[0]).toHaveClass('sortable');
  });
});
