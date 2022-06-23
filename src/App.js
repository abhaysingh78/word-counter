import "./App.css";
import Home from "./Home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [dark, setDark] = useState("Enable Dark Mode");

  const darkMode = () => {
    if (style.color === "black") {
      setStyle({
        backgroundColor: "#354259",
        color: "white",
      });
      setDark("Enable Light Mode");
    } else {
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
      setDark("Enable Dark Mode");
    }
  };
  return (
    <>
      <div style={style} className='body'>
        {/* <button className='btn btn-primary btns' onClick={darkMode}>
          {dark}
        </button> */}

        <div className='form-check form-switch form'>
          <input
            className='form-check-input'
            type='checkbox'
            role='switch'
            id='flexSwitchCheckDefault'
            onClick={darkMode}
          />{" "}
          {dark}
        </div>
        <Home style={style} />
      </div>
    </>
  );
}

export default App;
