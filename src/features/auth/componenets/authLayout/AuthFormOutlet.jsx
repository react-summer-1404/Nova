import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';

const AuthFormOutlet = () => {
  return (
    <div style={{background:"var(--color-white)"}} className='border border-amber-100 rounded-[50px] shadow-[10px_8px_0_0_rgba(0,0,0,1)]'>
      <Header />
      <Outlet />
    </div>
  )
}

export default AuthFormOutlet
