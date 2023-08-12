import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'

type Props = {
  produtos: ProdutoType[]
  // favoritos: ProdutoType[]
  // favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos }: Props) => {
  const listaDosFavoritos = useSelector((state: RootReducer) => state.favoritos)

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            // estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            // favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
