import { ChrisChar } from "../../../Images/ChrisCharacter";
import { LizChar } from "../../../Images/LizCharacter";
import Carousel from "./components/01-Carousel/Carousel";
import InfoPanel from "./components/02-infoPanel/InfoPanel";
import LeftSideSelection from "./components/03-SelectionAndCharacter/LefSideCharacter/LeftSideSelection";
import RightSideCharacter from "./components/03-SelectionAndCharacter/RightSideCharacter/RightSideCharacter";
import SelectionAndCharacter from "./components/03-SelectionAndCharacter/SelectionAndCharacter";
import { HubLandingStyled } from "./HubLandingPage.style";

export default function HubLandingPage(){


  return (
    <HubLandingStyled>
      <Carousel/>
      <InfoPanel/>
      <h1 className="DiscoverCollectUse">Discover ,Collect ,Use</h1>
      <h3 className="CreatiingTheBest">Creating Amazing Animations</h3>
      <SelectionAndCharacter>
        <LeftSideSelection/>
        <RightSideCharacter Character={ChrisChar}/>
      </SelectionAndCharacter>

      <SelectionAndCharacter>
        <RightSideCharacter Character={LizChar}/>
        <LeftSideSelection/>
      </SelectionAndCharacter>
      
      

    </HubLandingStyled>
  )
}

