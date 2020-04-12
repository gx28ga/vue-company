export const setReload = (reload) => {
  sessionStorage.setItem('flag', reload)
}

export const getReload = () => {
  sessionStorage.getItem('flag')
}
