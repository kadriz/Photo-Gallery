import {useUser,useSupabaseClient} from "@supabase/auth-helpers-react"
import { useState,  useEffect, useContext   } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react"
import {v4 as uuidv4} from 'uuid'
import PixabayCotext from "../context/pixabay/PixabayContext"
import AlertContext from "../context/alert/AlertContext"
import Alert from '../components/layout/Alert'
  function Form() {
    const [mail,setMail]=useState("")
    const{images,dispatch} = useContext(PixabayCotext)
    const{setAlert}=useContext(AlertContext)
    const user = useUser()
    const supabase = useSupabaseClient()
const CDNURL = "https://tcistetqpolpwvtkhkcu.supabase.co/storage/v1/object/public/images/"
useEffect(()=>{
  getImages()
  } ,[user])
async function getImages(){
const {data,error}= await supabase
.storage 
.from ('images')
.list(user?.id + "/", {
  limit :100,
  offset :0,
  sortBy : {column : "name" , order : "asc"}

})
if(data!== null){
const images = data
dispatch({type:'GET_IMAGES',payload :images})
}else{
  console.log(error)
}
}
async function magicLinkLogin() {
 
  if (mail==='') {
   setAlert('Please insert an email adress','error')
  }else {
  const { data } = await supabase.auth.signInWithOtp({
    email: mail ,
 })
}
  setAlert ('Check your email for a Supabase Magic Link to log in!','succes')
  setMail('')
}   
async function signOut() {
  const { error } = await supabase.auth.signOut()
}
async function uploadImage (e) {
  let file = e.target.files[0]
  const {data,error}=await supabase
  .storage
  .from('images')
  .upload(user.id + "/"+ uuidv4() , file)
  if (data) {
    getImages()
  }else{
    console.log(error)
  }
}

async function deleteImage(imageName) {
  const { error } = await supabase
    .storage
    .from('images')
    .remove([ user.id + "/" + imageName])
  
  if(error) {
    alert(error);
  } else {
    getImages();
  }
}
async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}
    return (
<section className="bg-white dark:bg-gray-900">
        {user === null ?
        <>
        <div className="flex justify-center">
<Alert/>
</div>
     
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"> Welcome to ImageWall !</h2>
       
       <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Enter an email to sign in with Supabase Magic Link</p>
          
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        
          <div >
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input  onChange={(e)=>setMail(e.target.value)} value={mail ||""} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com"/>
              <div className='flex justify-center '>
         <button onClick={(e)=>(magicLinkLogin(), e.preventDefault())} className="btn btn-outline my-3 py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Get Magic Link</button>
          </div>
          </div>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button
                    onClick={(e)=>(signInWithGoogle() ,e.preventDefault())}
                        type="button"
                        className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                    <button onClick={(e)=>(signInWithGitHub() ,e.preventDefault())} className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>
                    </div>
         </form>
        </div>
        
        </>
       : 
     <>
      <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 p-8">    <div>      
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-gray-500" viewBox="0 0 24 24"><path fillRule="evenodd" d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"></path></svg>    
        </div>    
        <div className="mt-8 text-center">      
        <h1 className="text-4xl"> Your ImageWall</h1>      
        <p className="mx-auto mt-4 lg:w-1/2 text-gray-700"> <strong>  Current user : {user.email} </strong><br/>Use the Choose File button below to upload an image to your gallery </p>    
        </div>  
        <div >
            <input onChange={(e)=>uploadImage(e)} type="file" accept="image/png, image/jpeg,image/jpg" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Search" aria-describedby="button-addon2"/>
            </div>
            
        <button onClick={()=>signOut()} className="mt-8 block rounded-lg border border-green-700 bg-green-600 py-1.5 px-4 font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800 disabled:opacity-50">Sign out</button>      
        </div>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex items-center justify-center" >
          <Typography variant="h4" color="blue-gray">
          Your Images
         </Typography>            
         </div>
           <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {images.map((image) => {
              return (
                <div key={CDNURL + user.id + "/" + image.name} className="container mx-auto">
                  
            <Card >
      <CardHeader >
        <img src={CDNURL + user.id + "/" + image.name} layout="fill" />
      </CardHeader>
      <CardBody className="flex justify-center">
      <button onClick={()=>deleteImage(image.name)} className="btn btn-outline btn-error ">Delete</button>
      </CardBody>
    
    </Card>
    </div>
              )})}
  </div>
    </div>
    </>
      }
</section> 
    ) 
        }
  export default Form