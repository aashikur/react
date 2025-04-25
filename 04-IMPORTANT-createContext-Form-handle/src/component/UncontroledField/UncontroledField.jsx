import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('') 
    const passwordRef = useRef('')
    const nameRef = useRef('')
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log('\nName  :',nameRef.current.value)
        console.log('Email :',emailRef.current.value)
        console.log('Pwd   :', passwordRef.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" defaultValue={'your name'}/>
                <br />
                <input ref={emailRef} type="email" name="email" defaultValue={'a@b.com'}/>
                <br />
                <input ref={passwordRef} type="password" name="password" defaultValue={'pas1234'}/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;