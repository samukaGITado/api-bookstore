import autorModel from "../models/autorModel.js"

export const criarAutor = async (request, response) => {
    const {nome, data_nascimento, biografia, nacionalidade} = request.body

    if(!nome){
       response.status(400).json({
         erro: "Campo nome incorreto",
         mensagem: "Nome não pode ser nulo"
       }) 
       return
    }
    if(!data_nascimento){
       response.status(400).json({
         erro: "Campo data_nascimento incorreto",
         mensagem: "Data_nascimento não pode ser nulo"
       })
       return
    }
    if(!biografia){
       response.status(400).json({
         erro: "Campo biografia incorreto",
         mensagem: "Biografia não pode ser nulo"
       })
       return
    }
    if(!nacionalidade){
       response.status(400).json({
         erro: "Campo nacionalidade incorreto",
         mensagem: "Nacionalidade não pode ser nulo"
       })
       return
    }

    const validaData = new Date(data_nascimento)
    if(validaData == "Invalid Date"){
        response.status(400).json({
            erro: "Data inválida",
            mensagem: "Formato de data inválido"
        })
        return
    }

    const autor = {
        nome,
        biografia,
        data_nascimento,
        nacionalidade
    }

    try {
        const novoAutor = await autorModel.create(autor)
        response.status(201).json({
            mensagem: "Autor cadastrado com sucesso", novoAutor
        })
    } catch (error) {
        console.log(error)
        response.status(500).json({
            mensagem: "Erro interno no servidor ao cadastrar autor"
        })
    }

}