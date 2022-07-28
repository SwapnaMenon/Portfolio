import React, {useState} from 'react'
// import {BsLink} from "react-icons/fa";


function Projects() {
    const [projects] = useState([
        {name: 'Workday Scheduler',deployed:true,repo:'https://github.com/SwapnaMenon/Work-Day-Scheduler',link: 'https://swapnamenon.github.io/Work-Day-Scheduler/', description: 'xxx', img: 'webpage-demo.png'},
        {name: 'Note-taker',deployed:true,repo:'https://github.com/SwapnaMenon/Note-Taker',link: 'https://note-taker-module.herokuapp.com/', img: 'note-taker.png'}, 
        {name: 'Paws',deployed:true,repo:'https://github.com/project0301/paws',link: 'https://petstuffplus.herokuapp.com/', img: 'paws.png'},
    ]);
    const deployedApps = projects.filter(project => project.deployed === true);
    const nondeployedApps = projects.filter(project => project.deployed === false);
    return (
        <div className='container'>
            <div className='row projecttitle'>
                <h3 className='my-2'>Deployed Webpages</h3>
            </div>
            <div className='row'>
                <div className='col d-flex flex-wrap my-3 projects'>
                    {!deployedApps.length ? (
                        <p></p>
                    ) : (
                        deployedApps.map(app => (
                            <div className='m-3 p-4 radius project' key={app.name}>
                                <div className ="projectcard">
                                <a href={app.repo}>
                                  <img src={require(`../assets/images/${app.img}`)} className='m-2 image radius' alt={app.name}/>
                                </a>
                                <h4 className='mt-4'>{app.name}</h4>
                                <div className='my-3'>
                                    <p>Description: {app.description}</p>
                                    <a href = {app.repo}className='ms-3'>Repository</a>
                                    <br></br>
                                <a href={app.link} className='mx-2 p-1 mini-link' target='_blank' rel='noreferrer'>Deployed</a>
                                </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className='row mt-2'>
                    <div className='col d-flex flex-wrap my-3 projects'>
                        {!nondeployedApps.length ? (
                            <p></p>
                        ) : (
                            nondeployedApps.map(app => (
                                <div className='m-3 p-4 radius project' key={app.name}>
                                    <a href={app.repo}>
                                        <img src={require(`../assets/images/${app.img}.png`)} className='m-2 image radius' alt={app.name}></img>
                                    </a>
                                    <h4 className='mt-4'>{app.name}</h4>
                                    <div className='my-3'>
                                        <p>Description: xxx {app.description}</p>
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