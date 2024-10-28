import React, { useContext, useRef, useState } from 'react';
import { MenuListProps } from './IMenuList';
import Icon from '@/components/Icon/Icons';
import { Title5 } from '@/components/Text';
import { mergeClassNames } from '@/components/Accordion/utils';
import { useMountEffect } from '../Accordion/hooks';
import UniqueComponentId from '@/utils/UniqueComponentId';
import { CollapsedContext } from '../SideBar/context/Collapsed.context';

const PREFIX = 'por_menulist_id_';

export const MenuList: React.FC <MenuListProps> = ({
  active = false,
  className,
  content,
  colorBackground,
  colorContent,
  icon,
  iconExpand,
  iconClassName,
  contentClassName,
  $w,
  children,
  ...rest
}) => {
  const [idState, setIdState] = useState<string | undefined>
  (rest.id as string | undefined);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { collapsed, updateCollapsed } = useContext(CollapsedContext);

  const mergeClassNameProp = mergeClassNames(
    `tvr-comp-menu-list-container__selector 
    ${active ? 'tvr-comp-menu-list-active' : ''}`,
    className ?? ''
  );

  useMountEffect(() => {
    if (!idState) {
      setIdState(UniqueComponentId(PREFIX));
    }
  });

  const handleClick = () => {
    if (collapsed) {
      updateCollapsed(false);
    }
  };

  return (
    <div
      ref={parentRef}
      id={idState}
      className={`tvr-comp-menu-list-container 
        ${collapsed ? 'tvr-comp-menu-item-collapsed' : ''}`}
      {...rest}
      style={
        {
          '--color-menu-list': colorBackground,
          '--color-menu-list-content': colorContent,
          width: $w,
        } as React.CSSProperties
      }
      {...rest}
    >
      <div
        tabIndex={0}
        onClick={() => handleClick()}
        className={mergeClassNameProp}
      >
        <div className="tvr-comp-menu-list-container__selector-content">
          {icon && (
            <Icon
              $name={icon ?? 'groupAdd'}
              $w="2rem"
              {...(iconClassName ? { className: iconClassName } : {})}
            />
          )}
        </div>
        {!collapsed && (
          <div className="tvr-comp-menu-list-container__selector-content-right">
            <Title5
              color={colorContent ?? '#00000'}
              bold
              {...(contentClassName ? { className: contentClassName } : {})}
            >
              {content}
            </Title5>
            {iconExpand && (
              <div
                {...(active ? { style: { transform: 'rotate(180deg)' } } : {})}
              >
                <Icon $name={iconExpand} $w="1rem" />
              </div>
            )}
          </div>
        )}
      </div>

      {active && !collapsed && (
        <ul>
          {React.Children.map(children, (child, index) => (
            <li key={`${rest.id ?? ''}_item_${index}`}>{child}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
