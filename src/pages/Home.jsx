import PhotoResults from "../components/photos/PhotoResults"
import PhotoSearch from "../components/photos/PhotoSearch"
import Alert from "../components/layout/Alert"
import Card from "./Card"
import {useUser} from "@supabase/auth-helpers-react"
function Home() {
 const user = useUser()
  return (
    <div>
      {user === null ? 
      <>
      <div className="flex justify-center">
      <Alert/>
      </div>
    <PhotoSearch/>
    <PhotoResults />
    </>
 :
<Card/>
}
</div> 
  )
}
export default Home