import Cookies from 'universal-cookie';
import Calculator from '../Calculator';


const TIF = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=9', { path: '/' });
  }

  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=9' color='text.primary'>Teknologi- og industrifag</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>TIF</h1>
      
      <Calculator
        fag_data={{ 
            "null": {}, 
            0: { 0: { name: "Produktivitet og kvalitetsstyring", ukeTimer: 5 }, 1: { name: "Konstruksjons- og styringsteknikk", ukeTimer: 5 }, 2: { name: "Produksjon og tjenester", ukeTimer: 7 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:8}, 
        }}
      />
    </div>
  );
}

export default TIF;