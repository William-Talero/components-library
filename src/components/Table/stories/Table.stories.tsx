// import type { Meta, StoryObj } from '@storybook/react';
// import { Table } from '@/components/Table/Table';
// import { TableProps, Column } from '@/components/Table/ITable';

// interface DataItem {
//   id: string;
//   fechaPago: string;
//   fechaAcreditacion: string;
//   operacion: string;
//   inversion: string;
//   objetivo: string;
//   nitAcreditador: string;
//   razonSocial: string;
//   valor: number;
// }

// const meta: Meta<TableProps<DataItem>> = {
//   title: 'Components/Atoms/Table/Table',
//   component: Table,
//   argTypes: {
//     itemsPerPage: {
//       control: { type: 'number', min: 1, max: 20 },
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<TableProps<DataItem>>;

// const columns: Column<DataItem>[] = [
//   { key: 'id', header: 'ID Aporte', sortable: true },
//   { key: 'fechaPago', header: 'Fecha de pago', sortable: true },
//   { key: 'fechaAcreditacion', header: 'Fecha de acreditación', sortable: true },
//   { key: 'operacion', header: 'Operación', sortable: true },
//   { key: 'inversion', header: 'Inversión', sortable: true },
//   { key: 'objetivo', header: 'Objetivo', sortable: true },
//   { key: 'nitAcreditador', header: 'NIT acreditador', sortable: true },
//   { key: 'razonSocial', header: 'Razón social', sortable: true },
//   { key: 'valor', header: 'Valor', sortable: true },
// ];

// const data: DataItem[] = [
//   {
//     id: '10310313820',
//     fechaPago: '8/03/23',
//     fechaAcreditacion: '8/03/23',
//     operacion: 'Acreditación',
//     inversion: 'Efectivo Colombia Pesos',
//     objetivo: 'Ahorro',
//     nitAcreditador: '6476783',
//     razonSocial: '-',
//     valor: 50000,
//   },
//   {
//     id: '10310313821',
//     fechaPago: '8/03/23',
//     fechaAcreditacion: '8/03/23',
//     operacion: 'Acreditación',
//     inversion: 'Efectivo Colombia Pesos',
//     objetivo: 'Ahorro',
//     nitAcreditador: '64242',
//     razonSocial: '-',
//     valor: 50000,
//   },
//   {
//     id: '10310313822',
//     fechaPago: '8/03/23',
//     fechaAcreditacion: '8/03/23',
//     operacion: 'Acreditación',
//     inversion: 'Efectivo Colombia Pesos',
//     objetivo: 'Ahorro',
//     nitAcreditador: '646353',
//     razonSocial: '-',
//     valor: 50000,
//   },
//   {
//     id: '10310313823',
//     fechaPago: '8/03/23',
//     fechaAcreditacion: '8/03/23',
//     operacion: 'Acreditación',
//     inversion: 'Efectivo Colombia Pesos',
//     objetivo: 'Ahorro',
//     nitAcreditador: '52342',
//     razonSocial: '-',
//     valor: 50000,
//   },
// ];

// export const Default: Story = {
//   args: {
//     data: data,
//     columns: columns,
//     itemsPerPage: 10,
//   },
// };

// export const FewItemsPerPage: Story = {
//   args: {
//     ...Default.args,
//     itemsPerPage: 2,
//   },
// };

// export const ManyItemsPerPage: Story = {
//   args: {
//     ...Default.args,
//     itemsPerPage: 20,
//   },
// };
