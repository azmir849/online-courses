import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand logo" href="#"><img src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                    <div class="dropdown-menu">
                    <a className="dropdown-item" href="#">Development</a>
                    <a className="dropdown-item" href="#">Business</a>
                    <a className="dropdown-item" href="#">IT and Software</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Other</a>
                    </div>
                </li>

                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="./">Udemy for Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./explore">Tech on Udemy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./login">LogIn</a>
                        </li>
                        <button type="button" class="btn btn-info">SignUP/Register</button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;