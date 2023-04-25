import { userDataFetch } from '../../api/user'
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { cleanUser } from '../../redux/slices/userSlice'
import { useAuth } from '../../hooks/useAuth'

export const UserData = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { token } = useAuth()

  const handleExit = () => {
    dispatch(cleanUser())
    return navigate('/')
  }

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['getUserData'],
    queryFn: async () => {
      const res = await userDataFetch(token)
      return res.ok ? await res.json() : res
    },
  })
  if (isLoading) return <p>Идет загрузка...</p>
  if (isError) return <p>Произошла ошибка: {error}</p>
  if (data.statusText) return <p>Произошла ошибка: {data.statusText}</p>

  return (
    <div className={styles.userDataForm}>
      <div className={styles.userDataList}>
        <h1>Личный кабинет</h1>
        <p className={styles.pName}>{data.name}</p>
        <img className={styles.imgAvatar} src={data.avatar} alt="" />
        <p className={styles.p}>Группа: {data.group}</p>
        <p className={styles.p}>email: {data.email}</p>
        <p className={styles.p}>О себе: {data.about}</p>
        <Link className={styles.linkStyle} to={'/products'}>
          Главная страница
        </Link>
        <Link
          id="exit"
          className={styles.linkStyle}
          to="/"
          onClick={handleExit}
        >
          Выход из сервисов
        </Link>
      </div>
    </div>
  )
}
