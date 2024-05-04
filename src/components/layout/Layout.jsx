import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import MobileMenu from '../mobileMenu/MobileMenu'

const Layout = () => {
  return (
    <>
      <MobileMenu />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
