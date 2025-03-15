import './About.css'
import headshot from '../assets/headshot2.jpg'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'

export default function About() {
    return (
        <div className="about-page">
            <div className='about-content'>
                <img className="headshot" src={headshot} alt="" />
                <div className='about-text'>
                    <p>Hey there! I’m Elizabeth Godschalk, a freshly minted Web Developer, thanks to UC Berkeley's Full Stack Bootcamp. Before diving into the world of coding, I spent 15 years mastering Product Management, Industrial Engineering, and Project Management. </p>
                    <p>When I’m not geeking out over code, I’m twirling around the dance floor. I have a huge passion for Latin dance and love traveling the globe to learn from pros, dance with amazing people from every corner, and perform whenever I can.</p>
                </div>
            </div>
            {/* <Portfolio /> */}
            {/* <Resume /> */}
        </div>
    );
}