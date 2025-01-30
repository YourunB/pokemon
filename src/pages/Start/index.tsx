import pokemonLogo from '../../assets/images/logo-name.png';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import s from './index.module.sass';

const PageStart = () => {
  return (
    <div className={s.box}>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          maxWidth: '1280px',
          margin: 'auto',
          minHeight: 'calc(100vh - 20px)',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Link to={'/home'}>
            <img src={pokemonLogo} className={s.logo} alt="React logo" />
          </Link>
          <Box>
            <Typography>
              This application is developed for educational purposes using technologies such as{' '}
              <Link to="https://react.dev/" target="_blank">
                React
              </Link>
              ,{' '}
              <Link to="https://redux.js.org/" target="_blank">
                Redux
              </Link>
              ,{' '}
              <Link to="https://redux-toolkit.js.org/rtk-query/overview" target="_blank">
                RTK Query
              </Link>
              , <Link to="https://vite.dev/guide/">Vite</Link>,{' '}
              <Link to="https://mui.com/" target="_blank">
                MUI
              </Link>{' '}
              and{' '}
              <Link to="https://pokeapi.co/" target="_blank">
                PokeAPI
              </Link>
              . The application is written in{' '}
              <Link to="https://www.typescriptlang.org/" target="_blank">
                TypeScript
              </Link>{' '}
              and has <a href="https://feature-sliced.design/">FSD</a> architecture.
            </Typography>
          </Box>
          <Typography sx={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Link to={'/home'}>START</Link>
            <Link to={'/about'}>ABOUT</Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default PageStart;
