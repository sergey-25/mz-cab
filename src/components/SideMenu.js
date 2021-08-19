import React from 'react';
import clsx from 'clsx';
import { useLocation, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import MenuIcon from '@material-ui/icons/Menu';

export const itemsList = [
    {
      text: 'Всі заявки',
        path: '/all-statements',
        exact: true,
icon: <AllInboxOutlinedIcon/>,

    },
    {
      text: 'Особисті дані',
        path: '/personal-data',
        exact: true,
icon: <PermIdentityOutlinedIcon/>,
    },
  ];

  const btnExit = [
    {
      text: 'Вийти з кабінету',
          path: '/',
        exact: true,
    }
  ]







const useStyles = makeStyles({
  icon: {
    marginRight:'10px'
  },
  btnMenu: {
    position: 'fixed',
   
        width: '45px',
        height: '45px',
        paddingTop: '12px',
    paddingLeft: '9px',
    
   
      
        
    },
    btnClose: {
      paddingTop: '17px',
     width: '45px',
        height: '45px', 
    },
    btnHover: {
    '&:hover': {
      color: 'red',
      background: '#fff',
      border: '2px solid red',
      borderRadius: '4px'
    }
  },
  some: {
      background:'red'
    },
     active: {
        background: '#fff',
       color: '#3f51b5 ',
        border:'1px solid #3f51b5',
        
        borderRadius: '4px',
     
    },
   
    btn: {
      color: 'balack',
      '&:hover': {
               backgroundColor: '#fff',
             
          }
    },
    activeBtnExit: {
    background: '#fff',
      color: 'red',
      border: '1px solid red',
     borderRadius: '4px',
   '&:hover': {
     backgroundColor: '#fff',
     border:'1px solid red',
             
          }
    },
     list: {
    
  },
  fullList: {
    width: 'auto',
  },
  
    
 })











const SideMenu=(props)=> {
    const classes = useStyles();
    



  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

    
    const { history } = props;
  

  const location = useLocation();

    
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
      <Divider />
     <List>
          {itemsList.map((item, index) => {
            const { text, onClick } = item;

             
            return (
              <ListItem button key={text} onClick={() => history.push(item.path)} className={location.pathname == item.path ? classes.active : classes.btn}>
                <div className={classes.icon}>
                  {item.icon}
</div>
                <ListItemText primary={text}/>  
              </ListItem>

            )
          })}
        </List>
        <List>
          {btnExit.map((item, index) => {
            const { text, onClick } = item;
            return (
              <ListItem button key={text} onClick={() => history.push(item.path)} className={location.pathname == item.path ? classes.activeBtnExit : classes.btn}>
<ExitToAppOutlinedIcon className={classes.icon}/>
                <ListItemText primary={text} />
              </ListItem>

            )
          })}
        </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon color="primary" fontSize="large"/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default withRouter (SideMenu);