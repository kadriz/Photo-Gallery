import PhotoResults from "../components/photos/PhotoResults"
import PhotoSearch from "../components/photos/PhotoSearch"
import Alert from "../components/layout/Alert"
function Home() {
  return (
    <div>
      <div className="flex justify-center">
      <Alert/>
      </div>
    <PhotoSearch/>
    <PhotoResults />
</div> 
  )
}
export default Home