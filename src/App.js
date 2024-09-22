import React, { useState } from 'react'


const App = () => {
  const [firstUserInput, setFirstUserInput] = useState("");
  const [secondUserInput, setSecondUserInput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult]= useState("");
  console.log(`here is my first input : ${firstUserInput}`);
  console.log(`here is my second input : ${secondUserInput}`);

  // validation function
  function validate() {
    if (!firstUserInput || !secondUserInput) {
      return "Both fields are required";
    } 
    if (isNaN(firstUserInput) || isNaN(secondUserInput)) {
      return "Please Enter a Valid Number"
    }
    return null;
  }
  function add() {
    const errorMessage = validate();
    if (errorMessage) {
      setError(errorMessage);
      setResult(null);
      return;
    } else {
      setError("");
      setResult(parseFloat(firstUserInput) + parseFloat(secondUserInput))
    }
  }
  function subtract() {
    const errorMessage = validate();
    if (errorMessage) {
      setError(errorMessage);
      setResult(null);
      return;
    } else {
      setError("");
      setResult(parseFloat(firstUserInput) - parseFloat(secondUserInput))
    }
  }
  function multiply() {
    const errorMessage = validate();
    if (errorMessage) {
      setError(errorMessage);
      setResult(null);
      return;
    } else {
      setError("");
      setResult(parseFloat(firstUserInput) * parseFloat(secondUserInput))
    }
  }
  function divide() {
    const errorMessage = validate();
    if (errorMessage) {
      setError(errorMessage);
      setResult(null);
      return;
    } else {
      setError("");
      setResult(parseFloat(firstUserInput) / parseFloat(secondUserInput))
    }
  }
  
  return (
    <div style={outerContainerStyle}>
 <container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', width:"500px",  }}>
      <h1 style={{ color: '#333' }}>React Calculator</h1>
      <div>
        <input 
          onChange={(e) => { setFirstUserInput(e.target.value) }} 
          type='text' 
          style={{ margin: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }} 
          placeholder="Enter first number"
        />
        <input 
          onChange={(e) => { setSecondUserInput(e.target.value) }} 
          type='text' 
          style={{ margin: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }} 
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button onClick={add} style={buttonStyle}>Add</button>
        <button onClick={subtract} style={buttonStyle}>Subtract</button>
        <button onClick={multiply} style={buttonStyle}>Multiply</button>
        <button onClick={divide} style={buttonStyle}>Divide</button>
      </div>
      <div>
        {error && (<h3 style={{ color: "red" , paddingTop:"10px" , fontStyle:'italic' }}>{error}</h3>)}
        {result !== null && (<h3 style={{ color: "limegreen", fontSize:"2rem", paddingTop:"10px" , fontStyle:'italic' }}>{result}</h3>)}
      </div>
    </container>
    </div>
   
  );
};

const buttonStyle = {
  margin: '5px',
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease'
};

const outerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};




export default App