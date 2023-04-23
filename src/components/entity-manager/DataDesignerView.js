import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Toolbar } from "primereact/toolbar";

const DataDesignerView = () => {

    const entityListToolBarModel = [
        {
            icon: 'pi pi-fw pi-plus',
            // label: 'Projects',
            command: (event) => {
                console.log("Projects button pressed");
                // setMainViewContent("projects")
                // navigate("/projects")
            },

        },
        {
            icon: 'pi pi-fw pi-file-edit',
            // label: 'Projects',
            command: (event) => {
                console.log("Projects button pressed");
                // setMainViewContent("projects")
                // navigate("/projects")
            },
        },
        {
            icon: 'pi pi-fw pi-minus',
            // label: 'Projects',
            command: (event) => {
                console.log("Projects button pressed");
                // setMainViewContent("projects")
                // navigate("/projects")
            },
        },
        {
            icon: 'pi pi-fw pi-refresh',
            // label: 'Projects',
            command: (event) => {
                console.log("Projects button pressed");
                // setMainViewContent("projects")
                // navigate("/projects")
            },
        },
    ];
    const entityListToolbarEndPart = <InputText placeholder="Select" type="text" className="w-full"></InputText>

    const attributeListToolbarModel = [
        {
            icon: "pi pi-plus",
            command: (event) => {

            },
        },
        {
            icon: "pi pi-file-edit",
            command: (event) => {

            },
        },
        {
            icon: "pi pi-minus",
            command: (event) => {

            },
        },
    ];

    return (
        <>

            <Splitter style={{ height: '300px' }}>
                <SplitterPanel>
                    <Menubar model={entityListToolBarModel} end={entityListToolbarEndPart}></Menubar>
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
                    <p>Entity List</p>
                </SplitterPanel>
                <SplitterPanel>
                    <p>Entity details Panel</p>
                </SplitterPanel>
                <SplitterPanel>
                    <Menubar model={attributeListToolbarModel}></Menubar>
                    <DataTable size="small"
                        showGridlines={true}
                        stripedRows={true}
                        paginator={true}
                        rows={20}
                        rowsPerPageOptions={[10, 20, 50, 100]}
                        sortMode="multiple"
                    >
                        <Column field="name" header="Name" sortable></Column>
                        <Column field="dataType" header="Data Type" sortable></Column>
                        <Column field="description" header="Description" sortable></Column>
                    </DataTable>
                    <p>Attribute list panel</p>
                </SplitterPanel>
                <SplitterPanel>
                    <p>Attribute details panel</p>
                </SplitterPanel>
            </Splitter>
        </>
    )
};

export default DataDesignerView;