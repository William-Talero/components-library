import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../Image';
// Mock de las imágenes importadas
jest.mock('@/assets/images/penDigitalLogo', () => 'pen-digital-logo-path');
jest.mock('@/assets/images/porvenirColorLogo', () => 'porvenir-color-logo-path');

describe('Image Component', () => {
  // Test de renderizado básico
  it('debería renderizar correctamente con props por defecto', () => {
    render(<Image $name="porvenirColor" $w="100px" />);

    const container = screen.getByRole('img').parentElement;
    const img = screen.getByRole('img');

    expect(container).toHaveClass('tvr-comp-img-container');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Image');
  });

  // Test de propiedades personalizadas
  it('debería aplicar correctamente las propiedades personalizadas', () => {
    render(
      <Image
        $name="penDigital"
        $w="200px"
        $h="150px"
        className="custom-class"
        alt="Custom alt text"
      />
    );

    const container = screen.getByRole('img').parentElement;
    const img = screen.getByRole('img');

    expect(container).toHaveClass('tvr-comp-img-container', 'custom-class');
    expect(img).toHaveAttribute('alt', 'Custom alt text');
    expect(img).toHaveStyle({
      width: '200px',
      height: '150px',
    });
  });

  // Test de estilos CSS personalizados
  it('debería aplicar las variables CSS correctamente', () => {
    render(<Image $name="porvenirColor" $w="300px" $h="200px" />);

    const container = screen.getByRole('img').parentElement;

    expect(container).toHaveStyle({
      '--w-container': '300px',
      '--h-container': '200px',
    });
  });

  // Test de props adicionales
  it('debería pasar props adicionales al contenedor', () => {
    render(
      <Image
        $name="penDigital"
        $w="100px"
        data-testid="custom-test-id"
        aria-label="custom-label"
      />
    );

    const container = screen.getByRole('img').parentElement;

    expect(container).toHaveAttribute('data-testid', 'custom-test-id');
    expect(container).toHaveAttribute('aria-label', 'custom-label');
  });

  // Test de valores por defecto
  it('debería usar valores por defecto cuando no se proporcionan props', () => {
    render(<Image $name="penDigital" $w="100px" />);

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('alt', 'Image');
    expect(img).toHaveStyle({
      height: '100%',
    });
  });
});
