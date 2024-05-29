import '.././App.css';
import React, { useEffect, useState } from 'react';


const Index = () => {
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