import styled from "styled-components"


export const CardStyled=styled.div`
  width: 100%;
  height:90%;
  position: relative;

  & .bigCard{
    width: 250px;
    height:90%;
    border:solid thin red;
    background:black;
    margin:auto;
    border-radius:10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  & .tinycards{
      position: absolute;
      display:flex;
      align-items:center;
      justify-content:space-evenly;
      flex-direction:column;
      width: 140px;
      height:50%;
      border:solid thick red;
      border-radius:10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
      background:black;
      & .fancyButton{
        width:100px;
        height:44px;
        border-radius:84% 16% 66% 34% / 65% 51% 49% 35% ;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        border:solid thick white;
        cursor:pointer;
      }
    }
  & .smallCard1{
    bottom:30px;
    left:20px;
    
  }
  & .smallCard2{
    bottom:0;
    right:35%;

  }
  & .smallCard3{
    bottom:0;
    right:0;

  }

`