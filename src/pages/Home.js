import { useSearchParams } from "react-router-dom"
import '../../src/App.css';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";


const Home = ({redirect}) => {
  const cookies = new Cookies();

  let linjeCookie = cookies.get('linjeCookie');
  if (linjeCookie === undefined) {
    console.log("LinjeCookie is undefined");
  } else {
    if (redirect === true){
      return <Navigate to={linjeCookie} replace={true} />      
    }
  }


  return (
    <div className='app'>
        <div className='breadCrumbsContainer'>
          <a id='breadcrumbsLink' href='/home' color='inherit'>Hjem</a>
        </div>

        <div id="linjeContainer">
          <a href="/studiefag?linjeId=0"> <div className="studiefag_button_home" id="linje_page_buttons"> <h2>Idrettsfag</h2> </div> </a>
          <a href="/studiefag?linjeId=1"> <div className="studiefag_button_home" id="linje_page_buttons"> <h2>Kunst, design og arkitektur</h2> </div> </a>
          <a href="/studiefag?linjeId=2"> <div className="studiefag_button_home" id="linje_page_buttons"> <h2>Medier og kommunikasjon</h2> </div> </a>
          <a href="/studiefag?linjeId=3"> <div className="studiefag_button_home" id="linje_page_buttons"> <h2>Musikk, dans og drama</h2> </div> </a>
          <a href="/studiefag?linjeId=4"> <div className="studiefag_button_home" id="linje_page_buttons"> <h2>Studiespesialisering</h2> </div> </a>
        </div>

        <br />

        <div id="linjeContainer">
          <a href="/yrkesfag?linjeId=0"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Bygg- og anleggsteknikk</h2> </div> </a>
          <a href="/yrkesfag?linjeId=1"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Elektro og datateknologi</h2> </div> </a>
          <a href="/yrkesfag?linjeId=2"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Frisør, blomster, interiør og eksponeringsdesign</h2> </div> </a>
          <a href="/yrkesfag?linjeId=3"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Helse- og oppvekstfag</h2> </div> </a>
          <a href="/yrkesfag?linjeId=4"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Håndverk, design og produktutvikling</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=5"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Informasjonsteknologi og medieproduksjon</h2> </div> </a>
          <a href="/yrkesfag?linjeId=6"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Naturbruk</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=7"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Restaurant- og matfag</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=8"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Salg, service og reiseliv</h2> </div> </a> 
          <a href="/yrkesfag?linjeId=9"> <div className="yrkesfag_button_home" id="linje_page_buttons"> <h2>Teknologi- og industrifag</h2> </div> </a>
        </div>
      </div>
  )
}

export default Home;