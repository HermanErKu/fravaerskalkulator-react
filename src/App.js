import './App.css';
import React, { useEffect, useState } from 'react';

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
    "null": {},
    0: { 0: { name: "Produksjon og historiefortelling", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og programmering", ukeTimer: 5.5 }, 2: { name: "Teknologiforståelse", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:8},
    1: { 0: { name: "Brukerstøtte", ukeTimer: 5 }, 1: { name: "Driftsstøtte", ukeTimer: 6 }, 2: { name: "Utvikling", ukeTimer: 6 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG2 - IT", fag:7},
    2: { 0: { name: "Design og visualisering", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og kommunikasjon", ukeTimer: 5.5 }, 2: { name: "Teknologi og produksjon", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG2 - Medie", fag:7},
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
    setWholePercent((timerVekke / (parseInt(fag_data[yearID][fagID].ukeTimer) * 38) * 100).toFixed(2))
    setHalfPercent((timerVekke / (parseInt(fag_data[yearID][fagID].ukeTimer) * 19) * 100).toFixed(2))
  }


  const [yearID, setYearID] = useState(0);
  const [optionsArray, setOptionsArray] = useState([]);
  const handleYearChange = (event) => {
    const year = event.target.value;
    setYearID(year);
    let options = [];
    for (let x = 0; x < fag_data[year].fag; x++) {
      options.push(<option key={x} value={x}>{fag_data[year][x].name}</option>);
    }
    setOptionsArray(options);

    setFagID(0);
  }

  /*const [optionsElement, setOptionsElement] = useState("");
  console.log(fag_data[fagID].fag);
  for (let x = 0; x < fag_data[fagID].fag; x++) {
    //const element = fag_data[fagID][x];
    setOptionsElement("<option value='7'>{fag_data[yearID][7].name}</option>")
  }*/

  



  return (
    <div className="App">
      <h1>Informasjonsteknologi og medieproduksjon:</h1>
      
      <form>
        <select name="year" id="year" onChange={handleYearChange}>
          <option value="null">Velg ett årsløp...</option>
          <option value="0">VG1</option>
          <option value="1">VG2 - IT</option>
          <option value="2">VG2 - Medie</option>
        </select>

        <h3>Hvor mange timer skal du ta fri?</h3>

        <label htmlFor="fag">Hvilket fag skal du ta fri?</label><br/>
        <select name="fag" id="fag" onChange={handleFagChange}>
          {optionsArray}
          {/*<option value="0">{fag_data[yearID][0].name}</option>
          <option value="1">{fag_data[yearID][1].name}</option>
          <option value="2">{fag_data[yearID][2].name}</option>
          <option value="3">{fag_data[yearID][3].name}</option>
          <option value="4">{fag_data[yearID][4].name}</option>
          <option value="5">{fag_data[yearID][5].name}</option>
          <option value="6">{fag_data[yearID][6].name}</option>
          <option value="7">{fag_data[yearID][7].name}</option>*/}
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
