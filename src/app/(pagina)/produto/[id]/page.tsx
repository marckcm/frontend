'use client'
import { Produto } from "@/core"
import useProdutos from "@/data/hooks/useProdutos"
import { useEffect, useState } from "react"

// criando a pagina da descrição do produto
export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])

    return produto ? (<div>{produto?.nome}</div>) : (<div>Produto não encontrado</div>)
    
}
