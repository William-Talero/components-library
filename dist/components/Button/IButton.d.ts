export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    $type?: "primary" | "secondary";
    $w?: string;
    $h?: string;
    $size?: "sm" | "md" | "lg";
    $m?: string;
    children: React.ReactNode;
}
export interface ButtonWithIconProps extends ButtonProps {
    $icon: "house" | "plus" | "master";
}
