'use client'
import React from 'react'

const MoreInfo: React.FC = () => {
  return (
    <div className='min-h-screen pt-18 w-full bg-[url("/cover2.png")] bg-cover bg-center bg-no-repeat bg-fixed'>
      <div className='container mx-auto sm:px-6  py-10'>
        <div className='text-center text-white w-full bg-gradient-to-b from-green-600/20 to-purple-600/20 p-8 shadow-2xl border-2 border-green-900/50 rounded-xl max-w-11/12 mx-auto backdrop-blur-sm'>
          <h1 className='text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 bg-gradient-to-r from-green-400 via-purple-400 to-orange-200 text-transparent bg-clip-text'>
            More Information
          </h1>

          <div className='space-y-8 text-left'>
            <section className='bg-black/30 p-6 rounded-lg border border-green-900/30'>
              <h2 className='text-2xl font-semibold mb-4 text-green-400'>More about the film</h2>
              <p className='text-sm md:text-lg leading-relaxed'>
                "Between Two Planets" is a poignant student film that explores the complex emotions of adolescence,
                family conflict, and the search for belonging. The story follows Laura, a 15-year-old girl struggling
                with family turmoil, who finds solace in an unexpected friendship with Trevor, an alien who crash-lands
                in her neighborhood. As she helps him repair his ship, Laura sees an opportunity to escape her troubled
                life on Earth. However, through their journey together, she discovers that sometimes the greatest
                adventures are found in facing our challenges rather than running from them.
              </p>
            </section>

            <section className='bg-black/30 p-6 rounded-lg border border-green-900/30'>
              <h2 className='text-2xl font-semibold mb-4 text-green-400'>Production Details</h2>
              <ul className='list-none text-sm md:text-lg space-y-3'>
                <li className='flex items-center'>
                  <span className='text-purple-400 mr-2'>✦</span>
                  <span>
                    <strong>Director & Writer:</strong> Miranda Graves
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-purple-400 mr-2'>✦</span>
                  <span>
                    <strong>Genre:</strong> Drama, Science Fiction
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-purple-400 mr-2'>✦</span>
                  <span>
                    <strong>Premiere:</strong> May 1st, 2025
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-purple-400 mr-2'>✦</span>
                  <span>
                    <strong>Venue:</strong> Brattle Theater, Cambridge, MA
                  </span>
                </li>
              </ul>
            </section>

            <section className='bg-black/30 p-6 rounded-lg border border-green-900/30'>
              <h2 className='text-2xl font-semibold mb-4 text-green-400'>Contact</h2>
              <p className='text-sm md:text-lg'>
                For press inquiries, partnership opportunities, or general questions, please contact:
                <br />
                <a
                  href='mailto:mirandagravy@gmail.com'
                  className='text-purple-400 hover:text-purple-300 transition-colors duration-300 inline-block mt-2'
                >
                  mirandagravy@gmail.com
                </a>
              </p>
              <div className='flex mt-4'>
                <p>Take a look at our&nbsp;&nbsp;</p>
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
            </section>

            <section className='bg-black/30 p-6 rounded-lg border border-green-900/30'>
              <h2 className='text-2xl font-semibold mb-4 text-green-400'>Follow the Journey</h2>

              <div className='mt-6'>
                <h3 className='text-xl font-semibold flex justify-center  mb-3 text-purple-400'>Upcoming Screenings</h3>
                <div className='bg-black/40 p-4 rounded-lg border border-purple-900/30'>
                  <p className='text-sm md:text-base italic text-center'>
                    More screening dates and film festival appearances to be announced soon.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo
