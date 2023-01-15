import React from 'react';
import citySpire from '../assets/images/Cityspire.gif';
import comingSoon from '../assets/images/coming-soon.jpg';

function Work() {
    return (
        <article id="work">
            <div className="container">
                <h4> Work </h4>
                <div className="work-content">
                    <div className="main-work">
                        <a href="https://jpjp2328.github.io/Cityspire/">
                            <figure>
                                <img src={citySpire} alt="Cityspire gif" />
                                <figcaption>
                                    <h5>Collaborative Project: Cityspire</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="coming-soon">
                        <a href="#work">
                            <figure>
                                <img src={comingSoon} alt="Coming Soon" />
                                <figcaption>
                                    <h5>Coming Soon...</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="more-coming-soon">
                        <a href="#work">
                            <figure>
                                <img src={comingSoon} alt="Coming Soon" />
                                <figcaption>
                                    <h5>Coming Soon</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Work;