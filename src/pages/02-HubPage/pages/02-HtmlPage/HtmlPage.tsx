import { useContext } from "react";
import { pageContext } from "../../../../App";
import { WhiteBorderBackgroundStyled } from "../../../../components/00-Background/WhiteBorderBackground.style";
import HTMLimage from "../../../../Images/HtmlPage";






export default function HtmlPage(){

  
  let {state}=useContext(pageContext)


  console.log(state.htmlPageTagShown)

  return(
    <WhiteBorderBackgroundStyled tagSVG={state.htmlPageTagShown}>
      <section className="HTML_LeftContainer">
        <HTMLimage/>
      </section>
      {state.htmlPageTagDiscription}
      
      
    </WhiteBorderBackgroundStyled>
  )
}
