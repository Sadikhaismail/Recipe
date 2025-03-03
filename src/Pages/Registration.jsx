import React from 'react';
import ImageOne from './1a956126b3b95792ba72e863f6dccb12.jpg';
import ImageTwo from './recipe.svg';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

import './Registration.css';

function Registration() {
  return (
    <div className='regimain'>
      <div className='regiimage1div'>
        <img src={ImageOne} className="regiimage" alt="Chicken" />
      </div>

      <div className='regiimage2div'>
        <img src={ImageTwo} className="regilogo" alt="Logo" />
        <h1 className='regilog'>
          Create an account
        </h1>

        <p className='regiquote'>
          SignUp to save and review your favorite <br /> recipes.
        </p>

        <div className='regiinputarea'>
          
          <Link to="/email-signup" className='regiarea email-button'>
            <MdEmail size={26} className='regifaceicon email-icon' />
            SignUp with Email
          </Link>

          <button className='regiarea facebook-button'>
            <FaFacebook size={24} className='regifaceicon facebook-icon' />
            SignUp with Facebook
          </button>

          <button className='regiarea google-button'>
            <FaGoogle size={24} className='regifaceicon google-icon' />
            SignUp with Google
          </button>
        </div>
        <p>Have an account? <Link to="/login" className='regijoinnow'>Log in</Link></p>

        <p className='regi-footer-text'>
          By signing up, you agree to the <span className='terms-privacy'>Terms of Service</span> <br />
          and <span className='terms-privacy'>Privacy Policy</span>. If you live in the US you will <br />
          also opt in to Allrecipes email communication.
        </p>
      </div>
    </div>
  );
}

export default Registration;
