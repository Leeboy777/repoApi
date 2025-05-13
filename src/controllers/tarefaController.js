const tarefaModel = require('../models/tarefaModel');

exports.teste = (req, res) => {
    res.send('api de tarefas')
};

// Devolve todas as tarefas
// Devolve todas as tarefas
exports.listarTodas = (req,res)=>{


    console.log('TarefaController','listarTodas()')


    tarefaModel.listar()
        .then(
            (tarefas)=>{
                console.log(tarefas)
                res.json(tarefas)    
            }
        )
        .catch((erro)=>{console.log('erro',erro)})


};


exports.adicionarTarefa = (req, res) => {
    let novaTarefa = req.body;
    tarefaModel.adicionar(novaTarefa)
    .then((resultado) => {
        console.log('resultado', resultado)
        res.status(201).json(novaTarefa);
    })

    .catch((erro) =>{console.log('erro')})

}

exports.atualizarTarefas = (req, res) => {

    console.log('tarefaController','atualizarTarefas()')

    const id = req.params.id
    const novosDados = req.body;

    tarefaModel.atualizar(id,novosDados)
    .then((novaTarefa)=>{res.json(novaTarefa)})
    .catch((erro)=>{res.status(404).json({ mensagem:erro})})

}
 
exports.deletarTarefa = (req, res) => {
    const id = req.params.id;
   
    tarefaModel.deletar(id)
    .then((resultado)=>{res.json(resultado.mensagem)})
    .catch((erro)=>{res.status(404).json({ mensagem:erro})})


    // res.status(204).send();
}
