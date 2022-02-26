/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ME from '../img/Me_4.jpg';

const About = () => {
    return (
<<<<<<< HEAD
        <div class="row">
            <div class="column">
                <div class="card">
                <div class="grow">
                {/* <div className="ME"> */}
                    <img src={ME} />
                </div>
        <div class="container">
=======
        <div className="container">
            <div className="ME">
                <img src={ME} />
            </div>
        <div id="About-me" class="body">
>>>>>>> 66bd502749cbb7217316efb563b60b6d6f5dd6d7
            <div class="bio">
                <h2>
                    <div class="badge bg-info text-dark">About me</div>
                </h2>
                <p>
                Full Stack Web Developer with a background in Structural Engineering and life-long dedication to learning. Effective at creativity and problem solving to develop user-friendly applications. Known among staff for strong attention to detail no matter the complexity of the project, managing multiple projects and maintaining excellent communication with consultants and clients. 
                </p>
            </div>  
         </div>
        </div>
        </div>
    </div>

    )
}

export default About;