import React, { useState } from "react";
import "../Conponents/Calculator.css";

const Calculator = () => {
    const [test, setTest] = useState();

    const displayShow =(event) =>{
        setTest(event.target.display);
        return;
        
        console.log(setTest);
    }
  return (
    <>
      <div className="container">
        <div className="calculator">
          <form className="inputBox">
            <input type="text" id="display" className="display" placeholder="name" /> <br />
            <input type="text" value="7" className="button" />
            <input type="text" value="8" className="button" />

            <input type="text" value="9" className="button" />

            <input type="text" value="+" className="button" /> <br />

            <input type="text" value="4" className="button" />
            <input type="text" value="5" className="button" />
            <input type="text" value="6" className="button" />
            <input type="text" value="-" className="button" /> <br />
            <input type="text" value="1" className="button" />
            <input type="text" value="2" className="button" />
            <input type="text" value="3" className="button" />
            <input type="text" value="*" className="button" /> <br />
            <input type="text" value="AC" className="button" />
            <input type="text" value="." className="button" />
            <input type="text" value="%" className="button" />
            <input type="text" value="/" className="button" /> <br />
            <input type="text" value="C" className="button btn5" />
            <input type="text" value="00" className="button" />
            <input type="text" value="=" className="button" />



          </form>
        </div>
      </div>
    </>
  );
};

export default Calculator;
