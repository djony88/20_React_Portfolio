import React from 'react';

import News_Hawker from '../img/news_hawker.png';
import Work_Day_Scheduler from '../img/Work_Day_Scheduler.png';
import Weather_App from '../img/Weather_App.png';
import Movie_Buffs from '../img/Movie_Buffs.png';
import README_generator from '../img/README_generator.gif';
import Notes_App from '../img/Notes_App.png';
import Employee_Tracker from '../img/Employee_ Tracker.gif';
import Tech_Blog_App from '../img/Tech_Blog_App.PNG';
import Hotel_Coding from '../img/Hotel_Coding.PNG';



const Portfolio = () => {
    return (
        <div className="row">
            
            <div className="columns collapsed">
                <h1>PROJECTS</h1>
                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://news-hawker.herokuapp.com/" target="_blank" title="Weather App" rel="noreferrer">
                            <img alt="News Hawker" src={News_Hawker}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>News Hawker</h5>
                                    <p>MERN full-stack(Mongoose, Express, React, and Node), Apollo, gNews API, Lordicon, JS, CSS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://hotel-coding.herokuapp.com/" target="_blank" title="Hotel Coding" rel="noreferrer">
                            <img alt="Hotel Coding" src={Hotel_Coding}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Hotel Coding</h5>
                                    <p>Handlebars, Node.js, MySQL, CSS, JS, Heroku, npm libraries: dotenv, express, express-handlebars, express-session, bcrypt, bad-words</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://djony88.github.io/05_Work_Day_Scheduler/" target="_blank" title="Work Day Scheduler" rel="noreferrer">
                            <img alt="Work Day Scheduler" src={Work_Day_Scheduler}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Work Day Scheduler</h5>
                                    <p>HTML, CSS, JS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://djony88.github.io/06_Weather_App/" target="_blank" title="Weather App" rel="noreferrer">
                            <img alt="Weather App" src={Weather_App}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Weather App</h5>
                                    <p>HTML, CSS, JS, API, Ajax</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://jg-77.github.io/Movie-Buffs-Group-Project/?" target="_blank" title="Movie Buffs" rel="noreferrer">
                            <img alt="Movie Buffs" src={Movie_Buffs}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Movie Buffs</h5>
                                    <p>HTML, CSS, JS, API, Ajax, JQuery, SweetAlerts2, Pure CSS, Media Query</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://github.com/djony88/10_README_Generator" target="_blank" title="README Generator" rel="noreferrer">
                            <img alt="README Generator" src={README_generator}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>README Generator</h5>
                                    <p>Node.js</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://damp-river-55680.herokuapp.com/" target="_blank" title="Note Taker App" rel="noreferrer">
                            <img alt="Note Taker App" src={Notes_App}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Note Taker App</h5>
                                    <p>HTML, CSS, JS, Node.js, Express, Heroku </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://github.com/djony88/12_Employee_Tracker" target="_blank" title="Employee Tracker" rel="noreferrer">
                            <img alt="Employee Tracker" src={Employee_Tracker}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Employee Tracker</h5>
                                    <p>Node.js, MySQL</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div id="portfolio-wrapper" className="bgrid-quaters s-bgrid-thirds cf">
                    <div className="item-wrap">
                        <a href="https://gentle-sands-99944.herokuapp.com/" target="_blank" title="Tech Blog App" rel="noreferrer">
                            <img alt="Tech Blog App" src={Tech_Blog_App}/>
                            <div className="overlay">
                                <div className="portfolio-item-meta">
                                    <h5>Tech Blog App</h5>
                                    <p>Handlebars, Node.js, MySQL, CSS, JS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>

        
    )
}

export default Portfolio;