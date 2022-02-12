import { useEffect, useState } from "react";
import TextAnimation from "../../../01-HubAnimationPage/components/02-Lists/Text/WaveAnimation/TextAnimation";
import { CarouselStyled } from "./Carousel2.style";



export default function Carousel(){

  let [counter,setCounter]=useState(0)

  useEffect(()=>{
    const changeText= setTimeout(()=>{
      
      counter>=200?setCounter(0):setCounter(counter+=100)
     
    },4000)

    return ()=>clearTimeout(changeText)

  },[counter])


  return (
    <CarouselStyled slideNumber={counter}>
      <div className="slideContainer">
        <div className="slideContainer-Slides1 slide" >
          <TextAnimation Text="Discover" fontSize="2em"/>
         
          
        </div>
        <div className="slideContainer-Slides2 slide" >
          <TextAnimation Text="Collect" fontSize="2em"/>
          

        </div>
        <div className="slideContainer-Slides3 slide" >
          <TextAnimation Text="Use" fontSize="2em" />

        </div>
      </div>
    </CarouselStyled>
  )
}

