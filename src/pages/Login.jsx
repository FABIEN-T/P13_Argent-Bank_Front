import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import React from 'react'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'

import '../main.css'

export default function Login() {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm()
  //   const onSubmit = (data) => console.log(data)
  //   console.log(errors)

  return (
    <div className="container">
      <Header />
      {/* <main classNameName="main bg-dark">
        <section classNameName="sign-in-content">
          <i classNameName="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div classNameName="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                //   placeholder="Username"
                {...register('Username', {})}
                id="username"
              />
            </div>
            <div classNameName="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                // placeholder="Password"
                {...register('Password', {})}
                id="password"
              />
            </div>
            <div classNameName="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" classNameName="sign-in-button" />
          </form>
        </section>
      </main> */}
      {/* <div className="provi"> */}
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <a href="./user.html" className="sign-in-button">
              Sign In
            </a>
            {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button className="sign-in-button">Sign In</button> -->
          <!--  --> */}
          </form>
        </section>
      </main>
      {/* </div> */}
      <Footer />
    </div>
  )
}
