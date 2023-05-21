import {useContext } from "react"
import Spinner from "../layout/Spinner"
import PhotoItem from "./PhotoItem"
import PixabayCotext from "../../context/pixabay/PixabayContext"
import TypeWriter from "../../TypeWriter/TypeWriter"

function PhotoResults() {
  const {loading,photos} = useContext(PixabayCotext) 
return (
  <div className="container mx-auto">
   { loading  ?  <Spinner/>  :
   <>
   <div className='flex justify-center mt-10  '
      style={{ visibility: (photos.length)>0 ? 'hidden' : 'visible' }}>
<TypeWriter/>
    </div>
      <div>
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-2">
    {photos.map((photo)=>(<PhotoItem key={photo.id} photo={photo}/>))}
</div>
   </div> 
    </>    
 } 
  </div>  
     )
}
   
    
 
export default PhotoResults