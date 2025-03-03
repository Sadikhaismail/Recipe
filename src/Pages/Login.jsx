import React from 'react';
import ImageOne from './1a956126b3b95792ba72e863f6dccb12.jpg';
import ImageTwo from './recipe.svg';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

import './Login.css';

function Login() {
  return (
    <div className='loginmain'>
      <div className='loginimage1div'>
        <img src={ImageOne} className="loginimage" alt="Chicken" />
      </div>

      <div className='loginimage2div'>
        <img src={ImageTwo} className="loginlogo" alt="Logo" />
        <h1 className='loginlog'>
          Log in
        </h1>

        <p className='loginquote'>
          Log in to save and review your favorite <br /> recipes.
        </p>

        <div className='logininputarea'>
          <Link to={'/email'} className='emaillinklogin'>
            <MdEmail size={27} className='email-icon' />
       <p className='loginheademail'>   Login with Email </p>
          </Link>

          <button className='loginarea facebook-button'>
            <FaFacebook size={24}  className='loginfaceicon facebook-icon' />
            Login with Facebook
          </button>

          <button className='loginarea google-button'>
            <FaGoogle size={24} className='loginfaceicon google-icon' />
            Login with Google
          </button>
        </div>
        <p>Don't have an account? <Link to={'/joinnow'} className='loginjoinnow'>Join now</Link></p>
      </div>
    </div>
  );
}

export default Login;
