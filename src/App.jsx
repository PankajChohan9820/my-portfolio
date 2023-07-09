import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';
import './style.css';

function App() {
  return (
    <div className="App bg-white">
      <div>
      <Header />
      <About/>
      <Resume/>
      <Project/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
