import { saveAs } from "file-saver"
function PhotoItem({photo}) {
 
const imgurl= photo.largeImageURL

      const downloadImage = () => {
          saveAs( imgurl, 'image.jpg') 
      }
  return (
    <div className='flex justify-center '>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={photo.webformatURL} alt="" className="w-full"/>
        <div className="px-6 py-4">
        
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {photo.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {photo.views}
            </li>
            <li>
              <strong>Likes: </strong>
              {photo.likes}
            </li>
          </ul>
          <button onClick={()=>downloadImage()} className="py-1.5 px-4 flex items-center space-x-2 transition-colors bg-green-600 border active:bg-green-800 font-medium border-green-700 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-green-100 mr-2" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg>  Download  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-green-100" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path></svg></button>
        </div>
        </div>
      </div>
  )
}
export default PhotoItem