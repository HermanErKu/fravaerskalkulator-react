import Cookies from 'universal-cookie';


const Frisør = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=2', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=2' color='text.primary'>Frisør, blomster, interiør og eksponeringsdesign</a>
      </div>
      
      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Frisør</h1>
      <Calculator
        fag_data={{ 
            "null": {}, 
            0: { 0: { name: "Kommunikasjon, kunde og arbeidsliv", ukeTimer: 7 }, 1: { name: "Produktutvikling og produksjon	", ukeTimer: 10 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:7}, 
        }}
      />
    </div>
  );
}

export default Frisør;