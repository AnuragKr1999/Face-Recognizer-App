import React, {useState} from "react";

export default function Signin( {onRouteChange, loadUser} ) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitSignIn = () => {
    fetch('http://localhost:5000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user)
          onRouteChange('home');
        }
      })
  }

  return (
    <div className="courier-new w-90 black mw6 center relative cover bg-top mt1">
      <div
        id="overlay"
        className="absolute absolute--fill bg-light-purple o-50 z-unset shadow-3"
      ></div>

      <div className="relative pa4 pa5-m">
        <h1 className="tracked ma0 mb4 pv3">Sign In</h1>
          <div className="mb3">
            <label htmlFor="email" className="db f6 ttu ph2 mb2">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={onEmailChange}
              className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
            />
          </div>
          <div className="mb4">
            <label htmlFor="password" className="db f6 ttu ph2 mb2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onPasswordChange}
              className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
            />
          </div>
          <div>
            <button
                className="input-reset db w-100 f6 b ttu tracked pv3 ph3 pointer bg-hot-pink hover-bg-blue bn br-pill"
                onClick={onSubmitSignIn}
                value="signin"
            >
              Sign In
            </button>
          </div>

        <div className="tc b f6 mt4 o-70 glow pa2 i">
          New Member? <p className="pointer underline" onClick={() => onRouteChange('register')}>Register</p>
        </div>
      </div>
    </div>
  );
}

