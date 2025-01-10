import pokemonLogo from '../assets/images/logo-name.png'

const PageStart = () => {
  return (
    <>
      Page start...
      <img src={pokemonLogo} className="logo react" alt="React logo" />
      <ul>
        <li><a href='/home'>Home page</a></li>
        <li><a href='/about'>About page</a></li>
      </ul>
      <div>
        <p>This application is developed for educational purposes using technologies such as <a href='https://react.dev/' target='_blank'>React</a>, <a href='https://redux.js.org/' target='_blank'>Redux</a>, <a href='https://redux-toolkit.js.org/rtk-query/overview' target='_blank'>RTK Query</a>, <a href='https://vite.dev/guide/'>Vite</a> and <a href='https://pokeapi.co/' target='_blank'>PokeAPI</a>. The application is written in TypeScript.</p>
      </div>
    </>
  )
}

export default PageStart