import React from 'react';

function ContactForm() {
    // Get the modal
    const modal = document.getElementById("myModal");

    // Get the button that opens the modal
    const submitButton = document.getElementById("submit-button");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    submitButton.onClick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onClick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    return (
        <div>
            <div className="container" id="contact-form">
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
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Unfortunately this feature is currently unavailable, Please email me instead under More Info.. Thank you</p>
                </div>
            </div>
        </div>


    );
};

export default ContactForm;