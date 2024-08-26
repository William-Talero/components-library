export interface ButtonProps {
  $bgcolor?: "primary" | "secondary";
  $type?: "primary" | "secondary";
  $w?: string;
  $h?: string;
  $size?: "sm" | "md" | "lg";
  $textcolor?: "primary" | "secondary";
  $m?: string;
}

export interface ButtonWithIconProps
extends ButtonProps,
  React.ButtonHTMLAttributes<HTMLButtonElement> {
$icon: "house" | "plus" | "master";
children: React.ReactNode;
}
