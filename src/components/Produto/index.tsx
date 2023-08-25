import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import {
  adicionarAoCarrinhoReducer,
  removerDoCarrinhoReducer
} from '../../store/carrinho'
import { RootReducer } from '../../store'
import {
  adicionarAoFavoritos,
  removerDosFavoritos
} from '../../store/favoritos'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const listaFavoritos = useSelector((state: RootReducer) => state.favoritos)
  const listaCarrinho = useSelector((state: RootReducer) => state.carrinho)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = listaFavoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }
  const produtoEstaNoCarrinho = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosCarrinhos = listaCarrinho.map((f) => f.id)

    return IdsDosCarrinhos.includes(produtoId)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          if (!produtoEstaNosFavoritos(produto)) {
            dispatch(adicionarAoFavoritos(produto))
          } else {
            dispatch(removerDosFavoritos(produto))
          }
        }}
        type="button"
      >
        {produtoEstaNosFavoritos(produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => {
          if (!produtoEstaNoCarrinho(produto)) {
            console.log(listaCarrinho)
            dispatch(adicionarAoCarrinhoReducer(produto))
          } else {
            dispatch(removerDoCarrinhoReducer(produto))
          }
          console.log(listaCarrinho)
        }}
        type="button"
      >
        {produtoEstaNoCarrinho(produto)
          ? 'Remover do carrinho'
          : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
