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
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm(props) {
    const { addOrEdit, recordForEdit } = props
    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
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
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        type="search"
                        helperText="(місцезнаходження юридичної особи/місце реєстрації фізичної особи - підприємця)"
                    />
                    <Controls.Input
                        label=""
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                        type="search"
                        helperText="(місце (місця) провадження медичної практики)*"
                    />
                    <Controls.Input
                        label=""
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        type="search"
                        helperText="(для юридичних осіб - код згідно з ЄДРПОУ, для фізичних осіб - підприємців -"
                    />

 
                    <Controls.Input
                        name=" "
                        label=""
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                        type="search"
                        helperText="ідентифікаційний код або серія, номер паспорта фізичної особи - підприємця,"
                    />
                    <Controls.Input
                        label=""
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        type="search"
                        helperText="ким і коли виданий (у разі відмови через свої релігійні переконання від прийняття"
                    />
                    <Controls.Input
                        label=""
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                        type="search"
                        helperText="реєстраційного номера облікової картки платника податків)"
                    />
                    <Controls.Input
                        label=""
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        type="search"
                        helperText="(прізвище, ім’я, по батькові керівника юридичної особи)"
                    />
                    <Controls.Input
                        label="e-mail"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
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
                        label="Hire Date"
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
