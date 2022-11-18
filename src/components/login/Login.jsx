import React from 'react';
import { useState } from 'react';
import './login.css';

const Login = () => {

  const [login_signup, setLogin_signup] = useState(true)

  return (
    <div className='loginPage'>
      <div className='form-container'>

        {login_signup ?

          <form className='signIn'>
            <div className='loginIconContainer'>
              <img src="https://img.freepik.com/free-vector/cute-astronaut-chill-relaxation-game-controller-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3717.jpg?w=2000" className='loginIcon' />
            </div>
            <div className='loginEmail'>
              <label> Email:</label>
              <input type="email" placeholder=""></input>
            </div>
            <div className='loginPassword'>
              <label> Password:</label>
              <input type="password" placeholder=""></input>
            </div>
            <div className='startBtnContainer'>
              <button className='startBtn' type="submit">Start</button>
            </div>
            <div className='loginBtn'>
              <p> <a href="#" onClick={() => { setLogin_signup(false) }}>Sign Up</a></p>
              <p> Forgot <a href="#">password</a>?</p>
            </div>
          </form>

          :

          <form className='signIn'>
            <div className='loginIconContainer'>
              <img src="https://img.freepik.com/free-vector/cute-astronaut-chill-relaxation-game-controller-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3717.jpg?w=2000" className='loginIcon' />
            </div>
            <div>
              <label> Name</label>
              <input type="text" placeholder=""></input>
            </div>
            <div className='loginEmail'>
              <label> Email:</label>
              <input type="email" placeholder=""></input>
            </div>
            <div>
              <label> Country</label>
              <input type="text" placeholder=""></input>
            </div>
            <div className='loginPassword'>
              <label> Password</label>
              <input type="password" placeholder=""></input>
            </div>
            <div className='startBtnContainer'>
              <button className='startBtn' type="submit">Start</button>
            </div>
            <div className='signUpBtn'>
              <p> <a href="#" onClick={() => { setLogin_signup(true) }}>Already have an account?</a></p>
            </div>
          </form>

        }

      </div>
    </div>
  )
}

export default Login