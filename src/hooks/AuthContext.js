// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router";
// import { useLocalStorage } from "./useLocalStorage";

// export const AuthContext = React.createContext();

// console.log("AuthContext", AuthContext);

// export const AuthProvider = (props) => {

//     const [authState, setAuthState] = useState({
//         isLogged: false,
//         userName: "None user",
//         userLogin: "",
//     });

//     console.log("setAuthState from AuthContext", setAuthState)

//     // const [authState, setAuthState] = useLocalStorage("auth_state", null);

//     // const login = async(data) => {
//     //     setAuthState(data);        
//     // };

//     // const logout = () => {
//     //     setAuthState({
//     //         isLogged: false,
//     //         userName: "None user",
//     //     });

//     // };

//     const value = {
//         authState,
//         setAuthState,
//     }

//     return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
// }

