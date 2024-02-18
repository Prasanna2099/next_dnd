// D:\CS Stuff\next_dnd\app\page.tsx

import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const Page: React.FC = () => {
  return (
    <div style={{ 
      backgroundImage: `url("/SU.png")`, // Update the URL with the path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      fontFamily: 'Times New Roman, Arial, sans-serif', // Apply Times New Roman as the font
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* Navbar */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '0 20px' }}>
          {/* Specify the href prop to navigate to the login page */}
          <Link href="/login">
            <button className="navbar-button">Log In / Sign Up</button>
          </Link>
        </div>
        {/* Other Navbar buttons */}
        <div style={{ margin: '0 20px' }}>
          <button className="navbar-button">Admin Connect</button>
        </div>
        <div style={{ margin: '0 20px' }}>
          <button className="navbar-button">Player / Admin</button>
        </div>
        <div style={{ margin: '0 20px' }}>
          <button className="navbar-button">Admin Panel</button>
        </div>
        <div style={{ margin: '0 20px' }}>
          <Link href="/playerCard"> {/* Link to the Player Card page */}
            <button className="navbar-button">Player Card</button>
          </Link>
        </div>
      </nav>

      {/* Center Box */}
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', padding: '50px', maxWidth: '80%', marginTop: 'auto', marginBottom: 'auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', fontStyle: 'italic' }}>Hello Dungeoneers</h1>
      </div>
    </div>
  );
};

export default Page;
