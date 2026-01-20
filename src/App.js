import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
<NavBar title="Haris-Develop" about="About Section" />
<div className="container my-3">
<TextForm heading="Enter the text to analyze"/>
</div>
   </> );
}

export default App;