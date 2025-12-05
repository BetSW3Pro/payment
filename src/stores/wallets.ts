// src/stores/wallets.ts
import { defineStore } from 'pinia'
import { api } from '@/api/axios'

interface Wallet {
  id: number
  name: string
  // agrega los campos reales que devuelva tu API
}

export const useWalletStore = defineStore('wallets', {
  state: () => ({
    plataformId: null as number | null,
    token: '' as string,
    wallets: [],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    setAuth(plataformId: number, token: string) {
      this.plataformId = plataformId
      this.token = token
    },
    async fetchWallets() {
      if (this.plataformId === null || !this.token) {
        this.error = 'Falta plataformId o token'
        return
      }
      this.loading = true
      this.error = null
      try {
        const res = await api.post('wallets/by-plataform', {
          plataformId: this.plataformId,
          token: this.token,
        })
        console.log(res)
        this.wallets = res.data
        console.log(this.wallets)
      } catch (err: any) {
        this.error = err?.response?.data?.message ?? err?.message ?? 'Error desconocido'
      } finally {
        this.loading = false
      }
    },
  },
})
