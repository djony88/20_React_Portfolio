import React from 'react';
// const { SocialIcon } = require('react-social-icons');
// React.render(<SocialIcon url="https://www.linkedin.com/in/nikola-stamenkovic/" />, document.body);
import Resume from '../Components/resume/Nikola_Resume.pdf';

const Contact = () => {
    return (
        <section id="contact">
        <div className="row">
            <div className="ten columns">
                <p className="lead">Feel free to contact me via email, phone or Linkedin</p>
            </div>
        </div>

        <div className="row">
            
            <div className= "eight columns">
            <form action method="post" id="contactForm" name="contactForm">
                <fieldset>
                    <div>
                        <label for="contactName">
                            "Name"
                            <span className="required">*</span>
                        </label>
                        <input type="text" size="35" id="contactName" name="contactName" ></input>
                    </div>
                    <div>
                        <label for="contactEmail">
                            "Email"
                            <span className="required">*</span>
                        </label>
                        <input type="text" size="35" id="contactEmail" name="contactEmail"></input>
                    </div>
                    <div>
                        <label for="contactSubject">
                            "Subject"
                            <span className="required">*</span>
                        </label>
                        <input type="text" size="35" id="contactSubject" name="contactSubject"></input>
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
                    <aside className = "four columns footer-widgets">
                        <div className = "widget widget_contact">
                            <h4>Phone Number</h4>
                            <a className="phone" aria-current="page" href="tel:619-808-8102">619.808.8102</a>
                        </div>

                        <div>
                            <h4>Resume</h4>
                            <a class="nav-link active" aria-current="page" href={Resume}>Download PDF</a>
                        </div>

                        <div className = "widget widget_contact">
                            <h4>Email</h4>
                            <a className="email" aria-current="page" href="mailto: 88djony@gmail.com"> 88djony@gmail.com</a>
                        </div>

                        <div className = "widget widget_contact">
                            <a aria-current="page" href="https://www.linkedin.com/in/nikola-stamenkovic?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP0OBfJUiRVquA%2B%2BHZ1bBuw%3D%3D"> LinkedIn</a>
                            {/* <SocialIcon url="https://www.linkedin.com/in/nikola-stamenkovic?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP0OBfJUiRVquA%2B%2BHZ1bBuw%3D%3D" /> */}
                        </div>

                        <div className = "widget widget_contact">
                            <a href="https://twitter.com/StamNikola?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false"> Twitter</a>
                        </div>

                    </aside>
                </fieldset>
            </form>
            </div>
        </div>

        </section>
    )
};

export default Contact;