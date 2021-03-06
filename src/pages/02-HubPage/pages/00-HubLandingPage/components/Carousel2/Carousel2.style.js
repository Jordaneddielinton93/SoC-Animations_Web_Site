import styled from "styled-components"

import SpaceManSvg2  from "../../../../../../Images/SpaceManSvg2.svg";
import SeaFishSvg  from "../../../../../../Images/SeaFishSvg2.svg";
import TiggerSvg  from "../../../../../../Images/TiggerSvg.svg";


export  const CarouselStyled=styled.div`
  width: 99%;
  height:300px;
  min-height:300px;
  max-width:100%;
  align-self:center;
  position:relative;
  overflow-x:hidden;
	font-size: 2em;
  border-radius:5px;
  
  & .rotating{
      animation:spin 6s infinite ease-in-out alternate;
      @keyframes spin { 
        from { transform: scale(0.2) rotate(0deg) }
        to { transform: scale(1.2) rotate(770deg) }
      }
    }
  & .slideContainer{
    position:absolute;
    left:-${(props)=>props.slideNumber}%;
    display:flex;
    max-width:100%;
    max-height: 100%;
    width:100%;
    height: 100%;
    flex-flow: nowrap;
    transition:4s left;
    transition-timing-function: ease-in-out;
    text-shadow: 6px 6px red;
    font-size:3rem;
    color:white;

    .slide{
      display: flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      width:100%;
      min-width:100%;
      height: 100%;
      opacity:1;
      background-position:center;
      background-size: contain;
      
    }
    
    &-Slides1{
      background: url(${SpaceManSvg2}) no-repeat;

    }

    &-Slides2{
      background: url(${SeaFishSvg}) no-repeat;
    }

    &-Slides3{
      background: url(${TiggerSvg}) no-repeat;

    }
    .logo.is-animetion {
  margin-top: 0.6em;
}


    
  

`
