import React, { useContext, useRef, useState } from 'react';
import { NavBarProps } from './INavBar';
import { CollapsedContext } from '../SideBar/context/Collapsed.context';
import { MenuItem } from '../MenuItem/MenuItem';

import Icon from '../Icon/Icons';

export const NavBar = ({
  content,
  footer,
  showFooter = false,
  ...rest
}: NavBarProps) => {
  const { collapsed, updateCollapsed } = useContext(CollapsedContext);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const createItemsContent = (child: JSX.Element, index: number) => {
    const isActive = activeIndex === index;

    return (
      <li key={index}>
        {React.cloneElement(child, {
          active: isActive,
          onClick: () => handleItemClick(index),
        })}
      </li>
    );
  };

  return (
    <div
      className={`tvr-comp-sidebar ${collapsed ? 'tvr-comp-collapsed' : ''}`}
      {...rest}
    >
      <div>
        <div className="tvr-comp-main-nav">
          <a
            href="/"
            className="tvr-comp-text-decoration"
            onClick={(e) => e.preventDefault()}
          >
            <MenuItem $w="8.3125em" icon="home" content="Porvenir" 
              image='porvenirColor' />
          </a>
          <button
            style={{ zIndex: 100 }}
            onClick={() => updateCollapsed(!collapsed)}
          >
            <div>
              <Icon $w="1.5rem" $name="rightArrow" />
            </div>
          </button>
        </div>
      </div>
      <div className="tvr-comp-navbar-content">
        <nav className="tvr-comp-navbar" {...rest}>
          <ul>{React.Children.map(content, createItemsContent)}</ul>
        </nav>
        <div className="tvr-comp-navbar-footer">
          {showFooter && footer}
          {showFooter && (
            <div onClick={() => updateCollapsed(false)}
              className="tvr-comp-navbar-footer__search">

              <div className={`tvr-comp-navbar-footer__search-code 
                ${collapsed ? 'collapsed' : ''}`}>
                {!collapsed && (
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar"
                  ></input>
                )}
                <Icon $w="1.5em" $name="search" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
