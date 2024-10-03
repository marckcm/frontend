'use client'
import ProdutoItem from "@/components/produto/produtoitem";
import useProdutos from "@/data/hooks/useProdutos";

export default function Inicio() {
  const { produtos } = useProdutos()

  // pagina inicial onde fica o card do produto fazendo tipo um for com o map
  // para percorrer a array que contem os produtos e suas descrições.
  return (
      <div className="grid grid-cols-4 gap-5 container">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto}/>
        ))}
      </div>
  );
}
