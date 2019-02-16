import React from 'react'
import './index.css'

const Avatar = ({ user }) => (
  <div>
    <span className="user-nickname">{ user.displayName }</span>
    <img src={user.photoURL} alt={user.displayName} />
  </div>
);

export default Avatar;
