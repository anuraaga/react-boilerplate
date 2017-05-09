import createMemoryHistory from 'history/createMemoryHistory';

import configureStore from 'store';

import ParentPage from '../index';
import createLoader from '../loader';

describe('ParentPage loader', () => {
  const store = configureStore({}, createMemoryHistory());

  const loader = createLoader(store);

  it('loads ParentPage', () => {
    const loaded = new Promise((resolve) => (loader(resolve)));
    expect.assertions(1);
    return loaded.then((comp) => expect(comp.default).toEqual(ParentPage));
  });
});
