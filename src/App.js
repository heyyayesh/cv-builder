import './App.css';
import Biodata from './components/Biodata';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className='App'>
      <aside>
        <Biodata />
        <Contact />
        <Skills />
        <Hobbies />
      </aside>
      <main>
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;
