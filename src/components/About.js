import React from 'react';

export default function About({ mode, toggleMode }) {

  const myStyle = {
    color: mode === 'dark' ? 'white' : 'black',
    backgroundColor: mode === 'dark' ? 'black' : 'white',
    border: '1px solid',
  };

  const buttonClass = `accordion-button collapsed ${
    mode === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
  }`;

  return (
    <div className="container my-3" id="About" style={myStyle}>
      <h1>About Us</h1>

      <div className="accordion accordion-flush" id="accordionFlushExample">

        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={buttonClass}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: 'rgb(56, 0, 34)',color:'white'}}
            >This accordion provides useful tools to manipulate text easily. Users can convert text to uppercase or lowercase, remove extra spaces, copy text to the clipboard, and clear the text area. It helps improve text formatting quickly and efficiently.his is the first accordion body.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={buttonClass}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: 'rgb(2, 51, 79)', color:'white'}}>
              This section displays a quick summary of the entered text. It shows the number of words, characters, and the estimated reading time. This helps users understand their text better and analyze its length and readability..
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={buttonClass}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={{ backgroundColor: 'rgba(16, 42, 44, 0.57)',color:'white'}}>
              The preview accordion shows how the text will look after applying changes. If no text is entered, it displays a helpful message indicating that nothing is available to preview. This allows users to verify the final output before using the text elsewhere.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




    