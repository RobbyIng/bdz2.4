import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.user)

  useEffect(() => {
    if (!token) navigate('/')
  }, [navigate, token])

  return { token }
}
