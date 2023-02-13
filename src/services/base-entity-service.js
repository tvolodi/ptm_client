import axiosClient, {doAxiosRequest} from "./axios_client";

/* params:
//  options
// const options = {
        "EntityName": "Project", - entity name
//     "Filter": "abc", - search "abc" by several fields on backend
//     "Sorting": "Name DESC", - sort by "Name" field in descended order.
//     "SkipCount": 0,
//     "MaxResultCount": 9999999999
// }
*/
const getEntityItems = async (options) => {

    console.log('getEntityItems options', options);
    if(options == null){
        options = {};
    }

    const response = await doAxiosRequest("GET", options.EntityName, {});

    return response.data;
};

/*

*/
export const insertItem = async (entityName, item) => {

    try {
        
        let response = await doAxiosRequest("POST", entityName, item);

        return response;

    } catch (error){

        console.log("error from insertItem", error)
        console.log("error.response", error.response)
        return {result: error.response.status};
    }
};

export const updateItem = async (entityName, item) => {

    try {
        
        let response = await doAxiosRequest("PUT", entityName, item);

        return response;

    } catch (error){

        console.log("error from updateItem", error)
        console.log("error.response", error.response)
        return {result: error.response.status};
    }
};

export const deleteItem = async (entityName, item) => {

    try {
        
        item.isDeleted = true;

        let response = await doAxiosRequest("PUT", entityName, item);

        return response;

    } catch (error){

        console.log("error from deleteItem", error)
        console.log("error.response", error.response)
        return {result: error.response.status};
    }
};

export default getEntityItems;