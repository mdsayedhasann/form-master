/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const TestReusableForm = ({handleForm, handleSubmit = 'Submit', children} ) => {

    const handleFormSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        handleForm(data)
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.phone.value = ''
    }
    return (
        <div>
            {
                children
            }
            <form onSubmit={handleFormSubmit}>
                <input type="text" name='name' /> <br />
                <input type="email" name='email'/> <br />
                <input type="text" name='phone'/><br />
                <input type="submit" value={handleSubmit}/>
            </form>
        </div>
    );
};

export default TestReusableForm;