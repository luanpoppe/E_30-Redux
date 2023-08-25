import { useGetApiQuery } from '../apiSlice'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos } = useGetApiQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: ProdutoType) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
