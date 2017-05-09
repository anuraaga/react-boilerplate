/*
 *
 * Asynchronously loads the components for ParentPage
 *
 */

import { errorLoading } from 'utils/asyncInjectors';

export default () => (cb) => {
  import('./index')
    .then(cb)
    .catch(errorLoading);
};
