import React from 'react';
import { Input } from '../Input';
import { fireEvent, render, screen } from '@testing-library/react';
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
  it('renders input with icon', () => {
    render(<Input $icon="plus" />);
    const iconElement = document.querySelector('.trv-comp-input-icon');
    expect(iconElement).toBeInTheDocument();
  });
  it('renders input with icon and size', () => {
    render(<Input $icon="plus" $size="large" />);
    const iconElement = document.querySelector('.trv-comp-input-icon');
    expect(iconElement).toBeInTheDocument();
  });
  it('renders input with left icon ', () => {
    render(<Input $size="large" $iconLeft="plus" />);
    const iconElement = document.querySelector('.trv-comp-input-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders input with right icon ', () => {
    render(<Input $size="large" $iconRight="plus" />);
    const iconElement = document.querySelector('.trv-comp-input-icon');
    expect(iconElement).toBeInTheDocument();
  });
  it('renders input with icon and handles icon click', () => {
    const handleClick = jest.fn();
    render(<Input $icon="arrowDropDown" $onClickIcon={handleClick} />);
    const inputElement = screen.getByRole('textbox');
    const iconElement = document.querySelector('.trv-comp-input-icon');
    expect(inputElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('trv-comp-input-icon');
    if (iconElement) {
      fireEvent.click(iconElement);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });
});

describe('Input Component Styles', () => {
  it('applies error class when $isError is true', () => {
    render(<Input $isError={true} />);
    const inputWrapper = screen
      .getByRole('textbox')
      .closest('.trv-comp-input-wrapper');
    expect(inputWrapper).toHaveClass('trv-comp-error');
  });

  it('applies warning class when $isWarning is true', () => {
    render(<Input $isWarning={true} />);
    const inputWrapper = screen
      .getByRole('textbox')
      .closest('.trv-comp-input-wrapper');
    expect(inputWrapper).toHaveClass('trv-comp-warning');
  });

  it('applies success class when $isSuccess is true', () => {
    render(<Input $isSuccess={true} />);
    const inputWrapper = screen
      .getByRole('textbox')
      .closest('.trv-comp-input-wrapper');
    expect(inputWrapper).toHaveClass('trv-comp-success');
  });

  it('applies disabled class when disabled is true', () => {
    render(<Input disabled={true} />);
    const inputWrapper = screen
      .getByRole('textbox')
      .closest('.trv-comp-input-wrapper');
    expect(inputWrapper).toHaveClass('trv-comp-is-disable');
  });

  it('applies disabled class when disabled is true', () => {
    render(<Input readOnly={true} />);
    const inputWrapper = screen
      .getByRole('textbox')
      .closest('.trv-comp-input-wrapper');
    expect(inputWrapper).toHaveClass('trv-comp-not-editable');
  });

  it('applies disabled class when disabled is true inline', () => {
    render(<Input $variant="inline" />);
    const iconElement = document.querySelector('.trv-comp-input-line');
    expect(iconElement).toBeInTheDocument();
  });
  it('applies disabled class when disabled is true rounded', () => {
    render(<Input $variant="rounded" />);
    const iconElement = document.querySelector('.trv-comp-input-radius-all');
    expect(iconElement).toBeInTheDocument();
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
    fireEvent.focusOut(inputElement);
    expect(inputElement).toHaveDisplayValue('John Doe');
  });

  it(
    'should display an error message and apply the "error" ' +
      'class when invalid email is entered',
    () => {
      render(
        <Input
          $title="Email"
          type="email"
          pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i} // Exp reg email
          $errorMessage="Invalid email address"
          value="test"
          $helpText="Please enter a valid email"
        />
      );

      const inputElement = screen.getByRole('textbox');

      fireEvent.change(inputElement, { target: { value: 'invalid-email' } });
      fireEvent.focusOut(inputElement);

      const containerElement = inputElement.closest('.trv-comp-input-wrapper');
      expect(containerElement).toHaveClass('trv-comp-error');

      const errorMessage = screen.getByText('Invalid email address');
      expect(errorMessage).toBeInTheDocument();
    }
  );

  it(
    'should display an error message and apply the "error" class' +
      'when invalid url is entered',
    () => {
      render(
        <Input
          $title="Url"
          pattern={/^http$/i}
          value="test"
          $helpText="Please enter a valid url"
        />
      );

      const inputElement = screen.getByRole('textbox');
      const containerElementBefore = inputElement.closest(
        '.trv-comp-input-wrapper'
      );
      expect(containerElementBefore).not.toHaveClass('trv-comp-error');

      fireEvent.change(inputElement, { target: { value: 'invalid-url' } });
      fireEvent.focusOut(inputElement);

      const containerElement = inputElement.closest('.trv-comp-input-wrapper');
      expect(containerElement).toHaveClass('trv-comp-error');
    }
  );

  it(
    'should display an error message and apply the "error" class' +
      'when invalid url is entered whit custom errorMessage',
    () => {
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
      const containerElementBefore = inputElement.closest(
        '.trv-comp-input-wrapper'
      );
      expect(containerElementBefore).not.toHaveClass('error');

      fireEvent.change(inputElement, { target: { value: 'invalid-url' } });
      fireEvent.focusOut(inputElement);

      const containerElement = inputElement.closest('.trv-comp-input-wrapper');
      expect(containerElement).toHaveClass('trv-comp-error');
    }
  );
  it(
    'should display error message when input does not match' + ' the pattern',
    () => {
      render(
        <Input
          value=""
          pattern={/^.{6,}$/}
          $errorMessage="Input does not match the pattern."
          $helpText="Please enter valid input."
        />
      );

      const inputElement = screen.getByRole('textbox');
      fireEvent.change(inputElement, { target: { value: '12345' } });
      fireEvent.focusOut(inputElement);

      const errorMessage = screen.getByText('Input does not match the pattern.');
      expect(errorMessage).toBeInTheDocument();

      const helpText = screen.queryByText('Please enter valid input.');
      expect(helpText).toBeNull();
    }
  );

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
    fireEvent.focusOut(inputElement);

    const helpText = screen.getByText('Please enter valid input.');
    expect(helpText).toBeInTheDocument();

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
    const result = performValidation('invalidemail', {
      pattern: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z]{2,}$',
    });
    expect(result).toContain('El campo no coincide con el patrón.');
  });
});

describe('Input Component handleChange', () => {
  it('updates value state on change', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(inputElement).toHaveDisplayValue('new value');
  });

  it('calls onChange prop when value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('validates input and sets error state when input is invalid', () => {
    render(<Input pattern={/^.{6,}$/} $errorMessage="Input is too short" />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'short' } });
    fireEvent.blur(inputElement);
    const errorMessage = screen.getByText('Input is too short');
    expect(errorMessage).toBeInTheDocument();
  });

  it('removes error state when input becomes valid', () => {
    render(<Input pattern={/^.{6,}$/} $errorMessage="Input is too short" />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'short' } });
    fireEvent.blur(inputElement);
    fireEvent.change(inputElement, { target: { value: 'long enough' } });
    fireEvent.blur(inputElement);
    const errorMessage = screen.queryByText('Input is too short');
    expect(errorMessage).toBeNull();
  });
});
describe('Input Component Error Handling', () => {
  it('displays custom error message when validation fails', () => {
    render(
      <Input
        pattern={/^.{6,}$/}
        $errorMessage="Custom error message"
        value="short"
      />
    );
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'short' } });
    fireEvent.blur(inputElement);
    const errorMessage = screen.getByText('Custom error message');
    expect(errorMessage).toBeInTheDocument();
  });
});
