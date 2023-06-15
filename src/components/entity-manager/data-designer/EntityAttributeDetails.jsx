import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import { Menubar } from 'primereact/menubar';
import { PanelOperMode } from '../../../base/panel-oper-mode';
import { Checkbox } from 'primereact/checkbox';
import { useMutation, usePreloadedQuery } from 'react-relay';
import { graphql } from "babel-plugin-relay/macro";
import { DataDesignerViewDataTypesQuery } from './DataDesignerView';

const EntityAttributeDetailsMutation = graphql`
    mutation EntityAttributeDetailsMutation(
        $id: ID,
        $description: String,
        $name: String!,
        $domainEntity: DomainEntityInput!,
        $dataType: DataTypeInput!,
        $isNullable: Boolean,
        $hasIndex: Boolean,
        $entityLink: DomainEntityInput
    ) { domainEntityAttribute ( domainEntityAttribute: {
            id: $id,
            description: $description,
            name: $name,
            domainEntity: $domainEntity,
            dataType: $dataType,
            isNullable: $isNullable,
            hasIndex: $hasIndex,
            entityLink: $entityLink,
        }
    )
    {
        domainEntityAttribute {
            id
            name
            description
            isNullable
            hasIndex
            domainEntity{
                id
                name
            }
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
                code
            }
        }
    }
}
`;

