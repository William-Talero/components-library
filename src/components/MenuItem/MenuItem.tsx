import React, { useContext, useRef, useState } from 'react';
import { Title3, Title5, Text4 } from '../Text';
import Icon from '../Icon/Icons';
import Image from '../Image/Image';
import { mergeClassNames } from '../Accordion/utils';
import { MenuItemProps } from './IMenuItem';
import { useMountEffect } from '../Accordion/hooks';
import { UniqueComponentId } from '@/utils';
import { CollapsedContext } from '../SideBar/context/Collapsed.context';

const PREFIX = 'por_menuitem_id_';

export const MenuItem = ({
  active = false,
  colorContent,
  colorBackground,
  colorBackgroundDefault,
  className,
  content,
  contentClassName,
  icon,
  image,
  avatar,
  email,
  id,
  $w,
  iconClassName,
  variant = 'default',
  ...rest
}: MenuItemProps) => {
  const [idState, setIdState] = useState(id);
  const mergeClassNameProp = mergeClassNames(
    `tvr-comp-menu-item-container__selector 
    ${active ? 'tvr-comp-menu-item-active' : ''}`,
    className ?? ''
  );

  const parentRef = useRef<HTMLDivElement | null>(null);

  const { collapsed } = useContext(CollapsedContext);

  useMountEffect(() => {
    if (!idState) {
      setIdState(UniqueComponentId(PREFIX));
    }
  });

  const createDefault = () => {
    return (
      <div
        ref={parentRef}
        className={`
            tvr-comp-menu-item-container  
            ${collapsed ? 'tvr-comp-menu-item-collapsed' : ''}
          `}
        {...rest}
        style={
          {
            '--color-menu-item': colorBackground,
            '--color-menu-item-content': colorContent,
            width: $w,
          } as React.CSSProperties
        }
      >
        <div tabIndex={0} className={mergeClassNameProp}>
          <div className={'tvr-comp-menu-item-container__selector-content'}>
            {image && (
              <Image $name='porvenirColor' $w="32px" $h="28px" alt="Plus Icon" />
            )}
            {icon && !image && (
              <Icon
                $name={icon ?? 'home'}
                $w="2rem"
                {...(iconClassName ? { className: iconClassName } : {})}
              />
            )}
            {!collapsed && (
              <Title3
                color={colorContent ?? '#000000'}
                bold
                {...(contentClassName ? { className: contentClassName } : {})}
              >
                {content}
              </Title3>
            )}
          </div>
        </div>
      </div>
    );
  };

  const createClassic = () => {
    return (
      <div
        className="tvr-comp-menu-item-classic"
        style={
          {
            '--color-menu-item-content': colorContent,
            '--color-default-background': colorBackgroundDefault,
          } as React.CSSProperties
        }
        {...rest}
      >
        <div className="tvr-comp-menu-item-classic__icon">
          <Icon 
            $w="1.5rem"
            $name={icon ?? 'user'}
            {...(iconClassName ? { className: iconClassName } : {})}
          />
        </div>
        {!collapsed && (
          <Title5
            color={colorContent ?? '#000000'}
            bold
            {...(contentClassName ? { className: contentClassName } : {})}
          >
            {content}
          </Title5>
        )}
      </div>
    );
  };

  const createFooter = () => {

    return (
      <div
        ref={parentRef}
        className={`
            tvr-comp-menu-item-container  
            ${collapsed ? 'tvr-comp-menu-item-collapsed' : ''}
          `}
        {...rest}
        style={
          {
            '--color-menu-item': colorBackground,
            '--color-menu-item-content': colorContent,
            width: $w,
          } as React.CSSProperties
        }
      >
        <div tabIndex={0} className={mergeClassNameProp}>
          <div className={'tvr-comp-menu-item-container__selector-content'}>
            {!collapsed && avatar && (
              <div className={'tvr-comp-menu-item-container-content-avatar'}>
                <Title3
                  color={'#ffffff'}
                  bold
                  {...(contentClassName ? { className: contentClassName } : {})}
                >
                  {avatar}
                </Title3>
              </div>
            )}

            {collapsed && avatar && (
              <div className={'tvr-comp-menu-item-container-content-avatar-coll'}>
                <Title3
                  color={'#ffffff'}
                  bold
                  {...(contentClassName ? { className: contentClassName } : {})}
                >
                  {avatar}
                </Title3>
              </div>
            )}
            <div className= {'tvr-comp-menu-item-container_flex-text'} >
              {!collapsed && (
                <Title5
                  color={colorContent ?? '#000000'}
                  bold
                  {...(contentClassName ? { className: contentClassName } : {})}
                >
                  {content}
                </Title5>
              )}
              {!collapsed && (
                <Text4
                  color={colorContent ?? '#000000'}
                  bold
                  {...(contentClassName ? { className: contentClassName } : {})}
                >
                  {email}
                </Text4>
              )}
            </div>

            {!collapsed && icon && (
              <Icon
                $name={icon ?? 'home'}
                $w="2rem"
                {...(iconClassName ? { className: iconClassName } : {})}
              />
            )}
          </div>
        </div>
      </div>
    );

  };

  const createElement = () => {
    const catalog = {
      default: createDefault,
      classic: createClassic,
      footer: createFooter,
    };

    const generator = catalog[variant];

    return typeof generator === 'function' ? generator() : createDefault();
  };

  return <>{createElement()}</>;
};
