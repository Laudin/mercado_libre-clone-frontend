export const LoginHelper = (user) => {
  if (user.username === 'Morph' && user.password === '1234') {
    return true
  } else {
    return false
  }
}