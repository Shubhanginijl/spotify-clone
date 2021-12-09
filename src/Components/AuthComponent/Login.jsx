import React from "react";
import Logo from "../../Pages/HeaderComponents/Logo";
import "./auth.css";
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="line"></div>

        <div className="authContent1">
          <h3 id="continue">To continue, log in to Spotify.</h3>
          <button className="facebook">Continue with Facebook</button>
          <button className="apple">Continue with Apple</button>
          <button className="google">Continue with google</button>
          <button className="number">Continue with phone number</button>
          <p className="orBlock1">
            <strong>or</strong>
          </p>
              </div>
              <LoginForm/>
      </article>
    </section>
  );
};

export default Login;
