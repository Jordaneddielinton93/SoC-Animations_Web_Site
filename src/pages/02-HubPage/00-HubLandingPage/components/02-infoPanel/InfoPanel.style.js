import styled from "styled-components"

export const InfoPanelStyled=styled.section`
  width: 95%;
  height: 100px;
  min-height: 100px;
  align-self:center;
  margin-top:20px;
  border-radius:10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  font-size:2rem;
  color:white;
  border:thick outset grey;
  & .StatusTitle{
    font-size:1.7rem;
  }
`