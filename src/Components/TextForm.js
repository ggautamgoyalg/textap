import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handelLoClick = () => {
    let newText = text.toLowerCase();
    settext(newText);
  
    
  };

  const handelTrimClick = () => {
    let newText = text.trim();
    settext(newText);
  };

  const handelCopy = (event) => {
    navigator.clipboard.writeText(text);
  };

  const handelExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join("  "));
  };

  const handelReverse = () => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    settext(newText);
  };

  const handelClearClick = () => {
    settext("");
  };

  const handelOnChange = (event) => {
    // console.log("changed");
    settext(event.target.value);
  };
  const [text, settext] = useState("");

  return (
    <>
    <div className={`container text-${props.mode==='light'? 'dark':'light'}`}>
      <div >
        <div className="mb-3 ">
          <h2>{props.heading}</h2>
          <textarea
            className={`form-control text-${props.mode==='light'? 'dark':'light'}`}
            style={{backgroundColor:props.mode==='light'? 'white':'grey'}}
            value={text}
            id="mybox"
            rows="12"
            onChange={handelOnChange}
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>
          Convert to LowerCase 
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handelTrimClick}>
          Remove Starting Spaces
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handelReverse}>
          Reverse
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handelClearClick}>
          Clear
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handelCopy}>
          Copy to Clipboard
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handelExtraSpaces}
        >
          Delete extra spaces
        </button>
      </div>

      <div className="container my-3">
        Words = {text.split(" ").length}
        <br />
        Letters = {text.length}
        <br />
        {0.005 * text.split(" ").length} minutes read
        <div className="my-3">
          <h2>Preview</h2>
        </div>
        {text===''?"Write Something To Preview":text}
      </div>
  </div>
    </>
  )
};
