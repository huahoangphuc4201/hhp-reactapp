import React, { useState, useRef } from 'react';
import "./App.css";

function App() {

  const [position, setPosition]=useState();

  const buttonRef= useRef();

  const randomPosition=()=> {
    buttonRef.current.style.display='none';
    var posx = Math.floor(Math.random() * (window.innerWidth - 200));
    var posy = Math.floor(Math.random() * (window.innerHeight - 50));
    setPosition({top: posy+'px',left: posx+'px'});
  }

  const handleClick=()=>{
    alert("Không gặp không về nhá :3")
  }

  return (
    <div className="App">
      {position&& 
      <div
        className="free-button"
        style={{top:position.top,left:position.left}}
        onMouseEnter={randomPosition}
      >
        Honggg
      </div>}
      <div className="mess">Để Phúc đèo về nhà nhé :3</div>
      <div style={{display:"flex",width:'20%',margin: "auto",}}>
        <div className="button" ref={buttonRef} onMouseEnter={randomPosition}>Honggg</div>
        <div className="button" style={{ color: "white",background:"#fa3c9b" }} onClick={()=>handleClick()}>Okee ^^</div>
      </div>
    </div>
  );
}

export default App;
