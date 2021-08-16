import React,{useState} from 'react'
import {TextField, Paper, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      
   '& .MuiInputBase-root': {
              width: '275px',
            fontSize: '13px',
             [theme.breakpoints.up('sm')]: {
                 padding: '15px',
                 minWidth: '650px',
                
         },
            // [theme.breakpoints.up('xs')]: {
            //      minWidth: '275px',
            // },
            //  [theme.breakpoints.up('sm')]: {
            //      minWidth: '275px',
            // },
            //   [theme.breakpoints.up('md')]: {
            //      width: '550px',
            // },
            
            '&:hover:before': {
                 outlineColor:'red',
           borderBottom:'1px solid grey',
            borderBottomColor: 'none'
        },
            
            '&:after': {
             outlineColor:'none',
            borderBottom: 'none ',
            borderBottomColor: 'none'
        },
        },
        '& .MuiInputBase-input': {
            paddingTop: '5px ',
            paddingBottom: '1px ',
            paddingRight: '5px ',
               paddingLeft:'5px '
        },

        '& .MuiFormHelperText-root': {
           width: '550px',
            lineHeight: '1.3',
            [theme.breakpoints.up('xs')]: {
                 width: '320px',
            },
            [theme.breakpoints.up('sm')]: {
                 width: '680px',
            },
              [theme.breakpoints.up('md')]: {
                 width: '550px',
            },
              
        },

        '& .MuiInputBase-multiline': {
             paddingTop: '5px ',
            paddingBottom: '1px ',
            paddingRight: '5px ',
               paddingLeft:'5px '
        }
    },
    paper: {
        [theme.breakpoints.up('sm')]: {
                padding: '15px',
                minWidth: '680px',
                
        },
   },
    form: {
        display: 'flex',
        flexWrap: 'wrap  ',
        justifyContent: 'space-between',
        padding: '50px',
         
        [theme.breakpoints.up('xs')]: {
            padding: '15px',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '30px',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '50px',
        },
    },
    
}));


export default function PersonalDataForm() {
    
    const [state, setState] = useState({

            "issuer": "undefined",
            "issuercn": "undefined",
            "serial": "undefined",
            "subject": "undefined",
            "subjectcn":"undefined",
            "locality": "undefined",
            "state": "undefined",
            "o": "undefined",
            "ou": "undefined",
            "title": "undefined",
            "givenname": "undefined",
            "middlename": "undefined",
            "lastname": "undefined",
            "email": "undefined",
            "address": "undefined",
            "phone": "undefined",
            "dns": "undefined",
            "edrpoucode": "undefined",
            "drfocode": "undefined",
            "unzr": "undefined"
    });
    

        const handleChange = e => {
            const { name, value } = e.target;
            setState(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    

   
      
        

       const classes = useStyles();
        

    return (<Paper className={classes.paper} > <Toolbar style={{background:'rgb(237 235 236)', boxShadow: '1px 12px 8px 0px rgba(34, 60, 80, 0.2)'}}><Typography>Особисті дані користувача</Typography> </Toolbar>
        <form className={classes.form}>
            

                <TextField
                    
                    className={classes.root}
                    type="text"
                    helperText="Реквізити видавника сертифіката(Надавач)"
                    name="issuer"
                    value={state.issuer}
                    onChange={handleChange}
                    InputProps={{

                        readOnly: true,
                    }}
                ></TextField>
          
         
                <TextField
                className={classes.root}
                    type="text"
                    //   variant="outlined"
                    helperText="Загальне ім'я надавача"
                    name="issuercn"
                    value={state.issuercn}
                    readOnly="readOnly"
                    onChange={handleChange}
                    InputProps={{
                        readOnly: true,
                       
                    }}
                ></TextField>
      
         
                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Реєстраційний номер сертифіката у надавача"
                    name="serial"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={state.serial}
                    readOnly="readOnly"
                    onChange={handleChange}
                ></TextField>
          
         
                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Реквізити видавника сертифіката(користувач)"
                    name="subject"
                    value={state.subject}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>
            

                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Загальне ім'я користувача"
                    name="subjectcn"
                    value={state.subjectcn}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>


                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Місто (населений пункт) користувача"
                    name="locality"
                    value={state.locality}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>


                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Область (регіон) користувача"
                    name="state"
                    value={state.state}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>


                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Найменування організації користувача"
                    name="o"
                    value={state.o}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>
            

                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Назва підрозділу організації користувача"
                    name="ou"
                    value={state.ou}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>


                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Посада користувача"
                    name="title"
                    value={state.title}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>


                <TextField
                    className={classes.root}
                    type="text"
                    helperText="Ім'я користувача"
                    name="givenname"
                    value={state.givenname}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>

                <TextField
                    className={classes.root}
                    type="text"
                    helperText="По батькові користувача"
                    name="middlename"
                    value={state.middlename}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>

                <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="Прізвище користувача"
                    name="lastname"
                    value={state.lastname}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>

            
                    <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="Адреса ел.пошти (e-mail) користувача"
                    name="email"
                    value={state.email}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>
            
                    <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="Адреса (фізична) користувача"
                    name="address"
                    value={state.address}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>


            <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="Телефон користувача"
                    name="phone"
                    value={state.phone}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
            ></TextField>

            
             <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="DNS-ім'я користувача"
                    name="dns"
                    value={state.dns}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>


            <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="Код за ЄДРПОУ користувача"
                    name="edrpoucode"
                    value={state.edrpoucode}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
            ></TextField>
            

            <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="РНОКПП користувача або серія (за нявності) та номер паспорта (для користувачів, які через свої релігійні переконання відмовляються від прийняття реєстраційного номера облікової картки платника податків та офіційно повідомили про це відповідний контролюючий орган і мають відмітку у паспорті) (Додаток А, п. 8)"
                    name="drfocode"
                    value={state.drfocode}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
            ></TextField>
            


             <TextField
                    multiline
                    className={classes.root}
                    type="text"
                    helperText="Унікальний номер запису в Єдиному демографічному реєстрі"
                    name="drfocode"
                    value={state.drfocode}
                    InputProps={{
                        readOnly: true,
                    }}
                    onChange={handleChange}
                ></TextField>
            
            </form></Paper>
            
        );
    }


