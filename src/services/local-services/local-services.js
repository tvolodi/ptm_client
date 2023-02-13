import axios from "axios";

const localServiceUrl = "http://localhost:8991";

export const setLocalServiceTokens = async (accessToken, refreshToken) => {

    const requestBody = 
    {
        AccessToken: accessToken,
        RefreshToken: refreshToken
    };

    console.log("Before set local service tokens");
    
    const postResponse = await axios.post(localServiceUrl + "/set-tokens", requestBody);
}

export const setTaskData = async (projectId, taskId) => {

    const postResponse = await axios.post(localServiceUrl + "/task-data", 
        {
            "ProjectId": projectId,
            "TaskId": taskId
        }
    );
    console.log("postResponse from setTaskData", postResponse)
}

export const doScreenshot = async () => {
    const getResponse = await axios.get(localServiceUrl + "/screenshot");
}

