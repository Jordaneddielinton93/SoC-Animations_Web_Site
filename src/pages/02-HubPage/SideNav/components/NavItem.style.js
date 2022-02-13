import { Link } from "react-router-dom"
import styled from "styled-components"
export const NavItemStyled=styled(Link)`
  display:flex;
  flex-direction:column;
  width:95%;
  background:rgba(0, 0, 0, 0.6);
  align-self:center;
  color:grey;
  margin-top:10px;
  border-radius:5px;
  cursor:pointer;
  border:thin outset white;
  & .Html_Input{
    background:white;
    height:25px;
    text-align:center;
    font-size:1.2rem;
    &:focus{
      outline: none;
    }
  }

  & .heading{
    display: flex;
    width: 100%;
    min-height: 50px;
    align-items:center;
    color:#a1a1a1;
    &:hover{
      color:white;
    }
    &-icon1{
      margin-left:10px;
      font-size:2rem;
    }
    &-title{
     
      margin-left:10px;
      align-self:center;
    }
    &-icon2{
     
      margin-left:20px;
      font-size:1rem;
      margin-top:5px;
    }
  }
`