/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ME from '../img/Me_4.jpg';

const About = () => {
    return (
        <div className="container">
            <div className="ME">
                <img src={ME} />
            </div>
        <div id="About-me" class="body">
            <div class="bio">
                <h2>
                    <span class="badge bg-info text-dark">About me</span>
                </h2>
                <p>
                Full Stack Web Developer with a background in Structural Engineering and life-long dedication to learning. Effective at creativity and problem solving to develop user-friendly applications. Known among staff for strong attention to detail no matter the complexity of the project, managing multiple projects and maintaining excellent communication with consultants and clients. 
                </p>
            </div>  
           
         </div>
    </div>

    )
}

export default About;