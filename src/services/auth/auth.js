import axiosClient from "../axios_client";

// Login method.
// (userLogin, password) => success/error.
const logIn = async (userLogin, password) => {

    try {
        let response = await axiosClient.post('account/login', {
            "userNameOrEmailAddress": {userLogin},
            "password": {password},
            "rememberMe": true
        });
        return response.data;

    } catch (error) {
        console.log("error from logIn", error)
        console.log("error.response", error.response)
        return {result: error.response.status};
    }

};

// 
export const getMyProfile = async () => {
    const response = await axiosClient.get('account/my-profile');
    return response;
};

// 
export const logOut = async () => {
    let response = await axiosClient.get('account/logout');
};

export default logIn;