import Especificacoes from "./especificacoes"
import Precificavel from "./precificavel"

// especificação dos dados de cada item do produto sendo que especificações
// recebe especificações.ts que são destitas de cada produto e extende 
// a classe Precificavel que é a classe que contém as informações de preço
export default interface Produto extends Precificavel{
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    videoReview: string
    nota: number
    tags: string[]
    especificacoes: Especificacoes

}