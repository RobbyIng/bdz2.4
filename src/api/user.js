export const signInFetch = (values) => {
  return fetch('https://api.react-learning.ru/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
}

export const signUpFetch = (values) => {
  return fetch('https://api.react-learning.ru/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
}

export const userDataFetch = async (token) => {
  const res = await fetch(
    'https://api.react-learning.ru/v2/group-11/users/me',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return res
}
