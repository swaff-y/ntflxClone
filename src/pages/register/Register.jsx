import React, { useRef, useState } from 'react';
import "./register.scss";

const Register = (props) => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = (e) => {
    setEmail(emailRef.current.value); 
  }

  const handleFinish = (e) => {
    setPassword(passwordRef.current.value); 
  }
   return(
    <div
      className="register"
      data-test="component-register"
    >
        <div className="top">
          <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            <button className="loginButton">Sign In</button>
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, tv shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          {
            !email 
            ?
            (
              <div className="input">
                <input type="email" placeholder="Email Address" ref={emailRef} />
                <button className="registerButton" onClick={handleStart}>Get Started</button>
              </div>

            )
            :
            (
              <form className="input">
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button className="registerButton" onClick={handleFinish}>Start</button>
              </form>              
            )
          }
        </div>
    </div>
   )
 }

export default Register
