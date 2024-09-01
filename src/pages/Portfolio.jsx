import './Portfolio.css'
import Project from '../components/Project'
import { useState, useEffect } from 'react';
import onIt from '../assets/onit.jpg';
import weather from '../assets/hows-the-weather.jpg';
import firstPortfolio from '../assets/portfolio.jpg';
import dinner from '../assets/whats-for-dinner.jpg';
import blog from '../assets/blog.jpg';
import KnowItFwd from '../assets/KnowItForward.jpg';
import gitIcon from '../assets/github-logo.png'

const initialState = [
    {
        id: 1,
        title: 'How\'s The Weather?',
        icon: gitIcon,
        imgUrl: weather,
        gitUrl: 'https://github.com/egodschalk/hows-the-weather',
        projectUrl: 'https://egodschalk.github.io/hows-the-weather/'
    },
    {
        id: 2,
        title: 'onIt',
        icon: gitIcon,
        imgUrl: onIt,
        gitUrl: 'https://github.com/Preksha2408/Full-stack-application-Project-2',
        projectUrl: 'https://full-stack-application-project-2.onrender.com/'
    },   
    {
        id: 3,
        title: 'CSS Portfolio',
        icon: gitIcon,
        imgUrl: firstPortfolio,
        gitUrl: 'https://github.com/egodschalk/Elizabeth-Portfolio',
        projectUrl: 'https://egodschalk.github.io/Elizabeth-Portfolio/'
    },    
    {
        id: 4,
        title: 'KnowItForward',
        icon: gitIcon,
        imgUrl: KnowItFwd,
        gitUrl: "https://github.com/kalisurf3r/knowitforward",
        projectUrl: 'http://localhost:5174/'
    },    
    {
        id: 5,
        title: 'What\'s for Dinner?',
        icon: gitIcon,
        imgUrl: dinner,
        gitUrl: 'https://github.com/justkuper/Project-1',
        projectUrl: 'https://justkuper.github.io/Project-1/'
    },    
    {
        id: 6,
        title: 'Personal Blog',
        icon: gitIcon,
        imgUrl: blog,
        gitUrl: 'https://github.com/egodschalk/Student-Personal-Blog',
        projectUrl: 'https://egodschalk.github.io/Student-Personal-Blog/'
    },

]

export default function Portfolio() {


    const [projects, setProjects] = useState(initialState);

    return (
      <div className='portfolio-page'>
        <h2 className='portfolio-header'>Portfolio</h2>
        <div className='portfolio-cards'>
            {projects.map(proj => (
                <Project data={proj} key={proj.id} />
            ))}
        </div>
      </div>
    );
  }