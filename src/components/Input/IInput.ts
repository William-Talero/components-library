export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $m?: string;
  $w?: string;
  $h?: string;
  $title?: string;
  $description?: string;
}

export interface InputWithButtonProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  $icon: "house" | "master" | "plus";
}

export interface InputContainerProps {
  $m?: string;
  $w?: string;
  $h?: string;
}