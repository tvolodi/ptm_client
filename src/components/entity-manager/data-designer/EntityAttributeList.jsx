import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import DomainEntityAttribute from "../../../DomainModel/DataDesigner/DomainEntityAttribute";
import { PanelOperMode } from "../../../base/panel-oper-mode";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";

const EntityAttrubuteList = (params) => {

    console.log("params from EntityAttrubuteList", params);
    console.log("params.entitySelectedItemState.node.attributes", params.entitySelectedItemState.node.attributes);

    const[deleteDialogVisibleState, setDeleteDialogVisibleState] = useState(false);
    const toastRef = useRef(null);

    const itemListMenubarModel = [
        {
            // Add new item
            icon: 'pi pi-fw pi-plus',
            command: (event) => {
                const newSecondaryItem = new DomainEntityAttribute();
                params.setSecondarySelectedItemState(newSecondaryItem);
                params.setSecondaryItemDetailsModeState(PanelOperMode.ADD);
            }, // addItem(event),
        },
        {
            icon: 'pi pi-fw pi-file-edit',
            command: (event) => {
                params.setSecondaryItemDetailsModeState(PanelOperMode.UPDATE);
            },
        },
        {
            icon: 'pi pi-fw pi-minus',
            command: (event) => {
                //setDeleteDialogVisibleState(true);
            },
        },
        {
            icon: 'pi pi-fw pi-refresh',
            command: (event) => {
                // params.refreshEntityList();
            },
        },
    ];
    const itemListToolbarEndPart = <InputText placeholder="Select" type="text" className="w-full"></InputText>    

    const acceptItemDeletion = () => {
    }

    const cancelItemDeletion = () => {
        toastRef.current.show({ severity: 'warn', summary: 'Cancelled', detail: 'Cancelled item deletion', life: 3000 })
    };

    return (
        <>
            <Menubar
                model={itemListMenubarModel}
                end={itemListToolbarEndPart}
                >
            </Menubar>
            <DataTable 
                size="small"
                showGridlines={true}
                stripedRows={true}
                paginator={true}
                rows={50}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
                sortMode="multiple"
                selectionMode="single"
                selection={params.secondarySelectedItemState}
                onSelectionChange={(e) => {
                    params.setSecondarySelectedItemState(e.value);
                    params.setSecondarySelectedItemIdState(e.value.id);
                }}
                value={params.entitySelectedItemState.node.attributes}
            >
                <Column></Column>
                <Column></Column>
            </DataTable>
            <Toast ref={toastRef} />
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
};

export default EntityAttrubuteList;