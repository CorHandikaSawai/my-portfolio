import { useCallback, useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import Particles, { initParticlesEngine } from '@tsparticles/react';

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            {init && <Particles options={particlesOptions} />}
            <Header />
            <main id='main-content'>
                <About />
                <Projects />
            </main>
        </>
    );
}

export default App;
