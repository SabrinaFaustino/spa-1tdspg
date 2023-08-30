import "./App.css";
import {Outlet} from "react-router-dom";
import Cabecalho from "./components/Header"
import Rodape from "./components/Footer"

function App() {

  return (
    <>
      <Cabecalho/>
      <Outlet/> 
      <Rodape/>
    </>
  )
}
export default App

