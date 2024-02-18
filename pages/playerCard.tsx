// D:\CS Stuff\next_dnd\pages\playerCard.tsx

import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import './playerCard.css'; // Import the stylesheet for Player Card page

const Page: React.FC = () => {
  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><Link href="/login">Log In / Sign Up</Link></li>
          <li className="navbar-item"><button className="navbar-button">Admin Connect</button></li>
          <li className="navbar-item"><button className="navbar-button">Player / Admin</button></li>
          <li className="navbar-item"><button className="navbar-button">Admin Panel</button></li>
          <li className="navbar-item"><Link href="/playerCard"><button className="navbar-button">Player Card</button></Link></li> {/* Link to the Player Card page */}
        </ul>
      </nav>

      {/* Split Layout */}
      <div className="split-layout">
        {/* Left half */}
        <div className="left-half">
          <div className="image-container">
            {/* Place your image here */}
            <img src="/omen.jpg" alt="Character Icon" />
          </div>
        </div>
        
        {/* Right half */}
        <div className="right-half">
          <div className="profile-card">
            <h2>My Profile</h2>
            <p>Username: JohnDoe</p>
            <p>Email: johndoe@example.com</p>
            <button className="button">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
