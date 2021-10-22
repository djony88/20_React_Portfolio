import React from 'react';
import Resume from '../Components/resume/Nikola_Resume.pdf';
// import Email from '../../src/img/Icons/email.png';
// import LinkedIn from '../../src/img/Icons/LinkedIn.png';
// import GitHub from '../../src/img/Icons/GitHub-Mark.png';
// import Twitter from '../../src/img/Icons/Twitter.png';

// const styles = {
//     footing: {
//         // height: '100px',
//         width: '100%',
//         backgroundColor: 'black',
//         // lineHeight: '60px',
//         paddingBottom: '45px',
//       },
//       footerHeading: {
//         textAlign: 'center',
//         color: 'white',
//       },
//       ul: {
//         listStyleType: 'none',
//         //display: 'inline-flex',
//         flexWrap: 'flex',
//       },
//       anchor: {
//         marginRight: '75px',
//         color: 'rgb(0, 255, 213)',
//         textDecoration: 'none',
//       },
//       icon: {
//         height: '100px',
//         width: '100px',
//         marginTop: '5px',
//         marginRight: '-10px',
//       },
// }

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
                            <h4>Contact Me</h4>
                            {/* <img src={Email} style={styles.icon} alt="Email icon" /> */}
                            <a className="email" aria-current="page" href="mailto: 88djony@gmail.com"> Email</a>
                        </div>

                        <div className = "widget widget_contact">
                            <a aria-current="page" href="https://www.linkedin.com/in/nikola-stamenkovic?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BP0OBfJUiRVquA%2B%2BHZ1bBuw%3D%3D"> LinkedIn</a>

                        </div>

                        <div className = "widget widget_contact">
                            <a href="https://github.com/djony88" class="GitHub" data-show-count="false"> GitHub</a>
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