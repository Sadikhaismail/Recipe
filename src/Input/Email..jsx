import React, { useState } from 'react';
import ImageOne from './1a956126b3b95792ba72e863f6dccb12.jpg';
import ImageTwo from './recipe.svg';
import './Email.css';

function Email() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // Clear email error if email is valid
        if (e.target.value.endsWith('@gmail.com') || e.target.value === '') {
            setError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // Clear password error if password is valid
        if (e.target.value.length >= 8 || e.target.value === '') {
            setPasswordError('');
        }
    };

    const handleLoginClick = () => {
        let emailError = '';
        let passError = '';

        // Email validation
        if (!email.endsWith('@gmail.com') && email !== '') {
            emailError = 'Email must end with @gmail.com';
        }

        // Password validation
        if (password.length < 8) {
            passError = 'Password must contain at least 8 characters';
        }

        // Set error messages if validation fails
        setError(emailError);
        setPasswordError(passError);

        if (!emailError && !passError) {
            // Proceed with login logic
            alert('Logging in...');
        }
    };

    return (
        <div className='emailmain'>
            <div className='emailimage1div'>
                <img src={ImageOne} className="emailimage" alt="Chicken" />
            </div>

            <div className='emailimage2div'>
                <img src={ImageTwo} className="emaillogo" alt="Logo" />
                <h1 className='emaillog'>Log in with email</h1>
                <h3 className='emailemail'>Email Address</h3>
                <input
                    type="text"
                    placeholder='yourname@example.com'
                    className='emailinputarea'
                    value={email}
                    onChange={handleEmailChange}
                />
                {error && <p className='emailerror'>{error}</p>}
                <h3 className='emailpassword'>Password</h3>
                <input
                    type="password"
                    placeholder='Enter Your Password'
                    className='emailinputarea'
                    value={password}
                    onChange={handlePasswordChange}
                />
                {passwordError && <p className='emailerror'>{passwordError}</p>}

                <div className='emailcheckboxContainer'>
                    <input type="checkbox" id="keepLoggedIn" className='keepLoggedInCheckbox' />
                    <label htmlFor="keepLoggedIn" className='emailkeepLoggedInLabel'>Keep me logged in</label>
                </div>

                <button className='emailloginButton' onClick={handleLoginClick}>Log In</button>
                <a href="/forgot-password" className='emailforgotPassword'>
                    Forgot password?
                </a>

            </div>
        </div>
    );
}

export default Email;
