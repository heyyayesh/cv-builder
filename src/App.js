import './App.css';
import Biodata from './components/Biodata';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <aside>
        <Biodata />
        <Contact />
        <Skills />
        <Hobbies />
      </aside>
    </div>
  );
}

export default App;
