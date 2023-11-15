import MeuComponente from "./components/MeuComponente"
import MeuContador from "./components/MeuContador"

function App() {
  return (
    <div>
      <h1>meu projeto</h1>
      <MeuComponente />
      <MeuBotao conteudo="me clique" />
      <MeuBotao conteudo="depois aqui" />
      <MeuBotao conteudo="e por fim aqui" idade={2} />

      <MeuContador />
    </div>
  )
}

function MeuBotao(props) {
  console.log(props.conteudo)
  console.log(props.idade)
  return (
    <button>{ props.conteudo }</button>
  )
}



export default App
