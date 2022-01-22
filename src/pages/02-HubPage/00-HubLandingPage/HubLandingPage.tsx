import Carousel from "../../../components/01-Carousel/Carousel";
import { HubLandingStyled } from "./HubLandingPage.style";

export default function HubLandingPage(){


  return (
    <HubLandingStyled>
      <Carousel/>
      <div className="testpart">

        <div className="animation"><div className="animation_spaceman"></div></div>


      </div>

    </HubLandingStyled>
  )
}

