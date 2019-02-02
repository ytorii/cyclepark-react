import React from 'react'
import Avatar from '../Avatar'

const user = {
  image: "https://avatars1.githubusercontent.com/u/10824691?s=40&v=4",
  nickname: "YTorii"
}

const UserInfo = props => (
  <Avatar user={ user }/>
)

export default UserInfo
