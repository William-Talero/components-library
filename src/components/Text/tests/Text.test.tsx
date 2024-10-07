/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
  Title6,
  Text1,
  Text2,
  Text3,
  Text4,
  TextCTA,
  TextLink,
} from './../Text';

describe('Text Components', () => {
  const testText = 'Test Text';

  const testComponent = (
    Component: React.FC<any>,
    className: string,
    tag: string
  ) => {
    it(`renders ${Component.name} correctly`, () => {
      render(<Component>{testText}</Component>);
      const element = screen.getByText(testText);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass(className);
      expect(element.tagName.toLowerCase()).toBe(tag);
    });

    it(`applies bold class to ${Component.name} when bold prop is true`, () => {
      render(<Component bold>{testText}</Component>);
      expect(screen.getByText(testText)).toHaveClass('tvr-comp-bold');
    });

    it(`applies custom color to ${Component.name}`, () => {
      const customColor = '#FF0000';
      render(<Component color={customColor}>{testText}</Component>);
      expect(screen.getByText(testText)).toHaveStyle(`--color: ${customColor}`);
    });

    it(`applies custom dark color to ${Component.name}`, () => {
      const customDarkColor = '#00FF00';
      render(<Component darkColor={customDarkColor}>{testText}</Component>);
      expect(screen.getByText(testText)).toHaveStyle(
        `--dark-color: ${customDarkColor}`
      );
    });
  };

  testComponent(Title1, 'tvr-comp-title1', 'h1');
  testComponent(Title2, 'tvr-comp-title2', 'h2');
  testComponent(Title3, 'tvr-comp-title3', 'h3');
  testComponent(Title4, 'tvr-comp-title4', 'h4');
  testComponent(Title5, 'tvr-comp-title5', 'h5');
  testComponent(Title6, 'tvr-comp-title6', 'h6');
  testComponent(Text1, 'tvr-comp-text1', 'p');
  testComponent(Text2, 'tvr-comp-text2', 'p');
  testComponent(Text3, 'tvr-comp-text3', 'p');
  testComponent(Text4, 'tvr-comp-text4', 'p');
  testComponent(TextCTA, 'tvr-comp-textCta', 'p');

  describe('TextLink', () => {
    it('renders TextLink correctly', () => {
      render(<TextLink>{testText}</TextLink>);
      const element = screen.getByText(testText);
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('tvr-comp-textLink');
      expect(element.tagName.toLowerCase()).toBe('p');
    });

    it('applies fixed color to TextLink', () => {
      render(<TextLink>{testText}</TextLink>);
      expect(screen.getByText(testText)).toHaveStyle('--color: #FB6903');
      expect(screen.getByText(testText)).toHaveStyle('--dark-color: #FB6903');
    });
  });

  it('applies additional className to Text4', () => {
    const additionalClass = 'extra-class';
    render(<Text4 className={additionalClass}>{testText}</Text4>);
    expect(screen.getByText(testText)).toHaveClass(
      'tvr-comp-text4',
      additionalClass
    );
  });
});
