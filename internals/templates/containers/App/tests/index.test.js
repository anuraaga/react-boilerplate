import React from 'react';
import { shallow } from 'enzyme';

import Routes from 'routes';

import App from '../index';

describe('<App />', () => {
  it('should render routes', () => {
    const store = {};
    const routes = (<Routes store={store} />);
    const renderedComponent = shallow(
      <App store={store} />
    );
    expect(renderedComponent.contains(routes)).toBe(true);
  });
});
