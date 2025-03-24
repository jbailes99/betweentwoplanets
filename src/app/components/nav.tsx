export const AcmeLogo = () => {
  return <img src='/logo.png' alt='Acme Logo' className='w-12 h-12 rounded-full' />
}

export default function Nav() {
  return (
    <nav className='fixed top-0 left-0 w-full py-4 px-6 bg-purple-400/30 backdrop-blur-lg bg-opacity-30 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <a href='/'>
            <AcmeLogo />
          </a>
        </div>

        {/* Nav Links for Desktop */}
        <div className='hidden sm:flex gap-8 text-white'>
          <a href='/artwork' className='hover:text-gray-300'>
            Artwork
          </a>
          <a href='#' className='hover:text-gray-300'>
            Inspiration
          </a>
          <a href='#' className='hover:text-gray-300'>
            More info
          </a>
        </div>

        {/* Buttons for Login and Sign Up */}
        {/* <div className='flex items-center gap-4'>
          <a href='#' className='text-white hover:text-gray-300'>
            Login
          </a>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Sign Up</button>
        </div> */}
      </div>

      {/* Mobile Navbar */}
      <div className='sm:hidden'>
        <button className='text-white'>
          {/* Hamburger menu icon can be added here */}
          <span className='material-icons'>menu</span>
        </button>
      </div>
    </nav>
  )
}
