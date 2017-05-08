import React from 'react';
import { shallow } from 'enzyme';
import createMemoryHistory from 'history/createMemoryHistory';

import Routes from 'routes';
import configureStore from 'store';

import App from '../index';

describe('<App />', () => {
  it('should render routes', () => {
    const store = configureStore({}, createMemoryHistory());
    const renderedComponent = shallow(
      <App />,
      { context: { store } },
    );
    expect(renderedComponent.find(Routes).length).toBe(1);
  });
});
