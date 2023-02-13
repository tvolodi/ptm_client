import React, { useState, useEffect } from "react";
import { Formik, useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";


import getEntityItems, { deleteItem, insertItem, updateItem } from "../../services/base-entity-service";
import { setTaskData } from "../../services/local-services/local-services";

const entityName = "WorkTask";



const WorkTaskDetailView = (props) => {

    console.log("props from WorkTaskDetailView", props)
    console.log("props.item from WorkTaskDetailView", props.item)
    console.log("props.key from WorkTaskDetailView", props.key)

    const projectConst = {
        name: "Test project",
    };

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

    const [optionList, setOptionList] = useState([]);
    const [selectedOption, setSelectedOption] = useState({name: "Project 1"});
    // () => {
        // return props.item.project;
        // if(props.item.project != null ){
        //     return props.item.project;
        // } else {
        //     return {};
        // }
    // });

    const cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" }
      ];

    const [selectedCityOption, setSelectedCityOption] = useState({name: "New York", code: "NY", someField: ""});
    const onCityOptionChange = (e) => {
        setSelectedCityOption(e.value);
    }


    useEffect(() => {
        getOptionList();
        // setSelectedOption(props.item.project);
    }, []);

    const getOptionList = () => {
        const options = {
            "EntityName": "Project"
        }
        getEntityItems(options).then((items) => {
            setOptionList(items);
        });
    };

    const onProjectOptionChange = (e) => {
        setSelectedOption(e.value);
    }

    const formik = useFormik({
        initialValues: {
            description: props.item.description,
            project: projectConst, // props.item.project,
            // project: formData.project,
            // userName: formData.userName,
            // email: formData.email,
            // isActive: formData.isActive,
        },
        validate: values => {
            
            let errors = {};

            if(!values.description){
                errors.description = 'Required';
            }

            // if(!values.project){
            //     errors.project = "Required";
            // }
            // if(!values.userName){
            //     errors.userName = 'Required';
            // }
            // if(!values.email){
            //     errors.email='Required';
            // }

            return errors;
        },
        onSubmit: async (data) => {

            console.log("data from onSubmit", data);
            console.log("selectedOption", selectedOption);
            

            setFormData(data);
            setShowMessage(true);

            props.item.description = data.description;
            props.item.project = data.project;

            // const listItemDto = {
            //     // userName: data.userName,
            //     name: data.description,
            //     // email: data.email,
            //     // isActive: data.isActive,
            //     // password: userPassword
            // };

            console.log("from onSubmit props.mode", props.mode);
            console.log("from onSubmit data", data);
            console.log("from onSubmit formData", formData);
            console.log("props.item", props.item);

            switch (props.mode) {
                case "ADD":
                    const insertResponse = await insertItem(entityName, props.item); // .then(response => {
                    console.log("response from onSubmit", insertResponse);
                    // });
                    break;
                case "UPDATE":
                    
                    const updateResponse = await updateItem(entityName, props.item); // .then(response => {
                    console.log("response from onSubmit", updateResponse);
                    // });
                    break;
                case "DELETE":
                    const deleteResponse = await deleteItem(entityName, props.item); //.then(response => {
                    console.log("response from onSubmit", deleteResponse);
                    //});
                    break;                    
                case "VIEW":
                    return true;
                    break;
            }

            formik.resetForm();
            // setUserPassword("");

            props.getList();

        }
    });

    console.log("formik", JSON.stringify(formik));
    console.log("formData", formData)

    const isFormFieldValid = (name) => {
        const result = !!(formik.touched[name] && formik.errors[name]);
        // console.log("isFormFieldValid", result);
        return result;

    }

    const getFormErrorMessage = (name) => {
        const result = isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>
        return result;
    };

    const Title = () => {
        if(formData.description != null && formData.description != ""){
            return <h3>{formData.description}</h3>;            
        } else {
            return <h3>New Work Task</h3>
        }

    };

    return(
        <>
            <div className="content-section implementation">
                Content Section
                <div className="card">
                    Card
                    <Title></Title>
                    <form onSubmit={formik.handleSubmit} className="p-fluid" autoComplete="off">
                        Form
                        <div className="field">               
                        <span className="p-float-label">                                                    
                            <InputText
                                id="description" 
                                name="description" 
                                value={formik.values.description} 
                                onChange={formik.handleChange}
                                autoFocus
                                className={classNames({'p-invalid': isFormFieldValid('description')})}
                                readOnly = {isFormReadOnly}
                            ></InputText>
                            <label htmlFor="name" className={classNames({'p-error': isFormFieldValid('description')})}>Discription</label>
                        </span>
                        {getFormErrorMessage('description')}
                    </div>
                    <div > 
                        {/* <label className={classNames({'p-error': isFormFieldValid('project')})}>Project</label> */}
                        <Dropdown
                            // id="project"
                            // name="project"
                            value={selectedOption}
                            // value={formik.values.project}
                            options={optionList}
                            optionLabel="name"
                            onChange={onProjectOptionChange} //{formik.handleChange}
                            // placeholder="Select a Project"
                            // disabled = {isFormReadOnly}
                        >
                        </Dropdown>                            
                        {/* {getFormErrorMessage('project')} */}
                        {/* <p>{JSON.stringify(formik.values.project)}</p> */}
                        {/* <p>{JSON.stringify(selectedOption)}</p> */}
                        <Dropdown 
                            value={selectedCityOption} 
                            options={cities} 
                            onChange={onCityOptionChange} 
                            optionLabel="name"
                            // placeholder="Select a Project" 
                        />
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
            {/* <div className="content-section implementation">
                <div className="card">
                <Title></Title>
                <form onSubmit={alert("hi")} className="p-fluid" autocomplete="off">
                <form onSubmit={formik.handleSubmit} className="p-fluid" autocomplete="off">
                    <div className="field">               
                        <span className="p-float-label">                                                    
                            <InputText
                                id="description" 
                                name="description" 
                                value={formik.values.description} 
                                onChange={formik.handleChange}
                                autoFocus
                                className={classNames({'p-invalid': isFormFieldValid('description')})}
                                readOnly = {isFormReadOnly}
                            ></InputText>
                            <label htmlFor="name" className={classNames({'p-error': isFormFieldValid('description')})}>Discription</label>
                        </span>
                        {getFormErrorMessage('description')}
                    </div>
                    <div className="field">
                        <Dropdown
                            value={selectedOption}
                            options={optionList}
                            optionLabel="name"
                            onChange={(e) => setSelectedOption(e.value)}
                            placeholder="Select a Project"
                        >

                        </Dropdown>
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
            </div> */}
        </>
    );
}

export default WorkTaskDetailView;