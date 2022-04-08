import './App.css';
import Biodata from './components/Biodata';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <aside>
        <Biodata />
        <Contact />
      </aside>
    </div>
  );
}

export default App;
