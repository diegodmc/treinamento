import { useEffect, useState } from 'react';
import Schemma from './BancoDados/Schemma';

function App() {

  //1) Retorno os dados
  const { funcionarios, funcionario_cargo, funcionario_salario, funcionario_obs } = Schemma();
  

  //2) Variavel para setar e retornar
  const [nomes, SetNomes] = useState();


  //3 Função para retornar/formatar/setar os nomes
  const listaNomes = () => {
        //3.1) Retorna
        const dadosFuncionarios = funcionarios();

        //3.2) Formato
        const nomes = dadosFuncionarios.map((func, indice) => {
          return <li key={indice}>{func.nome}</li>;
        });
        
        //3.1) Seto
        SetNomes(nomes);
  }


  //4) Faz o primeiro carregamento da tela
  useEffect(() => {
      listaNomes();
  }, []);


  //5) Exibo no HTML
  return (
    <div className="App">
      {nomes}
    </div>
  );
}

//6)Exporta
export default App;