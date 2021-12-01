const { con } = require("./mysql_controll.js")
const modelo = require('../model/funcionario_model.js')

const all = (req,res) => {
    let string = 'select * from funcionarios'
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const get_matricula = (req,res) => {
    let string = 'select * from funcionarios where matricula = '+ req.params.matricula
    con.query(string, (err, result)=>{
        res.json(result)
    })
}

const add_funcionario = (req,res) => {
    let body = req.body
    let string = 'insert into funcionarios(matricula, nome_completo, ultimo_salario, data_desligamento) values (\'' + body.matricula + '\',' + '\'' + body.nome_completo + '\',' + body.ultimo_salario + ',\'' + body.data_desligamento + '\')' 
    con.query(string, (err, result)=>{
        if(err != null){
            res.status(400).end()
        }else{
            res.status(200).end()
        }
    })
}

const delete_funcionario = (req,res) => {
    let string = 'delete from funcionarios where id = ' + req.params.matricula
    con.query(string, (err, result)=>{
        if(result.affectedRows == 0){
            res.send(400).end()
        }else{
            res.send(200).end()
        }
    })
}

const update_funcionario = (req,res) => {
    let matricula = '\'' + req.body.matricula + '\''
    let nome_completo = '\'' + body.nome_completo + '\''
    let ultimo_salario = req.body.ultimo_salario
    let data_desligamento = '\'' + body.data_desligamento + '\''
    let id = req.body.id
    let string = `update alunos set matricula = ${matricula}, nome_completo = ${nome_completo}, ultimo_salario = ${ultimo_salario}, data_desligamento = ${data_desligamento} where id = ${matricula}`
    con.query(string, (err, result)=>{
        if(result.affectedRows == 1){
            con.query('select * from funcionarios where matricula = '+ matricula, (err,result)=>{
                res.json(result)
            })
        }else{
            res.send(400).end()
        }
    })
}

module.exports = {
    all,
    get_matricula,
    add_funcionario,
    delete_funcionario
}