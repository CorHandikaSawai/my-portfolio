import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
    return (
        <>
            <Header />
            <main id='main-content'>
                <About />
                <Projects />
            </main>
        </>
    );
}

export default App;
