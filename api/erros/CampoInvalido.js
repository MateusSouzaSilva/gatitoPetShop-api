class CampoInvalido extends Error {
    constructor (campo) {
        const mensagem = `O campo '${campo}' está inválido`;
    }
}