import { waitFor } from '@testing-library/react';
import { Toast } from '../Toast';
import { ToastOptions } from '../IToast';
import React from 'react';
import { statusMessages } from '../configStatusCode';

// Mockeamos el ToastManager para simular el componente y sus métodos
jest.mock('../ToastManager', () => {
  return jest.fn().mockImplementation(() => {
    return {
      show: jest.fn(), // Simulamos la función show
      render: () => <div></div>,
    };
  });
});

// Mockeamos configStatusCode para probar el manejo de status codes
jest.mock('../configStatusCode', () => ({
  statusMessages: {
    200: {
      message: 'Success',
      options: { $duration: 3000 },
    },
  },
}));

describe('Toast', () => {
  // Reseteamos el entorno antes de cada prueba
  beforeEach(() => {
    document.body.innerHTML = '';
    Toast.instance = null;
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpiamos los mocks de consola después de cada prueba
  });

  // Prueba para inicializar la instancia de Toast
  test('should initialize Toast instance', async () => {
    await Toast.init();
    expect(Toast.instance).not.toBeNull();
  });

  // Prueba para mostrar un toast
  test('should show a toast message', async () => {
    const message = 'Test message';
    const options: ToastOptions = { $duration: 3000 };

    // Llamamos a show y esperamos que llame a ToastManager.show
    Toast.show(message, options);

    await waitFor(() => {
      expect(Toast.instance?.current?.show).toHaveBeenCalledWith(
        message,
        options
      );
    });
  });

  // Prueba para mostrar un toast con un status code
  test('should show a toast message with status code', async () => {
    const statusCode = 200;
    const statusMessage = statusMessages[statusCode];

    // Llamamos a showStatusCode y verificamos que se muestre el mensaje correcto
    Toast.showStatusCode(statusCode);

    await waitFor(() => {
      expect(Toast.instance?.current?.show).toHaveBeenCalledWith(
        statusMessage.message,
        statusMessage.options
      );
    });
  });

  // Prueba para cubrir la rama donde `Toast.instance?.current` es null en `show`
  test('should log error if instance is null when calling show', async () => {
    const message = 'Test message';
    const options: ToastOptions = { $duration: 3000 };

    // Simulamos que la instancia de ToastManager es null
    Toast.instance = { current: null };

    // Llamamos a show y verificamos que se llame a console.error
    Toast.show(message, options);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'No existe una instancia de ToastManager.'
      );
    });
  });

  test(
    'should log error if instance is null when calling showStatusCode',
    async () => {
      const statusCode = 200;

      // Simulamos que la instancia de ToastManager es null
      Toast.instance = { current: null };

      // Llamamos a showStatusCode y verificamos que se llame a console.error
      Toast.showStatusCode(statusCode);

      await waitFor(() => {
        expect(console.error).toHaveBeenCalledWith(
          'No existe una instancia de ToastManager.'
        );
      });
    });

  // Prueba para cubrir el caso donde `init` no setea correctamente la instancia
  test('should log error if instance is not set after init', async () => {
    // Simulamos que `init` no setea correctamente la instancia
    jest.spyOn(Toast, 'init').mockImplementation(() => {
      return new Promise((resolve) => {
        resolve();
      });
    });

    const message = 'Test message';
    const options: ToastOptions = { $duration: 3000 };

    // Llamamos a show y verificamos que se llame a console.error
    Toast.show(message, options);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'No existe una instancia de ToastManager.'
      );
    });
  });
});
