/**
 *
 * Asynchronously loads the component for ArtistHome
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
