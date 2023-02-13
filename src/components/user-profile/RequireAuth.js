import React, { Children } from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../contexts/AuthContextProvider";

const RequireAuth= ({children}) => {
    const auth = useAuth();
    const location = useLocation();

    console.log("From RequireAuth");
    
    if(!auth.authState.isLogged){        

        return(
            <>
                <p>RequireAuth</p>
                <Navigate to="/login" state={{from: location }} replace />
            </>
        );
    }
    
    return children;
}

export default RequireAuth;