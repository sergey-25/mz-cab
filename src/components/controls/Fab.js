import React from 'react'
import { makeStyles, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

export default function FabAdd(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <Fab 
            variant={variant || "contained"}
            size={size || "medium"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            
                
            {text} <AddIcon />
        </Fab>
    )
}
