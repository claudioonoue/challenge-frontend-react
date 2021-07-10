export const setLocalStorage = (key: string, value: string): boolean => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value)
    return true
  }
  return false
}

export const getLocalStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
  return null
}
