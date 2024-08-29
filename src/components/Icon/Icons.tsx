import React from "react";
import styled from "styled-components";
import PlusIcon from "@/assets/icons/PlusIcon";

const icons = {
  plus: PlusIcon,
};

type IconName = keyof typeof icons;

interface IconProps {
  $name: IconName;
  $w: string;
}

interface IconContainerProps {
  $wContainer: string;
}

const IconContainer = styled.div<IconContainerProps>`
  width: ${(props) => props.$wContainer};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSvgIcon = styled.svg`
width: 100%;
height: auto;
max-height: 60%;
`;

const Icon: React.FC<IconProps> = ({ $name = "plus", $w }) => {
  const SvgIcon = icons[$name];
  return (
    <IconContainer $wContainer={$w}>
      <StyledSvgIcon as={SvgIcon}/>
    </IconContainer>
  );
};

export default Icon;
