import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

export const ProductItem = ({ productItem }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.cardProduct}>
      <div
        className={styles.cardMain}
        onClick={() => navigate(`/products/${productItem._id}`)}
      >
        <img
          src={productItem.pictures}
          className={styles.imgCardProduct}
          alt="Изображение корма для собак"
        />
        <div className={styles.cardBody}>
          <p className={styles.cardTitle}>Цена: {productItem.price}</p>
          <p className={styles.cardAmount}>{productItem.stock} шт</p>
          <p>{productItem.name}</p>
        </div>
      </div>
      <div className="btnBin">
        <button type="button" data-action="edit" className={styles.addToBin}>
          В корзину
        </button>
      </div>
    </div>
  )
}
