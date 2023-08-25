import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from '../store/carrinho'
import favoritosReducer from '../store/favoritos'

import { api } from '../apiSlice'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
