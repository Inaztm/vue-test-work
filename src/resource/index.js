import AuthProvider from './auth_provider'
import NewsProvider from './news_provider'

export const AuthService = new AuthProvider('auth')
export const PostService = new NewsProvider('news')
