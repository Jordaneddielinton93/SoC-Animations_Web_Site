

import { BackgroundStyled } from "../../components/00-Background/Background.style";
import MainSection from "../../components/01-MainSection/MainSection";
import SideNav from "./SideNav/SideNav";
import HeadingNav from "../../components/00-HeadNav/HeadNav";
import HtmlCode from "./HtmlCode/HtmlCode";
import { useContext } from "react";
import { pageContext } from "../../App";

export default function HubPage(){

  let {state,dispatch}= useContext(pageContext)
console.log(state)
  return (
    <BackgroundStyled>

      <SideNav/> {/* <<< when you click on a button it shows the page on the {state.pageShown} */}
      <MainSection>
      {/* gets the nav bar HOME,Animations,Resources,Workshops & then displays whatever is on the page when the sideNav is clicked */}
        <HeadingNav/>
        {state.pageShown}
      </MainSection>

    </BackgroundStyled>
  )
}