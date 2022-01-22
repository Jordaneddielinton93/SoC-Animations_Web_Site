import { useContext } from "react";
import { Link } from "react-router-dom";
import { ACTIONS } from "../../00-Hooks/useReducer";
import { pageContext } from "../../App";
import HubLandingPage from "../../pages/02-HubPage/00-HubLandingPage/HubLandingPage";
import { HeadNavStyled } from "./HeadNav.style";

export default function HeadingNav(){
  let {dispatch}= useContext(pageContext)

  return(
    <HeadNavStyled>
      <h2 className="NavLogo">S-O-C/W3S</h2>
      <ul className="NavList">
        <Link to="/HubPage"onClick={()=>dispatch({type:ACTIONS.PAGE_SHOWN,payload:<HubLandingPage/>})}><li>Home</li></Link>
        <Link to="/"><li>Animations</li></Link>
        <Link to="/"><li>Resources</li></Link>
        <Link to="/"><li>Workshops</li></Link>
        <Link to="/"><li>path</li></Link>
      </ul>
    </HeadNavStyled>
  )
}