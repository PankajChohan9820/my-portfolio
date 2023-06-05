import React from 'react';
import './Header.css';
import GithubLogo from '../assets/github.png';
import LinkedInLogo from '../assets/linkedin.png';
import ProgrammerLogo from '../assets/programmerIcon.png'

function Header() {
    const linkedinHref = 'https://www.linkedin.com/in/pankaj-chohan-602387168/'
    const githubHref = 'https://github.com/PankajChohan9820'
    return (
        <div className="header">
            <div className="header-left">
                <button>
                    <img src={ProgrammerLogo} alt="Programmer Logo" />
                    {/* <h1>Pankaj Chohan</h1> */}
                </button>
            </div>
            <div className="header-middle">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Me</button>
                <button onClick={() => window.scrollTo({ top: window.innerHeight + 80, behavior: 'smooth' })}>Work</button>
                <button onClick={() => window.scrollTo({ top: window.innerHeight * 2 + 80, behavior: 'smooth' })}>Projects</button>
                <button onClick={() => window.scrollTo({ top: window.innerHeight * 3 + 80, behavior: 'smooth' })}>Contact</button>
            </div>
            <div className="header-right">
                <a href={githubHref}><img src={GithubLogo} alt="Github Logo" /></a>
                <a href={linkedinHref}><img src={LinkedInLogo} alt="LinkedIn Logo" /></a>
            </div>
        </div>
    );
}
export default Header;