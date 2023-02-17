import React from "react";

import { Toolbar } from "primereact/toolbar";
import { Splitter, SplitterPanel } from "primereact/splitter";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

import gqlClient from "../../services/gql-client";


const ProjectGridView = (props) => {

    const { loading, error, data} = useQuery(Get_Projects, {
        client: gqlClient,
    })

    if (loading){
        return "Loading...";
    }

    if (error) {
        return error;
    }

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
                        value={data.project}
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
                        ? 
                        <>
                        </>
                            // <ProjectDetailView 
                            //     key={workItem.id + detailsMode} 
                            //     item={workItem}
                            //     mode={detailsMode}
                            //     getList={getList}
                            //     setSelectedListItem={setSelectedListItem}
                            // >    
                            // </ProjectDetailView>
                        : <h3>No Project Details</h3>
                    }
                </SplitterPanel>
            </Splitter>
    
        </>
    );

}

export default ProjectGridView;


