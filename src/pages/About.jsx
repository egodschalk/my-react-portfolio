import './About.css'
import headshot from '../assets/headshot.jpeg'

export default function About() {
    return (
        <div className="about-page">
            <h2 className="about-header">About Me</h2>
            <div className='about-content'>
                <img className="headshot" src={headshot} alt="" />
                <p className='about-text'>
                    My name is Elizabeth Godschalk. I am a newly minted Web Developer, by way of the Full Stack Bootcamp through UC Berkeley extension. I have a background in Product Management, Industrial Engineering, Process Improvement, and Project Management. I have a passion for dancing, especially latin dance. I travel all over the country, and even internationally, to learn from professional dancers, dance with people from all over the world, and perform.
                </p>
            </div>
        </div>
    );
}