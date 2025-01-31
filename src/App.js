import './App.css';
import About from './components/About';
import Header from './components/Header';
import Page from './components/Page';
import Projects from './components/Projects';

function App() {
    return (
        <>
            <Header />
            <Page>
                <About />
            </Page>
            <Page>
                <Projects />
            </Page>
        </>
    );
}

export default App;
