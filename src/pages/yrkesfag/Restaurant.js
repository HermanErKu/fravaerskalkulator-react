import Cookies from 'universal-cookie';
import Calculator from '../Calculator';


const Restaurant = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=7', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a id='breadcrumbsLink' href='/home' color='inherit'>Hjem</a>
        /
        <a id='breadcrumbsLink' href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a id='breadcrumbsLink' href='/yrkesfag?linjeId=7' color='text.primary'>Restaurant- og matfag</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Restaurant- og matfag</h1>
      <Calculator
        fag_data={{ 
            0: { name:"Velg ett årsløp..." }, 
            1: { 0: { name: "Bransje og arbeidsliv", ukeTimer: 5 }, 1: { name: "Råvare, produksjon og kvalitet", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:7}, 
        }}
      />
    </div>
  );
}

export default Restaurant;