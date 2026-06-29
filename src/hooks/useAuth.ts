
import { useState } from "react"
import { loginRequest } from "../utils/api"
import type { LoginCredentials } from "../types/auth.types"
// import { LoginCredentials } from "../types/auth.types"

export const useAuth = () => {

  const [loading,setLoading] = useState(false)
  const [error,setError] = useState<string | null>(null)

  const login = async (credentials: LoginCredentials) => {

    try{

      setLoading(true)
      setError(null)

      const data = await loginRequest(credentials)

      localStorage.setItem("token", data.token)

      return data

    }catch(err:any){

      setError(err.message)

    }finally{
      setLoading(false)
    }
  }

  return { login, loading, error }
}