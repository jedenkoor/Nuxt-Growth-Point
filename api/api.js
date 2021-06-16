import { API_BASE_URL } from '@/api/config.js'

export default {
  async fetchApi(
    url,
    method = 'GET',
    data,
    headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  ) {
    const params = {
      method,
      headers,
      body: data
    }

    const response = await fetch(`${API_BASE_URL}/${url}`, params)
    const json = await response.json()

    if (!response.ok) {
      const e = new Error('Error')
      e.message = json.error.message
      e.code = json.error.code
      e.request = json.error.request
      throw e
    }

    return json
  }
}
