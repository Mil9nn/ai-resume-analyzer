import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
            <p className="text-2xl max-xs:text-lg font-bold text-gradient">RESUMIND</p>
        </Link>
        <Link to="/upload">
            <p className="primary-button text-sm w-fit">Upload Resume</p>
        </Link>
    </nav>
  )
}

export default Navbar
