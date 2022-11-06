import React from 'react';
import './Footer.css';

function Footer () {
    return (
    <div>
      <footer id="footer">
        <div className="footer py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 footer-text">
                <h4 className="text-white"><i class="bi bi-headset"></i>24/7 SUPPORT</h4>
                <p className="text-white">Call Us Now At +91 9452851038</p>
                
              </div>
              <div className="col-md-4 footer-text">
                <h4 className="text-white"><i class="bi bi-house-door-fill"></i>Address</h4>
                <p className="text-white">Shaheed Sukhdev College</p>
              </div>
              <div className="col-md-4 footer-text">
                <h4 className="text-white"><i class="bi bi-arrow-repeat "></i>Connect us</h4>
                <p className="text-white"><i class="bi bi-facebook"></i><i class="bi bi-instagram"></i><i class="bi bi-github"></i><i class="bi bi-linkedin"></i></p>
              </div>
            </div>
          </div>
        </div>
      </footer> 
      
      <footer>
        <div id="copyright" class="uni-padding text-center">
          Copyright &copy; 2022 HWCARE | All rights reserved
        </div>
      </footer>
    </div>
    );
}

export default Footer;