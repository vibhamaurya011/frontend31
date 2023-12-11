import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://block31.cyclic.app/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: pass,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                document.cookie = `accessToken=${data.token}; path=/`; 
                alert("Login successful:", data);
            } else {
                alert("Login failed:", data.error);
            }
        } catch (error) {
            alert("Login error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    );
}

export default Login;
