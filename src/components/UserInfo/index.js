import React, { useContext } from 'react'
import Avatar from '../Avatar'
import LogoutButton from '../LogoutButton'
import UserContext from '../../utils/UserContext'

const UserInfo = () => {

  const userData = useContext(UserContext)

  return (
    <div>
      { userData &&
        <div>
          <Avatar user={ userData }/>
          <LogoutButton />
        </div>
      }
    </div>
  )
}

export default UserInfo
