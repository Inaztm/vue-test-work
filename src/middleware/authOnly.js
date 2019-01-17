export default function authOnly (to, from, next) {
  if (!localStorage.getItem('auth_id')) {
    next({name: 'login'})
  }

  return next()
}
