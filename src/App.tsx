import { ApiProvider } from '@reduxjs/toolkit/query/react'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import { api } from './apiSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={api}>
        <GlobalStyle />
        <div className="container">
          <Header />
          <Produtos />
        </div>
      </ApiProvider>
    </Provider>
  )
}

export default App
