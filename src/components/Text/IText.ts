export interface TextBaseProps {
  children: React.ReactNode;
  bold?: boolean;
  color?: string;
  darkColor?: string;
  justify?: 'start' | 'center' | 'end';
  direction?: 'row' | 'column';
  className?: string;
  as?: React.ElementType;
}