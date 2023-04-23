import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import { useEffect } from 'react'
import { TOKEN } from '../../utils/constants'

export const BasketList = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem(TOKEN)
        if (!token) navigate('/')
      }, [navigate])

    return (
        <h1 className={styles.userDataForm}>Список товаров в корзине</h1>
    )
}