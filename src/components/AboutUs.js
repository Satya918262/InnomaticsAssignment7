import React from 'react';
import './AboutUs.css'; // Import custom styles
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
    return (
        <div className="container mt-5 about-us">
            {/* Hero Image */}
            <div className="text-center mb-5">
                <img src="https://blogimage.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png" className="img-fluid rounded shadow" alt="Gadget Haven" />
            </div>

            {/* Mission and Vision Section */}
            <div className="row">
                <div className="col-lg-6 mb-4 d-flex">
                    <div className="p-4 border rounded bg-light shadow w-100 d-flex flex-column justify-content-center text-center">
                        <h2 className="mb-3 font-weight-bold">Our Mission</h2>
                        <p>
                            At Gadget Haven, we are passionate about technology and gadgets. Our mission is to provide the latest and greatest gadgets to our customers.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 mb-4 d-flex">
                    <div className="p-4 border rounded bg-light shadow w-100 d-flex flex-column justify-content-center text-center">
                        <h2 className="mb-3 font-weight-bold">Our Vision</h2>
                        <p>
                            We envision a world where everyone has access to cutting-edge technology that enriches their lives and enhances their experiences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <h2 className="text-center mt-5 mb-4 font-weight-bold">Why Choose Us?</h2>
            <div className="row">
                {[
                    { title: 'Wide Range of Products', text: 'Explore our extensive selection of gadgets.' },
                    { title: 'Competitive Pricing', text: 'Get the best deals on the latest gadgets.' },
                    { title: 'Excellent Customer Support', text: "We're here to assist you 24/7." },
                    { title: 'Fast and Reliable Shipping', text: 'Receive your orders quickly and safely.' },
                ].map((item, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold text-success">{item.title}</h5>
                                <p className="card-text">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
