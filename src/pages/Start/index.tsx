import pokemonLogo from '../../assets/images/logo-name.png';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import s from './index.module.sass'

const PageStart = () => {
  return (
    <div className={s.box}>
      <Box sx={{display: 'flex', gap: '10px', maxWidth: '1280px', margin: 'auto', minHeight: 'calc(100vh - 20px)', alignItems: 'center'}}>
        <Box sx={{textAlign: 'center'}}>
          <img src={pokemonLogo} className={s.logo} alt="React logo" />
          <Box>
            <Typography>
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
            </Typography>
          </Box>
          <Typography sx={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            <Link to={'/home'}>START</Link>
            <Link to={'/about'}>ABOUT</Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default PageStart;
