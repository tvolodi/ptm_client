import { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../hooks/AuthContext";
import useAuth from "../hooks/useAuth";
import { g_login_globals } from "../globals";

const ProtectedRoute = ({ children }) => {
    
    console.log("children from ProtectedRoute", children)

    let { authState, setAuthState } = useContext(AuthContext);

    useEffect(() => {

    });

    console.log("authState from protectedRoute", authState)
    
    if( !authState.isLogged ){
        return <Navigate to="login" replace="true"/>;
    }
    // else {
    //     return <Navigate to="/" replace="true"/>;
    // }

    return children;
};

export default ProtectedRoute;