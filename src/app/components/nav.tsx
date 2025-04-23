'use client'
import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline' // Import the Heroicons icon

export const AcmeLogo = () => {
  return <img src='/logo.png' alt='Acme Logo' className='w-12 h-12 rounded-full' />
}

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu toggle

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen) // Toggle mobile menu state
  }

  return (
    <nav className='fixed top-0 left-0 w-full py-4 px-6 bg-purple-300/10 backdrop-blur-lg bg-opacity-30 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <a href='/'>
            <AcmeLogo />
          </a>
        </div>

        {/* Nav Links for Desktop */}
        <div className='hidden sm:flex gap-8 text-white'>
          <a href='/' className='hover:text-gray-300'>
            Home
          </a>
          <a href='/meet-the-crew' className='hover:text-gray-300'>
            Meet the crew
          </a>

          <a href='/more-info' className='hover:text-gray-300'>
            More info
          </a>
          <a href='/artwork' className='hover:text-gray-300'>
            Artwork
          </a>
        </div>

        {/* Mobile Navbar Hamburger */}
        <div className='sm:hidden'>
          <button
            className='text-white'
            onClick={toggleMobileMenu} // Toggle menu visibility
          >
            <Bars3Icon className='w-6 h-6' /> {/* Use Heroicons hamburger menu icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='sm:hidden flex flex-col gap-4 w-1/2 text-center items-center justify-center text-xl rounded-xl mx-auto text-white '>
          <a href='/' className='hover:text-gray-300'>
            Home
          </a>
          <a href='/meet-the-crew' className='hover:text-gray-300'>
            Meet the crew
          </a>

          <a href='/more-info' className='hover:text-gray-300'>
            More info
          </a>
          <a href='/artwork' className='hover:text-gray-300 '>
            Artwork
          </a>
        </div>
      )}
    </nav>
  )
}
