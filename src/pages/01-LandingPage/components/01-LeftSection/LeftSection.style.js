import styled from "styled-components"
export const LeftSectionStyled=styled.section`
  width:50%;
  display: flex;
  color:white;
  font-size:2.1rem;
  justify-content:center;

  & .main{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    width: 450px;
    &-title{
      margin:20px 0px;
      text-align:left;
      color:lightgrey;
    }
    &-discription{
      text-align:left;
      font-size:0.8rem;
      margin:20px 0;
      color:lightgrey;
    }
    &-Buttons{
      display:flex;
      a{
        color:white;
        background-color:transparent;
      }
      &-btn:nth-child(2){
          background: transparent;
        }
      &-btn{
        height:34px;
        width: 130px;
        margin-right:20px;
        background-color:blue;
        border-radius:5px;
        border:solid thin green;
        color:white;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        &:hover{
          border:thick inset white;
        }
      }
    }
  }
 


`