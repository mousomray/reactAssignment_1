import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto">
                    <Link to="/">
                        <img className="hello" src="./assets/img/logo.png" alt="Logo" />
                    </Link>
                </h1>

                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li className="active"><Link to="/">Product</Link></li>
                    </ul>
                </nav>

                <div className="header-social-links">
                    <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                    <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                    <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                </div>
            </div>
        </header>
    );
}

export default Nav;
