import React from 'react'
import Navbar from './layoutWithNavbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className={`${(location.pathname == '/' || location.pathname("/home")) && "h-screen"} w-screen`}> 
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout