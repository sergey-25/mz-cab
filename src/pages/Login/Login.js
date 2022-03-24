import * as React from 'react';
import * as yup from 'yup';
import '../../Assetes/styles/Login.scss';
import {HeaderText} from './Login.styled'
import LoginButton from "../../components/controls/LoginButton";
import {Button, Col, Container, Input, Row} from "reactstrap";
import Dropzone from "../../components/Dropzone";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import {InputAdornment, OutlinedInput, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import {useForm, Form} from '../../components/useForm';

const useStyles = makeStyles((theme) => ({
    root: {
        // input label when focused
        "& label.Mui-focused": {
            color: "black"
        },
        "& .MuiInput-underline:before": {
            borderBottom: "2px solid black"
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: "black"
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: "black"
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "black"
            }
        }
    },
    update:{
        [theme.breakpoints.up('xs')]: {
paddingTop:'40px'
        },
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.between('md','lg')]: {
paddingTop:'100px',
            paddingLeft: '100px',
            paddingRight:'100px'
        },}

}));


const Login = () => {


    const classes = useStyles();

    const [file, setFile] = useState(null);
    const [error, setError] = useState({})
    const [values, setValues] = React.useState({
        age: '',
        password: '',
        showPassword: false,
    });
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(validate(values))
        setIsSubmit(true)
        console.log('hello')
    };

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmit) {
            console.log(values)
        }
    }, [error])


    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "Введіть пароль від особистого ключа\n" +
                "\n"
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }


    const {
        errors,
        setErrors
    } = useForm(values, true, validate);
    return (

        <Container fluid>
            <form onSubmit={handleSubmit}>
                <Row>
                    <div className="col">
                        <Row>
                            <div className={"gradient-bg d-flex justify-content-center"}
                                 style={{paddingTop: '10rem'}}>
                                <div id="logo" title={"Міністерство охорони здоров'я України"}/>
                            </div>
                        </Row>
                    </div>
                    <Col sm={9} className={classes.update} >
                        <div>
                            <HeaderText>Увійти за допомогою файлового ключа</HeaderText>

                        </div>

                        <div>
                            <Dropzone setFile={setFile} />

                        </div>
                        {file?.name}

                        <div>
                            <FormControl className={classes.root} variant="standard" sx={{mt: 1, minWidth: '100%'}}>
                                <InputLabel id="demo-simple-select-standard-label">Кваліфікований надавач електронних
                                    довірчих послуг
                                </InputLabel>
                                <Select
                                    MenuProps={{
                                        sx: {
                                            "&& .Mui-selected:hover": {
                                                backgroundColor: "rgba(0, 0, 0, 0.14)"
                                            },
                                            "&& .Mui-selected": {
                                                backgroundColor: "rgba(0, 0, 0, 0.14)"
                                            }
                                        }
                                    }}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={values.age}
                                    onChange={handleChange('age')}
                                    label="Кваліфікований надавач електронних довірчих послуг"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>

                            <FormControl className={classes.root} sx={{mt: 2, width: '100%'}} variant="standard">

                                <TextField
                                    variant="standard"
                                    error={errors.password}
                                    label="Пароль"
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>,
                                    }}
                                />
                            </FormControl>
                            <p style={{
                                display: 'flex',
                                color: '#d32f2f',
                                letterSpacing: '0.03333em',
                                fontSize: '0.75rem'
                            }}>{errors.password}</p>
                        </div>

                        <div>
                            {/*<button >*/}
                            {/*    dsfdsf*/}
                            {/*</button>*/}
                            <button className="button">
                                Продовжити
                            </button>
                        </div>
                    </Col>
                </Row>
            </form>
        </Container>

    );
}

export default Login;
