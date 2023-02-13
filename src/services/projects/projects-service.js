import axiosClient from "../axios_client";

// params:
//  options
// const options = {
//     "Filter": "abc", - search "abc" by several fields on backend
//     "Sorting": "Name DESC", - sort by "Name" field in descended order.
//     "SkipCount": 0,
//     "MaxResultCount": 9999999999
// }

const documentType = 'Project';

const getDocuments = async (options) => {

    // const params = {
    //     Filter: options.filter,
    //     Sorting: options.Sorting,
    //     SkipCount: options
    // };

    console.log('getDocuments options', options);
    if(options == null){
        options = {};
    }

    let response = await axiosClient.get(documentType);

    console.log(`get ${documentType} response`, response)

    return response.data.items;
};

export const insertDocument = async (documentItem) => {

    console.log("documentItemDto", documentItem)

    try {
        
        let response = await axiosClient.post(documentType, documentItem);

        console.log("response", response);

        return response;

    } catch (error){

        console.log("error from insertUser", error)
        console.log("error.response", error.response)
        return {result: error.response.status};
    }
};

export default getUsers;