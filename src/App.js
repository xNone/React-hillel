import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './Home';
import Popular from './Popular';
import Battle from './Battle';
import Nav from './nav';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/popular',
        element: <Popular />
      },
      {
        path: '/battle',
        element: <Battle />
      },
      {
        path: '*',
        element: (
          <h2>Error</h2>
        )
      }
    ]
  }
]);

const App = () => {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;