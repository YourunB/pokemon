import { Modal, Box, Button, Typography } from '@mui/material';
import { TPokemonData } from '../../types';

type TModal = {
  openModal: boolean;
  handleCloseModal: () => void;
  pokemonData: TPokemonData;
}

export const ModalPokemon = ({openModal, handleCloseModal, pokemonData} : TModal) => (
  <>
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box
        sx={{
          width: '200px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
            {pokemonData?.name.toUpperCase()}
          </Typography>
          <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }} />
          <Typography sx={{ marginTop: 2 }}>Height: {pokemonData?.height}</Typography>
          <Typography>Weight: {pokemonData?.weight}</Typography>
        <Box sx={{ textAlign: 'center', marginTop: 3 }}>
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  </>
)