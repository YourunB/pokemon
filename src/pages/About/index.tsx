import { Box, Typography } from '@mui/material';

const PageAbout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 800,
        margin: 'auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 3,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        About This Application
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: 'justify',
          marginBottom: 3,
          fontSize: '1.1rem',
          color: '#333',
          lineHeight: 1.6,
        }}
      >
        Welcome to our amazing Pokémon app! This application was developed using the latest and most efficient
        technologies, ensuring a seamless and interactive user experience. Below is a summary of the key technologies
        and architectural choices used in this project:
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: 'left',
          marginBottom: 2,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        ⚡ <span>React</span> &amp; <span>TypeScript</span>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: 2, color: '#333' }}>
        The frontend of the application is built using <strong>React</strong> for a dynamic and fast UI, combined with
        the type safety and scalability of <strong>TypeScript</strong>. This combination ensures better development
        speed, fewer errors, and more maintainable code.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: 'left',
          marginBottom: 2,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        ⚡ <span>Material UI (MUI)</span>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: 2, color: '#333' }}>
        We utilized <strong>Material UI (MUI)</strong> to bring beautiful and consistent design components that follow
        Google’s Material Design principles. MUI’s powerful components, like Buttons, Modals, and Inputs, allow for
        creating a clean and responsive UI that works on any device.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: 'left',
          marginBottom: 2,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        ⚡ <span>Redux + RTK Query</span>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: 2, color: '#333' }}>
        The app leverages <strong>Redux</strong> for state management, ensuring predictable and easy-to-manage
        application state. To make API calls more efficient, we are using <strong>RTK Query</strong>, a powerful tool
        from Redux Toolkit to streamline data fetching and caching.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: 'left',
          marginBottom: 2,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        ⚡ <span>Pokémon API</span>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: 2, color: '#333' }}>
        All Pokémon data is pulled from the <strong>Pokémon API</strong>, which provides detailed information about all
        Pokémon, their types, abilities, and stats. This API serves as the backbone for the app’s Pokémon information
        and interactions.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: 'left',
          marginBottom: 2,
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        ⚡ <span>Feature-Sliced Design (FSD)</span>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', marginBottom: 3, color: '#333' }}>
        We applied the <strong>Feature-Sliced Design (FSD)</strong> methodology to structure the code in a modular and
        scalable way. FSD helps break the application into well-defined feature modules, making it easier to maintain
        and scale as the project grows.
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: '#777',
          fontStyle: 'italic',
          marginTop: 4,
        }}
      >
        This application was developed by Yury Butskevich. Thank you for using it!
      </Typography>
    </Box>
  );
};

export default PageAbout;
