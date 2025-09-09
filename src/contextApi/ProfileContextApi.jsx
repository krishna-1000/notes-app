import React, {  createContext, useState } from 'react'
export const ProfileContext = createContext();
const ProfileProvider = ({children}) => {
  const [isProfileopen,setIsProfileOpen] = useState(false);

  return (
    <ProfileContext.Provider value={{isProfileopen,setIsProfileOpen}}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider
