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
            <div className="accordion-body" style={myStyle}>
              This is the first accordion body.
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
            <div className="accordion-body" style={myStyle}>
              This is the second accordion body.
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
            <div className="accordion-body" style={myStyle}>
              This is the third accordion body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




    