import { useEffect, useState } from "react";
import { CarouselStyled } from "./Carousel.style";



export default function Carousel(){

  let [counter,setCounter]=useState(0)

  useEffect(()=>{
    const changeText= setTimeout(()=>{
      
      counter>=200?setCounter(0):setCounter(counter+=100)
     
    },3000)

    return ()=>clearTimeout(changeText)

  },[counter])


  return (
    <CarouselStyled slideNumber={counter}>
      <div className="slideContainer">
        <div className="slideContainer-Slides1" >
          <h1 className="slideContainer-Slides1_title">Discover</h1>
        </div>
        <div className="slideContainer-Slides1" >
          <h1 className="slideContainer-Slides1_title">collect</h1>
        </div>
        <div className="slideContainer-Slides1" >
          <h1 className="slideContainer-Slides1_title">use</h1>
        </div>
      </div>
    </CarouselStyled>
  )
}