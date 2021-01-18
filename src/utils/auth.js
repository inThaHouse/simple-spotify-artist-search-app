const toAuthDetails = (accumulator, item) => {
  if (item) {
    const [key, value] = item.split('=')
    accumulator[key] = decodeURIComponent(value)
  }

  return accumulator
}

export const checkAuthInfo = (hash) => {
  return hash.substring(1).split('&').reduce(toAuthDetails, {})
}
