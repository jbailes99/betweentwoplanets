'use client'
import React from 'react'

const MeetTheCrew: React.FC = () => {
  return (
    <div className='min-h-screen pt-18 w-full bg-[url("/cover2.png")] bg-cover bg-center bg-no-repeat bg-fixed'>
      <div className='container mx-auto px-6 py-10'>
        <div className='text-center text-white w-full bg-gradient-to-b from-green-600/20 to-purple-600/20 p-8 shadow-2xl border-2 border-green-900/50 rounded-xl max-w-11/12 mx-auto backdrop-blur-sm'>
          <h1 className='text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 bg-gradient-to-r from-green-400 via-purple-400 to-orange-200 text-transparent bg-clip-text'>
            Meet The Crew
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Director Card */}
            <div className='bg-black/30 p-6 rounded-lg border border-green-900/30 transform hover:scale-105 transition-transform duration-300'>
              <div className='aspect-square w-48 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center overflow-hidden'>
                <img src='/miranda.png' alt='Miranda Graves' className='w-full h-full object-cover' />
              </div>
              <h2 className='text-2xl font-semibold mb-2 text-green-400'>Miranda Graves</h2>
              <h3 className='text-lg text-purple-400 mb-4'>Director, Writer, Editor</h3>
              <p className='text-sm md:text-base'>
                The creative force behind "Between Two Planets," Miranda brings her unique vision to this emotional
                journey of self-discovery and belonging.
              </p>
            </div>

            {/* Placeholder Cards */}
            <div className='bg-black/30 p-6 rounded-lg border border-green-900/30 transform hover:scale-105 transition-transform duration-300'>
              <div className='aspect-square w-48 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center'>
                <span className='text-4xl'>🎥</span>
              </div>
              <h2 className='text-2xl font-semibold mb-2 text-green-400'>Cinematographer</h2>
              <h3 className='text-lg text-purple-400 mb-4'>Coming Soon</h3>
              <p className='text-sm md:text-base italic'>More crew members to be announced</p>
            </div>

            <div className='bg-black/30 p-6 rounded-lg border border-green-900/30 transform hover:scale-105 transition-transform duration-300'>
              <div className='aspect-square w-48 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center'>
                <span className='text-4xl'>🎭</span>
              </div>
              <h2 className='text-2xl font-semibold mb-2 text-green-400'>Cast</h2>
              <h3 className='text-lg text-purple-400 mb-4'>Coming Soon</h3>
              <p className='text-sm md:text-base italic'>Meet the talented actors bringing our characters to life</p>
            </div>

            <div className='bg-black/30 p-6 rounded-lg border border-green-900/30 transform hover:scale-105 transition-transform duration-300'>
              <div className='aspect-square w-48 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center'>
                <span className='text-4xl'>🎵</span>
              </div>
              <h2 className='text-2xl font-semibold mb-2 text-green-400'>Music</h2>
              <h3 className='text-lg text-purple-400 mb-4'>Coming Soon</h3>
              <p className='text-sm md:text-base italic'>The musical talent behind the film's emotional score</p>
            </div>

            <div className='bg-black/30 p-6 rounded-lg border border-green-900/30 transform hover:scale-105 transition-transform duration-300'>
              <div className='aspect-square w-48 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center'>
                <span className='text-4xl'>🎨</span>
              </div>
              <h2 className='text-2xl font-semibold mb-2 text-green-400'>Production Design</h2>
              <h3 className='text-lg text-purple-400 mb-4'>Coming Soon</h3>
              <p className='text-sm md:text-base italic'>The creative minds behind the film's visual world</p>
            </div>

            <div className='bg-black/30 p-6 rounded-lg border border-green-900/30 transform hover:scale-105 transition-transform duration-300'>
              <div className='aspect-square w-48 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center'>
                <span className='text-4xl'>✂️</span>
              </div>
              <h2 className='text-2xl font-semibold mb-2 text-green-400'>Sound Design</h2>
              <h3 className='text-lg text-purple-400 mb-4'>Coming Soon</h3>
              <p className='text-sm md:text-base italic'>The editor shaping the film's final story</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetTheCrew
