import { ProductItem } from '../../components/Product'
import './index.css'
import { fetchSearchProducts } from '../../api/products'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useAuth } from '../../hooks/useAuth'

export const ProductList = () => {
  const { token } = useAuth()
  const { search } = useSelector((state) => state.filter)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getAllProduct', search],
    queryFn: () => {
      const responce = fetchSearchProducts(token, search)
      return responce
    },
    // enabled:  !!token
  })
  if (isLoading) return <p>Идет загрузка...</p>
  if (isError) return <p>Произошла ошибка: {error}</p>
  if (data.err) return <p>Произошла ошибка: {data.message}</p>
  if (data)
    return (
      <div className="cardProductList">
        {data.map((productItem) => {
          return <ProductItem key={productItem._id} productItem={productItem} />
        })}
      </div>
    )
}
