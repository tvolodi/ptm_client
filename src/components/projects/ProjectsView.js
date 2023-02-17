import React, { useState, useEffect} from "react";

import { Splitter, SplitterPanel } from "primereact/splitter";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

import ProjectDetailView from "./ProjectDetailView";

import getEntityItems from "../../services/base-entity-service";

import { gql, useQuery } from "@apollo/client";

import gqlClient, { callGqlQuery } from "../../services/gql-client";

let selectedItem = null;
let updateCounter = 0;

const ProjectsView = () => {

    console.log("Start of ProjectsView")

    const entityName = "Project";

    
    const Get_Projects = gql`
        {
            project { id name }
        }
    `;

    const [detailsMode, setDetailsMode] = useState("VIEW"); // ADD UPDATE DELETE
    const [listItems, setListItems] = useState([]);
    const [selectedListItem, setSelectedListItem] = useState({});
    const [workItem, setWorkItem] = useState({});
    const [isToRefresh, setIsToRefresh] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { loading, error, data, refetch } = useQuery(Get_Projects, {
        client: gqlClient,
        onCompleted: response => {

            console.log("response from useQuery", response);

            setListItems(response.project);

            if(response.project.length > 0) {
                
                console.log("data.project.length", response.project.length);
                console.log("data.project[0]", response.project[0]);
        
                if (selectedItem == null ) {
                    setWorkItem(response.project[0]);
                    setSelectedListItem(response.project[0]);
                } else {
                    updateCounter++;
                    setWorkItem(selectedItem);
                    setSelectedListItem(selectedItem);
                }

                setDetailsMode("VIEW2");
        
                console.log("selected item from get entity items", selectedListItem);  
            }

            setIsToRefresh(false);
        }
    })

    console.log("data from ProjectsView", data)

    console.log("refetch", refetch)

    

    if(loading) {
        return "Loading...";        
    } 
    
    if (error){
        return error;
    }

    // setListItems(data.project);

    if(data.project.length > 0) {
        console.log("data.project.length", data.project.length);
        console.log("data.project[0]", data.project[0]);

        // setWorkItem(data.project[0]);
        // setSelectedListItem(data.project[0]);
        // setDetailsMode("VIEW2");

        console.log("selected item from get entity items", selectedListItem);            
    }
    // setIsToRefresh(false);

    // callGqlQuery(Get_Projects);
    // gqlClient.query({
    //     query: Get_Projects,
    // }).then( (result) => console.log("gql.result:", result));

    // const {loading, error, data } = useQuery(Get_Projects, );



    // const getList = () => {

    //     console.log("data from useQuery", data);
        



    //     console.log("Get_Projects", Get_Projects);

    //     console.log("callGqlQuery", callGqlQuery)

    //     callGqlQuery(Get_Projects).then( (result) => {

    //         console.log("result from callGqlQuery call", result);

    //         setListItems(result.data.project);


    //         // const resultArr = [];
    //         // result.data.project.forEach(element => {            
    //         //     resultArr.push({
    //         //         Id: element.id, 
    //         //         Name: element.name
    //         //     });
    //         // });
    //         // setListItems(resultArr);
    //     }
    //     )
    // }

    // const getList = () => {

    // }

    // // const getList = () => {
    // //     const options = {
    // //         "EntityName": entityName
    // //     }
    // //     getEntityItems(options).then((items) => {
    // //         setListItems(items);

    // //         console.log('listItems from getEntityItems', items);

    // //         if(items.length > 0){

    // //             console.log("items.length", items.length);
    // //             console.log("items[0]", items[0]);

    // //             setWorkItem(items[0]);
    // //             setSelectedListItem(items[0]);
    // //             setDetailsMode("VIEW");

    // //             console.log("selected item from get entity items", selectedListItem);                
    // //         }
    // //         setIsToRefresh(false);
    // //     });
    // // }

    // // useEffect(() => {
    // //     console.log("from useEffect")
    // //     getList();
    // // }, []);



    const addItem = () => {
        setWorkItem({
            key: "",
            name: "",
        });
        setDetailsMode("ADD");
    }

    const updateItem = () => {
        setWorkItem(Object.assign({}, selectedListItem));
        setDetailsMode("UPDATE");
    }

    const deleteItem = () => {
        setWorkItem(Object.assign({}, selectedListItem));
        setDetailsMode("DELETE");
    }

    const onSelChange = (event) => {
        console.log("selectedUser from onSelChange", selectedListItem);
        console.log("event from onSelChange", event);
        setDetailsMode("VIEW");
    };

    const onRowSelect = (event) => {
        console.log("selectedUser from onRowSelect", selectedListItem);
        console.log("event from onRowSelect", event);
        setSelectedListItem(event.data);
        setWorkItem(Object.assign({}, event.data));
        selectedItem = event.data;
    };

    const onRowUnselect = (event) => {
        console.log("selectedUser from onRowUnselect", selectedListItem);
        console.log("event from onRowUnselect", event);
    };

    const onIndexTemplate = (data, props) => {
        return props.rowIndex + 1;
    }

    const leftToolbarSide = (
        <>
            {/* <h5 className="mr-2">Projects </h5> */}
            <Button label="Add" 
                    icon="pi pi-plus" 
                    className="mr-2"
                    onClick={addItem}
            ></Button>
            <Button 
                label="Update" 
                icon="pi pi-pencil" 
                className="mr-2"
                onClick={updateItem}                
            />
            <Button 
                label="Delete" 
                icon="pi pi-minus" 
                className="mr-2"
                onClick={deleteItem}
            />
        </>
    );

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    return(
    <>
        <Toolbar left={leftToolbarSide}></Toolbar>
        <Splitter style={{heigt: '300px'}}>
            <SplitterPanel>
                <DataTable  
                    showGridlines 
                    responsiveLayout="scroll"
                    paginator
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                    rows={10}
                    rowsPerPageOptions={[10, 20, 40]}
                    // paginatorLeft={paginatorLeft}
                    // paginatorRight = {paginatorRight}
                    size="medium" 
                    value={listItems}
                    selectionMode="single"
                    selection={selectedListItem}
                    dataKey="id"
                    onSelectionChange={(event) => onSelChange(event)}
                    onRowSelect={onRowSelect}
                    onRowUnselect={onRowUnselect}
                >
                    <Column field="Index" header="#" body = {onIndexTemplate}></Column>
                    <Column field="name" header="Name"></Column>
                </DataTable>
            </SplitterPanel>
            <SplitterPanel>
                {workItem.name != null 
                    ? <>
                        workItem.id: {workItem.id}
                        detailsMode: { detailsMode } 
                        updateCounter: { updateCounter }
                        <ProjectDetailView 
                            key={String(workItem.id) + String(detailsMode) + String(updateCounter)} 
                            item={workItem}
                            mode={detailsMode}
                            refetch={refetch}
                            setSelectedListItem={setSelectedListItem}
                        >    
                        </ProjectDetailView>
                        </>
                    : <h3>No Project Details</h3>
                }
            </SplitterPanel>
        </Splitter>

    </>
    );
};

export default ProjectsView;