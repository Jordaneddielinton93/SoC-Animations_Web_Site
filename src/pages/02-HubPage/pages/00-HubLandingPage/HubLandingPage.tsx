import { Carousel1, SoCChris, SoCLiz } from "simple-react-animations-v2";


import InfoPanel from "./components/02-infoPanel/InfoPanel";
import LeftSideSelection from "./components/03-SelectionAndCharacter/LefSideCharacter/LeftSideSelection";
import RightSideCharacter from "./components/03-SelectionAndCharacter/RightSideCharacter/RightSideCharacter";
import SelectionAndCharacter from "./components/03-SelectionAndCharacter/SelectionAndCharacter";
import { HubLandingStyled } from "./HubLandingPage.style";

export default function HubLandingPage(){


  return (
    <HubLandingStyled>
      
      <Carousel1 size="100%"   />
     
      <InfoPanel/>
      <h1 className="DiscoverCollectUse">Discover ,Collect ,Use</h1>
      <h3 className="CreatiingTheBest">Creating Amazing Animations</h3>
      <h5 className="ForEveryScreen">For Every Screen-size</h5>
      <SelectionAndCharacter>
        <LeftSideSelection/>
        <RightSideCharacter Character={<SoCChris/>}/>
      </SelectionAndCharacter>
      <InfoPanel/>

      <SelectionAndCharacter>
        <RightSideCharacter Character={<SoCLiz/>}/>
        <LeftSideSelection/>
      </SelectionAndCharacter>
      
      
      

    </HubLandingStyled>
  )
}

