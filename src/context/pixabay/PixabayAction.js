

const PIXABAY_URL = process.env.REACT_APP_PIXABAY_URL
const PIXABAY_KEY = process.env.REACT_APP_PIXABAY_KEY
export const fetchPhotos=async(text)=>{
    const params = new URLSearchParams({
        q:text
    })
    const response =await fetch(`${PIXABAY_URL}?key=${PIXABAY_KEY}&${params}&image_type=photo&pretty=true&per_page=200`)
    const {hits} =await response.json()
    if (response.status===404) {
        window.location='/notfound'
    }else{
    return hits
    }
}
