import { Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    cancelBtn: {
        background: 'red',
        color: '#fff',
        padding:'7px 20px',
         '&:hover': {
      color: '',
        background: 'red',
       
    }
    }

})
export default function PersonalData() {


const classes = useStyles();

    return (
        <div>
           <Button className={classes.cancelBtn}>Cкасувати</Button>
        </div>
    )
}
