import './App.css';
import React, { useState } from 'react';

function App() {

  //time ID:
  //produsksjon og historiefortelling
  //konseptutvikling og programmering   0
  //teknologiforståelse                 1
  //YFF                                 2
  //matte                               3
  //naturfag                            4
  //gym                                 5
  //engelsk                             6

  const fag_data = {
    0:{
      name: "Produksjon og historiefortelling",
      ukeTimer: 5.5
    },
    1:{
      name: "Konseptutvikling og programmering",
      ukeTimer: 5.5
    },
    2:{
      name: "Teknologiforståelse",
      ukeTimer: 5.5
    },
    3:{
      name: "YFF",
      ukeTimer: 6
    },
    4:{
      name: "Engelsk",
      ukeTimer: 5
    },
    5:{
      name: "Matte",
      ukeTimer: 3
    },
    6:{
      name: "Naturfag",
      ukeTimer: 2
    },
    7:{
      name: "Gym",
      ukeTimer: 2
    },
  }

  const [fagID, setFagID] = useState(0);
  const handleFagChange = (event) => {
    setFagID(event.target.value)
  }

  const [timerVekke, setTimerVekke] = useState(0);
  const handleTimerVekkeChange = (event) => {
    setTimerVekke(event.target.value)
  }

  const [wholePercent, setWholePercent] = useState(0);
  const [halfPercent, setHalfPercent] = useState(0);
  const calculatePercent = () => {
    setWholePercent((timerVekke / (parseInt(fag_data[fagID].ukeTimer) * 38) * 100).toFixed(2))
    setHalfPercent((timerVekke / (parseInt(fag_data[fagID].ukeTimer) * 19) * 100).toFixed(2))
  }



  return (
    <div className="App">
      <h1>Informasjonsteknologi og medieproduksjon:</h1>
      
      <form>
        <select name="year" id="year">
          <option value="year_1">VG1</option>
          <option value="year_2" disabled="disabled">VG2</option>
        </select>

        <h3>Hvor mange timer skal du ta fri?</h3>

        <label htmlFor="fag">Hvilket fag skal du ta fri?</label><br/>
        <select name="fag" id="fag" onChange={handleFagChange}>
          <option value="0">{fag_data[0].name}</option>
          <option value="1">{fag_data[1].name}</option>
          <option value="2">{fag_data[2].name}</option>
          <option value="3">{fag_data[3].name}</option>
          <option value="4">{fag_data[4].name}</option>
          <option value="5">{fag_data[5].name}</option>
          <option value="6">{fag_data[6].name}</option>
          <option value="7">{fag_data[7].name}</option>
        </select><br /><br />

        <label htmlFor="timer">Hvor mange timer skal du ta fri?</label><br />
        <input type="number" name="timer" id="timer" value={timerVekke} onChange={handleTimerVekkeChange} />

      </form>

      <button onClick={calculatePercent}>Regn ut:</button><br /><br />

      <strong>Hele året:</strong>
      <p>{wholePercent}%</p>

      <strong>Halvår:</strong>
      <p>{halfPercent}%</p>
    </div>
  );
}

export default App;
