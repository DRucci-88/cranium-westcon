import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'flowbite';
import LandingPage from "./westcon/LandingPage";
import EventLandingPage from "./westcon/EventLandingPage";
import RegisterEvent from "./westcon/RegisterEvent";
import PageNotFound from "./westcon/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/westcon'} element={<EventLandingPage/>}/>
        <Route path={'/westcon/ticket'} element={<RegisterEvent/>}/>
        <Route path={'*'} element={<PageNotFound/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
