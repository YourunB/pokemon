import './App.sass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageStart from './src/pages/Start/PageStart';
import PageAbout from './src/pages/About';
import PageHome from './src/pages/Home';
import PageNotFound from './src/pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageStart />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
