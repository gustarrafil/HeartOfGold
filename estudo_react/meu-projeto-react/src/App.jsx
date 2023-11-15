import MeuComponente from "./components/MeuComponente";
import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";
import { useEffect, useState } from "react";

const minhaLista2 = [
  { id: "1", value: "fruta" },
  { id: "2", value: "legume" },
  { id: "3", value: "carne" },
];

function App() {
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
    </div>
  );
}

function MeuBotao(props) {
  console.log(props.conteudo);
  console.log(props.idade);
  return <button>{props.conteudo}</button>;
}

export default App;
