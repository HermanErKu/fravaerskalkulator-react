import { useSearchParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import Calculator from './Calculator';
import '../../src/App.css';


const Studiefag = () => {
  const [queryParameters] = useSearchParams()
  const linjeId = queryParameters.get("linjeId")


  const cookies = new Cookies();
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId='+linjeId, { path: '/' });
  }

  const studiefag_data = {
    0: { 
      name:"Idrettsfag",
      year_data: {
        0: { name:"Velg ett årsløp..." },
        1: {}
      }
    },
    1: { 
      name:"Kunst, design og arkitektur",
      year_data: {
        0: { name:"Velg ett årsløp..." },
        1: {}
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
        1: {}
      }
    },
  }


  const fag_data = studiefag_data[parseInt(linjeId)]["year_data"]

  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a id='breadcrumbsLink' href='/home' color='inherit'>Hjem</a>
        /
        <a id='breadcrumbsLink' href={'/studiefag/'+linjeId+'?linjeId='+linjeId} color='text.primary'>{studiefag_data[parseInt(linjeId)]["name"]}</a>
      </div>

      <Calculator
        fag_data={fag_data}
      />
    </div>
  );
};

export default Studiefag;