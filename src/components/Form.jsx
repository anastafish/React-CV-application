import React, { useState } from 'react'
import '../styles/form.css'
import { Validator } from 'react';

export default function Form(props){    

    function validate(value){
        if (value === "") return false
        else return true
    }
    
    function handleChange(event){
        const {name, value} = event.target
        props.setForm(prevForm => ({
            ...prevForm, 
            [name]:value
        }))
    }

    function handleSubmit(){
        const valuesArray = Object.values(props.form)
        if (valuesArray.every(value => validate(value))){
            props.setSubmit(true)     
            props.setSubmitMsg(true)
        }
        else{
            props.setValidation(true)
        }
        }    

    return(
        <div className="form-container">
            <div className="general">
                <h1 className='title'>General Information</h1>
                <label >First Name:</label>
                <input value={props.form.firstName} onChange={handleChange} name='firstName' type="text"/>
                <label >Last Name:</label>
                <input value={props.form.lastName} onChange={handleChange} name='lastName' type="text" />
                <label htmlFor="">Email:</label>
                <input value={props.form.email} onChange={handleChange} name='email' type="email" />
                <label htmlFor="">Phone Number:</label>
                <input value={props.form.phoneNumber} onChange={handleChange} name='phoneNumber' type="number" />
            </div>
            <div className="educational">
                <h1 className='title'>Educational Information</h1>
                <label htmlFor="">School Name:</label>
                <input value={props.form.schoolName} onChange={handleChange} name='schoolName' type="text" />
                <label htmlFor="">Study Title:</label>
                <input value={props.form.studyTitle} onChange={handleChange} name='studyTitle' type="text" />
                <label htmlFor="">Period of study</label>
                <label htmlFor="">From:</label>
                <input value={props.form.studyDateFrom} onChange={handleChange} name='studyDateFrom' type="date" />
                <label htmlFor="">To:</label>
                <input value={props.form.studyDateTo} onChange={handleChange} name='studyDateTo' type="date" /> 
            </div>
            <div className="practical">
                <h1 className='title'>Experience Information</h1>
                <label htmlFor="">Company Name:</label>
                <input value={props.form.companyName} onChange={handleChange} name='companyName' type="text" />
                <label htmlFor="">Position Tite:</label>
                <input value={props.form.positionTitle} onChange={handleChange} name='positionTitle' type="text" />
                <label htmlFor="">Main Tasks:</label>
                <input value={props.form.mainTasks} onChange={handleChange} name='mainTasks' type="text" />
                <label htmlFor="">Working Date</label>
                <label htmlFor="">From:</label>
                <input value={props.form.workingDateFrom} onChange={handleChange} name='workingDateFrom' type="date" />
                <label htmlFor="">To:</label>
                <input value={props.form.workingDateTo} onChange={handleChange} name='workingDateTo' type="date" />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}