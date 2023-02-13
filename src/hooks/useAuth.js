import React, {useContext} from "react";

import { AuthContext } from "./AuthContext";

const useAuth = () => {

    const {authState, setAuthState} = useContext(AuthContext);
    
    console.log("authState", authState)

    return useContext(AuthContext);
}

export default useAuth;