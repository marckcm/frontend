export default interface Especificacoes {
    destaque: string
    // gera atributos flexiveis para a aplicação
    [chave: string]: string | Number | boolean
}