import "./login.scss";

const Login = (props) => {

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
            <input type="text" className="email" placeholder="email or phone number" />
            <input type="text" className="password" placeholder="password" />
            <button className="loginButton">Sign In</button>
            <span>New to Netflix? <b>Sign up now.</b></span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn More.</b>
            </small>
          </form>
        </div>
    </div>
   )
 }

export default Login
