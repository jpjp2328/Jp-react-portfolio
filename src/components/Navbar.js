import React from 'react';

function Navbar({ currentPage, handlePageChange }) {

    const mybutton = document.getElementById("myBtn");

    // When the user scrolls down, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // function to return to top
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <header>
            <h1><span className="titlecolor">My</span> Portfo<span className="titlecolor">lio.</span></h1>
            <button onClick={() => topFunction()} id="myBtn" title="Go to top">Back to Top</button>
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