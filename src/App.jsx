import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import WishList from './pages/wishList/WishList';
import { MobileHandlerProvider } from './utils/mobileHandler';



function App() {

  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/shop", element: <Shop /> },
        { path: "/contact", element: <Contact /> },
        { path: "/wishList", element: <WishList /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <>
      <MobileHandlerProvider>
        <RouterProvider router={Routing}/>
      </MobileHandlerProvider>
    </>
  )
}

export default App
