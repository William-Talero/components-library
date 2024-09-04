import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);
import { Button, ButtonWithIcon } from "../components/Button/Button";

const App = () => (
  <div>
    <h1>Componentes de Ejemplo</h1>
    <h3>Botones Generales</h3>
    <Button $type="primary" $size="lg" $m="10px">
      Botón Primario
    </Button>
    <ButtonWithIcon $type="secondary" $size="lg" $m="10px" $icon="plus">
      Botón Primario
    </ButtonWithIcon>
    <Button $type="secondary" $size="lg" $m="10px" disabled={true}>
      Botón Primario
    </Button>
  </div>
);

root.render(<App />);
