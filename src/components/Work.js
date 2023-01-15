import React from 'react';

function Work() {
    return (
        <article id="work">
            <div className="container">
                <h4> Work </h4>
                <div className="work-content">
                    <div className="main-work">
                        <a href="https://jpjp2328.github.io/Cityspire/">
                            <figure>
                                <img src="./assets/images/Cityspire.gif" alt="Cityspire gif" />
                                <figcaption>
                                    <h5>Collaborative Project: Cityspire</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="coming-soon">
                        <a href="#work">
                            <figure>
                                <img src="./assets/images/coming-soon.jpg" alt="Coming Soon" />
                                <figcaption>
                                    <h5>Coming Soon...</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="more-coming-soon">
                        <a href="#work">
                            <figure>
                                <img src="./assets/images/coming-soon.jpg" alt="Coming Soon" />
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