# pendig-fro-transversal-lib-react

Una librería de componentes transversales en React construida con webpack, rollup y sass; para el proyecto PenDigital.

## Descripción

"components-library" es una librería de componentes React reutilizables diseñada para facilitar el desarrollo de interfaces de usuario. Utiliza tecnologías modernas como webpack para el desarrollo, rollup para la construcción, y sass para los estilos.

## Instalación

Para instalar esta librería en tu proyecto, usa el siguiente comando:

```bash
npm install pendig-fro-transversal-lib-react
```

## Uso

Para usar un componente de esta librería en tu proyecto React:

```jsx
import { Button } from 'pendig-fro-transversal-lib-react';

function App() {
  return (
    <div>
      <Button $type="primary" $size="md">
        Click me!
      </Button>
    </div>
  );
}
```

## Componentes

### Button

El componente `Button` es un ejemplo de los componentes disponibles en esta librería. Aquí tienes un resumen de sus propiedades:

- `$type`: "primary" | "secondary"
- `$size`: "sm" | "md" | "lg"
- `$w`: string (ancho del botón)
- `$h`: string (altura del botón)
- `$m`: string (margen del botón)
- `disabled`: boolean
- `children`: React.ReactNode (contenido del botón)

Para más detalles sobre el uso y las variantes de los componentes, consulta la documentación en Storybook.

## Scripts disponibles

- `npm run build`: Construye la librería usando rollup y genera un timestamp.
- `npm run start`: Inicia rollup en modo watch para desarrollo.
- `npm run start-dev`: Inicia un servidor de desarrollo webpack.
- `npm run storybook`: Inicia Storybook para desarrollo de componentes.
- `npm run build-storybook`: Construye Storybook para producción.
- `npm test`: Ejecuta las pruebas con Jest.

## Dependencias principales

- React: ^18.0.0
- React DOM: ^18.0.0
- Styled Components: ^6.0.0

## Desarrollo

Para comenzar el desarrollo:

1. Clona el repositorio
2. Instala las dependencias con `npm install`
3. Inicia el entorno de desarrollo con `npm run start-dev`

## Storybook

Este proyecto utiliza Storybook para el desarrollo y documentación de componentes. Para iniciarlo:

```bash
npm run storybook
```

### Ejemplo de Story

Aquí tienes un ejemplo de cómo se define un componente en Storybook:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/Button/Button";
import { ButtonProps } from "@/components/Button/IButton";

const meta: Meta<ButtonProps> = {
  title: "Components/Buttons/PrincipalButton",
  component: Button,
  argTypes: {
    $type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    $size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    $type: "primary",
    $size: "md",
    $w: "200px",
    $h: "50px",
    $m: "1px",
    children: "Primary Button",
  },
};


```

Este ejemplo muestra cómo se configura un componente Button en Storybook, permitiendo la visualización y prueba interactiva de diferentes variantes del componente.

## Pruebas

Las pruebas se realizan con Jest. Para ejecutar las pruebas:

```bash
npm run test
```

## Construcción

Para construir la librería para producción:

```bash
npm run build
```

Esto generará los archivos de distribución en la carpeta `dist`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, asegúrate de actualizar las pruebas según sea necesario y seguir las convenciones de código existentes.

## Licencia

--

## Contacto

Proyecto PenDigital - Equipo transversales