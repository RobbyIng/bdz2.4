export const LC_NAMING = 'redux_superStore'

export const myInitialState = {
  user: {},
  filter: {
    search: ''
  }
  // cart
  // favorites
}

export const getInitialState = () => {
  const data = localStorage.getItem(LC_NAMING);

  return data ? JSON.parse(data) : myInitialState
}
