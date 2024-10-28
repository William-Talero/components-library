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
import { Input } from '@/components/Input';
import { Table } from '@/components/Table/Table';
import { Dropdown } from '@/components/Dropdown';
import { Accordion, AccordionTab } from '@/components/Accordion/Accordion';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { Circle } from '@/components/Circle/Circle';
import { SectionAccordion } from '@/components/SectionAccordion/SectionAccordion';
import { MenuList } from '@/components/MenuList';
import { Stepper } from '@/components/Stepper/Stepper';
import { MenuItem } from '@/components/MenuItem/MenuItem';
import { SideBar } from '@/components/SideBar/SideBar';
import { NavBar } from '@/components/NavBar/NavBar';
import { Option } from '@/components/Dropdown/IDropdown';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { FileUploader } from '@/components/FileUploader/FileUploader';
import { Loading } from '@/components/Loading/Loading';
import { Header } from '@/components/Header';
import { Toast } from '@/components/Toast-unique/Toast';
import { Modal } from '@/components/Modal';
import { ToastOptions } from '@/components/Toast-unique/IToast';
import { DataItem, allData, columns, actions } from '@/Data/Table/DataTable';
import { Spinner } from '@/components/Spinner';
import { SkeletonDemo } from '@/Data/Skeleton/SkeletonDemo';

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
  const [isOpen, setIsOpen] = useState(false);

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setData(allData.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, totalPages]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSelectionChange = (selectedItems: DataItem[]) => {
    console.log(selectedItems);
  };

  const itemsPerPageOptions = [2, 10, 20, 30];

  const handleShowToast = (
    mensaje: string,
    colorTipe: 'soft' | 'solid' | undefined
  ) => {
    const optionsToast: ToastOptions = {
      $duration: 3000,
      $type: colorTipe,
      $shape: 'rounded',
      $color: 'green',
      $content: 'Contenido del toast',
      $showCloseButton: true,
    };

    Toast.show(mensaje, { ...optionsToast, $color: 'dark' });
    Toast.show(mensaje, { ...optionsToast, $color: 'gray' });
    Toast.show(mensaje, { ...optionsToast, $color: 'green' });
    Toast.show(mensaje, { ...optionsToast, $color: 'orange' });
    Toast.show(mensaje, { ...optionsToast, $color: 'red' });
    Toast.show(mensaje, { ...optionsToast, $color: 'warning' });
    Toast.show(mensaje, { ...optionsToast, $color: 'light' });
  };
  const handleShowToastStatusCode = (statusCode: number) => {
    Toast.showStatusCode(statusCode);
  };

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
      <br />
      <Input
        $w="190px"
        $title="Campo de Texto"
        $helpText="Este es un campo de texto"
        type="text"
        required
      />
      <br />
      <Input
        $w="190px"
        $title="Campo Númerico"
        $helpText="Este es un textNumber"
        type="number"
        required
      />
      <br />
      <Input
        $w="267px"
        $title="Campo de Correo Electrónico"
        $helpText="Introduce un correo electrónico válido"
        placeholder="example@porvenir.com.co"
        type="email"
      />
      <br />
      <Input
        $w="364px"
        $title="Campo de Contraseña"
        $errorMessage="Error: La contraseña debe tener mas de 6 caracteres."
        $helpText="Introduce una contraseña válida."
        type="password"
        pattern={/^.{6,}$/}
        required
      />
      <br />
      <Input
        $w="558px"
        $title="Campo de Nombre con Mayúsculas"
        $helpText="Introduce un nombre, el texto será capitalizado"
        type="namesUpper"
        required
      />
      <br />
      <h3>Input con Ícono</h3>
      <Input
        $w="752px"
        $icon="plus"
        $title="Buscar"
        $helpText="Introduce el término de búsqueda"
        type="text"
        required
      />
      <br />
      <Input
        $icon="plus"
        $title="Title Input width 100%"
        $helpText="Texto de ayuda"
        required
      />
      <br />
      <Input
        $icon="plus"
        $title="Titulo Input width 100% con value editable."
        $helpText="Value editado desde el componente padre."
        value="texto set2"
      />
      <br />
      <h3>Input con con variación de colores</h3>
      <Input
        $icon="plus"
        $title="Title Input"
        $helpText="Texto de ayuda"
        $isSuccess={true}
        required
      />
      <br />
      <Input
        $icon="plus"
        $title="Title Input"
        $helpText="Texto de ayuda"
        $isWarning={true}
        required
      />
      <br />
      <Input
        $title="Title Input"
        $icon="plus"
        $isError={true}
        $errorMessage="Error basico"
        $helpText="Texto de ayuda"
        required
      />
      <br />
      <h3>Input desabilitado y solo lectura</h3>
      <Input
        $icon="plus"
        $title="Title Input disabled"
        $helpText="Texto de ayuda"
        disabled
      />
      <br />
      <Input
        $icon="plus"
        $title="Title Input readOnly"
        $helpText="Texto de ayuda"
        readOnly
      />
      <br />
      <h3>Input con otros iconos</h3>
      <Input
        $icon="leftArrow"
        $title="Icono leftArrow"
        $helpText="Texto de ayuda"
        $isSuccess={true}
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Icono rightArrow"
        $helpText="Texto de ayuda"
        $isWarning={true}
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado"
        $helpText="Texto de ayuda"
        $variant="inline"
        placeholder="Ejemplo de placeholder"
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado success"
        $helpText="Texto de ayuda"
        $variant="inline"
        placeholder="Ejemplo de placeholder"
        $isSuccess={true}
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado success"
        $helpText="Texto de ayuda"
        $variant="inline"
        placeholder="Ejemplo de placeholder"
        $isError
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado disabled"
        $helpText="Texto de ayuda"
        $variant="inline"
        placeholder="Ejemplo de placeholder"
        disabled
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado redondeado"
        $helpText="Texto de ayuda"
        $variant="rounded"
        placeholder="Ejemplo de placeholder"
        $size="small"
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado success  redondeado"
        $helpText="Texto de ayuda"
        $variant="rounded"
        placeholder="Ejemplo de placeholder"
        $isSuccess={true}
        $size="normal"
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado success redondeado"
        $helpText="Texto de ayuda"
        $variant="rounded"
        placeholder="Ejemplo de placeholder"
        $size="small"
        $isError
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado disabled redondeado"
        $helpText="Texto de ayuda"
        $variant="rounded"
        placeholder="Ejemplo de placeholder"
        $size="small"
        disabled
      />
      <br />
      <Input
        $icon="rightArrow"
        $title="Input con estilo personalizado disabled redondeado"
        $helpText="Texto de ayuda"
        $variant="rounded"
        placeholder="Ejemplo de placeholder"
        $size="normal"
        disabled
      />
      <br />
      <br />
      <Input
        $iconLeft="calendarToday"
        $title="Input con estilo personalizado disabled redondeado"
        $helpText="Texto de ayuda"
        placeholder="Ejemplo de placeholder"
        type="date"
        $isError
        $iconRight="calendarToday"
      />
      <br />
      <h3>Dropdown</h3>
      <Dropdown
        $w="170px"
        $title="DropDown basic"
        placeholder="dropdown"
        $options={dropdownOptions}
        $initialValue="value"
      />
      <br />
      <Dropdown
        $w="267px"
        $title="DropDown basic"
        placeholder="dropdown"
        $options={dropdownOptions}
        $helpText="Texto de ayuda"
        $initialValue="value"
      />
      <br />
      <Dropdown
        $w="558px"
        placeholder="dropdown"
        $options={dropdownOptions}
        $helpText="Texto de ayuda"
        $initialValue="value"
      />
      <br />
      <Dropdown
        placeholder="dropdown"
        $options={dropdownOptions}
        $helpText="Texto de ayuda"
        $errorMessage="Error"
        $initialValue="value"
      />
      <br />
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
      <Accordion contentColor="orange">
        <AccordionTab header="Placeholder I">
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
      <h3>MenuList</h3>
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
          ].map((option) => {
            return (
              <a href={option.href} key={option.id} id={option.id}>
                {option.label}
              </a>
            );
          })}
        </MenuList>
        <a
          onClick={(e) => e.preventDefault()}
          href="/"
          style={{ textDecoration: 'none' }}
        >
          <MenuItem content="Todos los módulos" icon="ellipsis" />
        </a>
      </div>
      <h3>Stepper</h3>
      <Stepper steps={3} currentStep={0} />
      <h3>SideBar</h3>
      <SideBar>
        <NavBar
          showFooter
          content={[
            <MenuList
              content="Afiliciones"
              icon="groupAdd"
              iconExpand="downArrow"
              key="menu-list_1"
            >
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
              ].map((option) => {
                return (
                  <a key={option.id} href={option.href} id={option.id}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>,
            <MenuList
              content="Planes empresariales"
              icon="lan"
              iconExpand="downArrow"
              key="menu-list_2"
            >
              {[
                {
                  id: '005',
                  label: 'Confirmación Modelo Afiliaciones',
                  href: '/confirmaciones',
                },
                {
                  id: '006',
                  label: 'Parametría de Afiliación',
                  href: '/afiliacion',
                },
              ].map((option) => {
                return (
                  <a key={option.id} href={option.href} id={option.id}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>,
            <MenuList
              key="menu-list_3"
              content="Cuentas"
              icon="supervisor"
              iconExpand="downArrow"
            >
              {[
                {
                  id: '012',
                  label: 'Saldos por cuenta',
                  href: '/saldos',
                },
              ].map((option) => {
                return (
                  <a href={option.href} key={option.id} id={option.id}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>,
            <MenuList
              key="menu-list_4"
              content="Saldos"
              icon="moneyIcon"
              iconExpand="downArrow"
            >
              {[
                {
                  id: '016',
                  label: 'Saldos por cuenta',
                  href: '/saldos',
                },
              ].map((option) => {
                return (
                  <a key={option.id} href={option.href} id={option.id}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>,
          ]}
          footer={[
            <MenuItem
              $w="8.3125em"
              icon="home"
              content="Mi Perfil"
              variant="classic"
              key="footer-element_1"
            />,

            <MenuItem
              content="Julieta Valle"
              icon="logout"
              avatar="JV"
              email="valle.m.julieta@gmail.com "
              variant="footer"
              colorContent="#292929"
              colorBackgroundDefault="#FDFDFD"
              key="footer-element_2"
              onClick={() => {
                alert('logout');
              }}
            />,
          ]}
        />
      </SideBar>
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
      <h3>Header</h3>
      <Header
        title="Consulta de afiliados"
        caption="Bienvenido al mòdulo de"
        iconName="plus"
      />
      <h3>Toast</h3>
      <div style={{ display: 'flex', paddingLeft: '200px', gap: '10px' }}>
        <Button
          $variant="primary"
          $size="large"
          $m="10px"
          $iconRight
          onClick={() => {
            handleShowToast('Toast de ejemplo', 'solid');
          }}
        >
          Toasts Solid
        </Button>

        <Button
          $variant="primary"
          $size="large"
          $m="10px"
          $iconRight
          onClick={() => {
            handleShowToast('Toast de ejemplo', 'soft');
          }}
        >
          Toast Soft
        </Button>

        <Button
          $variant="secondary"
          $size="large"
          $m="10px"
          $iconRight
          onClick={() => {
            handleShowToastStatusCode(404);
          }}
        >
          Toast Status Code 404
        </Button>

        <Button
          $variant="primary"
          $size="large"
          $m="10px"
          $iconRight
          onClick={() => {
            handleShowToastStatusCode(200);
          }}
        >
          Toast Status Code 200
        </Button>
      </div>
      <h3>Modal</h3>
      <Button
        $variant="primary"
        $size="large"
        $m="10px"
        onClick={() => setIsOpen(!isOpen)}
      >
        Abrir Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <div style={{ padding: '25px' }}>
          <h2>Título del Modal</h2>
          <p>Este es el contenido del modal.</p>
          <Button $variant="secondary" onClick={() => setIsOpen(!isOpen)}>
            Cerrar Modal
          </Button>
        </div>
      </Modal>
      <h3>Spinner</h3>
      <div>
        <Spinner $message="Loading ..." $variant="container" />
      </div>
      <h3>Skeleton</h3>
      <SkeletonDemo />
    </div>
  );
};

root.render(<App />);
