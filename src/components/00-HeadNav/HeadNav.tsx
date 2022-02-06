
import { Link } from "react-router-dom";

import { HeadNavStyled } from "./HeadNav.style";

export default function HeadingNav(){
 

  return(
    <HeadNavStyled>
      <h2 className="NavLogo">S-O-C/W3S</h2>
      <ul className="NavList">
        <Link to="/"><li>Home</li></Link>
        <Link to="/"><li>Animations</li></Link>
        <Link to="/"><li>Resources</li></Link>
        <Link to="/"><li>Workshops</li></Link>
        <Link to="/"><li>path</li></Link>
      </ul>
    </HeadNavStyled>
  )
}