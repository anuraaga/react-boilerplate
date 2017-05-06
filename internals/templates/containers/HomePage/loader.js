/**
 * Asynchronously loads the components for HomePage
 */

import { errorLoading } from 'utils/asyncInjectors';

export default () => (cb) => {
  import('containers/HomePage')
    .then(cb)
    .catch(errorLoading);
};
