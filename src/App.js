import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import SuccesMessage from './components/layout/SuccesMessage'
import Store from './pages/Store'
import Form from './pages/Form'
import {PixabayProvider} from './context/pixabay/PixabayContext'
import { AlertProvider } from './context/alert/AlertContext'
function App() {
  return (
    <PixabayProvider>
      <AlertProvider>
    <Router >
  <div className='flex flex-col justify-between h-screen'>
<Navbar/>
<main className='container mx-auto px-3 pb-12'>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/notfound' element={<NotFound/>}/>
<Route path='/*' element={<NotFound/>}/>
<Route path='/succesmessage' element={<SuccesMessage/>}/>
<Route path='/store' element={<Store/>}/>
<Route path='/form' element={<Form/>}/>
</Routes>
</main>
<Footer/>
</div>
   </Router>
   </AlertProvider>
   </PixabayProvider>
  )
}
export default App
