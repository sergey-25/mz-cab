import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from "../../services/employeeService";
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    modal: {
    top:'-13px'
}
})

// const genderItems = [
//     { id: 'male', title: 'Male' },
//     { id: 'female', title: 'Female' },
//     { id: 'other', title: 'Other' },
// ]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    // mobile: '',
    // city: '',
    // gender: 'male',
    // departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
    location: '',
    productionPlace: '',
    edrpou: '',
    idNumber: '',
    whenIssued: '',
    registrationNumber: '',
    initials:''
}

export default function EmployeeForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "Поле не має бути пустим."
        
        if ('location' in fieldValues)
            temp.location = fieldValues.location ? "" : "Поле не має бути пустим."
            //  temp.location = (/$^|.+@.+..+/).test(fieldValues.location) ? "" : "location is not valid."
        
        if ('productionPlace' in fieldValues)
            temp.productionPlace = fieldValues.productionPlace ? "" : "Поле не має бути пустим."
        
        if ('edrpou' in fieldValues)
            temp.edrpou = fieldValues.edrpou ? "" : "Поле не має бути пустим."
        
             if ('idNumber' in fieldValues)
            temp.idNumber = (/^[0-9\b]+$/).test(fieldValues.idNumber) ? "" : "Має бути заповнено в числовому форматі."
        
               if ('whenIssued' in fieldValues)
            temp.whenIssued = fieldValues.whenIssued ? "" : "Поле не має бути пустим."
        
         if ('registrationNumber' in fieldValues)
            temp.registrationNumber = fieldValues.registrationNumber ? "" : "Поле не має бути пустим."
        
         if ('initials' in fieldValues)
            temp.initials = fieldValues.initials ? "" : "Поле не має бути пустим."
        
         if ('email' in fieldValues)
       temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Поле заповнено невірно."
        
                // .length > 9 ? "" : "Minimum 10 numbers required."
        // if ('departmentId' in fieldValues)
        //     temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit} >
            <Grid container >
                <Grid item xs={13}>
                    <Controls.Input
                        name="fullName"
                        label="Здобувач ліцензії"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                        type="search"
                        helperText="(найменування юридичної особи/прізвище, ім’я,
                                        по батькові фізичної особи - підприємця)"

                    />
                    <Controls.Input
                        label=""
                        name="location"
                        value={values.location}
                        onChange={handleInputChange}
                        error={errors.location}
                        type="search"
                        helperText="(місцезнаходження юридичної особи/місце реєстрації фізичної особи - підприємця)"
                    />
                    <Controls.Input
                        label=""
                        name="productionPlace"
                        value={values.productionPlace}
                        onChange={handleInputChange}
                        error={errors.productionPlace}
                        type="search"
                        helperText="(місце (місця) провадження медичної практики)*"
                    />
                    <Controls.Input
                        label=""
                        name="edrpou"
                        value={values.edrpou}
                        onChange={handleInputChange}
                         error={errors.edrpou}
                        type="search"
                        helperText="(для юридичних осіб - код згідно з ЄДРПОУ, для фізичних осіб - підприємців -"
                    />

 
                    <Controls.Input
                        name="idNumber"
                        label=""
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        value={values.idNumber}
                        onChange={handleInputChange}
                        error={errors.idNumber}
                        format="numeric"
                        
                        helperText="ідентифікаційний код або серія, номер паспорта фізичної особи - підприємця,"
                    />
                    <Controls.Input
                        label=""
                        name="whenIssued"
                        value={values.whenIssued}
                        onChange={handleInputChange}
                        error={errors.whenIssued}
                        type="search"
                        helperText="ким і коли виданий (у разі відмови через свої релігійні переконання від прийняття"
                    />
                    <Controls.Input
                        label=""
                        name="registrationNumber"
                        value={values.registrationNumber}
                        onChange={handleInputChange}
                        error={errors.registrationNumber}
                        type="search"
                        helperText="реєстраційного номера облікової картки платника податків)"
                    />
                    <Controls.Input
                        label=""
                        name="initials"
                        value={values.initials}
                        onChange={handleInputChange}
                        error={errors.initials}
                        type="search"
                        helperText="(прізвище, ім’я, по батькові керівника юридичної особи)"
                    />
                    <Controls.Input
                        label="e-mail"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        type="search"
                        helperText=""
                    />
                </Grid>
                <Grid item xs={6}>
                    {/* <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                        type="search"
                        helperText="Some important text"
                    /> */}
                    {/* <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />  */}
                    <Controls.DatePicker
                        name="hireDate"
                        label=""
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Подати" />
                        <Controls.Button
                            text="Скасувати"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
