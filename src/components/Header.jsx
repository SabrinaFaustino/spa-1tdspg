import { Link } from "react-router-dom"

export default function Header(){

    return(
      <>
        <header>
          <h1>Vite + React</h1>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/produtos">Sobre</Link></li>
            <li><Link to="/editar/produto/1">Produto - 1</Link></li>
            <li><Link to="/editar/produto/2">Produto - 2</Link></li>
            <li><Link to="/editar/produto/3">Produto - 3</Link></li>

          </ul>
        </header>
      </>
    )

}