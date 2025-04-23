// pages/index.tsx (or app/page.tsx)
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='min-h-screen pt-0 sm:pt-20  w-full bg-[url("/cover2.png")] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-4 sm:px-8'>
      <div className='flex-col'>
        <div className='text-center text-white bg-green-600/20 p-4 sm:p-6 md:p-8 shadow-xl border-1 border-green-900 rounded-lg sm:w-full w-10/12  sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-3 sm:mb-4 bg-gradient-to-r from-green-400 via-purple-400 to-orange-200 text-transparent bg-clip-text'>
            Between Two Planets
          </h1>
          <p className='text-sm sm:text-sm md:text-base lg:text-xl italic mb-3 sm:mb-4 w-full max-w-2xl mx-auto'>
            Laura's only 15 and has spent her life fantasizing about adventures through jungles, castles, time and
            space, escaping from her dysfunctional home life. Then, like a chapter out of one of her books- Trevor the
            alien had crash landed in her neighborhood. He's repaired his ship with Laura's help and tonight at sun down
            he'll lift off forever. Will Laura say goodbye to her home, her parents, her life on earth and grab the
            opportunity to escape all of her unhappiness on an alien spaceship?
          </p>
          <p className='text-xs sm:text-sm md:text-base lg:text-xl'>Releasing: May 2025</p>
          <p className='text-xs sm:text-sm md:text-base lg:text-xl mb-4 sm:mb-6'>
            Premiere: May 1st, 2025 @ Brattle Theater, Cambridge, MA
          </p>
          <button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto'>
            Trailer coming soon!
          </button>
        </div>
        <div className='flex justify-center mt-4'>
          <a
            href='https://www.instagram.com/betweentwoplanetsfilm/'
            className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110 flex items-center space-x-2'
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
