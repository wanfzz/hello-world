import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components'
import anime from 'animejs';

const Container = styled.div`
  background: #e2e2e5;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  place-content: center;
  width: 100%;
  @media (min-width: 767px) {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .container {
    display: flex;
    height: 320px;
    margin: 0 auto;
    width: 640px;
    @media (max-width: 767px) {
      flex-direction: column;
      height: 630px;
      width: 320px;
    }
  }
  .left {
    background: white;
    height: calc(100% - 40px);
    top: 20px;
    position: relative;
    width: 50%;
    @media (max-width: 767px) {
      height: 100%;
      left: 20px;
      width: calc(100% - 40px);
      max-height: 270px;
    }
  }
  .login {
    font-size: 50px;
    font-weight: 900;
    margin: 50px 40px 40px;
  }
  .eula {
    color: #999;
    font-size: 14px;
    line-height: 1.5;
    margin: 40px;
  }
  .right {
    background: #474A59;
    box-shadow: 0px 0px 40px 16px rgba(0,0,0,0.22);
    color: #F1F1F2;
    position: relative;
    width: 50%;
    @media (max-width: 767px) {
      flex-shrink: 0;
      height: 100%;
      width: 100%;
      max-height: 350px;
    }
  }
  svg {
    position: absolute;
    width: 320px;
  }
  path {
    fill: none;
    stroke: url(#linearGradient);;
    stroke-width: 4;
    stroke-dasharray: 240 1386;
  }
  .form {
    margin: 40px;
    position: absolute;
  }
  label {
    color:  #c2c2c5;
    display: block;
    font-size: 14px;
    height: 16px;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  input {
    background: transparent;
    border: 0;
    color: #f2f2f2;
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    outline: none !important;
    width: 100%;
  }
  input::-moz-focus-inner { 
    border: 0; 
  }
  #submit {
    color: #707075;
    margin-top: 40px;
    transition: color 300ms;
  }
  #submit:focus {
    color: #f2f2f2;
  }
  #submit:active {
    color: #d0d0d2;
  }
`
// https://codepen.io/ainalem/pen/EQXjOR
const Login = () => {
  const animationRef = useRef<any>();
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    animationRef.current = anime({
      targets: 'path',
      strokeDashoffset: {
        value: progress,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: `${progress === -730 ? 530 : 240} 1386`,
        duration: 700,
        easing: 'easeOutQuart'
      }
    })
  }, [progress])

  return (
    <Container>
      <div className='container'>
        <div className='left'>
          <div className='login'>Login</div>
          <div className='eula'>By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
        </div>
        <div className='right'>
          <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 320 300'>
            <defs>
              {/* <linearGradient inkscape:collect='always' id='linearGradient' x1='13' y1='193.49992' x2='307' y2='193.49992' gradientUnits='userSpaceOnUse'> */}
              <linearGradient id='linearGradient' x1='13' y1='193.49992' x2='307' y2='193.49992' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#ff00ff' offset='0' id='stop876' />
                <stop stopColor='#ff0000' offset='1' id='stop878' />
              </linearGradient>
            </defs>
            <path d='m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143' />
          </svg>
          <div className='form'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onFocus={e => setProgress(0)} />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onFocus={e => setProgress(-336)} />
            <input type='submit' id='submit' value='Submit' onFocus={e => setProgress(-730)} />
          </div>
        </div>
      </div>
    </Container >
  )
}

export default Login
