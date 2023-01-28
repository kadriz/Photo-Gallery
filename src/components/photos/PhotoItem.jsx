function PhotoItem({photo}) {
  return (
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
              <strong>Downloads: </strong>
              {photo.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {photo.likes}
            </li>
          </ul>
        </div>
      </div>
  )
}
export default PhotoItem