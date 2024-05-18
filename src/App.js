import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import Menu from './pages/Menu';
import Vini from './pages/Vini';
import Bevande from './pages/Bevande';
import Altro from './pages/Altro';

import Pizza from './pages/Pizza';
import Antipasti from './pages/Antipasti';
import Sfizi from './pages/Sfizi';
import Carni from './pages/Carni';
import Contorni from './pages/Contorni';
import Insalate from './pages/Insalate';
import Panini from './pages/Panini';
import Tost from './pages/Tost';



function App() {
    return (
        <Router>
            <Header />
                <Routes>
                    <Route path="/pizza" element={<Pizza />} />
                    <Route path="/antipasti" element={<Antipasti />} />
                    <Route path="/sfizi" element={<Sfizi />} />
                    <Route path="/carni" element={<Carni />} />
                    <Route path="/contorni" element={<Contorni />} />
                    <Route path="/insalate" element={<Insalate />} />
                    <Route path="/panini" element={<Panini />} />
                    <Route path="/tost" element={<Tost />} />

                    <Route path="/" element={<Home />} />

                    <Route path="/menu" element={<Menu />} />
                    <Route path="/vini" element={<Vini />} />
                    <Route path="/bevande" element={<Bevande />} />
                    <Route path="/altro" element={<Altro />} />

                    <Route path="/Header" element={<Header />} />
                    <Route path="/Footer" element={<Footer />} />
                </Routes>
                <Footer />
        </Router>
    );
}

export default App;
