import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './../Table';
import { TableProps } from './../ITable';
import { useState } from 'react';
import { DataItem, allData, columns, actions } from '@/Data/Table/DataTable';

const meta: Meta<TableProps<DataItem>> = {
  title: 'Components/Molecules/Table/Table',
  component: Table,
  argTypes: {
    $selectionType: {
      control: 'select',
      options: ['none', 'checkbox', 'radio'],
    },
  },
};

export default meta;

type Story = StoryObj<TableProps<DataItem>>;

const TableWithState = (args: TableProps<DataItem>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = allData.slice(startIndex, endIndex);

  return (
    <Table
      {...args}
      $data={data}
      $currentPage={currentPage}
      $totalPages={totalPages}
      $itemsPerPage={itemsPerPage}
      $totalItems={allData.length}
      $onPageChange={(newPage: number) => setCurrentPage(newPage)}
      $onItemsPerPageChange={(newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <TableWithState {...args} />,
  args: {
    $columns: columns,
    $actions: actions,
    $selectionType: 'radio',
    $onSelectionChange: (selectedItems) => console.log(selectedItems),
    $onSort: (key, direction) => console.log(key, direction),
    $itemsPerPageOptions: [2, 10, 20, 30],
  },
};

export const WithCheckboxSelection: Story = {
  ...Default,
  args: {
    ...Default.args,
    $selectionType: 'checkbox',
  },
};

export const WithoutSelection: Story = {
  ...Default,
  args: {
    ...Default.args,
    $selectionType: 'none',
  },
};
