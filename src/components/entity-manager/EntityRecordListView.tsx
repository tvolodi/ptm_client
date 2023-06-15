import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { Splitter, SplitterPanel } from "primereact/splitter";
import EntityItemDetails from "./EntityItemDetails";

const EntityRecordListView = () => {

    const entityItemListToolBarModel = [
        {
            icon: 'pi pi-fw pi-plus',
            command: (event: any) => {

            },

        },
        {
            icon: 'pi pi-fw pi-file-edit',
            command: (event: any) => {

            },
        },
        {
            icon: 'pi pi-fw pi-minus',
            command: (event: any) => {
            },
        },
        {
            icon: 'pi pi-fw pi-refresh',
            command: (event: any) => {
            },
        },
    ];
    const entityItemListToolbarEndPart = <InputText placeholder="Select" type="text" className="w-full"></InputText>

    return(
        <>
            <Splitter>
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
                    <EntityItemDetails></EntityItemDetails>
                </SplitterPanel>
            </Splitter>
        </>
    );
}

export default EntityRecordListView;