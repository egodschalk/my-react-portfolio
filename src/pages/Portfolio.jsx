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
// import Carousel from 'react-bootstrap/Carousel';
// import { Carousel } from 'primereact/carousel';


const initialState = [
    {
        id: 1,
        title: 'KnowItForward',
        icon: gitIcon,
        imgUrl: KnowItFwd,
        gitUrl: "https://github.com/kalisurf3r/knowitforward",
        projectUrl: 'https://knowitforward.netlify.app/'
    },
    {
        id: 2,
        title: 'What\'s for Dinner?',
        icon: gitIcon,
        imgUrl: dinner,
        gitUrl: 'https://github.com/justkuper/Project-1',
        projectUrl: 'https://justkuper.github.io/Project-1/'
    },
    {
        id: 3,
        title: 'How\'s The Weather?',
        icon: gitIcon,
        imgUrl: weather,
        gitUrl: 'https://github.com/egodschalk/hows-the-weather',
        projectUrl: 'https://egodschalk.github.io/hows-the-weather/'
    },
    {
        id: 4,
        title: 'onIt',
        icon: gitIcon,
        imgUrl: onIt,
        gitUrl: 'https://github.com/Preksha2408/Full-stack-application-Project-2',
        projectUrl: 'https://full-stack-application-project-2.onrender.com/'
    },
    {
        id: 5,
        title: 'CSS Portfolio',
        icon: gitIcon,
        imgUrl: firstPortfolio,
        gitUrl: 'https://github.com/egodschalk/Elizabeth-Portfolio',
        projectUrl: 'https://egodschalk.github.io/Elizabeth-Portfolio/'
    },
]

export default function Portfolio() {

    const [projects, setProjects] = useState(initialState);

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };

    // const responsiveOptions = [
    //     {
    //         breakpoint: '1400px',
    //         numVisible: 3,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '1199px',
    //         numVisible: 3,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '767px',
    //         numVisible: 2,
    //         numScroll: 1
    //     },
    //     {
    //         breakpoint: '575px',
    //         numVisible: 1,
    //         numScroll: 1
    //     }
    // ];


    return (
        <div className='portfolio-page'>
            {/* <h2 className='portfolio-header'>Portfolio</h2> */}
            <div className='portfolio-cards'>

                {projects.map(proj => (
                    <Project data={proj} key={proj.id} />
                ))}
                {/* <Carousel activeIndex={index} onSelect={handleSelect} className='project-carousel'>
                    {projects.map(proj => (
                        <Carousel.Item className='carousel-project'>
                            <Project data={proj} key={proj.id} className='project'/>
                        </Carousel.Item>
                    ))}
                </Carousel> */}
                {/* {projects.map(proj => (
                    <Carousel value={proj} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} key={proj.id} className='project-carousel'/>
                    // <Project data={proj}  />
                ))} */}


            </div>
        </div>
    );
}

// carousel from tutorial: doesn't hide the cards, scroll right to see them

// const [currentIndex, setCurrentIndex] = useState(0)
// const [length, setLength] = useState(projects.length)

// // Set the length to match current children from props
// useEffect(() => {
//     setLength(projects.length)
// }, [projects])

// const next = () => {
//     if (currentIndex < (length - 1)) {
//         setCurrentIndex(prevState => prevState + 1)
//     }
// }

// const prev = () => {
//     if (currentIndex > 0) {
//         setCurrentIndex(prevState => prevState - 1)
//     }
// }


// const [touchPosition, setTouchPosition] = useState(null)

// const handleTouchStart = (e) => {
//     const touchDown = e.touches[0].clientX
//     setTouchPosition(touchDown)
// }

// const handleTouchMove = (e) => {
//     const touchDown = touchPosition

//     if(touchDown === null) {
//         return
//     }

//     const currentTouch = e.touches[0].clientX
//     const diff = touchDown - currentTouch

//     if (diff > 5) {
//         next()
//     }

//     if (diff < -5) {
//         prev()
//     }

//     setTouchPosition(null)
// }


{/* <div className='carousel-container'>
<div className='carousel-wrapper'>
    {
        currentIndex > 0 &&
        <button onClick={prev} className="left-arrow">
            &lt;
        </button>
    }
    <div className='carousel-content-wrapper' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <div className='carousel-content' style={{ transform: `translateX(-${currentIndex * 98}%)` }}>
            {projects.map(proj => (
                <Project data={proj} key={proj.id} />
            ))}
        </div>
    </div>
    {
        currentIndex < (length - 1) &&
        <button onClick={next} className="right-arrow">
            &gt;
        </button>
    }
</div>
</div> */}