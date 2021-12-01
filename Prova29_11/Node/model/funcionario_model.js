const funcionario_model = (matricula, nome_completo, ultimo_salario, data_desligamento) => {
    let json =   {
        "matricula": matricula,
        "nome_completo": nome_completo,
        "ultimo_salario": ultimo_salario,
        "data_desligamento": data_desligamento
    }
    return json
}

module.exports = {
    funcionario_model
}