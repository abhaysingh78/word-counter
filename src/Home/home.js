import React, { useState } from "react";
import "./home.css";
import Button from "react-bootstrap/Button";

const Home = ({ style }) => {
  const [text, setText] = useState("");

  const toUpper = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const toLower = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const toInverse = () => {
    const newText = text.split("").reverse().join("");
    setText(newText);
  };

  const copyText = () => {
    const text = document.getElementById("myid");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const extraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const clearAll = () => {
    setText("");
  };
  return (
    <>
      <h2 className='word'>Word Counter</h2>
      <div>
        <textarea
          style={style}
          id='myid'
          type='text'
          className='textarea'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <br />
      <div className='btn'>
        <Button style={style} onClick={toUpper} variant='primary'>
          convert to Uppercase
        </Button>{" "}
        <Button
          style={style}
          onClick={toLower}
          variant='primary'
          className='m-3'
        >
          convert to Lowercase
        </Button>{" "}
        <Button
          style={style}
          onClick={toInverse}
          variant='primary'
          className='m-3'
        >
          Reverse
        </Button>
        <Button
          style={style}
          onClick={clearAll}
          variant='primary'
          className='m-3'
        >
          Clear All
        </Button>{" "}
        <Button
          style={style}
          onClick={copyText}
          variant='primary'
          className='m-3'
        >
          Copy to clipboard
        </Button>{" "}
        <Button
          style={style}
          onClick={extraSpace}
          variant='primary'
          className='m-3'
        >
          Remove Extra Space
        </Button>
      </div>

      <div className='summary'>
        <p className='my-2'>
          {text.split(" ").length} Words & {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Home;
