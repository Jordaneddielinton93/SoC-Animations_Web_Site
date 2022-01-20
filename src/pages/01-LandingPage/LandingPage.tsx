import { BackgroundStyled } from "../../components/00-Background/Background.style";
import HeadingNav from "../../components/00-HeadNav/HeadNav";
import  LeftSection  from "./components/01-LeftSection/LeftSection";
import RightSection from "./components/01-RightSection/RightSection";
import MainSection from "../../components/01-MainSection/MainSection";


const LandingPage = () => {
  return ( 
    <BackgroundStyled>
      <MainSection>
        <HeadingNav/>
        <LeftSection/>
        <RightSection/>
        
      </MainSection>
      
    </BackgroundStyled>
   );
}
 
export default LandingPage;