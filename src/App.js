import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Contact from './pages/Contact';
import Home from '.';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
  );
}

export default App;
