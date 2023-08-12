import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from '../store/carrinho'
import favoritosReducer from '../store/favoritos'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})
