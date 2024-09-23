import './Resume.css';
import { useState, useEffect } from 'react';
import resume from '../assets/Elizabeth-Godschalk-Resume.pdf'

export default function Resume() {
    return (
        <div className="resume-page">
            {/* <div className='heading section'>
            <div className="resume-header">
                <h2>Resume</h2>

            </div>
            </div> */}
            <div className='resume-content'>
            <a className='resume-link' href={resume} download='Elizabeth-Godschalk-Resume'>Download My Resume</a>
                <div className='resume-text'>
                    <h4>Technical Skills</h4>
                    <div className='skillz'>
                        <h5>Web Development</h5>
                        <ul>
                            Front-end: HTML, CSS, React, Javascript, Responsive Design, Bootstrap
                            {/* <li>CSS</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>Responsive Design</li>
                            <li>Handlebars</li> */}
                        </ul>
                        <ul>
                            Back-end: APIs, Node, Express, PostgreSQL/Sequelize, MongoDB/Mongoose, REST
                        </ul>
                        <h5>Product / Project Management</h5>
                        <ul>
                        Agile, JIRA, Confluence, AutoCAD, MURAL, MS Project, Excel, PowerPoint, GoalPost LMS, Fascor WMS
                        </ul>
                    </div>
                    <h4>Education</h4>
                    <div className='skillz'>
                        <h5>UC Berkeley Extension, September 2024</h5>
                        <ul>Full-Stack Web Development Bootcamp</ul>
                        <h5>Scrum Alliance, January 2024</h5>
                        <ul>Certified Scrum Product Owner Certificate</ul>
                        <h5>Ohio State University, June 2005</h5>
                        <ul>Bachelor of Science in Industrial & Systems Engineering</ul>
                    </div>
                    <h4>Product Management Experience</h4>
                    <div className='skillz'>
                        <h5>Kroger Digital</h5>
                        <h6>Product Manager, 2019-2021</h6>
                        <ul>Integral member of innovation team for Kroger Pickup app during pandemic, facilitating rapid scaling of Pickup operations & testing new ideas for fulfilling Pickup orders to keep up with demand
</ul>
                    </div>
                    <h4>Engineering & Project Management Experience</h4>
                    <div className='skillz'>
                        <h5>Gap, Inc</h5>
                        <h6>Engineering Manager, 2021-2023</h6>
                        <ul></ul>
                        <h5>West Chester Protective Gear</h5>
                        <h6>Project Manager, 2018-2019</h6>
                        <ul></ul>
                        <h5>Cornerstone Services, Inc</h5>
                        <h6>Senior Industrial Engineer, 2006-2015</h6>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}