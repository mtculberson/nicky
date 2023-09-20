import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from '.';

function App() {
  return (
      <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
  );
}

export default App;
