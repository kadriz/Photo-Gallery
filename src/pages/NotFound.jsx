import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
          <p className='text-5xl mb-8'>404 - Page Not Found!</p>
          <Link to='/'>
            <div className='flex justify-center'>
        <button className="btn btn-wide ">Back To Home</button>
        </div>
           </Link>
      </div>
      </div>
      <div/>
      </div>
  )
}
export default NotFound