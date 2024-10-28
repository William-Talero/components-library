import { Column, Action } from '@/components/Table/ITable';

export interface DataItem {
  id: string;
  fechaPago: string;
  fechaAcreditacion: string;
  operacion: string;
  inversion: string;
  objetivo: string;
  nitAcreditador: string;
  razonSocial: string;
  valor: number;
}

export const columns: Column<DataItem>[] = [
  {
    $key: 'id',
    $header: 'ID Aporte',
    $sortable: true,
    $isLink: true,
    $linkPath: (item) => `/user/${item.id}`,
  },
  { $key: 'fechaPago', $header: 'Fecha de pago', $sortable: true },
  {
    $key: 'fechaAcreditacion',
    $header: 'Fecha de acreditación',
    $sortable: true,
  },
  { $key: 'operacion', $header: 'Operación', $sortable: true },
  { $key: 'inversion', $header: 'Inversión', $sortable: true, $width: '15rem' },
  { $key: 'objetivo', $header: 'Objetivo', $sortable: true },
  { $key: 'nitAcreditador', $header: 'NIT acreditador', $sortable: true },
  { $key: 'razonSocial', $header: 'Razón social', $sortable: true },
  { $key: 'valor', $header: 'Valor', $sortable: true },
];

export const actions: Action[] = [
  {
    $label: 'Editar',
    $onClick: (item) => console.log('Editar', item),
  },
  {
    $label: 'Eliminar',
    $onClick: (item) => console.log('Eliminar', item),
  },
];

const restData: {
  fechaPago: string;
  fechaAcreditacion: string;
  operacion: string;
  inversion: string;
  objetivo: string;
} = {
  fechaPago: '8/03/23',
  fechaAcreditacion: '8/03/23',
  operacion: 'Acreditación',
  inversion: 'Efectivo Colombia Pesos',
  objetivo: 'Ahorro',
};

export const allData: DataItem[] = [
  {
    id: '10310313820',
    ...restData,
    nitAcreditador: '6476783',
    razonSocial: '-',
    valor: 50000,
  },
  {
    id: '10310313821',
    ...restData,
    nitAcreditador: '64242',
    razonSocial: '-',
    valor: 50000,
  },
  {
    id: '10310313822',
    ...restData,
    nitAcreditador: '646353',
    razonSocial: '-',
    valor: 50000,
  },
  {
    id: '10310313823',
    ...restData,
    nitAcreditador: '52342',
    razonSocial: '-',
    valor: 50000,
  },
];

export const data: DataItem = {
  id: '10310313824',
  ...restData,
  nitAcreditador: '6477783',
  razonSocial: '-',
  valor: 56000,
};
