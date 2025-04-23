// pages/index.tsx (or app/page.tsx)
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='min-h-screen pt-0 sm:pt-20  w-full bg-[url("/cover2.png")] bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-4 sm:px-8'>
      <div className='text-center text-white bg-green-600/20 p-4 sm:p-6 md:p-8 shadow-xl border-1 border-green-900 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-3 sm:mb-4 bg-gradient-to-r from-green-400 via-purple-400 to-orange-200 text-transparent bg-clip-text'>
          Between Two Planets
        </h1>
        <p className='text-xs sm:text-sm md:text-base lg:text-xl italic mb-3 sm:mb-4 w-full max-w-2xl mx-auto'>
          Laura's only 15 and has spent her life fantasizing about adventures through jungles, castles, time and space,
          escaping from her dysfunctional home life. Then, like a chapter out of one of her books- Trevor the alien had
          crash landed in her neighborhood. He's repaired his ship with Laura's help and tonight at sun down he'll lift
          off forever. Will Laura say goodbye to her home, her parents, her life on earth and grab the opportunity to
          escape all of her unhappiness on an alien spaceship?
        </p>
        <p className='text-xs sm:text-sm md:text-base lg:text-xl'>Releasing: May 2025</p>
        <p className='text-xs sm:text-sm md:text-base lg:text-xl mb-4 sm:mb-6'>
          Premiere: May 1st, 2025 @ Brattle Theater, Cambridge, MA
        </p>
        <button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto'>
          Trailer coming soon!
        </button>
      </div>
    </div>
  )
}

export default Home
