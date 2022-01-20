import React, { useReducer } from 'react';
import { Routes, Route} from "react-router-dom";
import { initState, reducer } from './00-Hooks/useReducer';
import './App.css';

import LandingPage from './pages/01-LandingPage/LandingPage';
import HubPage from './pages/02-HubPage/HubPage';
// interface IContextProps {
//   state: {};
//   dispatch: ({type}:{type:string,payload:string}) => void;
// }
export let pageContext=React.createContext<any>({})
function App() {

  let [state,dispatch]=useReducer(reducer,initState)
  console.log(state)
  return (
    <div className="App">
      <pageContext.Provider value={{state,dispatch}}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/HubPage" element={<HubPage/>}/>
        </Routes>

          {/* <LandingPage/> */}
      </pageContext.Provider>
    </div>
  );
}

export default App;
