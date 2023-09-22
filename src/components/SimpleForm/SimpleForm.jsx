import React from 'react';

const SimpleForm = () => {
    const handleForm = e => {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" id=""  placeholder='Enter Your Name' /> <br />
                <input type="email" name="email" id="" placeholder='Enter Your Email' /> <br />
                <input type="text" name="phone" id="" placeholder='Enter Your Phone' /><br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default SimpleForm;