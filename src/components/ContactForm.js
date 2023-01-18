import React from 'react';

function ContactForm() {
    return (
        <div>
            <div className="container">
                <h7> Contact Me...</h7>
                <form>
                    <label>Name</label>
                    <input type="text" id="contact-name" name="name" placeholder="Your name.."></input>

                    <label>Email</label>
                    <input type="text" id="contact-email" name="email" placeholder="Your email.."></input>

                    <label>Message me</label>
                    <textarea id="message" name="subject" placeholder="Leave me a message.."></textarea>

                    <input id="submit-button" type="submit" value="Submit"></input>
                    <input id="resume-button" type="submit" value="Resume"></input>
                    <p>OR Download my Resume Here</p>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;