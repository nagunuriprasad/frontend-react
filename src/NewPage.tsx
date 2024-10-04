// ImageTextGrid.jsx
import React from 'react';
import "./assets/css/NewPage.css";
import user from './assets/user-login.jpg';

const ImageTextGrid = () => {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <img src={user} alt="Description 1" className="grid-image" />
                <p className="page-color">User Signup</p>
            </div>
            <div className="grid-item">
                <img src={user} alt="Description 2" className="grid-image" />
                <p className="page-color">Vendor Signup</p>
            </div>
            <div className="grid-item">
                <img src={user} alt="Description 3" className="grid-image" />
                <p className="page-color"> Staff Signup </p>
            </div>
            <div className="grid-item">
                <img src={user} alt="Description 4" className="grid-image" />
                <p className="page-color">Delivery Boy Signup</p>
            </div>
        </div>
    );
};

export default ImageTextGrid;
