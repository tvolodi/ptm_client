import React, { useState, useEffect } from "react";
import { Formik, useFormik } from 'formik';
import { Checkbox } from "primereact/checkbox";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';
import { Button } from "primereact/button";
import { RadioButton } from 'primereact/radiobutton';
import { Password } from "primereact/password";

import { insertUser } from "../../services/users/users-service";

const UserDetailView = (props) => {

    console.log("props from UserDetailView", props)
    console.log("props.userItem from UserDetailView", props.userItem)

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState(props.userItem);
    const [isFormReadOnly, setIsFormReadOnly] = useState(() => {
        if(props.mode == "ADD"){
            return false;
        } else {
            return true;
        }
    });

    const [userPassword, setUserPassword] = useState("");

    // const [isAdding, setIsAdding] = useState(false);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const [userItem, setUserItem] = useState(props.userItem)

    // if(props.mode == "ADD"){
    //     setIsFormReadOnly(false)
    // }


    const formik = useFormik({
        initialValues: {
            name: formData.name,
            userName: formData.userName,
            email: formData.email,
            isActive: formData.isActive,

        },
        validate: values => {
            
            let errors = {};

            if(!values.name){
                errors.name = 'Required';
            }
            if(!values.userName){
                errors.userName = 'Required';
            }
            if(!values.email){
                errors.email='Required';
            }

            return errors;
        },
        onSubmit: (data) => {

            console.log("data from onSubmit", data);

            setFormData(data);
            setShowMessage(true);

            const userItemDto = {
                userName: data.userName,
                name: data.name,
                email: data.email,
                isActive: data.isActive,
                password: userPassword
            };

            const response = insertUser(userItemDto).then(response => {
                console.log("response from onSubmit", response);
            });

            formik.resetForm();
            setUserPassword("");
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
        if(formData.userName != null && formData.userName != ""){
            return <h3>{formData.userName}</h3>;            
        } else {
            return <h3>New user</h3>
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
                    <div className="field">           
                        <span className="p-float-label">
                            
                            <InputText
                                id="userName" 
                                name="userName" 
                                value={formik.values.userName} 
                                onChange={formik.handleChange}
                                // autoFocus
                                className={classNames({'p-invalid': isFormFieldValid('userName')})}
                                readOnly = {isFormReadOnly}
                            ></InputText>                                                
                            <label htmlFor="name" className={classNames({'p-error': isFormFieldValid('userName')},)}>User Name</label>
                        </span>
                        {getFormErrorMessage('userName')}
                    </div>
                    <div className="field">
                        <span className="p-float-label">
                            <InputText
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className={classNames({'p-invalid': isFormFieldValid('email')})}
                                readOnly={isFormReadOnly}
                            ></InputText>
                            <label htmlFor="email" className={classNames({'p-error': isFormFieldValid('email')},)}>Email</label>
                        </span>
                    </div>
                    {!isFormReadOnly && <div>
                            <Password
                                inputId="UserPasswordInput"
                                value={userPassword}
                                onChange={(e) => setUserPassword(e.target.value)}
                                toggleMask
                            ></Password>
                        </div>
                    }
                    <div className="col-12">
                            <Checkbox
                            inputId="IsActiveCheckbox"
                            value={formik.values.isActive}
                            name="Is Active"
                            onChange={formik.handleChange}
                            checked={formik.values.isActive}
                            readOnly={isFormReadOnly}
                        ></Checkbox>
                        <label htmlFor="IsActiveCheckbox" className="p-checkbox-label">Is Active</label>
                    </div>
                    <div>
                        {!isFormReadOnly &&
                            <Button type="submit" label="Submit" className="mt-2" />
                        }
                    </div>                  
                </form>
                </div>
            </div>
        </>
    );
}

export default UserDetailView;