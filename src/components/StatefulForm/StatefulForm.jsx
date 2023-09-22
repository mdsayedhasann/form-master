import React, { useEffect, useState } from 'react';

const StatefulForm = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')  


    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 words')
        }else{
            setError('')
            console.log(name, email, password);
        }
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordchange = e => {
        setPassword(e.target.value)
    }


 return (
        <div>
             <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange}  type="text" name="name" id=""  placeholder='Enter Your Name' /> <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='Enter Your Email' /> <br />
                <input onChange={handlePasswordchange} type="text" name="phone" id="" placeholder='Enter Your Phone' /><br />
                <input type="submit" value='Submit' />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;