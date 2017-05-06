import { fromJS } from 'immutable';

import { makeSelectLocation } from 'containers/App/selectors';

describe('makeSelectLocation', () => {
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });
    const mockedState = fromJS({
      route,
    });
    expect(makeSelectLocation()(mockedState)).toEqual(route.toJS());
  });
});
