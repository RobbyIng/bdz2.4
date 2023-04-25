import styles from './index.module.css'
import { useAuth } from '../../hooks/useAuth'

export const BasketList = () => {
  useAuth()

  return <h1 className={styles.userDataForm}>Список товаров в корзине</h1>
}
