import { Link, useLocation } from 'react-router-dom';
import './NavTabs.css'

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className='navtabs'>
            {/* <div className="header">
                <h1 className="header-h1">Elizabeth Godschalk</h1>
                <h3 className="subheader">Full Stack Web Developer</h3>
            </div> */}
            <div className="navbar">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Portfolio"
                            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Contact"
                            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Resume"
                            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavTabs;