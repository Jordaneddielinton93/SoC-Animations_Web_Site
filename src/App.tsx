import React, { useReducer } from 'react';
import { Routes, Route} from "react-router-dom";
import { initState, reducer } from './00-Hooks/useReducer';
import './App.css';

import LandingPage from './pages/01-LandingPage/LandingPage';
import HubLandingPage from './pages/02-HubPage/pages/00-HubLandingPage/HubLandingPage';
import HtmlPage from './pages/02-HubPage/pages/02-HtmlPage/HtmlPage';
import HubPage from './pages/02-HubPage/HubPage';
import HubAnimationPage from './pages/02-HubPage/pages/01-HubAnimationPage/AnimationPage';

export let pageContext=React.createContext<any>({})
function App() {

  let [state,dispatch]=useReducer(reducer,initState)
  console.log(state)
  return (
    <div className="App">
      <pageContext.Provider value={{state,dispatch}}>
        <Routes>
         
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Hub/Home" element={<HubPage page={<HubLandingPage/>}/>}/>
          <Route path="/Hub/Animations" element={<HubPage page={<HubAnimationPage/>}/>}/>
          <Route path="/Hub/HTML" element={<HubPage page={<HtmlPage/>}/>}/>
          <Route path="/Hub/Work-Shops" element={<HubPage page={<HtmlPage/>}/>}/>
      
        </Routes>
      </pageContext.Provider>
    </div>
  );
}

export default App;
