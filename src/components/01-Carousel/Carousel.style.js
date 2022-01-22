import styled from "styled-components"
import spaceman_img from "../../Images/spaceman.jpg"
import spaceman_img2 from "../../Images/spacemenTwo.jpg"
import spaceman_img3 from "../../Images/spacemen3wo.jpg"
import spaceman_img4 from "../../Images/spaceman_cutout.png"
import spaceman_img5 from "../../Images/wideSpaceman.png"
import SpaceManSvg  from "../../Images/SpaceManSvg.svg";
import SpaceManSvg2  from "../../Images/SpaceManSvg2.svg";

export  const CarouselStyled=styled.div`
  width: 100%;
  height:300px;
  max-width:100%;
 
  position:relative;
  overflow-x:hidden;
 

  position: relative;

	font-size: 2em;

  box-shadow: inset 0px 10px 40px 5px black;
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
    overflow-x:;
    transition:1s;

    
    
    &-Slides1{
      display: flex;
      align-items:center;
      justify-content:center;
      width:100%;
      min-width:100%;
      height: 100%;
      object-fit:contain;
      z-index:-1;
      opacity:0.5;
      background: url(${SpaceManSvg2}) no-repeat;
      background-position:center;
      background-size: contain;
      &_title{
        font-size:7rem;
        color:white;
      }
    }


    
  }

`
