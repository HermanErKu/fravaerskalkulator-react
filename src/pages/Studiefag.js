import { useSearchParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import Calculator from './Calculator';
import '../../src/App.css';
import toast, { Toaster } from 'react-hot-toast';


const Studiefag = () => {
  const [queryParameters] = useSearchParams()
  const linjeId = queryParameters.get("linjeId")

  const studiefag_data = {
    0: { 
      name:"Idrettsfag",
      year_data: {
        0: { name:"Velg ett årsløp..." },
        1: { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Naturfag", ukeTimer: 3 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Aktivitetslære 1", ukeTimer: 5 }, 6: { name: "Treningslære 1", ukeTimer: 2 }, 7: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG1", fag: 8 },
        2: { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Samfunnskunnskap", ukeTimer: 3 }, 2: { name: "Matte", ukeTimer: 3 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Geografi", ukeTimer: 2 }, 5: { name: "Historie", ukeTimer: 2 }, 6: { name: "Aktivitetslære 2", ukeTimer: 5 }, 7: { name: "Idrett og samfunn", ukeTimer: 2 }, 8: { name: "Treningsledelse 1", ukeTimer: 2 }, 9: { name: "Treningslære 1", ukeTimer: 3 }, 10: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG2", fag: 11 },
        3: { 0: { name: "Norsk", ukeTimer: 6 }, 1: { name: "Religion og etikk", ukeTimer: 3 }, 2: { name: "Historie", ukeTimer: 4 }, 3: { name: "Aktivitetslære 3", ukeTimer: 5 }, 4: { name: "Idrett og samfunn", ukeTimer: 3 }, 5: { name: "Treningsledelse 2", ukeTimer: 4 }, 6: { name: "Treningslære 2", ukeTimer: 5 }, 7: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG3", fag: 8 },
      }
    },
    1: { 
      name:"Kunst, design og arkitektur",
      year_data: {
        0: { name:"Velg ett årsløp..." },
        1: { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Naturfag", ukeTimer: 5 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Gym", ukeTimer: 2 }, 6: { name: "Design og arkitektur 1", ukeTimer: 5 }, 7: { name: "Kunst og visuelle virkemidler 1", ukeTimer: 5 }, name: "VG1", fag: 8 },
        2: { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Samfunnskunnskap", ukeTimer: 3 }, 2: { name: "Matte", ukeTimer: 3 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Geografi", ukeTimer: 2 }, 5: { name: "Historie", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, 7: { name: "Design og arkitektur 2", ukeTimer: 5 }, 8: { name: "Kunst og visuelle virkemidler 2", ukeTimer: 5 }, 9: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG2", fag: 10 },  
        3: { 0: { name: "Norsk", ukeTimer: 6 }, 1: { name: "Religion og etikk", ukeTimer: 3 }, 2: { name: "Historie", ukeTimer: 4 }, 3: { name: "Gym", ukeTimer: 2 }, 4: { name: "Design og arkitektur 3", ukeTimer: 5 }, 5: { name: "Kunst og visuelle virkemidler 3", ukeTimer: 5 }, 6: { name: "Valgfritt programfag", ukeTimer: 10 }, name: "VG3", fag: 7 },
      }
    },
    2: { 
      name:"Medier og kommunikasjon",
      year_data: {
        0: { name:"Velg ett årsløp..." },
        1: {}
      }
    },
    3: { 
      name:"Musikk, dans og drama",
      year_data: {
        0: { name:"Velg ett årsløp..." },
        1: {}
      }
    },
    4: { 
      name:"Studiespesialisering",
      year_data: {
        0: { name:"Velg ett årsløp..." },
        1: { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Naturfag", ukeTimer: 5 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Geografi", ukeTimer: 2 }, 5: { name: "Engelsk", ukeTimer: 5 }, 6: { name: "Samfunnskunnskap", ukeTimer: 3 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8 },
        2: { 0: { name: "Norsk", ukeTimer: 4 }, 1: { name: "Historie", ukeTimer: 2 }, 2: { name: "Matte", ukeTimer: 3 }, 3: { name: "Fremmedspråk", ukeTimer: 4 }, 4: { name: "Gym", ukeTimer: 2 }, 5: { name: "Programfag fra eget programområde", ukeTimer: 15 }, name: "VG2", fag: 6 },
        3: { 0: { name: "Norsk", ukeTimer: 6 }, 1: { name: "Historie", ukeTimer: 4 }, 2: { name: "Religion og etikk", ukeTimer: 3 }, 3: { name: "Gym", ukeTimer: 2 }, 4: { name: "Programfag fra eget programområde", ukeTimer: 10 }, 5: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "VG3", fag: 6 },
        
        4: { 0: { name: "Norsk", ukeTimer: 10 }, 1: { name: "Historie", ukeTimer: 5 }, 2: { name: "Matte", ukeTimer: 5 }, 3: { name: "Naturfag", ukeTimer: 3 }, 4: { name: "Gym", ukeTimer: 2 }, 5: { name: "Valgfritt programfag", ukeTimer: 5 }, name: "Påbygg (VG3)", fag: 6 },
      }
    },
  }


  const cookies = new Cookies();
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/studiefag/' + linjeId + '?linjeId=' + linjeId, { path: '/' });
    toast.success('"'+studiefag_data[parseInt(linjeId)]["name"]+'"'+' er nå lagret som din linje!', {duration:3000})
  }


  const fag_data = studiefag_data[parseInt(linjeId)]["year_data"]

  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a id='breadcrumbsLink' href='/home' color='inherit'>Hjem</a>
        /
        <a id='breadcrumbsLink' href={'/studiefag/'+linjeId+'?linjeId='+linjeId} color='text.primary'>{studiefag_data[parseInt(linjeId)]["name"]}</a>
      </div>

      {/*<button onClick={(setMinLinje)}>Dette er min linje!</button>*/}

      <Calculator
        fag_data={fag_data}
      />

      <Toaster />
    </div>
  );
};

export default Studiefag;