import React from 'react';

function Navbar() {
    return (
        <header> 
        <h1><span className="titlecolor">My</span> Portfo<span className="titlecolor">lio.</span></h1>

        <nav>
            <div className="container">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact-me">Contact me</a></li>
                </ul>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;