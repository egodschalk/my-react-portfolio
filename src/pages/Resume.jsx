import './Resume.css';
import { useState, useEffect } from 'react';
import resume from '../assets/Elizabeth-Godschalk-Resume-1.png'

export default function Resume() {
    return (
        <div className="resume-page">
            <div className='heading section'>
            <div className="resume-header">
                <h2>Resume</h2>
                <a className='resume-link' href={resume} download='Elizabeth-Godschalk-Resume'>Download My Resume</a>
            </div>
            </div>
            <div className='resume-content'>
                <div className='resume-text'>
                    <div className='skillz'>
                        <h4>FrontEnd</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>Responsive Design</li>
                            <li>Handlebars</li>
                        </ul>
                    </div>
                    <div className='skillz'>
                        <h4>BackEnd</h4>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>PostgreSQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}