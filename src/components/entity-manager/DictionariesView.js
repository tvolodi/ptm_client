import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { graphql } from 'relay-runtime';
import { useQueryLoader, usePreloadedQuery } from "react-relay";


const DictionariesViewQuery = graphql`
    query DictionariesViewQuery {
        modules (
            first: 10 
            order: [
            { name: DESC}
            ]
        )
        {    
            edges{
            cursor
            node {
                id
                code
                name
            }
            }
            pageInfo 
            {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
            }
            totalCount
        }
    }
`;

const DictionariesView = () => {



    const entityItemListToolBarModel = [
        {
            icon: 'pi pi-fw pi-plus',
            command: (event) => {

            },

        },
        {
            icon: 'pi pi-fw pi-file-edit',
            command: (event) => {

            },
        },
        {
            icon: 'pi pi-fw pi-minus',
            command: (event) => {
            },
        },
        {
            icon: 'pi pi-fw pi-refresh',
            command: (event) => {
            },
        },
    ];
    const entityItemListToolbarEndPart = <InputText placeholder="Select" type="text" className="w-full"></InputText>

    return (
        <>
            <Splitter>
                <SplitterPanel>
                    <DataTable size="small"
                        showGridlines={true}
                        stripedRows={true}
                        paginator={true}
                        rows={20}
                        rowsPerPageOptions={[10, 20, 50, 100]}
                        sortMode="multiple"
                    >
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="module" header="Module" sortable></Column>
                        <Column field="description" header="Description" sortable></Column>
                    </DataTable>
                    <p>Entity List Panel</p>
                </SplitterPanel>
                <SplitterPanel>
                    <Menubar model={entityItemListToolBarModel} end={entityItemListToolbarEndPart}></Menubar>
                    <DataTable size="small"
                        showGridlines={true}
                        stripedRows={true}
                        paginator={true}
                        rows={20}
                        rowsPerPageOptions={[10, 20, 50, 100]}
                        sortMode="multiple"
                    >
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                    </DataTable>
                    <p>Entity Item List Panel</p>
                </SplitterPanel>
                <SplitterPanel>
                    <p>Entity Item Details Panel</p>
                </SplitterPanel>

            </Splitter>
        </>
    );
}

export default DictionariesView;