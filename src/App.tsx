
import { useState } from 'react'
import Loader from './loader/loader';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

function App() {
  const [loading,setLoading] = useState(false);

  return loading ? <Loader/> : <RouterProvider router={routes}/>
}

export default App
