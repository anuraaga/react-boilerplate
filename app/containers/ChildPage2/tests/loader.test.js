import createMemoryHistory from 'history/createMemoryHistory';

import configureStore from 'store';

import ChildPage2 from '../index';
import createLoader from '../loader';

describe('ChildPage2 loader', () => {
  const store = configureStore({}, createMemoryHistory());

  const loader = createLoader(store);

  it('loads ChildPage2', () => {
    const loaded = new Promise((resolve) => (loader(resolve)));
    expect.assertions(1);
    return loaded.then((comp) => expect(comp.default).toEqual(ChildPage2));
  });
});
