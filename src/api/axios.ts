import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL ?? 'https://payments-test.jbets.online/api/'

export const api = axios.create({ baseURL })
