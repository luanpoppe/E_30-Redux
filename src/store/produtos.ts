import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../App'

const initialState: Produto[] = []

const produtosSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (
      state: Produto[],
      action: PayloadAction<Produto[]>
    ) => {
      state = action.payload
    }
  }
})

export const { adicionarAoCarrinho } = produtosSlice.actions
export default produtosSlice.reducer
