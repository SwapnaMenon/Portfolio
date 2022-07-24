import React from 'react';

function About() {
    return (
        <div className='container'>
            <div className='row d-flex flex-wrap justify-content-center align-items-center my-3'>
                <img src={require('../assets/cover/portfolio-pic.jpg')} alt='' id='avatar' className='m-3'></img>
                <div id='about-caption'>
                    <h2>Swapna Menon</h2>
                    <ul className='d-flex flex-wrap list-inline' id='title'>
                        <li>Junior full-stack Web DeveloperRecruiter</li>
                        <li className='mx-1 vert'></li>
                        <li>Recruiter</li>
                        <li className='mx-1 vert'></li>
                    </ul>
                </div>
            </div>
            <div className='row mx-5 my-3'>
                <ul className='about-text'>
                    <li>👋🏽 Hi, My name is Swapna Menon.  </li>
                    <li className='mx-1 vert'></li>
                    <li>🎓 A recent grad with a Masters's degree specializing in Information security and Digital Forensics following a Bachelor's degree specializing in Human Resources and a year of work experience in high-volume recruiting. In addition to my two degrees, I am also enrolled in a Coding Bootcamp.  </li>
                    <li className='mx-1 vert'></li>
                    <li> Link to my Github repository: https://github.com/SwapnaMenon</li>
                    <li className='mx-1 vert'></li>
                    <li>🌇 Canadian with a passion for software development and cyber security. </li>
                    <li className='mx-1 vert'></li>
                    <li>💻  As for the future, I see myself working in one of the top tech companies as an incident response specialist.</li>
                    <li className='mx-1 vert'></li>
                    <li>🏔  In my free time, you can find me exploring new destinations. </li>
                    <li className='mx-1 vert'></li>
                    <li>💪🏽  HTML, CSS, Javascript, SQL, Node, Cybersecurity, Penetration Testing using software such as Wireshark, Metasploit, Recruiting, Training and Development.</li>
                </ul>
            </div>
        </div>
    )
}
export default About;