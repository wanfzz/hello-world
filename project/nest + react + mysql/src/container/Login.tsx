import React, { useState } from 'react';

const Login = () => {

  const [active, setActive] = useState<string>('login')

  return (
    <div>
      <button onClick={() => setActive('login')}>LOGIN</button>
      <button onClick={() => setActive('registered')}>REGISTERED</button> <br />
      {
        active === 'login' ?
          <>
            <div>
              <input type="text" name="" id="" />
            </div>
            <div>
              <input type="password" name="" id="" />
            </div>
            <button>SUBMIT</button>
          </> :
          <>
            <div>
              <input type="text" name="" id="" />
            </div>
            <div>
              <input type="password" name="" id="" />
            </div>
            <div>
              <input type="password2" name="" id="" />
            </div>
            <button>SUBMIT</button>
          </>
      }
    </div>
  )
}

export default Login
