// exporta para criar expecificações distintas do determinado produto
export default interface Especificacoes {
    destaque: string
    // gera atributos flexiveis para a aplicação
    [chave: string]: string | Number | boolean
}