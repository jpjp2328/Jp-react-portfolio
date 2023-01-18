import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        if (currentPage === 'ContactForm') {
            return <ContactForm />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Hero />
        {renderPage()}
        <Footer />
        </>
    );
};