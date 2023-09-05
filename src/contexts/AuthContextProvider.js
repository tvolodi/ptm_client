// import React, {createContext, useContext, useState} from "react";

// import logIn, { getMyProfile } from "../services/auth/auth";

// let AuthContext = createContext();

// export const AuthProvider = ({children}) => {

//     let [authState, setAuthState] = useState({
//         isLogged: false,
//         // userName: "admin",
//         userLogin: "admin",
//     });

//     let signIn = async (login, password) => {

//         const response = await logIn(login, password);
//         console.log("response from logIn", response)
                
//         // if( response.result == 1) { // Login success
            
//         //     isLogged = true;

//         //     // setAuthState((prev) => {
//         //     //     return {...prev, isLogged: true,};
//         //     // });
//         //     // navigate("/");
//         // } 
        
//         // Try to get user profile 
//         const profileResponse = await getMyProfile();

//         // Debug
//         console.log("response from get profile", profileResponse)

//         if(profileResponse.status == 200){

//             // Debug
//             console.log("setAuthState from UserLoginView", setAuthState)

//             setAuthState((prev) => { return {
//                 ...prev,
//                 isLogged: true,
//             }
                
//                 // userName: "admin",
//             });            
//         }
//     }

//     const getProfile = async () => {
//         const profileResponse = await getMyProfile();

//         // Debug
//         console.log("response from get profile", profileResponse)

//         if(profileResponse.status == 200){

//             // Debug
//             console.log("setAuthState from UserLoginView", setAuthState)

//             setAuthState((prev) => { return {
//                 ...prev,
//                 isLogged: true,
//             }
                
//                 // userName: "admin",
//             });            
//         }
//     };

//     let value = {
//         authState,
//         setAuthState,
//         signIn,
//         getProfile,
//     };

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

// function useAuth() {
//     return useContext(AuthContext);
// }

// export default useAuth;

