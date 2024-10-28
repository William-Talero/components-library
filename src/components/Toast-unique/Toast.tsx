import React from 'react';
import { createRoot } from 'react-dom/client';
import ToastManager, { ToastManagerHandle } from './ToastManager';
import { ToastOptions } from './IToast';
import { StatusCodeValid } from './ToastTypes';
import { statusMessages } from './configStatusCode';

// Definimos la interfaz para manejar la instancia de ToastManager
interface ToastAPI {
  instance: React.RefObject<ToastManagerHandle> | null;
  init: () => Promise<void>;
  show: (message: string, $options: ToastOptions) => void;
  showStatusCode: (statusCode: StatusCodeValid) => void;
}

// La instancia única
const Toast: ToastAPI = {
  instance: null,

  // Método para inicializar una única instancia con Promesa
  init: () => {
    return new Promise((resolve) => {
      if (!Toast.instance) {
        const toastContainer = document.createElement('div');
        document.body.appendChild(toastContainer);

        const toastRef = React.createRef<ToastManagerHandle>();
        const root = createRoot(toastContainer);
        root.render(<ToastManager ref={toastRef} />);

        // Guardamos la referencia de la instancia
        Toast.instance = toastRef;

        // Damos un pequeño tiempo para asegurarnos que React monte la referencia
        setTimeout(() => {
          resolve();
        }, 50); // Un pequeño retraso para esperar que se monte el componente
      } else {
        resolve();
      }
    });
  },

  // Método para mostrar un toast
  show: (message: string, $options) => {
    Toast.init().then(() => {
      if (Toast.instance?.current) {
        Toast.instance.current.show(message, $options);
      } else {
        console.error('No existe una instancia de ToastManager.');
      }
    });
  },

  showStatusCode: (statusCode: StatusCodeValid) => {
    Toast.init().then(() => {
      if (Toast.instance?.current) {
        const statusMessage = statusMessages[statusCode];
        Toast.instance.current.show(statusMessage.message, statusMessage.options);
      } else {
        console.error('No existe una instancia de ToastManager.');
      }
    });
  },
};

export { Toast };
