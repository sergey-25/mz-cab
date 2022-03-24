import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import Controls from "./controls/Controls";
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });
// const theme = useTheme();
// const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


const useStyles = makeStyles(theme => ({


    dialogWrapper: {
        maxHeight: '95%',
       maxWidth: "80%",
        position: 'absolute',
         [theme.breakpoints.between('xs','md')]: {
             minWidth: '100%',
             minHeight:'100%',
             margin:'0px'
            },


        [theme.breakpoints.only('lg')]: {
             display:'flex',
             maxWidth: "100%",
             height: '100%',
              margin:'0px',
            },
        top: theme.spacing(5)
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
                  padding: '50px',
            },

    }

}))

export default function Popup(props) {



    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup}
                classes={{ paper: classes.dialogWrapper}}
                // TransitionComponent={Transition}
                // fullScreen={fullScreen}
            >
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
