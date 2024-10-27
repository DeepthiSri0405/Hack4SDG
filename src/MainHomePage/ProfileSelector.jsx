import React from 'react';
import '../MainHomePage/AppProfile.css';
import { Link } from 'react-router-dom';

const ProfileSelector = () => {
  return (
    <div className="profile-container">
      <h2>Choose your profile</h2>
      <img src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" alt="Profile Icon" className="profile-icon" />
      <button className="profile-button btn" > <Link to='/User'>User</Link> </button>
      <button className="profile-button btn"><Link to='/Worker'>Worker</Link></button>
      <button className="profile-button btn"><Link to='/Officer'>Officer</Link></button>
    </div>
  );
};

export default ProfileSelector;


