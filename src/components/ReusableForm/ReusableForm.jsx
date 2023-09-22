/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ReusableForm = ({handleForm, formTitle, submitBtnText = 'Submit', children}) => {

    // const handleForm = e => {
    //     e.preventDefault();
    // }

    const handleSignUp = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        handleForm(data)
    }

    return (
        <div>
            {/* <h2>{formTitle}</h2> */}

            {
                children
            }
             <form onSubmit={handleSignUp}>
                <input type="text" name="name" id=""  placeholder='Enter Your Name' /> <br />
                <input type="email" name="email" id="" placeholder='Enter Your Email' /> <br />
                <input type="text" name="phone" id="" placeholder='Enter Your Phone' /><br />
                <br /> <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;