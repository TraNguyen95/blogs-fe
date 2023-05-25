import http from 'src/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return http.post<any>('/user/register', body)
  }
}
export default authApi
