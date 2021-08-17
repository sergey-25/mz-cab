import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



const useStyles = makeStyles(theme => ({
    

    dialogWrapper: {
        maxHeight: '95%',
       maxWidth: "80%", 
        position: 'absolute',
         [theme.breakpoints.between('xs','md')]: {
             maxWidth: '100%',
             minHeight:'100%',
             margin:'0px'
            },
        
       
        [theme.breakpoints.up('lg')]: {
             display:'flex',
             maxWidth: "100%",
             maxHeight: '95%',
              margin:'0px',
            },
        // top: theme.spacing(5)
    },
   
    
    dialogTitle: {
        paddingRight: '10px'
    },

    dialogContent: {
        padding: '10px',
         [theme.breakpoints.up('xs')]: {
                 padding: '10px',
            },
            [theme.breakpoints.up('sm')]: {
                 padding: '10px',
            },
        [theme.breakpoints.only('md')]: {
                 paddingLeft: '10px',
        },
        [theme.breakpoints.up('lg')]: {
                 paddingLeft: '52px',
            },
        
    }

}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup}   classes={{ paper: classes.dialogWrapper}} TransitionComponent={Transition}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers className={classes.dialogContent}>
                {children}
            </DialogContent>
        </Dialog>
    )
}
