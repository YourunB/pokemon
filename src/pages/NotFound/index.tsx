import Header from '../../shared/ui/header';
import { Footer } from '../../shared/ui/footer';
import { Typography, Box, Button } from '@mui/material';
import imgPokemon from '/picachu.png';
import { Link } from 'react-router-dom';

const styleBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  textAlign: 'center',
};

const PageNotFound = () => {
  return (
    <>
      <Header />
      <Box sx={{ ...styleBox, minHeight: 'calc(100dvh - 54px)' }}>
        <Box sx={{ styleBox }}>
          <img src={imgPokemon} alt="Pokemon" width="200px" />
          <Typography>Sorry... This page is not found...</Typography>
          <Link to="/pokemons">
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PageNotFound;
