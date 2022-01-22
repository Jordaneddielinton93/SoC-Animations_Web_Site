import { useContext, useEffect, useState } from "react"
import { LeftSectionStyled } from "./LeftSection.style"

import { AnimationsArray } from "../../../../01-extras/animationsList"
import NumbersAndLables from "./components/NumbersAndLables"
import { Link, useNavigate } from "react-router-dom"
import { pageContext } from "../../../../App"
import { ACTIONS } from "../../../../00-Hooks/useReducer"
import HubLandingPage from "../../../02-HubPage/00-HubLandingPage/HubLandingPage"

function LeftSection(){
  let navigate=useNavigate()
  let {dispatch}= useContext(pageContext)

  let [word,setWord]=useState(AnimationsArray[0])
  let [counter,setCounter]=useState(0)
  
  useEffect(()=>{
    
    const changeText= setTimeout(()=>{
      
      if(counter>=AnimationsArray.length){
        return setCounter(0)
      }
    

      setWord(AnimationsArray[counter])
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
          <Link to="/HubPage" onClick={()=>dispatch({type:ACTIONS.PAGE_SHOWN,payload:<HubLandingPage/>})}>
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

        <NumbersAndLables/>

      </div>
      
      
    </LeftSectionStyled>
  )
}
export default LeftSection