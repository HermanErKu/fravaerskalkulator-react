/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Index from './pages/Index';
import Studiefag from './pages/Studiefag';
import Yrkesfag from './pages/Yrkesfag';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/





import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './pages/Index';
import PageNotFound from './pages/PageNotFound';
import Studiefag from './pages/Studiefag';
import Yrkesfag2 from './pages/Yrkesfag';
import Rapporter from "./pages/Rapporter";

import Home from "./pages/Home";
import Apply from "./pages/Apply";

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route index element={<Index redirect={true} />} />
        <Route path="home" element={<Index redirect={false} />} />*/}
        <Route index element={<Home redirect={true} />} />
        <Route path="home" element={<Home redirect={false} />} />

        <Route path="studiefag" element={<Studiefag />} />
        <Route path="studiefag/*" element={<Studiefag />} />

        <Route path="yrkesfag" element={<Yrkesfag2 />} />
        <Route path="yrkesfag/*" element={<Yrkesfag2 />} />

        <Route path="apply" element={<Apply />} />

        <Route path="rapporter" element={<Rapporter />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);