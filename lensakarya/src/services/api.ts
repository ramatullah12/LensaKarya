import axios, { type AxiosError } from 'axios'

/**
 * Instance Axios terpusat untuk komunikasi dengan Laravel REST API.
 * - baseURL dapat diatur lewat VITE_API_URL (default "/api", diproxy Vite ke Laravel).
 * - Token Sanctum disimpan di localStorage dan disisipkan otomatis sebagai Bearer token.
 */
export const TOKEN_KEY = 'lensakarya_token'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { Accept: 'application/json' },
  timeout: 20000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY)
      window.dispatchEvent(new Event('lensakarya:unauthorized'))
    }
    return Promise.reject(error)
  },
)

interface LaravelErrorBody {
  message?: string
  errors?: Record<string, string[]>
}

/** Ambil pesan error yang ramah pengguna dari response validasi Laravel. */
export function getErrorMessage(error: unknown, fallback = 'Terjadi kesalahan. Silakan coba lagi.'): string {
  const data = (error as AxiosError<LaravelErrorBody>)?.response?.data
  if (data?.errors) {
    const first = Object.values(data.errors)[0]
    if (first?.length) return first[0]
  }
  return data?.message || fallback
}

export default api

