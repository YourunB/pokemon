import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PageStart from './pages/Start';
import PageAbout from './pages/About';
import PageHome from './pages/Home';
import PageNotFound from './pages/NotFound';
import PageHistory from './pages/History';
import { PageDynamic } from './pages/Dynamic';
import { BackgroundBall } from './shared/ui/background';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000',
    },
  },
});

const App = () => {
  return (
    <>
      <BackgroundBall />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageStart />} />
            <Route path="/pokemons" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/history" element={<PageHistory />} />
            <Route path="/pokemons/:id" element={<PageDynamic />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
