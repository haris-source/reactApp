import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick= () => {
    // console.log("UpperCase was Clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCasse!", "success")
  }
    const handleLoClick= () => {
    // console.log("UpperCase was Clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCasse!", "success")
  }
   const handleOnChange= (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }
  const handleExtraSpaces= () => {
   let newText = text.split(/\s+/);
    setText(newText.join(" "))
    props.showAlert("Romove Extra Spaces!", "success")
  }
const speak = () => {
  const msg = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();
  msg.voice = voices.find(voice =>
    voice.name.toLowerCase().includes('female')
  );

  msg.pitch = 1.2; // makes voice sound feminine
  window.speechSynthesis.speak(msg);
  props.showAlert("Speak mode has been Enabled!", "success")
};

 const [text, setText] = useState('');
  return (<>
    <div className='container'>
      <h1 >{props.heading} </h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">Textarea</label>
    <textarea className="form-control" value={text} placeholder="Enter text here"  onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-info text-light mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
    <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>
         {text.split(" ").length-1} words and {text.length} characters.<br />
         {0.008 * text.split(" ").length} Minutes/Seconds to read words</p>
      <h2>Preview</h2>
      <p className='my-3'>{text.length>0?text:"Enter your Text Above To Preview It"}</p>
    </div>
</>
  )
  
}