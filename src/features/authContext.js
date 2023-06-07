import React,{useState} from 'react'
const AuthContext=React.createContext()
export const AuthProvider = AuthContext.Provider;
export default AuthContext;