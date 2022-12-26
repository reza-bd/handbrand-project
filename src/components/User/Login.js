import React from "react";
import { Link } from "react-router-dom";
import "./form.css";
const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="box-title">Login</h2>
        <div>
          <form className="user-container">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" required />
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </form>
          <p className="extra-option">New Here,don't worry!!<Link to={'/signup'}>Create new account.</Link></p>
          <p className="or">or</p>
          <button className="google-singin">Coninue with GOOGLE</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
