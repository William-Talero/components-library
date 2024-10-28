import React from 'react';
import '@/styles.scss';
import Icon from '../Icon/Icons';
import { HeaderProps } from './IHeader';
import { TextSupporting, TextTitleHeader } from '../Text/Text';
import Image from '../Image/Image';

export const Header: React.FC<HeaderProps> = ({ title, caption, iconName }) => {
  return (
    <div className="tvr-comp-header-container">
      <div className="tvr-comp-header-info-container">
        <div className="tvr-comp-header-module-icon">
          <Icon
            $name={iconName}
            $w="21.33px"
            $h="21.33px"
            className="icon-header"
          />
        </div>
        <div className="tvr-comp-header-text-container">
          <TextSupporting>{caption}</TextSupporting>
          <TextTitleHeader>{title}</TextTitleHeader>
        </div>
        <div>
          <Image $name="penDigital" $w="52px" $h="auto" alt="Logo pendigital" />
        </div>
        <div>
          <Icon $name="logoColor" $w="52px" $h="auto"></Icon>
        </div>
      </div>
    </div>
  );
};