const EntityAttributeDetails = (params) => {

    const dataTypeList = usePreloadedQuery(DataDesignerViewDataTypesQuery, params.dataTypeListQueryRef,);
    const [commitMutation, isMutationInFlight] = useMutation(EntityAttributeDetailsMutation);

    console.log("dataTypeList", dataTypeList)

    const dataTypeOptionList = [];
    if (dataTypeList != null) {
        const edges = dataTypeList.dataTypes.edges;
        for (let i = 0; i < edges.length; i++) {
            dataTypeOptionList.push(edges[i].node);
        }
    }

    console.log("Attribute details params", params)
    let isFormReadOnly = true;
    if (params.secondaryItemDetailsModeState === PanelOperMode.ADD 
        || params.secondaryItemDetailsModeState === PanelOperMode.UPDATE) {
        isFormReadOnly = false;
    }

    console.log("params.secondaryItemDetailsModeState", params.secondaryItemDetailsModeState)
    console.log("isFormReadOnly", isFormReadOnly);

    const isFormFieldValid = (name) => {
        const result = !!(formik.touched[name] && formik.errors[name]);
        return result;
    }
    
    let selectedItem = {};

    Object.keys(params.secondarySelectedItemState)
        .forEach(propertyName => selectedItem[propertyName] = params.secondarySelectedItemState[propertyName]);
    selectedItem.domainEntity = params.entitySelectedItemState.node;
    
    console.log("selectedItem", selectedItem);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: selectedItem.name,  
            description: selectedItem.module,
            dataType: selectedItem.dataType,
            isNullable: selectedItem.isNullable,
            hasIndex: selectedItem.hasIndex,
            entityLink: selectedItem.entityLink,
        },
        validate: values => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Field is required';
            };
            if (!values.dataType) {
                errors.dataType = "Field is required";
            }            
        },
        onSubmit: values => {

            // setFormDataState(values);

            Object.keys(values).forEach(propertyName => selectedItem[propertyName] = values[propertyName]);

            commitMutation({
                variables: {
                    id: selectedItem.id,
                    description: selectedItem.description,
                    name: selectedItem.name,
                    domainEntity: selectedItem.domainEntity,
                    dataType: selectedItem.dataType,
                    isNullable: selectedItem.isNullable,
                    hasIndex: selectedItem.hasIndex,
                    entityLink: selectedItem.entityLink,
                },
                onCompleted: (response) => {

                    console.log("Mutaion result:", response);
                    console.log("Mutaion result json:", JSON.stringify(response));

                    params.setSecondarySelectedItemIdState(response.domainEntityAttribute.id);

                    // params.refreshEntityList();
                    params.setSecondaryItemDetailsModeState(PanelOperMode.VIEW);

                    const attributes = params.entitySelectedItemState.node.attributes;
                    const newObject = response.domainEntityAttribute.domainEntityAttribute;
                    let oldObject = attributes.find(obj => 
                        obj.Id === newObject.Id                        
                    );

                    console.log("oldObject", oldObject)

                    if(oldObject != null){
                        Object.keys(oldObject)
                            .forEach(propertyName => oldObject[propertyName] = newObject[propertyName]);
                    } else {
                        attributes = [...attributes, newObject];
                    }

                    params.setEntitySelectedItemState(params.entitySelectedItemState);

                    // params.entitySelectedItemState.node.attributes
                },
            });

            formik.resetForm();
        }
    })

    const menuBarModel = [
        {
            icon: 'pi pi-check',
            command: (event) => {
                formik.handleSubmit(event);
                // params.setToUpdateData(params.toUpdateData + 1);
            },
            // disabled: isMutationInFlight === true,
        },
    ];

    const dataTypeOptionTemplate = (option) => {
        return (
            <div className='flex'>{option.code + ' ' + option.name}
            </div>
        );
    };

    return (
        <>
            <Menubar model={menuBarModel} end={<label>Some label</label>}></Menubar>
            <form className="p-fluid">
                {/* <label className="flex field" id="domain-entity-id-label" >Description</label> */}
                <span className="flex flex-column field" >
                    {/* <p>{"Debug selectedItem"+JSON.stringify(formik.values)}</p> */}
                    <span className="p-float-label">
                        <InputText
                            id="secondary-item-name-input"
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
                        >Name</label>
                    </span>
                </span>
                <span className="flex flex-column field" >
                    {/* <p>{"Debug selectedItem"+JSON.stringify(formik.values)}</p> */}
                    <span className="p-float-label">
                        <InputText
                            id="secondary-item-description-input"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className={classNames({ 'p-invalid': isFormFieldValid('description') })}
                            readOnly={isFormReadOnly}
                        ></InputText>
                        <label
                            htmlFor="description"
                            className={classNames({ 'p-error': isFormFieldValid('description') },)}
                        /// className="flex flex-column field"
                        >Description</label>
                    </span>
                </span>
                <span className="field flex flex-column">
                    <span className="p-float-label">
                        <Dropdown
                            id="dataType"
                            value={formik.values.dataType}
                            onChange={(e) => formik.setFieldValue("dataType", e.value)}
                            options={dataTypeOptionList}
                            optionLabel={"code"}
                            itemTemplate={dataTypeOptionTemplate}
                            disabled={isFormReadOnly}
                        ></Dropdown>
                        <label htmlFor="dataType">Data Type</label>
                    </span>
                </span>
                <div className='field-checkbox'>
                    <Checkbox 
                        inputId='isNullable' 
                        name='isNullable' 
                        checked={formik.values.isNullable} 
                        onChange={formik.handleChange}
                        className={classNames({ 'p-invalid': isFormFieldValid('isNullable') })}
                    />
                    <label 
                        htmlFor="isNullable" 
                        className={classNames({ 'p-error': isFormFieldValid('isNullable') })}
                    >Is Nullable</label>
                </div>
                <div className='field-checkbox'>
                    <Checkbox
                        inputId='hasIndex'
                        name='hasIndex'
                        checked={formik.values.hasIndex}
                        onChange={formik.handleChange}
                        className={classNames({ 'p-invalid': isFormFieldValid('hasIndex') })}
                    />
                    <label
                        htmlFor="hasIndex"
                        className={classNames({ 'p-error': isFormFieldValid('hasIndex') })}
                    >Has Index</label>
                </div>
                <span className="field flex flex-column">
                    <span className="p-float-label">
                        <Dropdown
                            id="entityLink"
                            value={formik.values.entityLink}
                            onChange={(e) => formik.setFieldValue("entityLink", e.value)}
                            // options={moduleOptionList}
                            optionLabel="name"
                            disabled={isFormReadOnly}
                        ></Dropdown>
                        <label htmlFor="entityLink">Entity Link</label>
                    </span>
                </span>
            </form>
        </>
    );
}

export default EntityAttributeDetails;