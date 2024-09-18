import React from 'react';
import { Input, InputWithIcon } from '../Input'; // Ajusta la ruta según sea necesario
import { fireEvent, render, screen} from '@testing-library/react';
import { performValidation } from '../utils/validationUtils';

describe('Input Component', () => {
  it('renders without crashing', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders with default value', () => {
    render(<Input value="default value" />);
    const inputElement = screen.getByDisplayValue('default value');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders title and helpText', () => {
    render(<Input $title="it Title" $helpText="This is help text" />);
    const title = screen.getByText('it Title');
    const helpText = screen.getByText('This is help text');
    expect(title).toBeInTheDocument();
    expect(helpText).toBeInTheDocument();
  });
  
  it('renders value', () => {
    render(<Input value="edited" />);
    const inputElement = screen.getByDisplayValue('edited');
    expect(inputElement).toBeInTheDocument();
  });

  it('does not show help text when $showHelpText is false', () => {
    render(<Input value="edited" $helpText='This is help text' $showHelpText={false} />);
    const helpText = screen.queryByText('This is help text');
    expect(helpText).not.toBeInTheDocument();
  });
});

describe('Input Component Styles', () => {
  it('applies error class when $isError is true', () => {
    render(<Input $isError={true} />);
    const inputWrapper = screen.getByRole('textbox').closest('.input-wrapper')
    expect(inputWrapper).toHaveClass('error');
  });

  it('applies warning class when $isWarning is true', () => {
    render(<Input $isWarning={true} />);
    const inputWrapper = screen.getByRole('textbox').closest('.input-wrapper')
    expect(inputWrapper).toHaveClass('warning');
  });

  it('applies success class when $isSuccess is true', () => {
    render(<Input $isSuccess={true} />);
    const inputWrapper = screen.getByRole('textbox').closest('.input-wrapper')
    expect(inputWrapper).toHaveClass('success');
  });

  it('applies disabled class when disabled is true', () => {
    render(<Input disabled={true} />);
    const inputWrapper = screen.getByRole('textbox').closest('.input-wrapper')
    expect(inputWrapper).toHaveClass('is-disable');
  });

  it('applies disabled class when disabled is true', () => {
    render(<Input readOnly={true} />);
    const inputWrapper = screen.getByRole('textbox').closest('.input-wrapper')
    expect(inputWrapper).toHaveClass('not-editable');
  });
});

describe('Input Component Functionality', () => {
  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('capitalizes first letter if type is namesUpper', () => {
    render(<Input type="namesUpper" />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'john doe' } });
    expect(inputElement).toHaveDisplayValue('John Doe');
  });

  it('should display an error message and apply the "error" class when invalid email is entered', () => {
    render(
      <Input
        $title="Email"
        type="email"
        pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i} // Expresión regular para email
        $errorMessage="Invalid email address"
        value="test"
        $helpText="Please enter a valid email"
      />
    );

    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'invalid-email' } });

    const containerElement = inputElement.closest('.input-wrapper');
    expect(containerElement).toHaveClass('error');

    const errorMessage = screen.getByText('Invalid email address');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should display an error message and apply the "error" class when invalid url is entered', () => {
    render(
      <Input
        $title="Url"
        pattern={/^http$/i}
        value="test"
        $helpText="Please enter a valid url"
      />
    );

    const inputElement = screen.getByRole('textbox');
    const containerElementBefore = inputElement.closest('.input-wrapper');
    expect(containerElementBefore).not.toHaveClass('error');

    fireEvent.change(inputElement, { target: { value: 'invalid-url' } });

    const containerElement = inputElement.closest('.input-wrapper');
    expect(containerElement).toHaveClass('error');
  });

  it('should display an error message and apply the "error" class when invalid url is entered whit custom errorMessage', () => {
    render(
      <Input
        $title="Url"
        pattern={/^http$/i}
        $errorMessage="Custom error"
        value="test"
        $helpText="Please enter a valid url"
      />
    );

    const inputElement = screen.getByRole('textbox');
    const containerElementBefore = inputElement.closest('.input-wrapper');
    expect(containerElementBefore).not.toHaveClass('error');

    fireEvent.change(inputElement, { target: { value: 'invalid-url' } });

    const containerElement = inputElement.closest('.input-wrapper');
    expect(containerElement).toHaveClass('error');
  });
  it('should display error message when input does not match the pattern', () => {
    render(
      <Input
        value=""
        pattern={/^.{6,}$/}
        $errorMessage="Input does not match the pattern."
        $helpText="Please enter valid input."
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '12345' } }); // Valor que no coincide con el patrón

    const errorMessage = screen.getByText('Input does not match the pattern.');
    expect(errorMessage).toBeInTheDocument();

    const helpText = screen.queryByText('Please enter valid input.');
    expect(helpText).toBeNull();
  });

  it('should display help text when input matches the pattern', () => {
    render(
      <Input
        value=""
        pattern={/^.{6,}$/}
        $errorMessage="Input does not match the pattern."
        $helpText="Please enter valid input."
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'abcdef' } });

    const helpText = screen.getByText('Please enter valid input.');
    expect(helpText).toBeInTheDocument();

    const errorMessage = screen.queryByText('Input does not match the pattern.');
    expect(errorMessage).toBeNull();
  });

  it('does not display help text when input matches the pattern and $showHelpText is false', () => {
    render(
      <Input
        value=""
        pattern={/^.{6,}$/}
        $errorMessage="Input does not match the pattern."
        $helpText="Please enter valid input."
        $showHelpText={false}
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'abcdef' } });

    const helpText = screen.queryByText('Please enter valid input.');
    expect(helpText).toBeNull();

    const errorMessage = screen.queryByText('Input does not match the pattern.');
    expect(errorMessage).toBeNull();
  });
});

describe('performValidation Function', () => {
  it('returns error for required field when empty', () => {
    const result = performValidation('', { required: true });
    expect(result).toContain('Este campo es obligatorio.');
  });

  it('validates minLength correctly', () => {
    const result = performValidation('abc', { minLength: 5 });
    expect(result).toContain('Debe contener mínimo 5 caracteres.');
  });

  it('validates maxLength correctly', () => {
    const result = performValidation('abcdef', { maxLength: 5 });
    expect(result).toContain('Debe contener máximo 5 caracteres.');
  });

  it('validates pattern correctly', () => {
    const result = performValidation('invalidemail', { pattern: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z]{2,}$' });
    expect(result).toContain('El campo no coincide con el patrón.');
  });
});

describe('InputWithIcon Component', () => {
  it('renders input with icon', () => {
    render(<InputWithIcon $icon="plus" />);
    const iconElement = document.querySelector('.input-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders input with icon', () => {
    render(<InputWithIcon $icon="plus" />);
    const iconElement = document.querySelector('.input-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders input with icon and handles icon click', () => {
    const handleClick = jest.fn();
    render(<InputWithIcon $icon="arrowDropDown" $onClickIcon={handleClick} />);

    const inputElement = screen.getByRole('textbox');
    const iconElement = document.querySelector('.input-icon');

    expect(inputElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('input-icon');

    if (iconElement) {
      fireEvent.click(iconElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });
});
