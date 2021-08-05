
import React from 'react';
import ME from '../img/Me_4.jpg';

const About = () => {
    return (
        <div class="container">
            <div className="ME">
                <img src={ME} />
            </div>
        <div id="About-me" class="body">
            <div class="bio">
                <h2>
                    <span class="badge bg-info text-dark">About me</span>
                </h2>
                <p>
                    After finishing Civil Engineering in 2010 in Serbia I started working in structural engineering firm in 2016 and worked on high-end residental houses. Gane a lot of experience and after 4 and a half years decided to try Web develoment and coding. Web development and coding was something that I always wanted to learn. Started UCSD Extension bootcamp for Web develompent and Coding in March 2021...
                </p>
            </div>  
           
         </div>
    </div>

    )
}

export default About;