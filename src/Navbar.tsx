import React from 'react';
import './assets/css/Navbar.css';
import { Dropdown } from 'react-bootstrap';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Dropdown for All Categories */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-th-list" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i> {/* Icon above text */}
                <br /> <span style={{ fontSize: '20px' }}>All Categories</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {/* All Categories Items */}
                {[
                  'Packages',
                  'Venues',
                  'Decors',
                  'Tents & Walls',
                  'Caterers',
                  'Lights & Sounds',
                  'photographer',
                  'D.J',
                  'Entertainments',
                  'Band set',
                  'Bharaath setup & Team',
                  'Celebs & Models',
                  'Digital Screens',
                  'Digital D.J Vehicles',
                  'Tea & Coffee Specialists',
                  'Salad Stall',
                  'Juice Specialists',
                  'Veg Snack specilists',
                  'Non Veg Snack Specilists',
                  'Roti Specialists',
                  'Butter Non & Kulcha Specialists',
                  'Chat Stall',
                  'Fruit stall',
                  'Soup Specilists',
                  'South Indian Breakfast',
                  'Chinese Stall',
                  'Mongolian Stalls',
                  'Pizza’s & Burgers',
                  'Cool Cakes Stall',
                  'Sweet Stalls',
                  'Ice Cream Stalls',
                  'Pan Counters',
                  'Drinking Waters',
                  'Live Food Counters',
                  'LED Counters',
                  'Chocolate Counters',
                  'Smoke Projectors',
                  'Event Management Companies',
                  'Chef n Dish Rental',
                  'Event Display Specialists',
                  'Event Dress Rentals',
                  'Invitation Printers',
                  'Anchors',
                  'Pundits',
                  'Beauticians',
                  'Mahanadi Specialists',
                  'Cocktail Specialists',
                  'Liquor Bars',
                ].map((item, index) => (
                  <li key={index} style={{ padding: '5px 0' }}> {/* Adds gap between items */}
                    <a className="dropdown-item" href={`/party?category=${item.replace(/\s+/g, '-').toLowerCase()}`}>
                      <i className="fa fa-circle" style={{ color: '#e84848', paddingBottom: '5px' }} aria-hidden="true"></i> {/* Icon above item */}
                      <br /> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Regular Links */}
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fa fa-home fa-2x" style={{ color: '#e84848' }} aria-hidden="true"></i>
                <br /> <span style={{ fontSize: '20px' }}>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/my-party">
                <i className="fa fa-birthday-cake" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i>
                <br /> <span style={{ fontSize: '20px' }}>My Party</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/studio">
                <i className="fa fa-camera" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i>
                <br /> <span style={{ fontSize: '20px' }}>Studio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                <i className="fa fa-shopping-cart" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i>
                <br /> <span style={{ fontSize: '20px' }}>Shop</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/insta-food">
              
                <i className="fas fa-cheese" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i>
                <br /><span style={{ fontSize: '20px' }}>Insta Food</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/staying-hotels">
              
                <i className="fa fa-bed" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i>
                <br /> <span style={{ fontSize: '20px' }}>Staying Hotels</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/travel">
                <i className="fa fa-plane" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i>
                <br /> <span style={{ fontSize: '20px' }}>Travel</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/staff">
                <i className="fa fa-users" style={{ color: '#e84848',fontSize: '25px' }} aria-hidden="true"></i>
                <br /> <span style={{ fontSize: '20px' }}>Staff</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
