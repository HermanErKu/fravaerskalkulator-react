import Cookies from 'universal-cookie';
import Calculator from '../Calculator';


const Håndverk = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=4', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=4' color='text.primary'>Håndverk, design og produktutvikling</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Håndverk</h1>
      <Calculator
        fag_data={{ 
            0: { name:"Velg ett årsløp..." }, 
            1: { 0: { name: "Produktutvikling og skapende prosesser", ukeTimer: 5 }, 1: { name: "Materialer og teknikker", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:7}, 
        }}
      />
    </div>
  );
}

export default Håndverk;