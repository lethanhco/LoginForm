import React, { useState } from 'react';
import { LoginForm } from './LoginComponents';


const LoginPage  = () => {

    const [{username, password}, setCredentials] = useState({
        username: '',
        password: '',
    })

    return (
        <LoginForm>
            <label htmlFor="username">Username</label>
            <input placeholder='Username' value={username} onChange={(event) => setCredentials({
                username: event.target.value,
                password
            })}/>
            <label htmlFor="password">Password</label>
            <input placeholder='Password' value={password} onChange={(event) => setCredentials({
                username,
                password: event.target.value,
            })}/>
            <button type ="submit">Login</button>
        </LoginForm>
    )
}

export default LoginPage;