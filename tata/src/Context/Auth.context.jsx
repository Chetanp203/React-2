import { createContext ,useReducer} from "react";
import { useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const initialState = {user: null};

function reducer(state, action){
    switch(action.type){
        case "login":
            return{user: action.payload}
            case"logout":
            return{user: null}
            default:
                return state;
    }
}

const AuthProvider = ({children}) => {
     const [state, dispatch] = useReducer(reducer, initialState);

    //  useEffect(()=>{
    //   async  function getCurrentUserData(){
    //       let token = JSON.parse(localStorage.getItem("token"));
    //       const response = await axios.post("http://localhost:8003/get-current-user",{token});
    //       if(response.data.success){
    //         dispatch({
    //             type: "login",
    //             payload: response.data.user
    //         })
    //       }else{
    //         dispatch({
    //             type:"logout",
    //         });
    //       }
    //     }
    //     getCurrentUserData();
    // },[])

    const login =(userDetails)=>{
        localStorage.setItem("current-user",JSON.stringify(userDetails));
        dispatch({
            type:"login",
            payload:userDetails,
        })
     }

     const logout=()=>{
        localStorage.removeItem("current-user");
        dispatch({
            type:"logout"
        })
     }

     useEffect(()=>{
        const userDetails = JSON.parse(localStorage.getItem("current-user"))
        dispatch({
            type:"login",
            payload:userDetails,
        })
    },[])
   return (
    <AuthContext.Provider value={{state, login,logout}}>
        {children}

    </AuthContext.Provider>
   )
}
export default AuthProvider;