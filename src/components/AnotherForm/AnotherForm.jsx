import React from 'react';

const AnotherForm = ({handleFormData, submitButton = 'Submit', children}) => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleFormData(data)
    }
    return (
        <div>
            {
            children
            }
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder='name' /> <br />
                <input type="email" name="email" placeholder='email' />  <br />
                <input type="password" name="password" placeholder='input password' />  <br />
                <input type="submit" value={submitButton} />
            </form>
        </div>
    );
};

export default AnotherForm;