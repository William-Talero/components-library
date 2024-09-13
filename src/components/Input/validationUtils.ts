export const performValidation = (
  value: string,
  options: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
  }
): string[] => {
  const { pattern, minLength, maxLength, required } = options;
  const errors: string[] = [];

  if (required && value.trim() === '') {
    errors.push('Este campo es obligatorio.');
  }

  if (pattern && !new RegExp(pattern).test(value)) {
    errors.push('El campo no coincide con el patrón.');
  }

  if (minLength && value.length < minLength) {
    errors.push(`Debe contener mínimo ${minLength} caracteres.`);
  }

  if (maxLength && value.length > maxLength) {
    errors.push(`Debe contener máximo ${maxLength} caracteres.`);
  }

  return errors;
};

export const capitalizeFirstLetter = (text: string): string => {
  return text
    .split(' ')
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
};
