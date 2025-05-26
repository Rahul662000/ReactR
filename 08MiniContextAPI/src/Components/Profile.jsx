import React from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const { user } = React.useContext(UserContext) 

  if(!user) {
    return <h2>Please log in to view your profile</h2>
  }
    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.userName}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Profile
