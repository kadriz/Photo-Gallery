import { createContext ,useReducer } from "react"
import PixabayReducer from "./PixabayReducer"
const PixabayCotext = createContext ()
export const PixabayProvider = ({children})=> {
    const initialState = {
        photos:[],
        loading:false,
    }
    const [state,dispatch]=useReducer(PixabayReducer,initialState)
 return (
    <PixabayCotext.Provider value={{
       ...state,
       dispatch,
    }}>
        {children}
    </PixabayCotext.Provider>
)}
export default PixabayCotext