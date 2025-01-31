import { Box } from '@mui/material';
import iconGit from '/icons/github.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: '30px',
        alignItems: 'center',
        fontWeight: '700',
        gap: '10px',
      }}
    >
      &copy; 2025
      <Link to="https://github.com/yourunb" target="_blank">
        <img src={iconGit} alt="Git" height="30px" />
      </Link>
    </Box>
  );
};
