import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.css'
import { TOKEN } from '../../utils/constants'
import { fetchCurrentProduct } from '../../api/products'
import { useQuery } from '@tanstack/react-query'

export const CurrentProduct = () => {
  const { idOfProduct } = useParams()

  const navigate = useNavigate()

  const {
    data: prodCurrentItem,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['getCurrentProduct'],
    queryFn: () => {
      const token = localStorage.getItem(TOKEN)
      const responce = fetchCurrentProduct(token, idOfProduct)
      return responce
    },
    // enabled:  !!token
  })
  if (isLoading) return <p>Идет загрузка...</p>
  if (isError) return <p>Произошла ошибка: {error}</p>
  if (prodCurrentItem.err)
    return <p>Произошла ошибка: {prodCurrentItem.message}</p>
  if (prodCurrentItem)
    return (
      <div className={styles.cardProduct}>
        <h3 className={styles.userDataForm}>Подробная информация о продукте</h3>
        <img
          src={prodCurrentItem.pictures}
          className={styles.imgCurrent}
          alt="Изображение корма для собак"
        />
        <div className={styles.cardBody}>
          <p className={styles.cardTitle}>Цена: {prodCurrentItem.price}</p>
          <p className={styles.cardAmount}>{prodCurrentItem.stock} шт</p>
          <p className={styles.pcardBody}>{prodCurrentItem.name}</p>
        </div>
        <button
          className={styles.btnBin}
          type="button"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </div>
    )
}
