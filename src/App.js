import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css'; // Import main styles
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white col-6 ms-3" to="/">GadgetHaven
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
