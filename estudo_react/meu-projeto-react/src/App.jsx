import MeuComponente from "./components/MeuComponente";
import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";
import { useEffect, useState } from "react";

const minhaLista2 = [
  { id: "1", value: "fruta" },
  { id: "2", value: "legume" },
  { id: "3", value: "carne" },
];

const tarefas = [
  { id: "1", title: "minha primeira tarefa" },
  { id: "2", title: "minha segunda tarefa" },
  { id: "3", title: "minha terceira tarefa" },
  { id: "4", title: "minha quarta tarefa" },
];

function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  const [produtos, setProdutos] = useState(minhaLista2);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      console.log("eu estou no efeito colateral");
      const novaLista = minhaLista2.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(minhaLista2);
    }
  }, [pesquisa]);

  return (
    <div>
      <h1>meu projeto</h1>
      <MeuComponente />
      <MeuBotao conteudo="me clique" />
      <MeuBotao conteudo="depois aqui" />
      <MeuBotao conteudo="e por fim aqui" idade={2} />

      <MeuContador />

      <h1>listas</h1>
      <MinhaLista />

      <h1>efeitos colaterais</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="pesquise aqui"
      ></input>
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}

      <h1>buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div>
              <li key={tarefa.id}>
                {tarefa.title}
                {tarefa.completed ? "- tarefa concluida" : null}
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

function MeuBotao(props) {
  console.log(props.conteudo);
  console.log(props.idade);
  return <button>{props.conteudo}</button>;
}

export default App;
