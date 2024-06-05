import Cookies from 'universal-cookie';
import Calculator from '../Calculator';


const Helse = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=3', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=3' color='text.primary'>Helse- og oppvekstfag</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Helse</h1>
      <Calculator
        fag_data={{ 
            0: { name:"Velg ett årsløp..." }, 
            1: { 0: { name: "Yrkesliv i helse- og oppvekstfag", ukeTimer: 5 }, 1: { name: "Kommunikasjon og samhandling", ukeTimer: 5 }, 2: { name: "Helsefremmende arbeid", ukeTimer: 7 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:8}, 
        }}
      />
    </div>
  );
}

export default Helse;