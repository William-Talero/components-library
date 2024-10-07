import React, { useEffect, useRef, useState } from 'react';
import { MenuListProps } from './IMenuList';
import Icon from '@/components/Icon/Icons';
import { Title5 } from '@/components/Text';
import { mergeClassNames } from '@/components/Accordion/utils';
import { useMountEffect } from '../Accordion/hooks';
import { UniqueComponentId } from '@/utils';

const PREFIX = 'por_menulist_id_';

export const MenuList = ({
  content,
  colorBackground,
  colorContent,
  className,
  children,
  contentClassName,
  iconClassName,
  iconExpand,
  icon,
  ...rest
}: MenuListProps) => {
  const [open, setOpen] = useState(false);
  const [idState, setIdState] = useState(rest.id);
  const mergeClassNameProp = mergeClassNames(
    `menu-list-container__selector ${open ? 'menu-list-active' : ''}`,
    className ?? ''
  );

  const parentRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (parentRef.current && !parentRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useMountEffect(() => {
    if (!idState) {
      setIdState(UniqueComponentId(PREFIX));
    }
  });

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className="menu-list-container"
      {...rest}
      style={
        {
          '--color-menu-list': colorBackground ?? '#E8F4E1',
          '--color-menu-list-content': colorContent ?? '#FDFDFD',
        } as React.CSSProperties
      }
    >
      <div
        tabIndex={0}
        onClick={() => setOpen(!open)}
        className={mergeClassNameProp}
      >
        <div className="menu-list-container__selector-content">
          {icon && (
            <Icon
              $name={icon ?? 'groupAdd'}
              $w="2rem"
              {...(iconClassName ? { className: iconClassName } : {})}
            />
          )}
          <Title5
            color={colorContent ?? '#FDFDFD'}
            bold
            {...(contentClassName ? { className: contentClassName } : {})}
          >
            {content}
          </Title5>
        </div>
        {iconExpand && (
          <div {...(open ? { style: { transform: 'rotate(180deg)' } } : {})}>
            <Icon $name={iconExpand} $w="1rem" />
          </div>
        )}
      </div>

      {open && (
        <ul>
          {React.Children.map(children, (child, index) => {
            const key = idState + '_item_' + index;
            const id = idState + '_item_' + index;

            const listProps = { key, id };

            return <li {...listProps}>{child}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
