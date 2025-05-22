
import Loader from '@components/loader';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@redux/store';
import { useEffect } from 'react';
import { refreshSession } from './redux/actions/authActions';
import { getLocalStorageValue } from '@utils/localstorageutil';
import CONSTANTS from '@constants/index';

function App() {
  let Once = true;
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (Once) {
      Once = false;
      const refreshToken = getLocalStorageValue(CONSTANTS.refreshToken)
      if (!refreshToken) {
        return;
      }
      dispatch(refreshSession());
    }
  }, [])

  return isLoading ? <Loader /> : <RouterProvider router={routes} />
}

export default App
