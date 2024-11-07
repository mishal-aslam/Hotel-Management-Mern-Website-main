import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookYourStay from './pages/BookYourStay';
import MainLayout from './components/layouts/MainLayout';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} /> 
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bookyourstay" element={<BookYourStay />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
