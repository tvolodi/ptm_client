import React, { useState } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFormik } from "formik";
import { classNames } from 'primereact/utils';
import { InputText } from "primereact/inputtext";
import { PanelOperMode } from "../../base/panel-oper-mode";
import { Menubar } from "primereact/menubar";
import { useMutation, usePreloadedQuery } from "react-relay";
import { DataDesignerViewModulesQuery} from './data-designer/DataDesignerView';
import { Dropdown } from "primereact/dropdown";

export const EntityItemDetailsFragment = graphql`
    fragment EntityItemDetailsFragment on DomainEntity {
        id
        description
        name
        pluralName
        module {
            id
            code
            name
        }
    }
`;

const EntityItemDetailsMutation = graphql`
    mutation EntityItemDetailsMutation(
        $id: ID,
        $description: String,
        $name: String!,
        $pluralName: String!,
        $module: ModuleInput!,
        $attributes: [DomainEntityAttributeInput!],
    ) { domainEntity ( domainEntity: {
            id: $id,
            description: $description,
            name: $name,
            pluralName: $pluralName,
            module: $module,
            attributes: $attributes,
        }
    )
    {
        domainEntity {
            id
            name
            description
            pluralName
            module {
                code
                id
                code                
            }
            attributes {
                id
                name
                description
                isNullable
                hasIndex
                entityLink{
                    id
                    name
                    module {
                        id
                        name
                    }
                }
                dataType{
                    id
                    name
                }
            }
        }
    }
}
`;


const EntityItemDetails = (params) => {
    
    const moduleListData = usePreloadedQuery(DataDesignerViewModulesQuery, params.moduleListQueryRef);

    const moduleOptionList = [];
    if (moduleListData != null ){
        const edges = moduleListData.modules.edges;
        for (let i = 0; i < edges.length; i++){
            moduleOptionList.push(edges[i].node);
        }
    }

    const [commitMutation, isMutationInFlight] = useMutation(EntityItemDetailsMutation);
    
    let selectedItem = {}; 

    Object.keys(params.entitySelectedItemState.node)
        .forEach(propertyName => selectedItem[propertyName] = params.entitySelectedItemState.node[propertyName]);
        
    // TODO: Do I need a state of the selected item?
    const [formDataStated, setFormDataState] = useState(selectedItem);

    let isFormReadOnly = true;
    if (params.entityDetailsModeState === PanelOperMode.ADD 
        || params.entityDetailsModeState === PanelOperMode.UPDATE){
        isFormReadOnly = false;
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedItem.name,
            pluralName: selectedItem.pluralName,
            module: selectedItem.module,
            description: selectedItem.description,
        },
        validate: values => {
            const errors = {};
            if(!values.name) {
                errors.name = 'Field is required';
            };
            if (!values.pluralName) {
                errors.name = 'Field is required';
            };            
            if(!values.module){
                errors.module = "Field is required";
            }
        },
        onSubmit: values => {
            
            setFormDataState(values);

            Object.keys(values).forEach(propertyName => selectedItem[propertyName] = values[propertyName]);

            commitMutation({
                variables: {
                    id: selectedItem.id,
                    description: selectedItem.description,                    
                    name: selectedItem.name,
                    pluralName: selectedItem.pluralName,
                    isDeleted: selectedItem.isDeleted,
                    module: selectedItem.module
                }, 
                onCompleted: (response) => {

                    console.log("Mutaion result:", response);

                    params.setEntitySelectedItemIdState(response.domainEntity.domainEntity.id);

                    params.refreshEntityList();
                    params.setEntityDetailsModeState(PanelOperMode.VIEW);
                },
            });

            // formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => {
        const result = !!(formik.touched[name] && formik.errors[name]);
        return result;

    }

    const getBase64Id = (id) => {
        if(id != null && id != ""){
            return atob(id);
        } else 
        {
            return "NEW";
        }
    }

    const menuBarModel = [
        {
            icon: 'pi pi-check',
            command: (event) => {
                    formik.handleSubmit(event);
                    // params.setToUpdateData(params.toUpdateData + 1);
                },
            disabled: isMutationInFlight===true,
        },
    ];

    return(
        <>
            <Menubar model={menuBarModel} end={<label>Some label</label>}></Menubar>
            {/* <p>Entity Item: {JSON.stringify(params.entitySelectedItemState)}</p>
            <p>selectedItem var: {JSON.stringify(selectedItem)}</p>
            <p>formik values: {JSON.stringify(formik.values)}</p> */}
            <form onSubmit={formik.handleSubmit} className="p-fluid">
                <label className="flex field" id="domain-entity-id-label" >Id: {getBase64Id(params.entitySelectedItemState.node.id)}</label>                
                <span className="flex flex-column field" >
                    {/* <p>{"Debug selectedItem"+JSON.stringify(formik.values)}</p> */}
                    <span className="p-float-label">
                        <InputText 
                            id="domain-entity-name-input"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('name') })}
                            readOnly={isFormReadOnly}
                        ></InputText>
                        <label 
                            htmlFor="name"
                            className={classNames({ 'p-error': isFormFieldValid('name') },)}
                            /// className="flex flex-column field"
                        >Domain Entity Name</label>
                    </span>
                </span>
                <span className="flex flex-column field" >
                    {/* <p>{"Debug selectedItem"+JSON.stringify(formik.values)}</p> */}
                    <span className="p-float-label">
                        <InputText
                            id="domain-entity-plural-name-input"
                            name="pluralName"
                            value={formik.values.pluralName}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('pluralName') })}
                            readOnly={isFormReadOnly}
                        ></InputText>
                        <label
                            htmlFor="pluralName"
                            className={classNames({ 'p-error': isFormFieldValid('pluralName') },)}
                        /// className="flex flex-column field"
                        >Domain Entity Plural Name</label>
                    </span>
                </span>                
                
                <p className="field"></p>
                <span className="field">
                    <span className="p-float-label">
                        <InputText
                            id="domain-entity-description-input"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                            readOnly={isFormReadOnly}
                        ></InputText>
                        <label
                            htmlFor="description"
                            className={classNames({ 'p-error': isFormFieldValid('description') },)}
                        >Domain Entity Description</label>
                    </span>
                </span>
                <span className="field flex flex-column">
                    <span className="p-float-label">
                        <Dropdown
                            id="module"
                            value={formik.values.module}
                            onChange={(e) => formik.setFieldValue("module", e.value)}
                            options={moduleOptionList}
                            optionLabel="code"
                            disabled={isFormReadOnly}
                        ></Dropdown>
                        <label htmlFor="module">Module</label>
                    </span>
                </span>
                
            </form>
        </>
    );
}

export default EntityItemDetails;