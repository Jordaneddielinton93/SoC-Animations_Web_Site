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
        <div className="slideContainer-Slides1 slide" >
          <h1 className="slideContainer-Slides1_title">{Discover}</h1>
          <button className="slideButon">find out more</button>
        </div>
        <div className="slideContainer-Slides2 slide" >
          <h1 className="slideContainer-Slides2_title">{Collect}</h1>
          <button className="slideButon">find out more</button>

        </div>
        <div className="slideContainer-Slides3 slide" >
          <h1 className="slideContainer-Slides3_title">{Use}</h1>
          <button className="slideButon">find out more</button>

        </div>
      </div>
    </CarouselStyled>
  )
}

let Discover=(<span className="logo is-animetion">
    <span>D</span>
    <span>i</span>
    <span>s</span>
    <span>c</span>
    <span>o</span>
    <span>v</span>
    <span>e</span>
    <span>r</span>
  </span>)

let Collect=(<span className="logo is-animetion">
<span>C</span>
<span>o</span>
<span>l</span>
<span>l</span>
<span>e</span>
<span>c</span>
<span>t</span>
</span>)

let Use=(<span className="logo is-animetion">
    <span>U</span>
    <span>s</span>
    <span>e</span>
  </span>)

  