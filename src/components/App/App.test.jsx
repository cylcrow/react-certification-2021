import React from 'react';
import { act, getByRole, render } from '@testing-library/react';
import App from './index';

global.gapi = {
  load: jest.fn(),
  client: {
    request: jest.fn().mockReturnValue(
      new Promise((res) => {
        res({ result: { items: [] } });
      })
    ),
  },
};

const build = async (Component = <App />) => {
  let container;
  await act(async () => {
    container = render(Component).container;
  });
  return {
    container,
    LayoutWrapper: () => getByRole(container, 'application'),
    ThemeSwitch: () => getByRole(container, 'switch'),
  };
};

describe('App layout', () => {
  it('renders', async () => {
    const wrapper = await build();
    expect(wrapper).toMatchSnapshot();
  });

  it('displays layout wrapper', async () => {
    const wrapper = await build();
    expect(wrapper.LayoutWrapper()).toBeInTheDocument();
  });
});
