import React, { useState } from 'react';

function AddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [device, setDevice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
            
            const response = await fetch('https://block31.cyclic.app/posts/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    device: device
                }),
            });

            const data = await response.json();

            // Handle success response
            if (response.ok) {
                console.log("Post added successfully:", data);
                // Optionally, redirect the user or perform additional actions
            } else {
                console.error("Failed to add post:", data.error);
            }
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder='Enter Body' value={body} onChange={(e) => setBody(e.target.value)} />
            <input type='text' placeholder='Enter Device' value={device} onChange={(e) => setDevice(e.target.value)} />
            <button type='submit'>Add Post</button>
        </form>
    );
}

export default AddPost;
