// pages/index.tsx (or app/page.tsx)
import React from 'react'

const Home: React.FC = () => {
  return (
    <div
      className='min-h-screen w-full bg-cover bg-center flex items-center justify-center'
      style={{
        backgroundImage: "url('/cover2.png')",
        backgroundRepeat: 'no-repeat', // Prevent repeating the image
        backgroundAttachment: 'fixed', // Keep the background fixed during scrolling (optional)
      }}
    >
      <div className='text-center text-white bg-green-600/20 p-8 shadow-xl border-1 sm:mt-0 mt-16 border-green-900 rounded-lg sm:w-1/2 w-5/6 '>
        <h1 className='text-5xl md:text-6xl font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-green-400 via-purple-400 to-orange-200 text-transparent bg-clip-text'>
          Between Two Planets
        </h1>
        <p className='text-sm md:text-xl italic mb-4 sm:w-3/4 w-11/12 mx-auto'>
          Laura’s only 15 and has spent her life fantasizing about adventures through jungles, castles, time and space,
          escaping from her dysfunctional home life. Then, like a chapter out of one of her books- Trevor the alien had
          crash landed in her neighborhood. He’s repaired his ship with Laura’s help and tonight at sun down he’ll lift
          off forever. Will Laura say goodbye to her home, her parents, her life on earth and grab the opportunity to
          escape all of her unhappiness on an alien spaceship?
        </p>
        <p className='text-sm md:text-xl mb-6'>Releasing: May 2025</p>
        <button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300'>
          Trailer coming soon!
        </button>
      </div>
    </div>
  )
}

export default Home
