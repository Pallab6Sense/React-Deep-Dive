import { useState } from 'react';
import './TextForm_USeState.css'

const TextForm = (props) => {
  const [text, setText] = useState('Enter the text here');
  function convertToUppercase() {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="">
      <h1 className="">{props.heading}</h1>
      <textarea
        className="form-control"
        id="myBox"
        cols="80"
        rows="10"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <div className="button">
        <button className="btn" onClick={convertToUppercase}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
};

export default TextForm;
