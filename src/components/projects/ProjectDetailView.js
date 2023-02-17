import React, { useState, useEffect } from "react";
import { Formik, useFormik } from 'formik';
import {gql, useMutation } from '@apollo/client';
import gqlClient from "../../services/gql-client";


import { Checkbox } from "primereact/checkbox";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';
import { Button } from "primereact/button";
import { RadioButton } from 'primereact/radiobutton';
import { Password } from "primereact/password";

import { deleteItem, insertItem, updateItem } from "../../services/base-entity-service";

const entityName = "Project";

const PROJECT_MUTATION = gql`
    mutation project ($project: ProjectInput!) {
        project(project: $project) {
            project{
                id
                name                
            } 
        }
    }
`;

const ProjectDetailView = (props) => {

    console.log("props from ProjectDetailView", props)
    console.log("props.listItem from ProjectDetailView", props.item)

    const entityItem = props.item;

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState(props.item);  
    const [isFormReadOnly, setIsFormReadOnly] = useState(() => {
        switch (props.mode){
            case "ADD":
                return false;
                break;
            case "UPDATE":
                return false;
                break;
            case "VIEW":
                return true;
                break;
        }
    });

    const [updateProject, {data, loading, error}] = useMutation(PROJECT_MUTATION, {
        client: gqlClient,
    });

    const formik = useFormik({
        initialValues: {
            name: formData.name,
            // userName: formData.userName,
            // email: formData.email,
            // isActive: formData.isActive,

        },
        validate: values => {
            
            let errors = {};

            if(!values.name){
                errors.name = 'Required';
            }
            // if(!values.userName){
            //     errors.userName = 'Required';
            // }
            // if(!values.email){
            //     errors.email='Required';
            // }

            return errors;
        },
        onSubmit: async (data) => {

            props.item.name = data.name;

            console.log("data from onSubmit", data);

            setFormData(data);
            setShowMessage(true);

//            props.item.name = data.name;
            const listItemDto = {
                // userName: data.userName,
                id: props.item.id,
                name: props.item.name,
                // email: data.email,
                // isActive: data.isActive,
                // password: userPassword
            };

            console.log("from onSubmit props.mode", props.mode);
            console.log("from onSubmit data", data);
            console.log("from onSubmit formData", formData);

            switch (props.mode) {
                case "ADD":
                    // const insertResponse = await insertItem(entityName, props.item); // .then(response => {
                    listItemDto.id = 0;

                    updateProject({variables: { project: listItemDto } });
                    // props.item = data;                    
                    
                    //console.log("response from onSubmit", insertResponse);
                    console.log("response from updateProject", data);
                    // });
                    break;
                case "UPDATE":

                    updateProject({variables: { project: listItemDto } });
                    
                    // const updateResponse = await updateItem(entityName, props.item); // .then(response => {
                    // console.log("response from onSubmit", data);
                    // });
                    break;

                case "DELETE":
                    
                    updateProject({ variables: { project: listItemDto } });
                
//                    const deleteResponse = await deleteItem(entityName, props.item); //.then(response => {
                    // console.log("response from onSubmit", data);
                    //});
                    break;                    

                case "VIEW":
                    return true;
                    break;
            }

            formik.resetForm();
            // setUserPassword("");

            // props.refetch();

        }
    });

    // const setAddingMode = (event) => {
    //     setIsAdding(true);
    //     setIsFormReadOnly(false);
    //     setFormData({
    //         name: "",
    //         userName: "",
    //         isActive: "formData.isActive",
    //     });

    // };

    const isFormFieldValid = (name) => {
        const result = !!(formik.touched[name] && formik.errors[name]);
        // console.log("isFormFieldValid", result);
        return result;

    }

    const getFormErrorMessage = (name) => {
        const result = isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>
        // console.log('formik.touched[name]', formik.touched[name])
        // console.log('formik.errors[name]', formik.errors[name])
        // console.log('result', result)
        return result;
    };

    const Title = () => {
        if(formData.name != null && formData.name != ""){
            return <h3>{formData.name}</h3>;            
        } else {
            return <h3>New Project</h3>
        }

    };

    return(
        <>
            <div className="content-section implementation">
                <div className="card">
                {/* <Menubar></Menubar> */}
                <Title></Title>

                <form onSubmit={formik.handleSubmit} className="p-fluid" autocomplete="off">
                    <div className="field">               
                        <span className="p-float-label">                                                    
                            <InputText
                                id="name" 
                                name="name" 
                                value={formik.values.name} 
                                onChange={formik.handleChange}
                                autoFocus
                                className={classNames({'p-invalid': isFormFieldValid('name')})}
                                readOnly = {isFormReadOnly}
                            ></InputText>
                            <label htmlFor="name" className={classNames({'p-error': isFormFieldValid('name')})}>Name</label>
                        </span>
                        {getFormErrorMessage('name')}
                    </div>
                    <div>
                        <p>props.mode: {props.mode}</p>
                        {!isFormReadOnly &&
                            <>
                                <Button type="submit" label="Submit" className="mt-2" />
                            </>
                            
                        }
                    </div>                  
                </form>
                </div>
            </div>
        </>
    );
}

export default ProjectDetailView;