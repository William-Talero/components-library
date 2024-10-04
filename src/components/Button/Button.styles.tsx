import styled from 'styled-components';
import { ButtonStyleProps } from './IButton';
import { buttonSizes } from '@/parameters/sizes';

const Button = styled.button<ButtonStyleProps>`
  width: ${(props) =>
    props.size ? buttonSizes[props.size].width : buttonSizes.normal.width};
  height: 2.5rem;
  border-radius: 0.5rem;
  background: green;
  border: none;
  padding: .625rem 1rem;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
`;

const ButtonContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Button, ButtonContent };
