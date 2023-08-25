import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootReducer) => {
    if (state.carrinho) {
      return state.carrinho
    } else {
      return []
    }
  })
  const numeroDeFavoritos = useSelector((state: RootReducer) => {
    if (state.favoritos) {
      return state.favoritos.length
    } else {
      return 0
    }
  })

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{numeroDeFavoritos} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
