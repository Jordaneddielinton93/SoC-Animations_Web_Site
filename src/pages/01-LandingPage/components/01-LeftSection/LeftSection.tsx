import { useEffect, useState } from "react"
import { LeftSectionStyled } from "./LeftSection.style"


import NumbersAndLables from "./components/NumbersAndLables"
import { Link} from "react-router-dom"
import TextAnimation from "../../../02-HubPage/pages/01-HubAnimationPage/components/02-Lists/Text/WaveAnimation/TextAnimation"
import TypingAnimation from "../../../02-HubPage/pages/01-HubAnimationPage/components/02-Lists/Text/TypingAnimation/TypingAnimation"


function LeftSection(){
  
  

  let [word,setWord]=useState(<TextAnimation Text="Animations" fontSize="3.5rem"/>)
  let [counter,setCounter]=useState(0)
  
  useEffect(()=>{
    
    const changeText= setTimeout(()=>{
      
      if(counter>=2){
        return setCounter(0)
      }
      counter===1&&setWord(<TextAnimation Text="Animations"/>);
      counter===0&&setWord(<TypingAnimation/>);
      setCounter(counter+=1)
    },3000)

    return ()=>clearTimeout(changeText)

  },[counter])


  return (
    <LeftSectionStyled>
      <div className="main">
        <div className="main-title ">
          <h2>School Of Code</h2>
          <h2>Has your. . . </h2>
          <h2>{word}</h2>
          <h3 style={{textDecoration:"underline",fontStyle:"italic"}}>Discover Now</h3>
        </div>
        <p className="main-discription">
          The worlds first and Largest source of free web-dev content, made for creating outstanding content
        </p>
        <div className="main-Buttons">
          <Link to="/Hub/home">
            <button className="main-Buttons-btn">
              Explore
            </button>
          </Link>

          <Link to="/" >
            <button className="main-Buttons-btn"
             style={{"background": "transparent"}}>
              WorkShop
            </button>
          </Link>

        </div>

        <NumbersAndLables MargTop={"50px"}/>

      </div>
      
      
    </LeftSectionStyled>
  )
}
export default LeftSection