export default function guestOnly (to, from, next) {
  if (localStorage.getItem('auth_id')) {
    next({name: 'index'})
  }

  return next()
}
