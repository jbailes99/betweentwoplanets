// pages/artwork.tsx (or app/artwork/page.tsx)
import React from 'react'

const artworks = [
  { src: '/artwork1.png', title: 'Artwork 1', description: 'Description of artwork 1' },
  { src: '/artwork2.png', title: 'Artwork 2', description: 'Description of artwork 2' },
  { src: '/artwork3.png', title: 'Artwork 3', description: 'Description of artwork 3' },
  { src: '/artwork4.png', title: 'Artwork 4', description: 'Description of artwork 4' },
  { src: '/artwork5.png', title: 'Artwork 5', description: 'Description of artwork 5' },
  { src: '/artwork6.png', title: 'Artwork 6', description: 'Description of artwork 6' },
  { src: '/artwork7.png', title: 'Artwork 6', description: 'Description of artwork 6' },
]

const ArtworkGallery: React.FC = () => {
  return (
    <div
      className='min-h-screen bg-gray-100 py-10'
      style={{ backgroundImage: "url('/cover2.png')" }} // Replace with your movie poster
    >
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold text-center mb-10 text-gray-800'>Artwork Gallery</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
          {artworks.map((artwork, index) => (
            <div key={index} className='relative group overflow-hidden rounded-lg shadow-lg cursor-pointer'>
              <img
                src={artwork.src}
                alt={artwork.title}
                className='w-full h-full object-cover transform transition duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300'></div>
              <div className='absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='text-center'>
                  <h2 className='text-xl font-bold'>{artwork.title}</h2>
                  <p className='mt-2'>{artwork.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtworkGallery
