import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Work from './components/Work';


function App() {
  return (
    <div className="App">
      <div>
      <Header />
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
      {/* <h1>Welcome to my portfolio!</h1> */}
    </div>
    </div>
  );
}

export default App;
