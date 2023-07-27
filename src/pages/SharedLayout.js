import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/footer";
import { Outlet } from 'react-router-dom'
export const SharedLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
    
  )
}
