import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <header> 
        <h1><span className="titlecolor">My</span> Portfo<span className="titlecolor">lio.</span></h1>

        <nav>
            <div className="container">
                <ul>
                    <li><a href="#about-me" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active-button' : 'button'} >About me</a></li>
                    <li><a href="#work" onClick={() => handlePageChange('Work')} className={currentPage === 'Work' ? 'active-button' : 'button'} >Work</a></li>
                    <li><a href="#contact-form" onClick={() => handlePageChange('ContactForm')} className={currentPage === 'ContactForm' ? 'active-button' : 'button'} >Contact me</a></li>
                    <li><a href="#resume-button" onClick={() => handlePageChange('ContactForm')} className={currentPage === 'ContactForm' ? 'active-button' : 'button'} >Resume</a></li>
                </ul>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;