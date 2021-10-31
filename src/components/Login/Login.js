
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
// import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/offerings';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <button
                className="btn btn-warning"
                onClick={handleGoogleLogin}
            >Google Sign In</button>
        </div>

    );
};

export default Login;