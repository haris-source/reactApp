import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('dark'); // dark | light

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  };

  return (
    <>
      <NavBar
        title="Haris-Develop"
        about="About Section"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>

      <About
        mode={mode}
        toggleMode={toggleMode}
      />
    </>
  );
}

export default App;
