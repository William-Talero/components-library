import { IconName } from '../Icon/Icons';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    $m?: string;
    $w?: string;
    $title?: string;
    $helpText?: string;
    $size?: 'sm' | 'md' | 'lg';
    $isError?: boolean;
    $isWarning?: boolean;
    $isSuccess?: boolean;
    $errorMessage?: string;
    pattern?: any;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    $maxLength?: number;
    $minLength?: number;
    type?: 'text' | 'email' | 'password' | 'namesUpper' | 'number';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    renderIcon?: () => React.ReactNode;
    value?: any;
}
export interface InputWithIconProps extends InputProps {
    $onClickIcon?: () => void;
    $icon: IconName;
}
