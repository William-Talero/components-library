import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
import {
  Button,
  ButtonWithIcon,
  OrangeButton,
} from "../components/Button/Button";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Alert } from "@/components/Alert/Alert";

const App = () => (
  <div>
    <h1>Componentes de Ejemplo</h1>
    <h3>Botones Generales</h3>
    <Button $type="primary" $size="lg" $m="10px">
      Botón Primario
    </Button>
    <Button $type="secondary" $size="lg" $m="10px">
      Botón Primario
    </Button>
    <Button $type="secondary" $size="lg" $m="10px" disabled={true}>
      Botón Primario
    </Button>

    <h3>Botones Generales</h3>
    <ButtonWithIcon $type="primary" $size="lg" $m="10px" $icon="plus">
      Botón Primario
    </ButtonWithIcon>
    <ButtonWithIcon $type="secondary" $size="lg" $m="10px" $icon="plus">
      Botón Primario
    </ButtonWithIcon>
    <ButtonWithIcon
      $type="secondary"
      $size="lg"
      $m="10px"
      $icon="plus"
      disabled={true}
    >
      Botón Primario
    </ButtonWithIcon>

    <h3>Orange Button</h3>
    <OrangeButton $type="primary" $size="lg" $m="10px">
      Botón Primario
    </OrangeButton>
    <OrangeButton $type="secondary" $size="lg" $m="10px">
      Botón Primario
    </OrangeButton>
    <OrangeButton $type="secondary" $size="lg" $m="10px" disabled={true}>
      Botón Primario
    </OrangeButton>

    <h3>CheckBox</h3>
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

    <h3>Alerts</h3>
    <Alert type="success" message="Alerta de tipo Success" />
    <Alert type="alert" message="Alerta de tipo Warning" />
    <Alert type="error" message="Alerta de tipo Error" />

  </div>
);

root.render(<App />);
