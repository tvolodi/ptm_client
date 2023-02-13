import React, { useEffect, useState } from "react";

import { DataTable } from 'primereact/datatable';
import { Menubar } from "primereact/menubar";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Column } from "primereact/column";

import UserDetailView from "./UserDetailView";

import getUsers from "../../services/users/users-service";

const UsersView = () => {

    const listMenuBarModel = [
        {
            label: "Add",
            icon: "pi pi-fw pi-plus-circle",
            command: (event) => {
                addItem();
            }
        },
        {
            label: "Edit",
            icon: "pi pi-fw pi-file-edit",
        },
        {
            label: "Delete",
            icon: "pi pi-fw pi-minus-circle",
        },
        {
            label: "Refresh",
            icon: "pi pi-fw pi-sync",
            command: (event) => {
                getUserList();
                // navigate("/users")
            },
        }
    ]    

    const [userItems, setUserItems] = useState([]);

    const [selectedUser, setSelectedUser] = useState({});

    const [detailsMode, setDetailsMode] = useState("VIEW"); // ADD UPDATE DELETE

    const addItem = () => {
        setSelectedUser({
            key: "",
            userName: "",
            name: "",
            email: "",
            password: "",
            isActive: true,
        });
        setDetailsMode("ADD");
    }

    const getUserList = () => {
        getUsers().then((items) => {
            setUserItems(items);

            console.log('userItems from getUserList', items);

            if(items.length > 0){

                console.log("items.length", items.length);
                console.log("items[0]", items[0]);

                setSelectedUser(items[0]);

                console.log("selectedUser from getUserList", selectedUser);                
            }
        });
    }

    const testUsers = [
        {
            name: "Some User Name",
            login: "some_user",
            role: "some user role",
        },
    ];

    useEffect(() => {
        getUserList();
    }, []);

    // useEffect(   
    //     setUserItems(getUsers())
    // );

    const rowNumberTmpl = (rowData, column) => {
        return (
            column.rowIndex + 1 + ""
        );
    };
    
    const userItem = {
        name: "Some name",
        userName: "Some user name",
        isActive: true,
        isDeleted: false,
    }

    const onSelChange = (event) => {
        console.log("selectedUser from onSelChange", selectedUser);
        console.log("event from onSelChange", event);
    };

    const onRowSelect = (event) => {
        console.log("selectedUser from onRowSelect", selectedUser);
        console.log("event from onRowSelect", event);
    };

    const onRowUnselect = (event) => {
        console.log("selectedUser from onRowUnselect", selectedUser);
        console.log("event from onRowUnselect", event);
    };

    return(
        <>
            <Splitter layout="horizontal">
                <SplitterPanel minSize={5}>
                    <Menubar model={listMenuBarModel} end={<p>Search</p>}/>
                    <DataTable 
                        size="medium" 
                        value={userItems}
                        selectionMode="single"
                        selection={selectedUser}
                        dataKey="id"
                        onSelectionChange={(event) => onSelChange(event)}
                        onRowSelect={onRowSelect}
                        onRowUnselect={onRowUnselect}
                    >
                        <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                        <Column header="#" body={rowNumberTmpl}/>
                        <Column field="name" header="Name" sortable={true}/>
                        <Column field="userName" header="User Name"></Column>
                        <Column field="isActive" header="Is Active"></Column>
                        <Column field="isDeleted" header="Is Deleted"></Column>
                    </DataTable>
                </SplitterPanel>
                <SplitterPanel>
                        {selectedUser.userName != null 
                        ?   <UserDetailView 
                                key={selectedUser.id} 
                                userItem={selectedUser}
                                mode={detailsMode}
                            >    
                            </UserDetailView>
                        :   <div>
                            <h3>No User Details</h3>
                            </div>
                        }
                        
                
                </SplitterPanel>
            </Splitter>
        </>
    );
}

export default UsersView;