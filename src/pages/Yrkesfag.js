import { useSearchParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import Calculator from './Calculator';
import '../../src/App.css';


const Yrkesfag2 = () => {
  const [queryParameters] = useSearchParams()
  const linjeId = queryParameters.get("linjeId")

  const yrkesfag_data = {
    0: {
      name: "Bygg- og anleggsteknikk",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Arbeidsmiljø og dokumentasjon", ukeTimer: 5 }, 1: { name: "Praktisk yrkesutøvelse", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
      }
    },
    1: {
      name: "Elektro og datateknologi",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Elektroniske kretser og nettverk", ukeTimer: 7 }, 1: { name: "Energi- og styresystemer", ukeTimer: 10.5 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
      }
    },
    2: {
      name: "Frisør, blomster, interiør og eksponeringsdesign",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Kommunikasjon, kunde og arbeidsliv", ukeTimer: 7 }, 1: { name: "Produktutvikling og produksjon	", ukeTimer: 10 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
      }
    },
    3: {
      name: "Helse- og oppvekstfag",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Produktutvikling og skapende prosesser", ukeTimer: 5 }, 1: { name: "Materialer og teknikker", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
      }
    },
    4: {
      name: "Håndverk, design og produktutvikling",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Yrkesliv i helse- og oppvekstfag", ukeTimer: 5 }, 1: { name: "Kommunikasjon og samhandling", ukeTimer: 5 }, 2: { name: "Helsefremmende arbeid", ukeTimer: 7 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8 },
      }
    },
    5: {
      name: "Informasjonsteknologi og medieproduksjon",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Produksjon og historiefortelling", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og programmering", ukeTimer: 5.5 }, 2: { name: "Teknologiforståelse", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8 },
        2: { 0: { name: "Brukerstøtte", ukeTimer: 5 }, 1: { name: "Driftsstøtte", ukeTimer: 6 }, 2: { name: "Utvikling", ukeTimer: 6 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG2 - IT", fag: 7 },
        3: { 0: { name: "Design og visualisering", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og kommunikasjon", ukeTimer: 5.5 }, 2: { name: "Teknologi og produksjon", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG2 - Medie", fag: 7 },
      }
    },
    6: {
      name: "Naturbruk",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Naturbasert næringsaktivitet", ukeTimer: 5 }, 1: { name: "Naturbasert produksjon og tjenesteyting", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
      }
    },
    7: {
      name: "Restaurant- og matfag",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Bransje og arbeidsliv", ukeTimer: 5 }, 1: { name: "Råvare, produksjon og kvalitet", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
      }
    },
    8: {
      name: "Salg, service og reiseliv",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Kultur og samhandling", ukeTimer: 5 }, 1: { name: "Forretningsdrift", ukeTimer: 6 }, 2: { name: "Markedsføring og innovasjon", ukeTimer: 6 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
      }
    },
    9: {
      name: "Teknologi- og industrifag",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { 0: { name: "Produktivitet og kvalitetsstyring", ukeTimer: 5 }, 1: { name: "Konstruksjons- og styringsteknikk", ukeTimer: 5 }, 2: { name: "Produksjon og tjenester", ukeTimer: 7 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8 },
      }
    },
  }


  const cookies = new Cookies();
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag/' + linjeId + '?linjeId=' + linjeId, { path: '/' });
    toast.success(yrkesfag_data[parseInt(linjeId)]["name"]+" er nå lagret som din linje!")
  }


  const fag_data = yrkesfag_data[parseInt(linjeId)]["year_data"]

  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a id='breadcrumbsLink' href='/home' color='inherit'>Hjem</a>
        /
        <a id='breadcrumbsLink' href={'/yrkesfag/' + linjeId + '?linjeId=' + linjeId} color='text.primary'>{yrkesfag_data[parseInt(linjeId)]["name"]}</a>
      </div>

      <button onClick={(setMinLinje)}>Dette er min linje!</button>

      <Calculator
        fag_data={fag_data}
      />
    </div>
  );
};

export default Yrkesfag2;