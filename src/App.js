
import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home  from './components/Home'
function App() {
    const options = [
        'Home',
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
                        case 'Home':
                            return <Home></Home>
                        case 'About':
                            return <About></About>
                        case 'Portfolio':
                            return <Projects></Projects>
                        case 'Contact':
                            return <Contact></Contact>
                        default:
                            return <Home></Home>
                    }
                })()}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
