import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"


export default function App() {

  //ÁREA DECLARATIVA
  let meuNome = "Sabrina";

  return (
    <>
      {/* Área Imperativa! */}
      <div className="container">

        <Header nomeDoUsuario={meuNome}>
          Hello World
        </Header>

        <Section/>
        
        <Footer/>

      </div>
    </>
  )
}
