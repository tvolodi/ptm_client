import { Column } from "primereact/column";
import { ConfirmDialog} from "primereact/confirmdialog";
import { DataTable } from "primereact/datatable";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

import { graphql } from "babel-plugin-relay/macro";

import DomainEntity from "../../DomainModel/DataDesigner/DomainEntity";
import { PanelOperMode } from "../../base/panel-oper-mode";
import { useRef, useState } from "react";
import { useMutation } from "react-relay";

// import { EntityListViewFragment } from "../../__generated__/EntityListViewFragment.graphql";

const EntityListViewFragment = graphql`
    fragment EntityListViewFragment on DomainEntitiesConnection {
        edges {
            node {
                ...EntityItemDetailsFragment
            }
        }
    }
`;

// mutation{
//     deleteDomainEntities(input: {
//         idList: [
//             46, 47
//         ]
//     }
//     ) {
//         long
//     }
// }    

const EntityListViewMutation = graphql`
    mutation EntityListViewMutation(
        $idList: [String!]!,
    ) { deleteDomainEntities ( input: {
            idList: $idList
        }
    )
    {
        long
    }
}
`;

export default function EntityListView (params) {
    
    const [commitDeleteMutation, deleteMutationInFlight] = useMutation(EntityListViewMutation);

    const addItem = (event) => {
        const newItem = {
            node: new DomainEntity(),
        };

        console.log("newItem", newItem)

        params.setEntitySelectedItemState(newItem);
        params.setEntityDetailsModeState(PanelOperMode.ADD);
    };

    const entityItemListMenubarModel = [
        {
            icon: 'pi pi-fw pi-plus',
            command: (event) => addItem(event),
        },
        {
            icon: 'pi pi-fw pi-file-edit',
            command: (event) => {
                params.setEntityDetailsModeState(PanelOperMode.UPDATE);
            },
        },
        {
            icon: 'pi pi-fw pi-minus',
            command: (event) => {
                setDeleteDialogVisibleState(true);
            },
        },
        {
            icon: 'pi pi-fw pi-refresh',
            command: (event) => {
                params.refreshEntityList();
            },
        },
    ];
    const entityItemListToolbarEndPart = <InputText placeholder="Select" type="text" className="w-full"></InputText>

    // const [tableData, setTableData] = useState(params.domainEntities.domainEntities.edges);
    const tableData = params.domainEntities.domainEntities.edges;
    
    // let selectedItem = tableData.find(item => {
    //     const result = item.node.id === params.entitySelectedItemIdState;
    //     return result;
    // })

    // useEffect(() => {

    // }, [
    //     entityListLoadQuery, loadModuleListQuery
    // ]);

    // Entity item deletion confirm dialog related
    const [deleteDialogVisibleState, setDeleteDialogVisibleState] = useState(false);
    const toastRef = useRef(null);

    const acceptItemDeletion = () => {
        toastRef.current.show({severity: 'info', summary: 'Confirmed', detail: 'Deleting item', life: 3000});
        
        console.log("params.entitySelectedItemState.node.id", params.entitySelectedItemState.node.id)
        
        commitDeleteMutation({
            variables: {
                idList: [params.entitySelectedItemState.node.id],
            },
            onCompleted: (response) => {

                console.log("Delete mutaion result:", response);

                // params.setEntitySelectedItemIdState(response.domainEntity.domainEntity.id);

                params.refreshEntityList();
                params.setEntityDetailsModeState(PanelOperMode.VIEW);

                console.log("PanelOperMode.VIEW", PanelOperMode.VIEW)
                console.log("params.setEntityDetailsMode", params.setEntityDetailsModeState)
            },
        });
    };

    const cancelItemDeletion = () => {
        toastRef.current.show({ severity: 'warn', summary: 'Cancelled', detail: 'Cancelled item deletion', life: 3000 })
    };

    return(
        <>
            <Menubar model={entityItemListMenubarModel} end={entityItemListToolbarEndPart}></Menubar>
            {/* <p>Selected Item state {JSON.stringify(params.entitySelectedItemState)}</p>
            <p>Selected Item {JSON.stringify(params.selectedItem)}</p> */}
            <DataTable size="small"
                showGridlines={true}
                stripedRows={true}
                paginator={true}
                rows={50}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                sortMode="multiple"
                selectionMode="single"
                selection={params.entitySelectedItemState}
                onSelectionChange={(e) => {
                    params.setEntitySelectedItemState(e.value);
                    params.setEntitySelectedItemIdState(e.value.id);
                }}
                value={tableData}
            >
                <Column field="node.id" header="Id" sortable></Column>
                <Column field="node.name" header="Name" sortable></Column>
                <Column field="node.pluralName" header="Plural Name" sortable></Column>
                <Column field="node.module.name" header="Module" sortable></Column>
                <Column field="node.description" header="Description" sortable></Column>
            </DataTable>
            <Toast ref={toastRef}/>
            <ConfirmDialog 
                visible={deleteDialogVisibleState} 
                onHide={() => setDeleteDialogVisibleState(false)}
                message={"Delete item?"}
                header="Confirm!"
                icon="pi pi-exclamation-triangle"
                accept={acceptItemDeletion}
                reject={cancelItemDeletion}
            />
        </>

    );
}

