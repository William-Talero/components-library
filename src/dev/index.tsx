import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
import {
  Button,
  ButtonWithIcon,
  OrangeButton,
} from "../components/Button/Button";

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
  </div>
);

root.render(<App />);
