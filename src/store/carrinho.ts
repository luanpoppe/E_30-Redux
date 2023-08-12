import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../App'

const initialState: Produto[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinhoReducer: (
      state: Produto[],
      action: PayloadAction<Produto>
    ) => {
      if (state.find((p) => p.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinhoReducer } = carrinhoSlice.actions
export default carrinhoSlice.reducer
