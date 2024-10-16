import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);
import { Button } from '../components/Button/Button';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { Alert } from '@/components/Alert/Alert';
import {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
  Text1,
  Text2,
  Text3,
  Text4,
  TextCTA,
  TextLink,
} from '@/components/Text/Text';
import { Arrow } from '@/components/Arrow/Arrow';
import { Input, InputWithIcon } from '@/components/Input';
import { Table } from '@/components/Table/Table';
import { Column, Action } from '@/components/Table/ITable';
import { Dropdown } from '@/components/Dropdown';
import { Accordion, AccordionTab } from '@/components/Accordion/Accordion';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { Circle } from '@/components/Circle/Circle';
import { SectionAccordion } from '@/components/SectionAccordion/SectionAccordion';
import { MenuList } from '@/components/MenuList';
import { Stepper } from '@/components/Stepper/Stepper';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { Option } from '@/components/Dropdown/IDropdown';
import { FileUploader } from '@/components/FileUploader/FileUploader';
import { Loading } from '@/components/Loading/Loading';

interface DataItem {
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

const columns: Column<DataItem>[] = [
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

const actions: Action[] = [
  {
    $label: 'Editar',
    $onClick: (item) => console.log('Editar', item),
  },
  {
    $label: 'Eliminar',
    $onClick: (item) => console.log('Eliminar', item),
  },
];

const allData: DataItem[] = [
  {
    id: '10310313820',
    fechaPago: '8/03/23',
    fechaAcreditacion: '8/03/23',
    operacion: 'Acreditación',
    inversion: 'Efectivo Colombia Pesos',
    objetivo: 'Ahorro',
    nitAcreditador: '6476783',
    razonSocial: '-',
    valor: 50000,
  },
  {
    id: '10310313821',
    fechaPago: '8/03/23',
    fechaAcreditacion: '8/03/23',
    operacion: 'Acreditación',
    inversion: 'Efectivo Colombia Pesos',
    objetivo: 'Ahorro',
    nitAcreditador: '64242',
    razonSocial: '-',
    valor: 50000,
  },
  {
    id: '10310313822',
    fechaPago: '8/03/23',
    fechaAcreditacion: '8/03/23',
    operacion: 'Acreditación',
    inversion: 'Efectivo Colombia Pesos',
    objetivo: 'Ahorro',
    nitAcreditador: '646353',
    razonSocial: '-',
    valor: 50000,
  },
  {
    id: '10310313823',
    fechaPago: '8/03/23',
    fechaAcreditacion: '8/03/23',
    operacion: 'Acreditación',
    inversion: 'Efectivo Colombia Pesos',
    objetivo: 'Ahorro',
    nitAcreditador: '52342',
    razonSocial: '-',
    valor: 50000,
  },
];

const breadcrumbItems = [
  { label: 'Breadcrumb', href: '/' },
  { label: 'Breadcrumb', href: '/category' },
  { label: 'Breadcrumb' },
];

const dropdownOptions: Option[] = [
  { text: 'Depende', value: 'id1' },
  { text: 'Depende', value: 'id2' },
  { text: 'Depende', value: 'id3' },
  { text: 'value41', value: 'id4' },
  { text: 'value5', value: 'id6' },
  { text: 'value', value: 'id7' },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<DataItem[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(allData.slice(startIndex, endIndex));
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSelectionChange = (selectedItems: DataItem[]) => {
    console.log(selectedItems);
  };

  const itemsPerPageOptions = [2, 10, 20, 30];

  return (
    <div>
      <h1>Componentes de Ejemplo</h1>
      <h3>Botones Generales</h3>
      <Button $variant="primary" $size="large" $m="10px">
        Botón Primario
      </Button>
      <Button $variant="secondary" $size="large" $m="10px">
        Botón Primario
      </Button>
      <Button $variant="primary" $size="large" $m="10px" $outline>
        Botón Primario
      </Button>
      <Button $variant="secondary" $size="large" $m="10px" $outline>
        Botón Primario
      </Button>
      <Button $variant="primary" $size="large" $m="10px" disabled={true}>
        Botón Primario
      </Button>
      <Button $variant="secondary" $size="large" $m="10px" disabled={true}>
        Botón Primario
      </Button>
      <Button
        $variant="secondary"
        $size="large"
        $m="10px"
        $outline
        disabled={true}
      >
        Botón Primario
      </Button>
      <Button $variant="primary" $size="large" $m="10px" $outline disabled={true}>
        Botón Primario
      </Button>

      <Button $variant="primary" $size="large" $m="10px" $iconLeft>
        Botón Primario
      </Button>
      <Button $variant="secondary" $size="large" $m="10px" $iconLeft>
        Botón Primario
      </Button>
      <Button
        $variant="secondary"
        $size="large"
        $m="10px"
        disabled={true}
        $iconLeft
      >
        Botón Primario
      </Button>

      <Button $variant="primary" $size="large" $m="10px" $iconRight>
        Botón Primario
      </Button>
      <Button $variant="secondary" $size="large" $m="10px" $iconRight>
        Botón Primario
      </Button>
      <Button
        $variant="secondary"
        $size="large"
        $m="10px"
        disabled={true}
        $iconRight
      >
        Botón Primario
      </Button>

      <Button $variant="primary" $size="large" $m="10px" $iconLeft $iconRight>
        Botón Primario
      </Button>
      <Button $variant="secondary" $size="large" $m="10px" $iconLeft $iconRight>
        Botón Primario
      </Button>
      <Button
        $variant="secondary"
        $size="large"
        $m="10px"
        disabled={true}
        $iconLeft
        $iconRight
      >
        Botón Primario
      </Button>

      <Button $variant="secondary" $size="large" $m="10px" disabled={true}>
        <Loading size="small" color="#fff" />
      </Button>

      <Loading size="large" color="#fff" />
      <Loading size="medium" color="#fff" />
      <Loading size="small" color="#fff" />

      <Button $variant="primary" $size="large" $m="10px" $onlyIcon></Button>
      <Button $variant="secondary" $size="large" $m="10px" $onlyIcon></Button>

      <h3>CheckBox</h3>
      <Checkbox checked={true} onChange={() => {}} />
      <Checkbox checked={false} onChange={() => {}} />
      <Checkbox checked={true} disabled onChange={() => {}} />
      <Checkbox checked={false} disabled onChange={() => {}} />
      <Checkbox state="success" checked={true} onChange={() => {}} />
      <Checkbox state="invalid" checked={false} onChange={() => {}} />

      <Checkbox checked={true} onChange={() => {}} type="soft" />
      <Checkbox checked={false} onChange={() => {}} type="soft" />
      <Checkbox checked={true} disabled onChange={() => {}} type="soft" />
      <Checkbox checked={false} disabled onChange={() => {}} type="soft" />
      <Checkbox state="success" checked={true} onChange={() => {}} type="soft" />
      <Checkbox state="invalid" checked={false} onChange={() => {}} type="soft" />

      <Checkbox label="Check" checked={true} onChange={() => {}} />
      <Checkbox label="Uncheck" checked={false} onChange={() => {}} />
      <Checkbox
        label="Check disabled"
        checked={true}
        disabled
        onChange={() => {}}
      />
      <Checkbox
        label="Uncheck disabled"
        checked={false}
        disabled
        onChange={() => {}}
      />
      <Checkbox
        label="Success"
        state="success"
        checked={true}
        onChange={() => {}}
      />
      <Checkbox
        label="Invalid"
        state="invalid"
        checked={false}
        onChange={() => {}}
      />

      <Checkbox label="Check" checked={true} onChange={() => {}} type="soft" />
      <Checkbox label="Uncheck" checked={false} onChange={() => {}} type="soft" />
      <Checkbox
        label="Check disabled"
        checked={true}
        disabled
        onChange={() => {}}
        type="soft"
      />
      <Checkbox
        label="Uncheck disabled"
        checked={false}
        disabled
        onChange={() => {}}
        type="soft"
      />
      <Checkbox
        label="Success"
        state="success"
        checked={true}
        onChange={() => {}}
        type="soft"
      />
      <Checkbox
        label="Invalid"
        state="invalid"
        checked={false}
        onChange={() => {}}
        type="soft"
      />

      <h3>Alerts</h3>
      <Alert type="success" message="Alerta de tipo Success" />
      <Alert type="alert" message="Alerta de tipo Warning" />
      <Alert type="error" message="Alerta de tipo Error" />

      <h3>Titles</h3>
      <Title1 color="#000">Este es un título de nivel 1</Title1>
      <Title2 color="#000">Este es un título de nivel 2</Title2>
      <Title3 color="#000">Este es un título de nivel 3</Title3>
      <Title4 color="#000">Este es un título de nivel 4</Title4>
      <Title5 color="#000">Este es un título de nivel 5</Title5>
      <Title6 color="#000">Este es un título de nivel 6</Title6>
      <Title1 bold color="#000">
        Este es un título de nivel 1 Negrita
      </Title1>
      <Title2 bold color="#000">
        Este es un título de nivel 2 Negrita
      </Title2>
      <Title3 bold color="#000">
        Este es un título de nivel 3 Negrita
      </Title3>
      <Title4 bold color="#000">
        Este es un título de nivel 4 Negrita
      </Title4>
      <Title5 bold color="#000">
        Este es un título de nivel 5 Negrita
      </Title5>
      <Title6 bold color="#000">
        Este es un título de nivel 6 Negrita
      </Title6>

      <h3>Textos</h3>
      <Text1 color="#000">Este es un texto de nivel 1</Text1>
      <Text2 color="#000">Este es un texto de nivel 2</Text2>
      <Text3 color="#000">Este es un texto de nivel 3</Text3>
      <Text4 color="#000">Este es un texto de nivel 4</Text4>
      <Text1 bold color="#000">
        Este es un texto de nivel 1 Negrita
      </Text1>
      <Text2 bold color="#000">
        Este es un texto de nivel 2 Negrita
      </Text2>
      <Text3 bold color="#000">
        Este es un texto de nivel 3 Negrita
      </Text3>
      <Text4 bold color="#000">
        Este es un texto de nivel 4 Negrita
      </Text4>

      <h3>Otros Textos</h3>
      <TextCTA color="#000">Este es un texto de nivel CTA</TextCTA>
      <TextLink>Este es un texto de nivel Link</TextLink>

      <h3>Arrows</h3>
      <Arrow direction="left" />
      <Arrow direction="right" />

      <h3>Input Generales</h3>
      <Input placeholder="Ejemplo placeholder" />
      <Input
        $w="190px"
        $title="Campo de Texto"
        $helpText="Este es un campo de texto"
        type="text"
        required
      />
      <Input
        $w="190px"
        $title="Campo Númerico"
        $helpText="Este es un textNumber"
        type="number"
        required
      />
      <Input
        $w="267px"
        $title="Campo de Correo Electrónico"
        $helpText="Introduce un correo electrónico válido"
        placeholder="example@porvenir.com.co"
        type="email"
        required
      />
      <Input
        $w="364px"
        $title="Campo de Contraseña"
        $errorMessage="Error: La contraseña debe tener mas de 6 caracteres."
        $helpText="Introduce una contraseña válida."
        type="password"
        pattern={/^.{6,}$/}
        required
      />
      <Input
        $w="558px"
        $title="Campo de Nombre con Mayúsculas"
        $helpText="Introduce un nombre, el texto será capitalizado"
        type="namesUpper"
        required
      />

      <h3>Input con Ícono</h3>
      <InputWithIcon
        $w="752px"
        $icon="plus"
        $title="Buscar"
        $helpText="Introduce el término de búsqueda"
        type="text"
        required
      />
      <InputWithIcon
        $icon="plus"
        $title="Title Input width 100%"
        $helpText="Texto de ayuda"
        required
      />
      <InputWithIcon
        $icon="plus"
        $title="Titulo Input width 100% con value editable."
        $helpText="Value editado desde el componente padre."
        value="texto set2"
      />

      <h3>Input con con variación de colores</h3>
      <InputWithIcon
        $icon="plus"
        $title="Title Input"
        $helpText="Texto de ayuda"
        $isSuccess={true}
        required
      />
      <InputWithIcon
        $icon="plus"
        $title="Title Input"
        $helpText="Texto de ayuda"
        $isWarning={true}
        required
      />
      <InputWithIcon
        $icon="plus"
        $title="Title Input"
        $helpText="Texto de ayuda"
        $isError={true}
        required
      />

      <h3>Input desabilitado y solo lectura</h3>
      <InputWithIcon
        $icon="plus"
        $title="Title Input disabled"
        $helpText="Texto de ayuda"
        disabled
      />
      <InputWithIcon
        $icon="plus"
        $title="Title Input readOnly"
        $helpText="Texto de ayuda"
        readOnly
      />

      <h3>Input con otros iconos</h3>
      <InputWithIcon
        $icon="leftArrow"
        $title="Icono leftArrow"
        $helpText="Texto de ayuda"
        $isSuccess={true}
      />
      <InputWithIcon
        $icon="rightArrow"
        $title="Icono rightArrow"
        $helpText="Texto de ayuda"
        $isWarning={true}
      />

      <h3>Dropdown</h3>
      <Dropdown
        $w="170px"
        $title="DropDown basic"
        placeholder="dropdown"
        $options={dropdownOptions}
      />
      <Dropdown
        $w="267px"
        $title="DropDown basic"
        placeholder="dropdown"
        $options={dropdownOptions}
        $helpText="Texto de ayuda"
      />

      <Dropdown
        $w="558px"
        placeholder="dropdown"
        $options={dropdownOptions}
        $helpText="Texto de ayuda"
      />

      <Dropdown
        placeholder="dropdown"
        $options={dropdownOptions}
        $helpText="Texto de ayuda"
        $errorMessage="Error"
      />
      <h3>Tables</h3>
      <Table
        $data={data}
        $columns={columns}
        $actions={actions}
        $selectionType="radio"
        $onSelectionChange={handleSelectionChange}
        $currentPage={currentPage}
        $totalPages={totalPages}
        $itemsPerPage={itemsPerPage}
        $totalItems={4}
        $onPageChange={handlePageChange}
        $onSort={(key, direction) => console.log(key, direction)}
        $itemsPerPageOptions={itemsPerPageOptions}
        $onItemsPerPageChange={(newItemsPerPage: number) => {
          setItemsPerPage(newItemsPerPage);
          setCurrentPage(1);
        }}
      />

      <h3>Breadcrumb</h3>
      <Breadcrumb items={breadcrumbItems} />

      <h3>Accordion</h3>
      <Accordion contentColor="green">
        <AccordionTab
          header="Placeholder I"
          contentClassName="custom-content-color active"
        >
          <Text3>
            Lorem ipsum I dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Text3>
        </AccordionTab>
        <AccordionTab header="Placeholder II">
          <Text3>
            Lorem ipsum II dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Text3>
        </AccordionTab>
      </Accordion>

      <h3>Circulo</h3>
      <Circle />
      <h3>Sección Acordeon</h3>
      <SectionAccordion
        colorTitle="green"
        title="Title"
        content={
          'Amet dolor deserunt consequat voluptate aliqua tempor. Minim dol' +
          'ore reprehenderit duis sunt incididunt aliquip pariatur consequa' +
          't exercitation do eu nulla officia. Eiusmod veniam sint qui nisi' +
          ' consequat et cupidatat.'
        }
      >
        <Accordion contentColor="green">
          <AccordionTab header="Placeholder">
            <Text3>
              Lorem ipsum I dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </Text3>
          </AccordionTab>
          <AccordionTab header="Placeholder">
            <Text3>
              Lorem ipsum II dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </Text3>
          </AccordionTab>
          <AccordionTab header="Placeholder">
            <Text3>
              Lorem ipsum III dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </Text3>
          </AccordionTab>
          <AccordionTab header="Placeholder">
            <Text3>
              Lorem ipsum IV dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
            </Text3>
          </AccordionTab>
        </Accordion>
      </SectionAccordion>

      <h3>DropdownList</h3>
      <div
        style={{
          padding: '3rem',
          background:
            'linear-gradient(90deg, #517C13 -7.04%, #89AE42 100.95%, #8BAF43 ' +
            '100.95%)',
        }}
      >
        <MenuList content="Afiliciones" icon="groupAdd" iconExpand="downArrow">
          {[
            {
              id: '001',
              label: 'Confirmación Modelo Afiliaciones',
              href: '/confirmaciones',
            },
            {
              id: '002',
              label: 'Parametría de Afiliación',
              href: '/afiliacion',
            },
            {
              id: '003',
              label: 'Procesos Masivos',
              href: '/masivos',
            },
            {
              id: '004',
              label: 'Saldos por cuenta',
              href: '/saldos',
            },
          ].map((option, index) => {
            return (
              <a href={option.href} id={option.id} key={index}>
                {option.label}
              </a>
            );
          })}
        </MenuList>
      </div>
      <h3>Stepper</h3>
      <Stepper steps={3} currentStep={0} />

      <h3>Tooltip</h3>
      <Tooltip color="green" text="Information" margin="0.3rem" />
      <Tooltip color="green" margin="0.3rem" />
      <Tooltip color="orange" text="Information" margin="0.3rem" />
      <Tooltip color="orange" margin="0.3rem" />
      <Tooltip color="white" text="Information" margin="0.3rem" />
      <Tooltip color="white" />
      <Tooltip color="light" text="Information" margin="0.3rem" />
      <Tooltip color="light" margin="0.3rem" />
      <Tooltip color="dark" text="Information" margin="0.3rem" />
      <Tooltip color="dark" margin="0.3rem" />

      <h3>File Uploader</h3>
      <FileUploader
        maxFileSize={2}
        maxFileNameLength={50}
        allowedExtensions={[
          '.doc',
          '.pdf',
          '.jpg',
          '.gif',
          '.bmp',
          '.jpeg',
          '.docx',
          '.png',
        ]}
        maxFiles={5}
        onFilesChange={(files) => console.log(files)}
      />
    </div>
  );
};

root.render(<App />);
