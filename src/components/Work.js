import React from 'react';

function Work() {
    return (
        <article id="work">
            <div class="container">
                <h4> Work </h4>
                <div class="work-content">
                    <div class="main-work">
                        <a href="https://jpjp2328.github.io/Cityspire/">
                            <figure>
                                <img src="./assets/images/Cityspire.gif" alt="Cityspire gif" />
                                <figcaption>
                                    <h5>Collaborative Project: Cityspire</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div class="coming-soon">
                        <a href="#work">
                            <figure>
                                <img src="./assets/images/coming-soon.jpg" alt="Coming Soon" />
                                <figcaption>
                                    <h5>Coming Soon...</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div class="more-coming-soon">
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