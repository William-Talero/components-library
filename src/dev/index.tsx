import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  ButtonWithIcon,
  OrangeButton,
} from "../components/Button/Button";

const App = () => (
  <div>
    <h1>Componentes de Ejemplo</h1>
    <h3>Botones Generales</h3>
    <Button $type="primary" $size="md" $m="10px">
      Botón Primario
    </Button>
    <Button $type="secondary" $size="md" $m="10px">
      Botón Secundario
    </Button>
    <Button $type="secondary" $size="md" $m="10px" disabled={true}>
      Botón Secundario
    </Button>
    <h3>Botones Con Iconos</h3>
    <ButtonWithIcon $type="primary" $size="md" $m="10px" $icon="plus">
      Botón Primario
    </ButtonWithIcon>
    <ButtonWithIcon $type="secondary" $size="md" $m="10px" $icon="plus">
      Botón Secundario
    </ButtonWithIcon>
    <ButtonWithIcon
      $type="secondary"
      $size="md"
      $m="10px"
      $icon="plus"
      disabled={true}
    >
      Botón Secundario
    </ButtonWithIcon>
    <h3>Botones secundarios</h3>
    <OrangeButton $type="primary" $size="md" $m="10px">
      Botón Primario
    </OrangeButton>
    <OrangeButton $type="secondary" $size="md" $m="10px">
      Botón Secundario
    </OrangeButton>
    <OrangeButton $type="secondary" $size="md" $m="10px" disabled={true}>
      Botón Secundario
    </OrangeButton>
    <h3>Inputs</h3>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
