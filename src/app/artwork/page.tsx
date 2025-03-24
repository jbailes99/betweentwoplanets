'use client'
import React, { useState } from 'react'

const artworks = [
  { src: '/artwork1.png', title: 'Artwork 1', description: 'Description of artwork 1' },
  { src: '/artwork2.png', title: 'Artwork 2', description: 'Description of artwork 2' },
  { src: '/artwork3.png', title: 'Artwork 3', description: 'Description of artwork 3' },
  { src: '/artwork4.png', title: 'Artwork 4', description: 'Description of artwork 4' },
  { src: '/artwork5.png', title: 'Artwork 5', description: 'Description of artwork 5' },
  { src: '/artwork6.png', title: 'Artwork 6', description: 'Description of artwork 6' },
  { src: '/artwork7.png', title: 'Artwork 7', description: 'Description of artwork 7' },
]

const ArtworkGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setSelectedImage(src)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div
      className='min-h-screen w-full bg-cover bg-bottom'
      style={{
        backgroundImage: "url('/cover2.png')",
        backgroundAttachment: 'fixed', // Keep the background fixed during scrolling (optional)
      }}
    >
      <div className='container mx-auto px-6 py-10'>
        <h1 className='text-4xl font-bold text-center mb-10 text-gray-800'>Artwork Gallery</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8'>
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className='relative group overflow-hidden rounded-lg shadow-lg cursor-pointer'
              onClick={() => openModal(artwork.src)} // Open modal when an image is clicked
            >
              <img
                src={artwork.src}
                alt={artwork.title}
                className='w-full h-120 object-cover transform transition duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-white/40 flex justify-center items-center z-50'
          onClick={closeModal} // Close modal when clicked outside
        >
          <div
            className='relative'
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <img
              src={selectedImage!}
              alt='Selected Artwork'
              className='w-full h-auto max-w-3xl max-h-screen object-contain'
            />
            <button
              className='absolute top-4 right-4 text-white text-3xl cursor-pointer font-bold'
              onClick={closeModal}
            >
              &times; {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArtworkGallery
