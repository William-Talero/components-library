import * as React from 'react';
import { ButtonWithIconProps, ButtonProps } from './IButton';
import '@/styles.scss';
declare const Button: (data: ButtonProps) => React.JSX.Element;
declare const ButtonWithIcon: (data: ButtonWithIconProps) => React.JSX.Element;
declare const OrangeButton: (data: ButtonProps) => React.JSX.Element;
export { Button, ButtonWithIcon, OrangeButton };
