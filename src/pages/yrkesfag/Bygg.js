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
            "null": {}, 
            0: { 0: { name: "Produksjon og byggfag", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og programmering", ukeTimer: 5.5 }, 2: { name: "Teknologiforståelse", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name:"VG1", fag:8}, 
            1: { 0: { name: "Brukerstøtte", ukeTimer: 5 }, 1: { name: "Driftsstøtte", ukeTimer: 6 }, 2: { name: "Utvikling", ukeTimer: 6 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG2 - IT", fag:7}, 
            2: { 0: { name: "Design og visualisering", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og kommunikasjon", ukeTimer: 5.5 }, 2: { name: "Teknologi og produksjon", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name:"VG2 - Medie", fag:7}, 
        }}
      />
    </div>
  );
}

export default Bygg;