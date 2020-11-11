import React from 'react';
import {Link} from 'gatsby';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark">
                <div className="navbar-collapse  justify-content-center collapse">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home 
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  target="_blank" href="https://drive.google.com/file/d/1Zb-tnB1FMEGw0Dm9yknsZU-JYFZKzp95/view?usp=sharing">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
      </header>
    );
}

export default Header;