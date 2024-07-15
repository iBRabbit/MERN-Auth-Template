import React from "react";
import DynamicBox from "../../components/DynamicAuthForm";

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value
        console.log(username, password);
    }
    
    return (
        <DynamicBox title="Login" onSubmit={handleSubmit} />
    );
}

export default Login;
