import Cookies from 'universal-cookie';
import Calculator from '../Calculator';


const Salg = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=8', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=8' color='text.primary'>Salg, service og reiseliv</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Salg, service og reiseliv</h1>
      <Calculator
        fag_data={{ 
            "null": {}, 
            0: { 0: { name: "Kultur og samhandling", ukeTimer: 5 }, 1: { name: "Forretningsdrift", ukeTimer: 6 }, 2: { name: "Markedsføring og innovasjon", ukeTimer: 6 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG2 - IT", fag:7}, 
        }}
      />
    </div>
  );
}

export default Salg;