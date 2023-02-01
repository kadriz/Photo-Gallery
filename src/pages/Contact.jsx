import {useContext, useState} from 'react'
import AlertContext from '../context/alert/AlertContext'
import Alert from '../components/layout/Alert'

function Contact() {
const {setAlert} =useContext(AlertContext)
const [text, setText] = useState('')
const [message, setMessage] = useState('')
const [email, setEmail] = useState('')

const handleEmailChange = ({ target: { value } })=>{
    setEmail(value)
    }
 const handleMessageChange = ({ target: { value } })=>{
  setMessage(value)
   }
   const handleTextChange = ({ target: { value } })=>{
    setText(value)
     }
  const handleSubmit = (e) => {
    e.preventDefault()
    if ((text&&message&&email)==='') {
     setAlert ('All form fields must be completed','error')
    }  else {
    setMessage('')
    setText('')
    setEmail('')
    window.location.href='/succesmessage'
  }}
    return (  
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to send a feedback about this website ? Let us know.</p>
      <form className="space-y-8"onSubmit={handleSubmit}>
      <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input value ={email} onChange={handleEmailChange} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com"/>
          </div>
 <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input value ={text} onChange={handleTextChange} type="text"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
          </div>
          <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <input value ={message} onChange={handleMessageChange} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Leave a comment..." />
          </div>
          <Alert/>
     <div className='flex justify-center '>
   <button type="submit"className="btn btn-outline my-3 py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </div>
      </form>
  </div>
</section> 
  )
}
export default Contact