import React, { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MenuList } from '../MenuList';

describe('Accordion Component', () => {
  it('should render MenuList with colors #FFFFFF ', async () => {
    act(() => {
      render(
        <MenuList
          content="Afiliciones"
          icon="arrowDropDown"
          iconExpand="downArrow"
          colorBackground="#FFFFFF"
          colorContent="#FFFFFF"
          iconClassName="iconClassName"
          contentClassName="contentClassName"
        >
          {[
            {
              id: '001',
              label: 'Confirmación Modelo Afiliaciones',
              href: '/confirmaciones',
            },
            {
              id: '002',
              label: 'Parametría de Afiliación',
              href: '/afiliacion',
            },
            {
              id: '003',
              label: 'Procesos Masivos',
              href: '/masivos',
            },
            {
              id: '004',
              label: 'Saldos por cuenta',
              href: '/saldos',
            },
          ].map((option, index) => {
            return (
              <a href={option.href} id={option.id} key={index}>
                {option.label}
              </a>
            );
          })}
        </MenuList>
      );
    });

    expect(screen.getByText('Afiliciones')).toBeInTheDocument();
    expect(screen.queryByText('Confirmación Modelo Afiliaciones')).toBeNull();
    fireEvent.click(screen.getByText('Afiliciones'));

    await waitFor(() => {
      expect(
        screen.getByText('Confirmación Modelo Afiliaciones')
      ).toBeInTheDocument();
    });
  });

  it(
    'should render MenuList with default colors and click ' +
      'outside the box scope ',
    async () => {
      act(() => {
        render(
          <div>
            <MenuList
              content="Afiliciones"
              icon="arrowDropDown"
              iconExpand="downArrow"
              className="test"
            >
              {[
                {
                  id: '001',
                  label: 'Confirmación Modelo Afiliaciones',
                  href: '/confirmaciones',
                },
                {
                  id: '002',
                  label: 'Parametría de Afiliación',
                  href: '/afiliacion',
                },
                {
                  id: '003',
                  label: 'Procesos Masivos',
                  href: '/masivos',
                },
                {
                  id: '004',
                  label: 'Saldos por cuenta',
                  href: '/saldos',
                },
              ].map((option, index) => {
                return (
                  <a href={option.href} id={option.id} key={index}>
                    {option.label}
                  </a>
                );
              })}
            </MenuList>
            <button>Click me</button>
          </div>
        );
      });

      expect(screen.getByText('Afiliciones')).toBeInTheDocument();
      expect(screen.queryByText('Confirmación Modelo Afiliaciones')).toBeNull();
      fireEvent.click(screen.getByText('Afiliciones'));

      await waitFor(() => {
        expect(
          screen.getByText('Confirmación Modelo Afiliaciones')
        ).toBeInTheDocument();
      });

      fireEvent.click(screen.getByText('Click me'));

      await waitFor(() => {
        expect(
          screen.queryByText('Confirmación Modelo Afiliaciones')
        ).toBeNull();
      });
    }
  );
});
