
import HttpRequest from './http_request'

class AuthProvider extends HttpRequest {
  login (data) {
    return this.create('/validate', data)
  }

  getUser (id) {
    return this.fetch('/user-info/' + id, {})
  }
}

export default AuthProvider
