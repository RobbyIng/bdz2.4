import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { changeSearchValue } from '../../redux/slices/filterSlice'
import styles from './index.module.css'

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchValue, setSearchValue] = useState(() => {
    const firstSearch = searchParams.get('search')

    return firstSearch ? firstSearch : ''
  })
  const dispatch = useDispatch()
  const debounceValue = useDebounce(searchValue, 500)

  // console.log(debounceValue)

  useEffect(() => {
    dispatch(changeSearchValue(debounceValue))
  }, [debounceValue, dispatch])

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    // console.log(event.target.value)

    // console.log(`before ${searchParams}`)

    if (!event.target.value) searchParams.delete('search')

    const params = {}
    searchParams.forEach((value, key) => (params[key] = value))
    // console.log(`after ${params}`)
    return setSearchParams({ ...params, search: event.target.value })
  }

  return (
    <input
      value={searchValue}
      className={styles.search}
      onChange={handleChange}
      placeholder="Поиск"
    />
  )
}
