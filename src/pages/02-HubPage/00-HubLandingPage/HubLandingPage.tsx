import Carousel from "./components/01-Carousel/Carousel";
import InfoPanel from "./components/02-infoPanel/InfoPanel";
import SelectionAndCharacter from "./components/03-SelectionAndCharacter/SelectionAndCharacter";
import { HubLandingStyled } from "./HubLandingPage.style";

export default function HubLandingPage(){


  return (
    <HubLandingStyled>
      <Carousel/>
      <InfoPanel/>
      <SelectionAndCharacter/>
      
        {/* <div className="animation"><div className="animation_spaceman"></div></div> */}
      

    </HubLandingStyled>
  )
}

