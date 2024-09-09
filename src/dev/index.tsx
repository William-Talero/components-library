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
import { Titulo1, Titulo2, Titulo3, Titulo4, Titulo5, Titulo6, Text1, Text2, Text3, Text4, TextCTA, TextLink } from "@/components/Text/Text";

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


    <h3>Titulos</h3>
    <Titulo1 color="#000">Este es un título de nivel 1</Titulo1>
    <Titulo2 color="#000">Este es un título de nivel 2</Titulo2>
    <Titulo3 color="#000">Este es un título de nivel 3</Titulo3>
    <Titulo4 color="#000">Este es un título de nivel 4</Titulo4>
    <Titulo5 color="#000">Este es un título de nivel 5</Titulo5>
    <Titulo6 color="#000">Este es un título de nivel 6</Titulo6>
    <Titulo1 bold color="#000">Este es un título de nivel 1 Negrita</Titulo1>
    <Titulo2 bold color="#000">Este es un título de nivel 2 Negrita</Titulo2>
    <Titulo3 bold color="#000">Este es un título de nivel 3 Negrita</Titulo3>
    <Titulo4 bold color="#000">Este es un título de nivel 4 Negrita</Titulo4>
    <Titulo5 bold color="#000">Este es un título de nivel 5 Negrita</Titulo5>
    <Titulo6 bold color="#000">Este es un título de nivel 6 Negrita</Titulo6>

    <h3>Textos</h3>
    <Text1 color="#000">Este es un texto de nivel 1</Text1>
    <Text2 color="#000">Este es un texto de nivel 2</Text2>
    <Text3 color="#000">Este es un texto de nivel 3</Text3>
    <Text4 color="#000">Este es un texto de nivel 4</Text4>
    <Text1 bold color="#000">Este es un texto de nivel 1 Negrita</Text1>
    <Text2 bold color="#000">Este es un texto de nivel 2 Negrita</Text2>
    <Text3 bold color="#000">Este es un texto de nivel 3 Negrita</Text3>
    <Text4 bold color="#000">Este es un texto de nivel 4 Negrita</Text4>

    <h3>Otros Textos</h3>
    <TextCTA color="#000">Este es un texto de nivel CTA</TextCTA>
    <TextLink >Este es un texto de nivel Link</TextLink>
  </div>
);

root.render(<App />);
