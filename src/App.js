
import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const options = [
        'About',
        'Portfolio',
        'Contact',
        
    ]
    const [selection, setSelection] = useState(options[0]);
    return (
        <div id='page-container'>
            <Header
                options={options}
                selection={selection}
                setSelection={setSelection}>
            </Header>
            <main id='content-wrap'>
                {(() => {
                    switch (selection) {
                        case 'About':
                            return <About></About>
                        case 'Portfolio':
                            return <Projects></Projects>
                        case 'Contact':
                            return <Contact></Contact>
                        default:
                            return <About></About>
                    }
                })()}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
