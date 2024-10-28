import React from 'react';
import { SideBarProps } from './ISideBar';
import { CollapsedProvider } from './provider/CollapsedProvider';

export const SideBar = ({ children }: SideBarProps) => {
  return <CollapsedProvider>{children}</CollapsedProvider>;
};
