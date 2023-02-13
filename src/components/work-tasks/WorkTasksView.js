import React, { useState, useEffect} from "react";

import { Splitter, SplitterPanel } from "primereact/splitter";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

import WorkTaskDetailView from "./WorkTaskDetailView";

import getEntityItems from "../../services/base-entity-service";

import { setTaskData, doScreenshot } from "../../services/local-services/local-services";

const WorkTasksView = () => {

    const entityName = "WorkTask";

    const [detailsMode, setDetailsMode] = useState("VIEW"); // ADD UPDATE DELETE
    const [listItems, setListItems] = useState([]);
    const [selectedListItem, setSelectedListItem] = useState({});
    const [workItem, setWorkItem] = useState({});
    const [isToRefresh, setIsToRefresh] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const getList = () => {
        const options = {
            "EntityName": entityName
        }
        getEntityItems(options).then((items) => {
            setListItems(items);

            if(items.length > 0){
                setWorkItem(items[0]);
                setSelectedListItem(items[0]);
                setDetailsMode("VIEW");
            }
            setIsToRefresh(false);
        });
    }

    useEffect(() => {
        getList();
    }, []);



    const addItem = () => {
        setWorkItem({
            key: "",
            description: "",
            project: {},
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
        setDetailsMode("VIEW");
    };

    const onRowSelect = (event) => {
        setSelectedListItem(event.data);
        // setWorkItem(Object.assign({}, event.data));
        let newItem = {};
        newItem.description = event.data.description;
        newItem.id = event.data.id;
        newItem.project = {};
        newItem.project.name = event.data.project.name;
        setWorkItem(newItem);
    };

    const onRowUnselect = (event) => {
    };

    const onIndexTemplate = (data, props) => {
        return props.rowIndex + 1;
    }

    // Set task info in local application server
    const setLocalTaskData = async() => {
        await setTaskData(selectedListItem.project.id, selectedListItem.id);
    }

    const sendScreenshot = async () => {
        await doScreenshot();
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
            <Button
                label="Set active"
                className="mr-2"
                onClick={setLocalTaskData}
            />
            <Button
                label="Screenshot"
                className="mr-2"
                onClick={sendScreenshot}
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
                    <Column field="description" header="Name"></Column>
                </DataTable>
            </SplitterPanel>
            <SplitterPanel>
                {workItem.id != null 
                    ? 
                        <WorkTaskDetailView 
                            key={workItem.id} 
                            item={workItem}
                            mode={detailsMode}
                            getList={getList}
                            setSelectedListItem={setSelectedListItem}
                        >    
                        </WorkTaskDetailView>
                    :   <>
                            <h3>No Work Task Details</h3>
                        </>
                }
            </SplitterPanel>
        </Splitter>

    </>
    );
};

export default WorkTasksView;