import React from 'react';
// import {Linkedin} from 'react-icons/fa';

function Footer() {
    return (
        <footer className='d-flex justify-content-center align-items-center'>
            <div id='icons' className='d-flex align-items-center'>
                <a href='https://github.com/SwapnaMenon' className='mx-3 icons'>GitHub</a>
                <a href='https://www.linkedin.com/in/swapna-menon/' className='mx-3 icons'>LinkedIn</a>  
                <a href='https://docs.google.com/document/d/1wlvuGB-92PtQEjYP_QsHKQpeZIfiyrGa/edit?usp=sharing&ouid=107221642949745449183&rtpof=true&sd=true' className='mx-3 icons'>Resume</a> 
            </div>
        </footer>
    )
}
export default Footer;