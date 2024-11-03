import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Optional: Create custom styles

const Home = () => {
    return (
        <div className="hero d-flex justify-content-center align-items-center" style={{ 
            background: 'url(https://img.freepik.com/premium-photo/flat-lay-various-black-tech-gadgets-black-surface_14117-691723.jpg) no-repeat center center', 
            backgroundSize: 'cover', 
            height: '100vh', 
            color: 'white' 
        }}>
            <div className="text-center">
                <h1 className="display-4 text-light">Welcome to Gadget Haven</h1>
                <p className="lead">Your one-stop shop for the latest and greatest gadgets!</p>
                <a href="/products" className="btn btn-light btn-lg">Shop Now</a>
            </div>
        </div>
    );
};

export default Home;
