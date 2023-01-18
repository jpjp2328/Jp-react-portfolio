import React from 'react';
import citySpire from '../assets/images/Cityspire.gif';
import techBlog from '../assets/images/tech-blog.png';
import socialApi from '../assets/images/social-network-api.png';
import eCommerce from '../assets/images/e-commerce-backend.png';
import textEditor from '../assets/images/pwa-text-editor.png';

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
                        <a href="https://github.com/jpjp2328/tech-blog">
                            <figure>
                                <img src={techBlog} alt="Tech Blog" />
                                <figcaption>
                                    <h5>Tech Blog: Users can create an account to post articles or comment on other users posts.</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="more-coming-soon">
                        <a href="https://github.com/jpjp2328/social-network-API">
                            <figure>
                                <img src={socialApi} alt="Social network API" />
                                <figcaption>
                                    <h5>Social Network API: Tested through Insomia</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="coming-soon">
                        <a href="https://github.com/jpjp2328/E-Commerce-Back-End">
                            <figure>
                                <img src={eCommerce} alt="E-Commerce backend" />
                                <figcaption>
                                    <h5>E-Commerce Backend: Tested through Insomia</h5>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="more-coming-soon">
                        <a href="#work">
                            <figure>
                                <img src={textEditor} alt="PWA Text Editor" />
                                <figcaption>
                                    <h5>PWA Text Editor</h5>
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