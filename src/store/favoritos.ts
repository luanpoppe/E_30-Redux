import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../App'

const initialState: Produto[] = []

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAoFavoritos: (
      state: Produto[],
      action: PayloadAction<Produto>
    ) => {
      state.push(action.payload)
    },
    removerDosFavoritos: (state: Produto[], action: PayloadAction<Produto>) => {
      return state.filter((f) => f.id !== action.payload.id)
    }
  }
})

export const { adicionarAoFavoritos, removerDosFavoritos } =
  favoritosSlice.actions
export default favoritosSlice.reducer
