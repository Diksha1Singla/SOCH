import React from 'react';
import './footer.css'


function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/soch" className='link-light link-underline-dark'>Home</a></li>
              <li><a href="/about"className='link-light link-underline-dark'>About Us</a></li>
              <li><a href="/contact" className='link-light link-underline-dark'>Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Useful Link</h5>
            <ul className="list-unstyled">
              <li><a href="/whatwedo" className='link-light link-underline-dark'>What we do</a></li>
              <li><a href="/soch" className='link-light link-underline-dark'></a>How we Spend</li>
              <li><a href="/gallery" className='link-light link-underline-dark'>Gallery</a></li>
             
              
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Address: 37C, Chandigarh</li>
              <li><i className="fa fa-phone mr-2" aria-hidden="true"></i>Call: +91 9876543210</li>
              <li><i className="fa fa-envelope mr-2" aria-hidden="true"></i>Email: Sochngo@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


