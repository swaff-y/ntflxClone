import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/apiCall';

const Login = (props) => {
  let navigate = useNavigate();
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state=>state.user);
  const user = useSelector(state=>state.user.currentUser);

  const handleSignupClick = (e) => {
    navigate(`/register`, {replace: true });
  }

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  }

  useEffect(()=>{
    if(user?.accessToken) {
      localStorage.ntflx_user = user._id;
      localStorage.ntflx_accessToken = user.accessToken;
      navigate(`/`, {replace: true });
    }
  },[user])

   return(
    <div
      className="login"
      data-test="component-login"
    >
        <div className="top">
          <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input 
              type="text" 
              className="email" 
              placeholder="email or phone number"
              onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
              type="password" 
              className="password" 
              placeholder="password" 
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button 
              className="loginButton"
              onClick={handleClick}
              disabled={isFetching}
            >
              Sign In
            </button>
            { 
              error 
              && 
              <span 
                className="errorMsg"
              >
                Incorrect login details
              </span> 
            }
            <span>New to Netflix? <b onClick={handleSignupClick}>Sign up now.</b></span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn More.</b>
            </small>
          </form>
        </div>
    </div>
   )
 }

export default Login
