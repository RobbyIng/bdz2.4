import { useEffect } from 'react'
import { ProductItem } from '../Product'
import './index.css'
import { fetchDataProducts } from '../../api/products'
import { TOKEN } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export const ProductList = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (!token) navigate('/')
  }, [navigate])

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['getAllProduct'],
    queryFn: () => {
      const token = localStorage.getItem(TOKEN)
      const responce = fetchDataProducts(token)
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
        {data.products.map((productItem) => {
          return <ProductItem key={productItem._id} productItem={productItem} />
        })}
      </div>
    )
}
