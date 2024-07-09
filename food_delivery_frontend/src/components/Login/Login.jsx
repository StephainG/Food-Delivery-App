import React, {useState} from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login")

  return (
      <div className='login'>
          <form className="login-container">
              <div className='login-title'>
                  <h2>{currentState}</h2>
                  <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
              </div>
              <div className="login-inputs">
                  {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                  <input type="email" placeholder='Your Email' required />
                  <input type="password" placeholder='Password' required />
              </div>
              <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
              <div className="login-condition">
                  <input type="checkbox" required />
                  <p>By clicking, I agree to the terms and condition of use & privacy policy</p>
              </div>
              {currentState === 'Login' ? <p className='login-condition-paragraph'>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p> : <p className='login-condition-paragraph'>Already have an account? <span onClick={()=> setCurrentState("Login")}>Login</span></p>}
          </form>
    </div>
  )
}

export default Login