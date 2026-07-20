import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/home';
import CardsLibrary from './pages/cardsLibrary/cardsLibrary';
import ReadingSetup from './pages/reading/ReadingSetup';
import ReadingMain from './pages/reading/ReadingMain';
import About from './pages/about/about';
import Footer from './components/Footer';


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reading-setup' element={<ReadingSetup />} />
        <Route path="/reading/main" element={<ReadingMain />} />
        <Route path="/card-library" element={<CardsLibrary />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
