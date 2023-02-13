import React from "react";

import useAuth from "../../contexts/AuthContextProvider";
import Layout from "../../layout/Layout";
import { MainViewContextProvider } from "../../layout/MainViewContext";

const AuthStatus = () => {
    const auth = useAuth();
    // const navigate = useNavigate();

    console.log("auth from AuthStatus", auth)

        return (
            <>
                <p>Layout from AuthStatus</p>
                <MainViewContextProvider>
                    <Layout></Layout>
                </MainViewContextProvider>
                
            </>
        );
    // }
}

export default AuthStatus;