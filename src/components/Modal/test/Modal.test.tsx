import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { Modal } from '../Modal';

describe('Modal Component', () => {
  test('no renderiza el modal cuando isOpen es false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Contenido del modal</div>
      </Modal>
    );
    const modalContent = screen.queryByText('Contenido del modal');
    expect(modalContent).not.toBeInTheDocument();
  });

  test('renderiza el modal cuando isOpen es true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Contenido del modal</div>
      </Modal>
    );
    const modalContent = screen.getByText('Contenido del modal');
    expect(modalContent).toBeInTheDocument();
  });

  test('llama a onClose al hacer clic en el overlay', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Contenido del modal</div>
      </Modal>
    );
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('llama a onClose al hacer clic en el botón de cierre', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Contenido del modal</div>
      </Modal>
    );
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('no cierra el modal al hacer clic dentro del contenido', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div data-testid="modal-children">Contenido del modal</div>
      </Modal>
    );
    const modalContent = screen.getByTestId('modal-children');
    fireEvent.click(modalContent);
    expect(handleClose).not.toHaveBeenCalled();
  });

  test('aplica className y style personalizados', () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        className="custom-class"
        style={{ backgroundColor: 'red' }}
      >
        <div>Contenido del modal</div>
      </Modal>
    );
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toHaveClass('modal-content custom-class');
    expect(modalContent).toHaveStyle('background-color: red');
  });

  test('aplica width y height personalizados', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} width="500px" height="400px">
        <div>Contenido del modal</div>
      </Modal>
    );
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toHaveStyle('width: 500px');
    expect(modalContent).toHaveStyle('height: 400px');
  });

  test('renderiza los children correctamente', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div data-testid="child-content">Contenido del modal</div>
      </Modal>
    );
    const childContent = screen.getByTestId('child-content');
    expect(childContent).toBeInTheDocument();
  });

  test('el modal tiene atributos de accesibilidad adecuados', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Contenido del modal</div>
      </Modal>
    );
    const modalDialog = screen.getByRole('dialog');
    expect(modalDialog).toHaveAttribute('aria-modal', 'true');
  });
});
