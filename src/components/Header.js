import React from 'react';
import Navigation from './Navigation';
import "./components.css"

function Header({options = [], selection, setSelection}) {
    return (
        <header className='d-flex flex-wrap p-3 mb-5'>
            <h1 className='d-inline-flex p-1'>
                <a href="/Portfolio">Swapna Menon</a>
            </h1>
            <div className= "title">
            <Navigation
                options={options}
                selection={selection}
                setSelection={setSelection}>
            </Navigation>
            </div>
        </header>
    )
}

export default Header;