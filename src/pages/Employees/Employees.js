import React, { useState } from 'react'
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from "../../components/Popup";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";



const useStyles = makeStyles(theme => ({
    root: {
'& .':{},

    },
    
    //  pageContent: {
    //      width: 400,
    //      overflowX:'auto',
    //  [theme.breakpoints.down('xs')]: {
    //    width:200,
    //  }
    //  },
  
    

    pageContent: {
         margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '100%'
    },
    newButton: {
        padding: '1px 30px',
        marginRight: '22px',
        [theme.breakpoints.between('xs', 'sm')]: {
            display:'none', },
        
        // position: 'absolute',
        // right: '10px'
    },
    statementContainer: {
        display: 'contents',
        
    },
    toolbar: {
        padding:'0px'
    },

    addBtn: {
      [theme.breakpoints.up('xs')]: {
             position: 'fixed',
             bottom: '31px',
        left: '3px',
            },
        [theme.breakpoints.only('sm')]: {
             position: 'fixed',
             bottom: '45px',
        left: '3px',
            },
        [theme.breakpoints.up( 'md')]: {
            display:'none', },
    }
}))


const headCells = [
    { id: 'fullName', label: 'Тип рішення по заяви' },
    { id: 'hireDate', label: 'Дата подання' },
    { id: 'mobile', label: 'Дата рішення' },
    { id: 'department', label: 'Статус обробки' },
    { id: 'actions', label: 'Дії', disableSorting: true }
]

export default function Employees() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
     const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
        setNotify({
            isOpen: true,
            message: 'Збережено',
            type: 'success'
        })
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        employeeService.deleteEmployee(id);
        setRecords(employeeService.getAllEmployees())
        setNotify({
            isOpen: true,
            message: 'Успішно видалили',
            type: 'error'
        })
    }



     
    return (
        <>
            {/* <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            /> */}
            <Paper className={classes.pageContent}>

                <Toolbar className={classes.toolbar}>
                    <div className={classes.statementContainer}>


                        <div >
                             <Controls.FabAdd
                        startIcon={<AddIcon />}
                      className={classes.addBtn}
                      
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                        />
                        </div>
                        
                        
                        
                        <div className={classes.btnField}>
                             <Controls.Button
                        text="Створити нову заявку"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                        />
                   </div> 
                        <Controls.Input
                        label="Пошук по заявам"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    /></div>
                </Toolbar>
                <TblContainer className={classes.tblContainer}>
                    <TblHead className={classes.tblHead} />
                    
                    <TableBody >
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell >{item.hireDate}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Справді видалити цей запис?',
                                                    subTitle: "Ви не зможете скасувати цю операцію",
                                                    onConfirm: () => { onDelete(item.id) }
                                                })
                                            }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup
                title="Нова заява"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}
