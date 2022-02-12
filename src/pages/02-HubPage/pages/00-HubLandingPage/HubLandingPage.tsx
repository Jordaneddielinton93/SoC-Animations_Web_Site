import { Carousel1, SoCChris, SoCLiz } from "simple-react-animations-v2";


import InfoPanel from "./components/02-infoPanel/InfoPanel";
import LeftSideSelection from "./components/03-SelectionAndCharacter/LefSideCharacter/LeftSideSelection";

import SelectionAndCharacter from "./components/03-SelectionAndCharacter/SelectionAndCharacter";
import Carousel from "./components/Carousel2/Carousel2";
import { HubLandingStyled } from "./HubLandingPage.style";

export default function HubLandingPage(){


  return (
    <HubLandingStyled>
      <Carousel/>
     
      <InfoPanel/>
      <h1 className="DiscoverCollectUse">Discover ,Collect ,Use</h1>
      <h3 className="CreatiingTheBest">Creating Amazing Animations</h3>
      <h5 className="ForEveryScreen">For Every Screen-size</h5>
      <SelectionAndCharacter>
        <LeftSideSelection/>
        <SoCChris/>
      </SelectionAndCharacter>
            <Carousel1 size="100%" 
            backgroundColor1="#532848"
            backgroundColor2="#532848"
            backgroundColor3="#532848"
              />


      <SelectionAndCharacter>
        <SoCLiz/>
        <LeftSideSelection/>
      </SelectionAndCharacter>
      
      
      

    </HubLandingStyled>
  )
}

