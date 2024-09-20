import React, {useRef} from 'react';
import './style/style.scss';
import {Navbar} from './components/navbar';
import {Welcome} from './components/welcome';
import {About} from "./components/about/about";

function App() {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className='App'>
            <Navbar scrollToAbout={scrollToAbout} scrollToTop={scrollToTop} />
            <Welcome scrollToAbout={scrollToAbout}/>
            <div className="about" ref={aboutRef}>
                <About/>
            </div>
        </div>
    );
}

export default App;
