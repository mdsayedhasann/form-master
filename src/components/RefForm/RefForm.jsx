import React, { useEffect, useRef } from 'react';

const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id=""  placeholder='Enter Your Name' /> <br />
                <input ref={emailRef} type="email" name="email" id="" placeholder='Enter Your Email' /> <br />
                <input ref={passRef} type="text" name="phone" id="" placeholder='Enter Your Phone' /><br />
                <input type="submit" value='Submit' />
               
            </form>
        </div>
    );
};

export default RefForm;