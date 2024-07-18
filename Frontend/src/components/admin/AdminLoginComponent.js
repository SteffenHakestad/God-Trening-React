import React, { useState } from 'react';

export default function AdminLoginComponent( { onLogin } ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div id="admin-container">
            <h1>Administrator Login</h1>
            <div className='admin-divider'></div>
                <form id="admin-login-form" onSubmit={handleLogin}>
                    <div id="admin-login-container">
                        <div className='label-container admin-inner-container'>
                            <label className="login-label" htmlFor="username">Admin Brukernavn:</label>
                            <label className="login-label" htmlFor="password">Admin Passord: </label>
                        </div>
                        <div className='input-container admin-inner-container'>
                            <input onChange={(e) => setUsername(e.target.value)} className="login-input" type="text" id="username" name="username" placeholder='Brukernavn'/>
                            <input onChange={(e) => setPassword(e.target.value)} className="login-input" type="password" id="password" name="password" placeholder='Passord'/>
                        </div>
                    </div>
                    <button className='login-btn std-btn' type="submit">Logg inn</button>

                </form>
        </div>

    );
}


