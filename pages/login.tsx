// D:\CS Stuff\next_dnd\pages\login.tsx

import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import './styles.css'; // Import the stylesheet

const Login: React.FC = () => {
  return (
    <div className="login-container" style={{backgroundImage: `url("/background.png")`}}>
      {/* Home Button */}
      <div className="home-button">
        <Link href="/">
          <button className="navbar-button">Home</button>
        </Link>
      </div>

      {/* Login Column */}
      <div className="login-column">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <label htmlFor="login-username">Username</label>
            <input type="text" id="login-username" name="login-username" />
          </div>
          <div className="input-container">
            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" name="login-password" />
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>

      {/* Sign-up Column */}
      <div className="signup-column">
        <h2>Sign Up</h2>
        <form>
          <div className="input-container">
            <label htmlFor="signup-username">Username</label>
            <input type="text" id="signup-username" name="signup-username" />
          </div>
          <div className="input-container">
            <label htmlFor="signup-email">Email</label>
            <input type="email" id="signup-email" name="signup-email" />
          </div>
          <div className="input-container">
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" name="signup-password" />
          </div>
          <div className="input-container">
            <label htmlFor="signup-confirm-password">Confirm Password</label>
            <input type="password" id="signup-confirm-password" name="signup-confirm-password" />
          </div>
          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
