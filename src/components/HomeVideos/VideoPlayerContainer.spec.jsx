import React from 'react';
import 'jest-styled-components';
import { renderWithTheme, YTMockedObject } from '../../utils';
import VideoPlayerContainer from './VideoPlayerContainer';

global.YT = YTMockedObject;

const build = (Component = <VideoPlayerContainer />) => {
  const { container } = renderWithTheme(Component);
  return { container };
};

describe('VideoPlayerContainer', () => {
  it('shows div for iframe load', () => {
    const { firstChild } = build().container;
    expect(firstChild).toMatchSnapshot();
  });
});
