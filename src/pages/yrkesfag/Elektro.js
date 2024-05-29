import Cookies from 'universal-cookie';


const Elektro = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=1', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=1' color='text.primary'>Elektro og datateknologi</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Elektro</h1>
      <Calculator
        fag_data={{ 
            "null": {}, 
            0: { 0: { name: "Elektroniske kretser og nettverk", ukeTimer: 7 }, 1: { name: "Energi- og styresystemer", ukeTimer: 10.5 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:7}, 
        }}
      />
    </div>
  );
}

export default Elektro;