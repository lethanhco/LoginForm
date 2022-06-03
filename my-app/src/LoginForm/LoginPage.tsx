import React, { useState } from 'react';
import { LoginButton, LoginForm, LoginInput } from './LoginComponents';


const LoginPage  = () => {

    const [{username, password}, setCredentials] = useState({
        username: '',
        password: '',
    })


    return (
        <LoginForm>
            <label htmlFor="username">Username</label>
            <LoginInput
            placeholder='Username' value={username} 
            onChange={(event) => setCredentials({
                username: event.target.value,
                password
            })}/>
            <label htmlFor="password">Password</label>
            <LoginInput
            placeholder='Password' value={password} 
            onChange={(event) => setCredentials({
                username,
                password: event.target.value,
            })}/>
            <LoginButton type ="submit">Login</LoginButton>
        </LoginForm>
    )
}

export default LoginPage;