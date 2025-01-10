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
    </>
  )
}

export default PageStart