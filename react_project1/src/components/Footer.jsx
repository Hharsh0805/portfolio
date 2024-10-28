import React, { useState } from 'react';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        
        <div className="row mb-4">
          <div className="col-md-6">
            <h5>Subscribe to our Newsletter</h5>
            <form onSubmit={handleSubscribe} className="d-flex">
              <input 
                type="email" 
                className="form-control me-2" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>

            <div className="social-icons text-center">
          <a href="https://facebook.com" className="me-2"><img src="/images/facebook.png" alt="Facebook" /></a>
          <a href="https://twitter.com" className="me-2"><img src="/images/twitter.png" alt="Twitter" /></a>
          <a href="https://linkedin.com" className="me-2"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
          <a href="https://instagram.com" className="me-2"><img src="/images/instagram.png" alt="Instagram" /></a>
          <a href="https://discord.com" className="me-2"><img src="/images/discord.png" alt="Discord" /></a>
        </div>
          </div>
          <div className="col-md-6 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/blogs" className="text-light">Blogs</a></li>
              <li><a href="/projects" className="text-light">Projects</a></li>
              <li><a href="/community" className="text-light">Community</a></li>
              <li><a href="/career-training" className="text-light">Career & Training</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright-section text-center py-3">
        <p className="mb-0">©2024 Harsh Sehgal. All rights reserved.</p>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
