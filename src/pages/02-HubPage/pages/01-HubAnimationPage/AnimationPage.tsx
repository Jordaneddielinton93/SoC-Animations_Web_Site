import { useContext } from "react";
import { pageContext } from "../../../../App";
import { LillieBackground } from "../../../../Images/animationPage";
import { AnimationPageStyled } from "./AnimationPage.style";
import HeadingAnime from "./components/01-Heading/HeadingAnime";


export default function HubAnimationPage(){
  let {state}=useContext(pageContext)

  return (
    <AnimationPageStyled>
      {LillieBackground}
      <HeadingAnime/>
      
      <ul className="AnimeUl">
      {state.AnimationList.map((item:Element)=>{
        return <li className="AnimeUl-Li">{item}</li>
      })}
      </ul>
      
    </AnimationPageStyled>
  )
}