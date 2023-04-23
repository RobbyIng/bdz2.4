export const fetchDataProducts = async (token) => {
  const res = await fetch('https://api.react-learning.ru/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const responce = await res.json()
  return responce
}
// }

export const fetchCurrentProduct = async (token, params) => {
  const res = await fetch(`https://api.react-learning.ru/products/${params}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (res.ok) {
    const responce = await res.json()
    return responce
  }
}

export const fetchCreateProduct = async (token, values) => {
  const res = await fetch(`https://api.react-learning.ru/products`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (res.ok) {
    const responce = await res.json()
    return responce
  }
}
