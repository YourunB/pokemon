import './App.sass'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageStart from './src/pages/pageStart';
import PageAbout from './src/pages/PageAbout';
import PageHome from './src/pages/PageHome';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageStart />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
