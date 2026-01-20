import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick= () => {
    // console.log("UpperCase was Clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
  }
    const handleLoClick= () => {
    // console.log("UpperCase was Clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
  }
   const handleOnChange= (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
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
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      <p>{ 0.008 * text.split(" ").length} Minutes/Seconds to read words</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
</>
  )
  
}