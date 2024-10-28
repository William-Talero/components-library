import { IToastStatusCode } from './IToastStatusCode';

/* eslint-disable max-len */
export const statusMessages: IToastStatusCode = {
  200: {
    message: '¡Éxito! La operación se realizó correctamente.',
    options: {
      $borderLeft: true,
      $iconSwap: 'done',
      $color: 'green',
      $content: 'Aquí están los resultados que buscabas.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  201: {
    message: '¡Creación exitosa! Tu registro se ha creado correctamente.',
    options: {
      $borderLeft: true,
      $iconSwap: 'done',
      $color: 'green',
      $content: 'Puedes ver los detalles a continuación.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  202: {
    message: 'Solicitud aceptada. Estamos procesando tu modificación.',
    options: {
      $borderLeft: true,
      $iconSwap: 'done',
      $color: 'green',
      $content: 'Por favor, espera unos momentos para ver los cambios reflejados.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  204: {
    message: 'Sin resultados. La búsqueda no arrojó resultados.',
    options: {
      $borderLeft: true,
      $iconSwap: 'done',
      $color: 'green',
      $content: `Por favor, Intenta ajustar tus criterios de búsqueda 
      o verifica la información ingresada.`,
      $type: 'soft',
      $showCloseButton: true
    }
  },
  206: {
    message: 'Error de negocio. No pudimos completar tu solicitud. ',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Asegúrate de que todos los datos sean correctos y vuelve a intentarlo.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  400: {
    message: 'Oops! Parece que hubo un error con tu solicitud.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: `Revisa la información y asegúrate de que todo esté \n correcto antes de volver a enviarlo.`,
      $type: 'soft',
      $showCloseButton: true,
      $duration: false
    }
  },
  401: {
    message: 'Acceso denegado. Necesitas iniciar sesión para acceder a esta información.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Por favor, autentícate y vuelve a intentarlo.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  403: {
    message: 'Permiso denegado. No tienes los permisos necesarios para realizar esta acción.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Si crees que esto es un error, contacta con el soporte.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  404: {
    message: 'No encontramos lo que buscas. La información solicitada no está disponible.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Verifica los datos o intenta otra búsqueda.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  405: {
    message: 'Método no permitido. La acción que intentaste realizar no está permitida.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Verifica que estás usando el método correcto y vuelve a intentarlo.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  500: {
    message: 'Error del servidor. Estamos teniendo problemas para procesar tu solicitud en este momento.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Por favor, intenta más tarde.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  501: {
    message: 'Funcionalidad no implementada. La operación que intentaste realizar aún no está disponible.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Por favor, consulta la documentación o vuelve más tarde.',
      $type: 'soft',
      $showCloseButton: true
    }
  },
  503: {
    message: 'Servicio no disponible. Actualmente, el servicio que intentas acceder está fuera de servicio.',
    options: {
      $borderLeft: true,
      $iconSwap: 'warningAmber',
      $color: 'red',
      $content: 'Intenta nuevamente más tarde.',
      $type: 'soft',
      $showCloseButton: true
    }
  }
};