import React, {useState} from 'react'
// import {BsLink} from "react-icons/fa";


function Projects() {
    const [projects] = useState([
        {name: 'Workday Scheduler',deployed:true,repo:'https://github.com/SwapnaMenon/Work-Day-Scheduler',link: 'https://swapnamenon.github.io/Work-Day-Scheduler/', img: 'webpage-demo.png'},
        {name: 'Note-taker',deployed:true,repo:'https://github.com/SwapnaMenon/Note-Taker',link: 'https://note-taker-module.herokuapp.com/', img: 'note-taker.png'},

        
    ]);
    const deployedApps = projects.filter(project => project.deployed === true);
    const nondeployedApps = projects.filter(project => project.deployed === false);
    return (
        <div className='container'>
            <div className='row mb-2'>
                <h2>Portfolio</h2>
            </div>
            <div className='row'>
                <h3 className='my-2'>Deployed Webpages</h3>
            </div>
            <div className='row'>
                <div className='col d-flex flex-wrap my-3 projects'>
                    {!deployedApps.length ? (
                        <p>No applications of this type featured!</p>
                    ) : (
                        deployedApps.map(app => (
                            <div className='m-3 p-4 radius project' key={app.name}>
                                <a href={app.repo}>
                                    <img src={require(`../assets/images${app.img}.png`)} className='m-2 image radius' alt={app.name}></img>
                                </a>
                                <h4 className='mt-4'>{app.name}</h4>
                                <div className='my-3'>
                                    <p>Focus: {app.focus}</p>
                                    <a href = "" className='ms-3'/><a href={app.link} className='mx-2 p-1 mini-link' target='_blank' rel='noreferrer'>Deployed</a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className='row mt-2'>
                    <div className='col d-flex flex-wrap my-3 projects'>
                        {!nondeployedApps.length ? (
                            <p>No webpages appear!</p>
                        ) : (
                            nondeployedApps.map(app => (
                                <div className='m-3 p-4 radius project' key={app.name}>
                                    <a href={app.repo}>
                                        <img src={require(`../assets/images/${app.img}.png`)} className='m-2 image radius' alt={app.name}></img>
                                    </a>
                                    <h4 className='mt-4'>{app.name}</h4>
                                    <div className='my-3'>
                                        <p>Focus: {app.focus}</p>
                                       <a href={app.repo} className='mx-2 p-1 mini-link' target='_blank' rel='noreferrer'>GitHub</a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
        </div>
    )
}

export default Projects;