import styled from "styled-components"
export const HeadNavStyled = styled.header`
min-width:100%;
height:8%;
display: flex;
align-items:center;

& .NavLogo{
  min-width: 400px;
  color:white;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  border-top-left-radius:30px;
  border-bottom-right-radius:100px;
  border-bottom:solid 0.5px white;
}
& .NavList{
  width: 100%;
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  color:white;
  cursor:pointer;
  & a{
    color:white;
  }

}
`
