import Cookies from 'universal-cookie';
import Calculator from '../Calculator';

const Bygg = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=0', { path: '/' });
  }

  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=0' color='text.primary'>Bygg- og anleggsteknikk</a>
      </div>
      
      <button onClick={setMinLinje}>Dette er min linje!</button>
      
      <h1>Bygg- og anleggsteknikk</h1>
      <p>Bygg- og anleggsteknikk er et yrkesfaglig utdanningsprogram som fører fram til yrkeskompetanse. Opplæringen i Bygg- og anleggsteknikk gir deg mulighet til å jobbe med bygging og vedlikehold av bygninger og anlegg. Du lærer også om materialer og konstruksjoner, og om hvordan du kan planlegge og gjennomføre byggeprosjekter.</p>

      <Calculator
        fag_data={{ 
            0: { name:"Velg ett årsløp..." }, 
            1: { 0: { name: "Arbeidsmiljø og dokumentasjon", ukeTimer: 5 }, 1: { name: "Praktisk yrkesutøvelse", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:7}, 
        }}
      />
    </div>
  );
}

export default Bygg;