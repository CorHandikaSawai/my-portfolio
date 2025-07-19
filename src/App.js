import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import { useState, useEffect } from 'react';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import CertificationsSection from './components/CertificationsSection/CertificationsSection';
import ContactSection from './components/ContactSection/ContactSection';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';

const App = () => {
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
        <div className={styles.app}>
            {init && (
                <Particles id={styles.tsparticles} options={particlesOptions} />
            )}
            <Header />
            <main>
                <HeroSection />
                <ProjectsSection />
                <CertificationsSection />
                {/* <ContactSection /> */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
