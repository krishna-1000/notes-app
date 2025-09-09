import React, { useContext } from 'react'
import { ProfileContext } from '../contextApi/ProfileContextApi'

export const useProfile = ()=>{
    const context = useContext(ProfileContext);
    return context;
}
