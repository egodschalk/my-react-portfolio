import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import gitIcon from '../assets/github-logo.png'
import liIcon from '../assets/linkedin-icon.png'
import igIcon from '../assets/instagram-icon.png'


function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/egodschalk">
                <img className='git-icon-footer' src={gitIcon} />
            </a>
            <a href="https://www.linkedin.com/in/elizabeth-godschalk-6932202/">
                <img className='li-icon-footer' src={liIcon} />
            </a>
            <a href="https://www.instagram.com/elizabeth.rose.00/">
            <img className='ig-icon-footer' src={igIcon} />
            </a>
        </div>
    );
}

export default Footer