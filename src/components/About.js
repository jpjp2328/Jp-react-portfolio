import React from 'react';
import avatar from '../assets/images/avatar.jpg';

function About() {
    return (
        <section className="about" id="about-me">
            <div className="container">
                <h3> About me </h3>
                <div className="about-content">
                    <div className="column left">
                        <img src={avatar} alt="Portrait of Me" />
                    </div>
                    <div className="column right">
                        <p>Hello, my name is Jeffrey Pang and welcome to my portfolio. I’m from Melbourne, Australia and have recently graduated from my Science degree. I am currently enrolled in a coding bootcamp working towards becoming a Fullstack Developer. Below are some projects that I have worked on and completed. There will be many more to come. Check my Github for more details and feel free to reach out to me!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;