const Schemma = () => {

    const funcionarios = () => {
        const dados = [
            { id: 1, nome: 'Caike' },
            { id: 2, nome: 'Layla' },
            { id: 3, nome: 'Diego' },
            { id: 4, nome: 'Bruna' },
            { id: 5, nome: 'Tião' }
        ];
        return dados;
    }
    
    const funcionario_obs = () => {
        const dados = [
            { id: 0, id_funcionario: 1, dsc: 'Muito bom funcionário!' },
            { id: 1, id_funcionario: 2, dsc: 'Está em férias!' },
            { id: 2, id_funcionario: 3, dsc: 'Férias prêmio!' },
            { id: 3, id_funcionario: 4, dsc: 'Promovida em 2021!' },
            { id: 4, id_funcionario: 5, dsc: 'Anarquista' }
        ];
        return dados;
    }

    const funcionario_cargo = () => {
        const dados = [
            { id: 0, id_funcionario: 1, dsc: 'Programador!' },
            { id: 1, id_funcionario: 2, dsc: 'Terceirizada' },
            { id: 2, id_funcionario: 3, dsc: 'Pica das galáxias' },
            { id: 3, id_funcionario: 4, dsc: 'Terceirizada' },
            { id: 4, id_funcionario: 5, dsc: 'Vigia' }
        ];
        return dados;
    }

    const funcionario_salario = () => {
        const dados = [
            { id: 1, id_funcionario: 1, ano: 2021, mes: 1, valor: 100, verba: 'Vale Transporte' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 1, valor: 200, verba: 'Vale Refeição' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 1, valor: 1000, verba: 'Salário' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 2, valor: 100, verba: 'Vale Transporte' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 2, valor: 200, verba: 'Vale Refeição' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 2, valor: 1000, verba: 'Salário' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 3, valor: 100, verba: 'Vale Transporte' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 3, valor: 200, verba: 'Vale Refeição' },
            { id: 1, id_funcionario: 1, ano: 2021, mes: 3, valor: 1000, verba: 'Salário' },


            { id: 2, id_funcionario: 2, ano: 2021, mes: 1, valor: 1000, verba: 'Salário' },
            { id: 2, id_funcionario: 2, ano: 2021, mes: 2, valor: 1000, verba: 'Salário' },
            { id: 2, id_funcionario: 2, ano: 2021, mes: 3, valor: 1000, verba: 'Salário' },


            { id: 3, id_funcionario: 3, ano: 2021, mes: 1, valor: 10000, verba: 'Salário' },
            { id: 3, id_funcionario: 3, ano: 2021, mes: 2, valor: 10000, verba: 'Salário' },
            { id: 3, id_funcionario: 3, ano: 2021, mes: 3, valor: 10000, verba: 'Salário' },


            { id: 4, id_funcionario: 4, ano: 2021, mes: 1, valor: 1000, verba: 'Salário' },
            { id: 4, id_funcionario: 4, ano: 2021, mes: 2, valor: 1000, verba: 'Salário' },
            { id: 4, id_funcionario: 4, ano: 2021, mes: 3, valor: 1000, verba: 'Salário' },


            { id: 5, id_funcionario: 5, ano: 2021, mes: 1, valor: 100, verba: 'Ração' },
            { id: 5, id_funcionario: 5, ano: 2021, mes: 2, valor: 100, verba: 'Ração' },
            { id: 5, id_funcionario: 5, ano: 2021, mes: 3, valor: 100, verba: 'Ração' },
        ];
        return dados;
    }

    return {
            funcionarios,
            funcionario_obs,
            funcionario_cargo,
            funcionario_salario
    };
};

export default Schemma;