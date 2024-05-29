import App from '../App';
import { useSearchParams } from "react-router-dom"

import Bygg from '../pages/yrkesfag/Bygg';
import Elektro from '../pages/yrkesfag/Elektro';
import Frisør from '../pages/yrkesfag/Frisør';
import Helse from '../pages/yrkesfag/Helse';
import Håndverk from '../pages/yrkesfag/Håndverk';
import IM from '../pages/yrkesfag/IM';
import Naturbruk from '../pages/yrkesfag/Naturbruk';
import Restaurant from '../pages/yrkesfag/Restaurant';
import Salg from '../pages/yrkesfag/Salg';
import TIF from '../pages/yrkesfag/TIF';

import '../../src/App.css';


const Yrkesfag = () => {
  const [queryParameters] = useSearchParams()
  const linjeId = queryParameters.get("linjeId")
  console.log(linjeId)

  if (linjeId === null) {
    return (
      <div className='app'>
        <h2 style={{ textAlign: 'center' }}>⚠️ Siden er under oppussing! ⚠️</h2>

        <div className='breadCrumbsContainer'>
          <a href='/home' color='inherit'>Hjem</a>
          /
          <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        </div>

        {/*<App/>*/}
        <div id="linjeContainer">
          <a href="/yrkesfag?linjeId=0"> <div className="linje" id="linje_page_buttons"> <h2>Bygg- og anleggsteknikk</h2> </div> </a>
          <a href="/yrkesfag?linjeId=1"> <div className="linje" id="linje_page_buttons"> <h2>Elektro og datateknologi</h2> </div> </a>
          <a href="/yrkesfag?linjeId=2"> <div className="linje" id="linje_page_buttons"> <h2>Frisør, blomster, interiør og eksponeringsdesign</h2> </div> </a>
          <a href="/yrkesfag?linjeId=3"> <div className="linje" id="linje_page_buttons"> <h2>Helse- og oppvekstfag</h2> </div> </a>
          <a href="/yrkesfag?linjeId=4"> <div className="linje" id="linje_page_buttons"> <h2>Håndverk, design og produktutvikling</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=5"> <div className="linje" id="linje_page_buttons"> <h2>Informasjonsteknologi og medieproduksjon</h2> </div> </a>
          <a href="/yrkesfag?linjeId=6"> <div className="linje" id="linje_page_buttons"> <h2>Naturbruk</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=7"> <div className="linje" id="linje_page_buttons"> <h2>Restaurant- og matfag</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=8"> <div className="linje" id="linje_page_buttons"> <h2>Salg, service og reiseliv</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=9"> <div className="linje" id="linje_page_buttons"> <h2>Teknologi- og industrifag</h2> </div> </a>
        </div>
        <h2 style={{ textAlign: 'center' }}>⚠️ Siden er under oppussing! ⚠️</h2>
      </div>
    );
  } else if (linjeId === "0") {
    return (
      <Bygg />
    );
  } else if (linjeId === "1") {
    return (
      <Elektro />
    );
  } else if (linjeId === "2") {
    return (
      <Frisør />
    );
  } else if (linjeId === "3") {
    return (
      <Helse />
    );
  } else if (linjeId === "4") {
    return (
      <Håndverk />
    );
  } else if (linjeId === "5") {
    return (
      <IM />
    );
  } else if (linjeId === "6") {
    return (
      <Naturbruk />
    );
  } else if (linjeId === "7") {
    return (
      <Restaurant />
    );
  } else if (linjeId === "8") {
    return (
      <Salg />
    );
  } else if (linjeId === "9") {
    return (
      <TIF />
    );
  } else {
    return (
      <h1>siden finnes ikke</h1>
    );
  }
};

export default Yrkesfag;