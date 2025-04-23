'use client'
import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline' // Import the Heroicons icon
import { usePathname } from 'next/navigation'

export const AcmeLogo = () => {
  return <img src='/logo.png' alt='Acme Logo' className='w-12 h-12 rounded-full' />
}

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // State for mobile menu toggle
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen) // Toggle mobile menu state
  }

  const isActive = (path: string) => {
    return pathname === path
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
        <div className='sm:hidden flex flex-col gap-4 w-1/2 text-center items-center justify-center text-xl rounded-xl mx-auto text-white'>
          <a
            href='/'
            className={`hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
              isActive('/') ? 'text-purple-400 scale-110 font-bold' : ''
            }`}
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a
            href='/meet-the-crew'
            className={`hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
              isActive('/meet-the-crew') ? 'text-purple-400 scale-110 font-bold' : ''
            }`}
            onClick={toggleMobileMenu}
          >
            Meet the crew
          </a>
          <a
            href='/more-info'
            className={`hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
              isActive('/more-info') ? 'text-purple-400 scale-110 font-bold' : ''
            }`}
            onClick={toggleMobileMenu}
          >
            More info
          </a>
          <a
            href='/artwork'
            className={`hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
              isActive('/artwork') ? 'text-purple-400 scale-110 font-bold' : ''
            }`}
            onClick={toggleMobileMenu}
          >
            Artwork
          </a>
        </div>
      )}
    </nav>
  )
}
