import React from "react";
import DynamicBox from "../../components/DynamicAuthForm";
import { Helmet } from 'react-helmet';

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value
        console.log(username, password);
    }
    
    return (
        <div className="loginContainer">
            <Helmet><title>Login</title></Helmet>
            <DynamicBox title="Login" onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
