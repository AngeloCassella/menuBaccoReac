import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Fritti from './pages/Fritti';
import Bevande from './pages/Bevande';
import Altro from './pages/Altro';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pizza" element={<Pizza />} />
                <Route path="/fritti" element={<Fritti />} />
                <Route path="/bevande" element={<Bevande />} />
                <Route path="/altro" element={<Altro />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
