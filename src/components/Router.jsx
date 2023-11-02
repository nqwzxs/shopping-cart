import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './Home'
import Shop from './Shop'
import ErrorPage from './ErrorPage'
import ShoppingCart from './ShoppingCart'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'cart', element: <ShoppingCart /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
