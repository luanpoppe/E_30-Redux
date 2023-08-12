import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionarAoCarrinhoReducer } from '../../store/carrinho'
import { RootReducer } from '../../store'
import { adicionarAoFavoritos } from '../../store/favoritos'

type Props = {
  produto: ProdutoType
  // favoritar: (produto: ProdutoType) => void
  // estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const listaFavoritos = useSelector((state: RootReducer) => state.favoritos)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = listaFavoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
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
          dispatch(adicionarAoFavoritos(produto))
          produtoEstaNosFavoritos(produto)
          console.log(produtoEstaNosFavoritos(produto))
          // produto.estaNosFavoritos = !produto.estaNosFavoritos
          // console.log(produto.estaNosFavoritos)
          // console.log(listaFavoritos.map((f) => f.id).includes(produto.id))
        }}
        type="button"
      >
        {produtoEstaNosFavoritos(produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => {
          dispatch(adicionarAoCarrinhoReducer(produto))
        }}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
