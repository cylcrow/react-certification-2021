import React from 'react';
import 'jest-styled-components';
import { fireEvent, render } from '@testing-library/react';
import TextField from './TextField';

const build = (Component = <TextField />) => {
  const { container } = render(Component);
  return { container };
};

describe('TextField styles', () => {
  it('changes value on typing', () => {
    const EXPECTED_TEXT = "This is my text";
    const { firstChild: input } = build().container;
    fireEvent.change(input, { target: { value: EXPECTED_TEXT } });
    expect(input.value).toBe(EXPECTED_TEXT);
  });

  it('calls onChange parameter if defined', () => {
    const mockedFunction = jest.fn();
    const EXPECTED_TEXT = "This is my text";
    const { firstChild: input } = build(<TextField onChange={mockedFunction}/>).container;
    fireEvent.change(input, { target: { value: EXPECTED_TEXT } });
    expect(mockedFunction).toHaveBeenCalled();
  });
});
