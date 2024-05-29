//import './App.css';
import '../../src/App.css';
import React, { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
import { Navigate } from "react-router-dom";

const Index = ({redirect}) => {

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
    <div className="index_page">
      <a href="/studiefag">
        <div id="index_page_buttons">
          <h1>Studiefag</h1>
        </div>
      </a>


      <a href="/yrkesfag">
        <div id="index_page_buttons">
          <h1>Yrkesfag</h1>
        </div>
      </a>
    </div>
  );
};

export default Index;