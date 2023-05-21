import {FcPhotoReel} from 'react-icons/fc'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
<nav className="bg-gray-700">
<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex items-center">
        <div className="flex flex-shrink-0 items-center">
        <FcPhotoReel className="block h-8 w-auto lg:hidden" />
          <FcPhotoReel className="hidden h-8 w-auto lg:block" />
        </div>
        <div className="sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

            <Link to='/about' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>

            <Link to='/contact'  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Link to='/store'  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 ml-50 text-sm font-medium">Store Images</Link>

          </div>
        </div>
  </div>
  </div>
  </div>
</nav>
  
)}

export default Navbar