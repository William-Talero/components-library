import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from '@/components/Table/Table';
import { Column } from '@/components/Table/ITable';

interface TestItem {
  id: number;
  name: string;
  age: number;
}

const testData: TestItem[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'David', age: 28 },
];

const testColumns: Column<TestItem>[] = [
  { key: 'id', header: 'ID', sortable: true },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'age', header: 'Age', sortable: true },
];

describe('Table Component', () => {
  it('should render the table with correct data', () => {
    render(
      <Table<TestItem>
        data={testData}
        columns={testColumns}
        itemsPerPage={10}
      />
    );

    testData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.age.toString())).toBeInTheDocument();
    });
  });

  it('should paginate correctly', () => {
    render(
      <Table<TestItem> data={testData} columns={testColumns} itemsPerPage={2} />
    );

    // Check if only first two items are visible
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('Charlie')).not.toBeInTheDocument();
    // Go to next page
    fireEvent.click(screen.getByText('>'));

    // Check if next two items are visible
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
    expect(screen.getByText('David')).toBeInTheDocument();
  });

  it('should sort data when clicking on sortable column headers', () => {
    render(
      <Table<TestItem>
        data={testData}
        columns={testColumns}
        itemsPerPage={10}
      />
    );

    // Click on "Age" header to sort
    fireEvent.click(screen.getByText('Age'));

    // Check if data is sorted by age in ascending order
    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Bob25');
    expect(rows[2]).toHaveTextContent('David28');
    expect(rows[3]).toHaveTextContent('Alice30');
    expect(rows[4]).toHaveTextContent('Charlie35');

    // Click on "Age" header again to reverse sort order
    fireEvent.click(screen.getByText('Age'));

    // Check if data is sorted by age in descending order
    const reversedRows = screen.getAllByRole('row');
    expect(reversedRows[1]).toHaveTextContent('Charlie35');
    expect(reversedRows[2]).toHaveTextContent('Alice30');
    expect(reversedRows[3]).toHaveTextContent('David28');
    expect(reversedRows[4]).toHaveTextContent('Bob25');
  });
});
