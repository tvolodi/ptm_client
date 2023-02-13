import axios from "axios";
import KeycloakService from "./auth/keycloak";

const axiosClient = axios.create({
    baseURL: "http://localhost:5098",
});

export const doAxiosRequest = async (methodType, url, requestBody) => {

    let axiosCall = null;

    switch (methodType) {
        case 'GET': 
            // axiosCall = () =>{

            const getResponse = await axiosClient.get(url, {
                headers:{
                    "Authorization" : `Bearer ${KeycloakService.GetToken()}`,
                }
                });
            
            return getResponse;

            break;

        case "POST":
            const postResponse = await axiosClient.post(url, requestBody, {
                headers: {
                    "Authorization" : `Bearer ${KeycloakService.GetToken()}`,
                }
            });

            console.log("response from doAxiosRequest post", postResponse)

            return postResponse;
            break;

        case "PUT":
            const putResponse = await axiosClient.put(url, requestBody, {
                headers: {
                    "Authorization" : `Bearer ${KeycloakService.GetToken()}`,
                }
            });

            return putResponse;
            break;

        case "DELETE":
            const deleteResponse = await axiosClient.delete(url, requestBody, {
                headers: {
                    "Authorization" : `Bearer ${KeycloakService.GetToken()}`,
                }
            });

            return deleteResponse;
            break;              
        
    }
    KeycloakService.UpdateToken(axiosCall);
}

export default axiosClient;