import { useState } from 'react';
import './EventDemo.css';

function EventDemo() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {

        event.preventDefault();

        setSubmitted(true);

    }

    return (
        <div className="event-container">

            <h1>Product Store Registration</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit">
                    Submit
                </button>

            </form>

            {submitted && (
                <div>
                    <h2>Registration Successful!</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            )}
        <h1>Product Store</h1><br />
        <form action="" on></form>
        </div>
    );
}

export default EventDemo;