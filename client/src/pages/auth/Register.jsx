import React, { useState } from "react";
import DynamicBox from "../../components/DynamicAuthForm";
import axios from 'axios';

function Register() {
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const data = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
            email: e.target.elements.email.value
        }

        try {
            const response = await axios.post('http://localhost:8000/auth', data);
            setMessage(response.data.message);
            if (response.data.success) {
                setSuccess(true);
                
                setTimeout(() => {
                    window.location.href = '/login';
                }, 1000);
            }
        } catch (error) {
            setSuccess(false)
            if (error.response && error.response.data.message) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Something went wrong");
            }
        }
    }
    
    return (
        <div>
            <DynamicBox title="Register" onSubmit={handleSubmit} message={message} success = {success} />
        </div>
    );
}

export default Register;
