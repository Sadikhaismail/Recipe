import React, { useState } from 'react';
import ImageOne from './1a956126b3b95792ba72e863f6dccb12.jpg';
import ImageTwo from './recipe.svg';
import './NewEmail.css';

function NewEmail() {
    const [password, setPassword] = useState('');
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [isNotEmail, setIsNotEmail] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);

    const validatePassword = (value) => {
        setPassword(value);
        setIsLengthValid(value.length >= 8);
        setIsNotEmail(!value.includes('@'));
        setHasUppercase(/[A-Z]/.test(value));
        setHasLowercase(/[a-z]/.test(value));
        setHasNumber(/[0-9]/.test(value));
    };

    const isFormValid = isLengthValid && isNotEmail && hasUppercase && hasLowercase && hasNumber;

    return (
        <div className='newemailmain'>
            <div className='newemailimage1div'>
                <img src={ImageOne} className="newemailimage" alt="Chicken" />
            </div>

            <div className='newemailimage2div'>
                <img src={ImageTwo} className="newemaillogo" alt="Logo" />
                <h1 className='newemaillog'>Create an account</h1>
                <h3 className='newemailemail'>Email Address</h3>
                <input type="text" placeholder='yourname@example.com' className='newemailinputarea'/>
                <h3 className='newemailpassword'>Password</h3>
                <input
                    type="password"
                    placeholder='Enter Your Password'
                    className='newemailinputarea'
                    value={password}
                    onChange={(e) => validatePassword(e.target.value)}
                />
                <div className='rules'>
                    <div className={`rule ${isLengthValid ? 'valid' : ''}`}>
                        <span className='checkboxpassword'></span>
                        <p className='conditions'>At least 8 characters</p>
                    </div>
                    <div className={`rule ${isNotEmail ? 'valid' : ''}`}>
                        <span className='checkboxpassword'></span>
                        <p className='conditions'>Is not the email address</p>
                    </div>
                    <div className={`rule ${hasUppercase ? 'valid' : ''}`}>
                        <span className='checkboxpassword'></span>
                        <p className='conditions'>One uppercase letter</p>
                    </div>
                    <div className={`rule ${hasLowercase ? 'valid' : ''}`}>
                        <span className='checkboxpassword'></span>
                        <p className='conditions'>One lowercase letter</p>
                    </div>
                    <div className={`rule ${hasNumber ? 'valid' : ''}`}>
                        <span className='checkboxpassword'></span>
                        <p className='conditions'>One number</p>
                    </div>
                </div>

                <button 
                    className={`newemailloginButton ${isFormValid ? 'enabled' : ''}`} 
                    disabled={!isFormValid}
                >
                    Join Now
                </button>
            </div>
        </div>
    );
}

export default NewEmail;
