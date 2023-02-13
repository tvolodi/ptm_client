import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import useAuth from "../../contexts/AuthContextProvider";

import logIn, { getMyProfile } from "../../services/auth/auth";
import useMainViewContext from "../../layout/MainViewContext";

// Component to accept user login and password 
// and login in on the application server
// + load user profile from server

// Processing next cases:
// Case 1. User not logged on client and not logged on server. 
//      Action: Try to login. If success - then logged. Simple :)
//              + Load user profile
// Case 2. User not logged on client but logged on server 
//      (e.g. after client termination session)
//      Action: Try to login. If not success - still try to load profile.
//              If profile loaded - OK.
const UserLoginView = () => {

    // const navigate = useNavigate();

    let isLogged = false;

    const {authState, setAuthState, signIn, getMyProfile } = useAuth();

    const mainViewContext = useMainViewContext();

    console.log("authState from UserLoginView", authState);

    const [password, setPassword ] = useState("");

    // Try to login
    const onLoginClick = async () => {
        const response = await signIn(authState.userLogin, password);
        
        console.log("response", response);

        mainViewContext.setMainViewState((prev) => {
            return {
                ...prev, 
                currentView: "projects",
            }
        });
        
        
        // Try to login
        // if( response.result == 1) {
            
        //     // debug
        //     console.log("response from login call", response);

        //     isLogged = true;

        //     // setAuthState((prev) => {
        //     //     return {...prev, isLogged: true,};
        //     // });
        //     // navigate("/");
        // } 
        
        // // Try to get user profile 
        // const profileResponse = await getMyProfile();

        // // Debug
        // console.log("response from get profile", profileResponse)

        // if(profileResponse.status == 200){

        //     // setAuthState((prev) => {

        //     //     //Debug
        //     //     console.log("from setAuthState", prev);

        //     //     return {
        //     //             ...prev, 
        //     //             isLogged:true, 
        //     //             userLogin: profileResponse.data.userName, 
        //     //             userName: profileResponse.data.name
        //     //         };
        //     // });

        //     // Debug
        //     console.log("setAuthState from UserLoginView", setAuthState)

        //     setAuthState({
        //         isLogged: true,
        //         userName: "admin",
        //         userLogin: "admin",                
        //     });
            
        //     navigate("/");

        // }

    };


    return (
        <>                    
            <p>User Login View</p>
            <div  className="card">
                <span>
                    <h5>User Name</h5>
                    <InputText
                        id="user_login_input"
                        value={authState.userLogin} 
                        onChange={(e) => setAuthState((prev) => {                                            
                                                    return {
                                                            ...prev, 
                                                            userLogin: e.target.value,
                                                    }
                                                }
                            )
                            }
                    ></InputText>
                {/* <label htmlFor="user_login_input">User Login</label> */}                
                </span>
                <span>
                    <h5>Password</h5>
                    <Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        toggleMask
                    ></Password>
                </span>
            </div>
            <p></p>
            <div className="mb-2">
                <span>
                    <Button label="Login" icon="pi pi-check" onClick={onLoginClick}></Button>
                </span>
                
            </div>
        </>
    );
}

export default UserLoginView;