import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const useAuthContext = () => {
  const [authDetails, setAuthDetails] = useState({})

  return { authDetails, setAuthDetails }
}
