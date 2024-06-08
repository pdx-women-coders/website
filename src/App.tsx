import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/coders" element={<Home />} />
        <Route path="/coders/about" element={<About />} />
        <Route path="/coders/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
