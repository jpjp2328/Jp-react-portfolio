import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import ContactForm from './ContactForm';
import Footer from './Footer';

export default function Container() {

    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Work />
        </>
    );
};