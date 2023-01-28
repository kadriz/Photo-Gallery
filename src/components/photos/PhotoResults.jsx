import {useContext} from "react"
import Spinner from "../layout/Spinner"
import PhotoItem from "./PhotoItem"
import PixabayCotext from "../../context/pixabay/PixabayContext"
function PhotoResults() {
  const {photos,loading} = useContext(PixabayCotext)
 return (
   <div className="container mx-auto">
    {loading ? <Spinner/> :<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
    {photos.map((photo)=>(
<PhotoItem key={photo.id} photo={photo}/>
))} 
</div>}
</div>
  )
}
export default PhotoResults