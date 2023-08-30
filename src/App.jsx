import Cabecalho from "./components/Header";
import Conteudo from "./components/Section";
import Rodape from "./components/Footer";

export default function App() {

  //ÁREA DECLARATIVA 
  let meuNome = "Sabrina";

  return (
    <>
      {/* ÁREA IMPERATIVA E APENAS DE RODAR, NÃO DECLARAR*/}
      <div className="container">

        <Cabecalho nomeDoUsuario={meuNome}>
          Hello World!
        </Cabecalho>
        <Conteudo/>
        <Rodape/>


      </div>
      </>
  )
}
