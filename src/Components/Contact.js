import React from 'react';


const Contact = () => {
    return (
        <section id="contact">
        <div className="row section-head">
            ::before
            <div className="two columns header-col">
                <h1>
                    ::before
                    <span>Get in touch.</span>
                </h1>
            </div>
            <div className="ten columns">
                <p className="lead">Feel free to contact me via email, this form or Linkedin</p>
            </div>
            ::after
        </div>

        <div className="row">
            ::before
            <div className= "eight columns">
            <form action method="post" id="contactForm" name="contactForm">
                <fieldset>
                    <div>
                        <label for="contactName">
                            "Name"
                            <span className="required">*</span>
                        </label>
                        <input type="text" size="35" id="contactName" name="contactName" value></input>
                    </div>
                    <div>
                        <label for="contactEmail">
                            "Email"
                            <span className="required">*</span>
                        </label>
                        <input type="text" size="35" id="contactEmail" name="contactEmail" value></input>
                    </div>
                    <div>
                        <label for="contactSubject">
                            "Subject"
                            <span className="required">*</span>
                        </label>
                        <input type="text" size="35" id="contactSubject" name="contactSubject" value></input>
                    </div>
                    <div>
                        <label for="contactSubject">
                            "Subject"
                            <span className="required">*</span>
                        </label>
                        <input type="text" size="35" id="contactSubject" name="contactSubject" value></input>
                    </div>
                    <div>
                        <label for="contactMessage">
                            "Message"
                            <span className="required">*</span>
                        </label>
                        <textarea cols="50" id="contactMessage" name="contactMessage"></textarea>
                    </div>
                    <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                            <img alt src="img/"></img>
                        </span>
                    </div>
                </fieldset>
            </form>
            </div>
        </div>
        </section>
    )
};

export default Contact;