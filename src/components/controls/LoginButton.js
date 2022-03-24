import React from 'react';
import Button from '@material-ui/core/Button';
import '../../Assetes/styles/LoginButton.scss';
import Admin from '../../Admin';
import { Link } from 'react-router-dom';

const LoginButton = () => {
    return ( <Link to = '/all-statements'>
        <Button id={"login-button"} >
           
           
            <i className={'icon-diia'} />
            
            Авторизуватися за допомогою Дія
        </Button> </Link>
    );
}

export default LoginButton;
