import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
 HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('dark'); // dark | light
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
   setAlert({
    msg:message,
    type: type,
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been Enabled", "success")
      document.title ='Haris-Dev light-mode'
      // setInterval(() => {
      //    document.title ='Haris-Dev is Amazing App'
      // }, 1000);
      //    setInterval(() => {
      //    document.title ='Install Haris-Dev Now!'
      // }, 2000);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been Enabled" , "success")
      document.title ='Haris-Dev Dark-mode'

    }
  };
  useEffect(() => {
  if (mode === 'dark') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}, [mode]);

  return (
    <>
    <Router>
      <NavBar
        title="Haris-Develop"
        about="About Section"
        mode={mode}
        toggleMode={toggleMode}
      />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>

      <Route
        path="/about"
        element=
          { <About
            mode={mode}
            toggleMode={toggleMode}
          /> }
        
      />

      <Route
       path="/"
        element={
          <TextForm
            heading="Enter the text to analyze"
            mode={mode}
            showAlert={showAlert}
          />
        }
      />

    </Routes>
    </div>
</Router>

   </>
  );
}
 
export default App;
