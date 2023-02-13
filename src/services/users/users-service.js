import axiosClient from "../axios_client";

// params:
//  options
// const options = {
//     "Filter": "abc", - search "abc" by several fields on backend
//     "Sorting": "Name DESC", - sort by "Name" field in descended order.
//     "SkipCount": 0,
//     "MaxResultCount": 9999999999
// }

const getUsers = async (options) => {

    // const params = {
    //     Filter: options.filter,
    //     Sorting: options.Sorting,
    //     SkipCount: options
    // };

    console.log('getUsers options', options);
    if(options == null){
        options = {};
    }

    let response = await axiosClient.get('identity/users');

    console.log('getUsers response', response)

    return response.data.items;
};

export const insertUser = async (userItem) => {

    console.log("userItemDto", userItem)

    try {
        let response = await axiosClient.post('identity/users', userItem);

        console.log("response", response);

        return response;
    } catch (error){
        console.log("error from insertUser", error)
        console.log("error.response", error.response)
        return {result: error.response.status};
    }
    
};

export default getUsers;