"use client"
import React from 'react'
import Cursor from './Cursor/Cursor'
import Link from 'next/link'
const Header = () => {

  return (
        
        <div className='nav'><div className="navbarLogo"></div><Cursor/><div className="navLinks"><Link className="navLink" href="/">Cursos</Link><Link className="navLink" href="/">Contactos</Link></div></div>
  )
}

export default Header