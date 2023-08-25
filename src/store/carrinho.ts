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
        // alert('Item já adicionado')
        state = state.filter((p) => {
          return p.id !== action.payload.id
        })
      } else {
        state.push(action.payload)
      }
    },
    removerDoCarrinhoReducer: (
      state: Produto[],
      action: PayloadAction<Produto>
    ) => {
      return state.filter((p) => p.id !== action.payload.id)
    }
  }
})

export const { adicionarAoCarrinhoReducer, removerDoCarrinhoReducer } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
