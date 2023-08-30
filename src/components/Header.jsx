
export default function Header(props){

    return(
      <>
        <header>
          <h1>Vite + React para {props.nomeDoUsuario}</h1>
          <ul>
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>Sobre</li>
            <li><a href="#"></a>Mais</li>
          </ul>
        </header>
      </>
    )

}