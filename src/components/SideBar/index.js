import React from 'react'
import './index.css'

const  normalLinks = ["ユーザーボタン１", "ユーザーボタン２"]
const  adminLinks =  ["管理者ボタン１", " 管理者ボタン２"]

const SideBar = props => (
  <aside className="side">
    <ul>
      { normalLinks.map( (text, index) => (
        <li key={index} className="normal-btn radius">
          { text }
        </li>
      ))}
    </ul>
    <ul>
      { adminLinks.map( (text, index) => (
        <li key={index} className="admin-btn radius">
          { text }
        </li>
      ))}
    </ul>
  </aside>
)

export default SideBar
