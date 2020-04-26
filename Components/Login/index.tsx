import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios'

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const response = await axios.post('/api/login', {
            username,
            password
        })

        if(!response.data.success) setError(true);

        localStorage.setItem('k1', response.data.token);
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField label="username" name="username" className="form--input" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
                <TextField label="password" name="username" className="form--input" fullWidth type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={() => handleSubmit()}>Login</Button>
            </form>

            <style jsx>{`
                form {
                    width: 300px;
                    height: 50%;
                }

                div {
                    display: flex;
                    width: 100%;
                    height: 100vh;
                    align-items: center;
                    justify-content: center;
                }

                .form--input {
                    margin: 10px;
                }
            `}</style>
        </div>
    )
}

export default Login