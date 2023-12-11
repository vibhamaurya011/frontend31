import React, { useState } from 'react';

function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://block31.cyclic.app/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userName,
                    email: email,
                    password: pass,
                    gender: gender
                }),
            });

            const data = await response.json();
            alert("Registration successful:", data);
        } catch (error) {
            alert("Registration error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)} />
            <input type='text' placeholder='Enter Gender' value={gender} onChange={(e) => setGender(e.target.value)} />
            <button type='submit'>Register</button>
        </form>
    );
}

export default Register;
