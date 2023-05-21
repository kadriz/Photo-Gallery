const PixabayReducer =(state,action)=>{
switch(action.type){
    case 'GET_PHOTOS':
        return {
...state,
photos:action.payload,
loading:false,
        }
        case 'GET_IMAGES':
        return {
...state,
images:action.payload,
        }
        case 'SET_LOADING':
            return {
                ...state,
                loading:true
            }
            case 'CLEAR_PHOTOS':
                return {
                    ...state,
                    photos:[],
                }
    default : 
    return state
}
}
export default PixabayReducer