import { Carousel1, SoCChris, SoCLiz } from "simple-react-animations-v2";


import InfoPanel from "./components/02-infoPanel/InfoPanel";
import LeftSideSelection from "./components/03-SelectionAndCharacter/LefSideCharacter/LeftSideSelection";

import SelectionAndCharacter from "./components/03-SelectionAndCharacter/SelectionAndCharacter";
import Carousel from "./components/Carousel2/Carousel2";
import { HubLandingStyled } from "./HubLandingPage.style";

export default function HubLandingPage(){


  return (
    <HubLandingStyled>
      <Carousel1 size="100%" 
            backgroundColor1="#441b3a"
            backgroundColor2="#532848"
            backgroundColor3="#441b3a"
              />
     
      <InfoPanel/>
      <Carousel/>

      <h1 className="DiscoverCollectUse">Discover ,Collect ,Use</h1>
      <h3 className="CreatiingTheBest">Creating Amazing Animations</h3>
      <h5 className="ForEveryScreen">For Every Screen-size</h5>
      <SelectionAndCharacter>
        <LeftSideSelection/>
        <SoCChris/>
      </SelectionAndCharacter>
  
      <SelectionAndCharacter>
        <SoCLiz/>
        <LeftSideSelection/>
      </SelectionAndCharacter>
      
      
      

    </HubLandingStyled>
  )
}

