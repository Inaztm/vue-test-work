
import HttpRequest from './http_request'

class NewsProvider extends HttpRequest {
  getPosts () {
    return this.fetch('/news', {})
  }
}

export default NewsProvider

