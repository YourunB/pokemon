import pokemonLogo from '../../assets/images/logo-name.png';
import { Link } from 'react-router-dom';

const PageStart = () => {
  return (
    <>
      Page start...
      <img src={pokemonLogo} className="logo react" alt="React logo" />
      <ul>
        <li>
          <Link to={'/home'}>Home page</Link>
        </li>
        <li>
          <Link to={'/about'}>About page</Link>
        </li>
      </ul>
      <div>
        <p>
          This application is developed for educational purposes using technologies such as{' '}
          <a href="https://react.dev/" target="_blank">
            React
          </a>
          ,{' '}
          <a href="https://redux.js.org/" target="_blank">
            Redux
          </a>
          ,{' '}
          <a href="https://redux-toolkit.js.org/rtk-query/overview" target="_blank">
            RTK Query
          </a>
          , <a href="https://vite.dev/guide/">Vite</a>,{' '}
          <a href="https://mui.com/" target="_blank">
            MUI
          </a>{' '}
          and{' '}
          <a href="https://pokeapi.co/" target="_blank">
            PokeAPI
          </a>
          . The application is written in{' '}
          <a href="https://www.typescriptlang.org/" target="_blank">
            TypeScript
          </a>{' '}
          and has <a href="https://feature-sliced.design/">FSD</a> architecture.
        </p>
      </div>
    </>
  );
};

export default PageStart;
