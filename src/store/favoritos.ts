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
      // state.push(action.payload)
      // console.log(state)
      if (state.find((p) => p.id === action.payload.id)) {
        const favoritosSemProduto = state.filter(
          (p) => p.id !== action.payload.id
        )
        // console.log(favoritosSemProduto)
        state = favoritosSemProduto
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { adicionarAoFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
