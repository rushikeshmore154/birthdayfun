import React, { useState } from 'react';
import './Question1.css'; // Optional: for styling

function Question1() {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "Panda") {
            alert("Try again or here's a hint: It's a Prani(tuzyasarkha)!");
            setName(''); // Clear the input field
        }
        console.log('Name submitted:', name);
        // Handle form submission here
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="question-no">Question 1</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">What is your name?</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Question1;