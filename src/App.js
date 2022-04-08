import './App.css';
import Biodata from './components/Biodata';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <aside>
        <Biodata />
        <Contact />
        <Skills />
      </aside>
    </div>
  );
}

export default App;
