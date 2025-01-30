import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageStart from './pages/Start';
import PageAbout from './pages/About';
import PageHome from './pages/Home';
import PageNotFound from './pages/NotFound';
import PageFavourites from './pages/Favourites';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageStart />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favourites" element={<PageFavourites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
