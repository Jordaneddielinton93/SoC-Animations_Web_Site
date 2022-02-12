

import { BackgroundStyled } from "../../components/00-Background/Background.style";
import MainSection from "../../components/01-MainSection/MainSection";
import SideNav from "./SideNav/SideNav";
import HeadingNav from "../../components/00-HeadNav/HeadNav";

import { IHubProps } from "../../00-Interfaces/Interfaces";

export default function HubPage({page}:any){
  // const {page}=props
  return (
    <div style={{display: "flex",
      justifyContent:"center",
      alignItems:"center",
      width: "100%",
      height: "100vh",
      background: "#4158D0",
backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"

      }}>

      <SideNav/> {/* <<< when you click on a button it shows the page on the {state.pageShown} */}
      <MainSection>
      {/* gets the nav bar HOME,Animations,Resources,Workshops & then displays whatever is on the page when the sideNav is clicked */}
        <HeadingNav/>
        {page}
      </MainSection>

    </div>
  )
}