import React from 'react'
import './index.css'

const Avatar = ({ user }) => (
  <div>
    <span className="nickname">{ user.nickname }</span>
    <img src={user.image} alt={user.nickname} />
  </div>
);

export default Avatar;
