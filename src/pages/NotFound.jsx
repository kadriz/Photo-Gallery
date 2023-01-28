import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
          <p className='text-5xl mb-8'>404 - Page Not Found!</p>
          <Link to='/'>
        <button className= "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Back To Home</button>
           </Link>
      </div>
      </div>
      <div/>
      </div>
  )
}
export default NotFound