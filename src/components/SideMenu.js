
import React, { useEffect, useState } from "react";
import { useLocation, withRouter } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { makeStyles } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
 import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';






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
  
    
 })





const SideMenu = (props) => {
  const [inactive, setInactive] = useState(true);
    const { history } = props;
    const location = useLocation();
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);
  const classes = useStyles();
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
                    <MenuIcon className={classes.btnMenu}></MenuIcon>) : (<ArrowBackIosRoundedIcon className={classes.btnClose}>
             </ArrowBackIosRoundedIcon>)}
        </div>
      </div>

 
      <div className="divider"></div>

          <div className="main-menu">
              

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

      
    </div>
  );
};

export default withRouter (SideMenu);







